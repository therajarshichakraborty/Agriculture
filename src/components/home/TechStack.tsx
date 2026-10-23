import { MarqueeDemo } from "@/src/components/magicui/marquee-demo";

export function TechStack() {
  return (
    <section
      aria-label="Tech stack"
      className="mx-auto w-full max-w-5xl px-6 py-6 md:px-10"
    >
      <p className="mb-5 text-center text-sm font-medium text-muted-foreground">
        Tools I ship production software with
      </p>
      <div className="relative">
        <MarqueeDemo />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 backdrop-blur-[2px] mask-[linear-gradient(to_right,black,transparent)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 backdrop-blur-[2px] mask-[linear-gradient(to_left,black,transparent)]"
        />
      </div>
    </section>
  );
}
