import { DATA } from "@/data/resume";
import { Button } from "@/components/ui/button";
import ContactDialog from "@/components/section/contact-form";
import { ArrowUpRight } from "lucide-react";

export default function HireMeSection() {
  return (
    <div className="relative">
      <div className="relative flex flex-col items-center gap-5 text-center">
        <span className="rounded-full bg-card/80 px-3.5 py-1 text-xs font-medium tracking-wide text-muted-foreground shadow-[0_0_0_1px_var(--border)] backdrop-blur">
          Hire Me
        </span>
        <h2
          className="text-gradient max-w-3xl text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
        >
          Let’s Build Something Impactful
        </h2>

        <p className="mx-auto max-w-xl text-balance leading-relaxed text-muted-foreground">
          I’m open to internships, freelance work, and collaboration
          opportunities. If you’re looking for someone who can turn ideas into
          real, scalable products.
        </p>

        <p className="mx-auto -mt-2 max-w-xl text-balance leading-relaxed text-muted-foreground">
          I’m just one message away - feel free to reach out on social media or
          email me directly, and I&apos;ll respond as soon as I can.
        </p>
        <ContactDialog className="group inline-flex cursor-pointer items-center gap-1 rounded-sm font-medium text-brand decoration-brand/40 underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          Contact me
          <ArrowUpRight
            aria-hidden="true"
            className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </ContactDialog>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
          <Button
            variant="outline"
            size="default"
            nativeButton={false}
            render={
              <a
                href={DATA.contact.social.X.url}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            className="gap-2 group font-semibold bg-background text-foreground border border-input transition-all duration-300 ease-out hover:scale-[1.04] hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/5 dark:hover:shadow-white/5 active:scale-[0.98]"
          >
            <DATA.contact.social.X.icon className="size-4 transition-transform duration-300 group-hover:scale-110" />
            <span>X (Twitter)</span>
          </Button>
          <Button
            variant="outline"
            size="default"
            nativeButton={false}
            render={
              <a
                href={DATA.contact.social.LinkedIn.url}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            className="gap-2 group font-semibold bg-background text-foreground border border-input transition-all duration-300 ease-out hover:scale-[1.04] hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/5 dark:hover:shadow-white/5 active:scale-[0.98]"
          >
            <DATA.contact.social.LinkedIn.icon className="size-4 transition-transform duration-300 group-hover:scale-110" />
            <span>LinkedIn</span>
          </Button>
          <Button
            size="default"
            nativeButton={false}
            render={
              <a
                href={DATA.contact.social.email.url}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            className="gap-2 group font-semibold"
          >
            <DATA.contact.social.email.icon className="size-4 transition-transform duration-300 group-hover:scale-110" />
            <span>Email</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
