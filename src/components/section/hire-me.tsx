import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HireMeSection() {
  return (
    <div className="rounded-xl p-4 sm:p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">Hire Me</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={10}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)"
          }}
        />
      </div>

      <div className="relative flex flex-col items-center gap-5 text-center">
        <h2
          className="
  text-3xl font-bold tracking-tighter sm:text-5xl"
        >
          Let’s Build Something Impactful
        </h2>

        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          I’m open to internships, freelance work, and collaboration
          opportunities. If you’re looking for someone who can turn ideas into
          real, scalable products.
        </p>

        <p className="mx-auto max-w-lg text-muted-foreground">
          I’m just one message away - feel free to reach out on social media or
          email me directly, and I&apos;ll respond as soon as I can.
        </p>
        <Link
          href="/contact"
          className="group inline-flex cursor-pointer items-center gap-1 rounded-sm font-medium text-blue-600 decoration-blue-600/40 underline-offset-4 transition-colors hover:text-blue-700  hover:underline hover:decoration-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 dark:text-blue-400 dark:hover:text-blue-300"
        >
          Contact me
          <ArrowUpRight
            aria-hidden="true"
            className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>

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
            className="gap-2 group font-semibold bg-background text-foreground border-neutral-200 dark:border-neutral-800 transition-all duration-300 ease-out hover:scale-[1.04] hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/5 dark:hover:shadow-white/5 active:scale-[0.98]"
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
            className="gap-2 group font-semibold bg-background text-foreground border-neutral-200 dark:border-neutral-800 transition-all duration-300 ease-out hover:scale-[1.04] hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/5 dark:hover:shadow-white/5 active:scale-[0.98]"
          >
            <DATA.contact.social.LinkedIn.icon className="size-4 transition-transform duration-300 group-hover:scale-110" />
            <span>LinkedIn</span>
          </Button>
          <Button
            variant="outline"
            size="default"
            nativeButton={false}
            render={
              <a
                href={DATA.contact.social.email.url}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            className="gap-2 group font-semibold bg-background text-foreground border-neutral-200 dark:border-neutral-800 transition-all duration-300 ease-out hover:scale-[1.04] hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/5 dark:hover:shadow-white/5 active:scale-[0.98]"
          >
            <DATA.contact.social.email.icon className="size-4 transition-transform duration-300 group-hover:scale-110" />
            <span>Email</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
