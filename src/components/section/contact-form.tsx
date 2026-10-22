"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Check, Loader2 } from "lucide-react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";

import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT_COMPOSE_URL, CONTACT_EMAIL } from "@/lib/contact";

type Status = "idle" | "sending" | "success" | "error";

const topics = [
  "Project inquiry",
  "Internship opportunity",
  "Full-time role",
  "Freelance work",
  "Just saying hello"
];

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

// Shared classes for the per-glyph hover motion.
const glyphMove = "transition-transform duration-300 ease-out";

// Line icons on a 24px grid: 1.5px strokes and rounded joins. Colours come
// from currentColor so they invert with the tile.
// Each one gets a small hover motion driven by the parent `group`.
const glyphs = {
  // Two overlapping rounded squares that nudge together on hover.
  collaborate: (
    <>
      <rect
        x="3.75"
        y="3.75"
        width="11"
        height="11"
        rx="2.5"
        className={`${glyphMove} group-hover:translate-x-[0.75px] group-hover:translate-y-[0.75px]`}
      />
      <rect
        x="9.25"
        y="9.25"
        width="11"
        height="11"
        rx="2.5"
        className={`${glyphMove} group-hover:-translate-x-[0.75px] group-hover:-translate-y-[0.75px]`}
      />
    </>
  ),
  // A briefcase whose handle lifts on hover.
  briefcase: (
    <>
      <rect x="3.25" y="7.25" width="17.5" height="12.5" rx="2.5" />
      <path
        d="M8.75 7.25v-1.5a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2v1.5"
        className={`${glyphMove} group-hover:-translate-y-[1px]`}
      />
      <path d="M3.25 12.25c2.65 1.33 5.58 2 8.75 2s6.1-.67 8.75-2" />
      <path d="M12 13.75v1.5" />
    </>
  ),
  // A speech bubble with typing dots that nod in sequence on hover.
  chat: (
    <>
      <path d="M6.75 4h10.5A2.75 2.75 0 0 1 20 6.75v7.5A2.75 2.75 0 0 1 17.25 17H11.5l-4.75 3.25V17A2.75 2.75 0 0 1 4 14.25v-7.5A2.75 2.75 0 0 1 6.75 4z" />
      {[8.5, 12, 15.5].map((cx, i) => (
        <circle
          key={cx}
          cx={cx}
          cy="10.5"
          r="1"
          style={{ transitionDelay: `${i * 70}ms` }}
          className={`fill-current stroke-none ${glyphMove} group-hover:-translate-y-[1.25px]`}
        />
      ))}
    </>
  )
} satisfies Record<string, ReactNode>;

const highlights: {
  glyph: keyof typeof glyphs;
  title: string;
  text: string;
}[] = [
  {
    glyph: "collaborate",
    title: "Collaborate on a project",
    text: "Product ideas, side projects or open source."
  },
  {
    glyph: "briefcase",
    title: "Hire or work with me",
    text: "Internships, full-time roles and freelance."
  },
  {
    glyph: "chat",
    title: "Just say hello",
    text: "Questions, feedback or a chat about tech."
  }
];

const fieldClass =
  "h-11 rounded-lg bg-background px-3.5 text-sm shadow-xs transition-[border-color,box-shadow] duration-200 hover:border-foreground/25 focus-visible:border-blue-500 focus-visible:ring-3 focus-visible:ring-blue-500/20 data-popup-open:border-blue-500 data-popup-open:ring-3 data-popup-open:ring-blue-500/20";

// Labels turn blue while their field has focus.
const labelClass =
  "transition-colors duration-200 group-focus-within/field:text-blue-600 dark:group-focus-within/field:text-blue-400";

/** Fade, lift and un-blur on mount, in the same style as BlurFade. */
function Reveal({
  delay = 0,
  className,
  children
}: {
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.45, delay: 0.08 + delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Glyph({ name }: { name: keyof typeof glyphs }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5 overflow-visible"
    >
      {glyphs[name]}
    </svg>
  );
}

function Required() {
  return (
    <span aria-hidden="true" className="text-red-500">
      *
    </span>
  );
}

export default function ContactDialog({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  const [topic, setTopic] = useState(topics[0]);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [sender, setSender] = useState("");

  function handleOpenChange(open: boolean) {
    // Start fresh each time the popup opens, unless a send is in flight.
    if (open && status !== "sending") {
      setStatus("idle");
      setError("");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          topic,
          message: data.get("message"),
          company: data.get("company")
        })
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error ?? "Couldn't send your message.");
      }

      setSender(String(data.get("name") ?? "").split(" ")[0]);
      form.reset();
      setTopic(topics[0]);
      setStatus("success");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Couldn't send your message."
      );
      setStatus("error");
    }
  }

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <DialogTrigger className={className}>{children}</DialogTrigger>

      <DialogContent
        overlayClassName="bg-black/25 supports-backdrop-filter:backdrop-blur-sm data-open:animate-[contact-backdrop-in_0.4s_ease-out_both] data-closed:animate-[contact-backdrop-out_0.25s_ease-in_both]"
        className="max-h-[calc(100dvh-2rem)] w-full max-w-[calc(100%-2rem)] origin-center gap-0 overflow-y-auto overscroll-contain rounded-2xl bg-background p-0 shadow-[0_32px_80px_-24px_rgba(0,0,0,0.35)] ring-foreground/10 will-change-[transform,opacity,filter] [scrollbar-width:none] data-open:animate-[contact-in_0.55s_cubic-bezier(0.16,1,0.3,1)_both] data-closed:animate-[contact-out_0.22s_cubic-bezier(0.4,0,1,1)_both] sm:max-w-4xl [&::-webkit-scrollbar]:hidden"
      >
        <MotionConfig reducedMotion="user">
          <div className="grid lg:grid-cols-[5fr_7fr]">
            {/* Left: intro */}
            <aside className="relative overflow-hidden bg-background px-6 pt-8 pb-2 sm:px-8 lg:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-40"
              >
                <FlickeringGrid
                  className="h-full w-full"
                  squareSize={6}
                  gridGap={2}
                  maxOpacity={0.12}
                  style={{
                    maskImage: "linear-gradient(to bottom, black, transparent)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black, transparent)"
                  }}
                />
              </div>

              {/* Divider: fades out at both ends and draws in from the centre */}
              <motion.span
                aria-hidden="true"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
                className="pointer-events-none absolute inset-y-0 right-0 hidden w-px bg-linear-to-b from-transparent via-foreground/15 to-transparent lg:block"
              />

              <div className="relative">
                <Reveal>
                  <DialogTitle className="text-3xl leading-[1.1] font-bold tracking-tighter text-foreground sm:text-4xl">
                    Got an idea?
                    <br />
                    <span className="animate-[gradientShift_6s_ease-in-out_infinite] bg-[linear-gradient(90deg,var(--color-red-500),var(--color-pink-500),var(--color-violet-500),var(--color-pink-500),var(--color-red-500))] bg-size-[200%_auto] bg-clip-text text-transparent motion-reduce:animate-none">
                      Let&apos;s talk.
                    </span>
                  </DialogTitle>
                </Reveal>

                <Reveal delay={0.12}>
                  <DialogDescription className="mt-3 max-w-xs text-sm leading-relaxed text-pretty">
                    A project, a role or a quick question. Drop me a note and
                    I&apos;ll get back to you personally.
                  </DialogDescription>
                </Reveal>

                <ul className="mt-8 hidden space-y-5 lg:block">
                  {highlights.map(({ glyph, title, text }, index) => (
                    <motion.li
                      key={title}
                      initial={{ opacity: 0, x: -8, filter: "blur(6px)" }}
                      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                      transition={{
                        duration: 0.45,
                        delay: 0.26 + index * 0.07,
                        ease: EASE
                      }}
                      className="group flex items-center gap-3.5"
                    >
                      <span
                        aria-hidden="true"
                        className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-white text-foreground shadow-xs transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background group-hover:shadow-md group-hover:shadow-foreground/15"
                      >
                        <Glyph name={glyph} />
                      </span>
                      <div className="min-w-0 transition-transform duration-300 ease-out group-hover:translate-x-0.5">
                        <p className="text-sm font-semibold text-foreground">
                          {title}
                        </p>
                        <p className="text-xs text-muted-foreground">{text}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>

                <Reveal delay={0.5} className="mt-8 hidden lg:block">
                  <a
                    href={CONTACT_COMPOSE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex w-fit items-center gap-1 text-xs font-medium text-foreground underline-offset-4 hover:underline"
                  >
                    <span className="text-muted-foreground">or email</span>
                    {CONTACT_EMAIL}
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </Reveal>
              </div>
            </aside>

            {/* Right: form */}
            <div className="px-6 pt-6 pb-6 sm:px-8 sm:pb-8 lg:p-10">
              <AnimatePresence mode="wait" initial={false}>
                {status === "success" ? (
                  <motion.div
                    key="success"
                    role="status"
                    initial={{ opacity: 0, y: 8, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="flex h-full min-h-80 flex-col items-center justify-center text-center"
                  >
                    <span className="relative flex size-12 items-center justify-center">
                      <motion.span
                        aria-hidden="true"
                        initial={{ scale: 0.6, opacity: 0.5 }}
                        animate={{ scale: 1.8, opacity: 0 }}
                        transition={{
                          duration: 0.9,
                          delay: 0.15,
                          ease: "easeOut"
                        }}
                        className="absolute inset-0 rounded-full bg-foreground/20"
                      />
                      <motion.span
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 18
                        }}
                        className="relative flex size-12 items-center justify-center rounded-full bg-foreground text-background"
                      >
                        <Check aria-hidden="true" className="size-5" />
                      </motion.span>
                    </span>
                    <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                      Message sent
                    </h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                      Thanks{sender ? `, ${sender}` : ""}! I&apos;ll get back to
                      you within 1-2 business days.
                    </p>
                    <DialogClose
                      render={
                        <Button
                          variant="outline"
                          className="mt-6 h-10 rounded-lg px-5"
                        />
                      }
                    >
                      Close
                    </DialogClose>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
                    transition={{ duration: 0.25, ease: EASE }}
                    className="flex flex-col gap-4"
                  >
                    {/* Honeypot for bots, hidden from people and screen readers */}
                    <div aria-hidden="true" className="hidden">
                      <input
                        name="company"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <Reveal
                        delay={0.1}
                        className="group/field flex flex-col gap-2"
                      >
                        <Label htmlFor="contact-name" className={labelClass}>
                          Name <Required />
                        </Label>
                        <Input
                          id="contact-name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          required
                          maxLength={100}
                          placeholder="Jane Doe"
                          className={fieldClass}
                        />
                      </Reveal>

                      <Reveal
                        delay={0.16}
                        className="group/field flex flex-col gap-2"
                      >
                        <Label htmlFor="contact-email" className={labelClass}>
                          Email <Required />
                        </Label>
                        <Input
                          id="contact-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          maxLength={200}
                          placeholder="jane@company.com"
                          className={fieldClass}
                        />
                      </Reveal>
                    </div>

                    <Reveal
                      delay={0.22}
                      className="group/field flex flex-col gap-2"
                    >
                      <Label htmlFor="contact-topic" className={labelClass}>
                        Topic <Required />
                      </Label>
                      <Select
                        value={topic}
                        onValueChange={(value) => value && setTopic(value)}
                        required
                      >
                        <SelectTrigger
                          id="contact-topic"
                          className={`${fieldClass} w-full pr-3 [&>svg]:transition-transform [&>svg]:duration-200 data-popup-open:[&>svg]:rotate-180`}
                        >
                          <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                        <SelectContent>
                          {topics.map((item) => (
                            <SelectItem
                              key={item}
                              value={item}
                              className="py-2"
                            >
                              {item}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Reveal>

                    <Reveal
                      delay={0.28}
                      className="group/field flex flex-col gap-2"
                    >
                      <Label htmlFor="contact-message" className={labelClass}>
                        Message <Required />
                      </Label>
                      <Textarea
                        id="contact-message"
                        name="message"
                        required
                        minLength={10}
                        maxLength={5000}
                        rows={5}
                        placeholder="Tell me a little about your idea, project or question..."
                        className={`${fieldClass} h-auto min-h-32 resize-none py-3 leading-relaxed`}
                      />
                    </Reveal>

                    <Reveal
                      delay={0.34}
                      className="mt-2 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div role="status" aria-live="polite" className="text-xs">
                        <AnimatePresence mode="wait" initial={false}>
                          <motion.p
                            key={status === "error" ? "error" : "hint"}
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.2 }}
                            className={
                              status === "error"
                                ? "text-red-600 dark:text-red-400"
                                : "text-muted-foreground"
                            }
                          >
                            {status === "error" ? (
                              <>
                                {error} Email me at{" "}
                                <a
                                  href={CONTACT_COMPOSE_URL}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="underline underline-offset-4"
                                >
                                  {CONTACT_EMAIL}
                                </a>
                              </>
                            ) : (
                              "Usually replies within 1-2 business days."
                            )}
                          </motion.p>
                        </AnimatePresence>
                      </div>

                      <Button
                        type="submit"
                        disabled={status === "sending"}
                        className="group h-11 shrink-0 rounded-lg bg-foreground px-6 text-background transition-all duration-200 hover:-translate-y-px hover:bg-foreground/85 hover:shadow-lg hover:shadow-foreground/15 active:translate-y-0 active:scale-[0.98]"
                      >
                        {status === "sending" ? (
                          <>
                            Sending
                            <Loader2
                              aria-hidden="true"
                              className="size-4 animate-spin"
                            />
                          </>
                        ) : (
                          <>
                            Send message
                            <ArrowRight
                              aria-hidden="true"
                              className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                            />
                          </>
                        )}
                      </Button>
                    </Reveal>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </MotionConfig>
      </DialogContent>
    </Dialog>
  );
}
