import { InfiniteMovingCards } from "@/src/components/aceternity/infinite-moving-cards";
import { DATA } from "@/src/data/resume";

const half = Math.ceil(DATA.skills.length / 2);
const rows = [DATA.skills.slice(0, half), DATA.skills.slice(half)];

export function TechStack() {
  return (
    <section aria-label="Tech stack" className="relative py-10">
      <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Tools I ship production software with
      </p>
      <div className="flex flex-col gap-3">
        {rows.map((row, i) => (
          <InfiniteMovingCards
            key={i}
            direction={i % 2 === 0 ? "left" : "right"}
            speed="slow"
          >
            {row.map((skill) => (
              <li
                key={skill.name}
                className="group flex shrink-0 items-center gap-2.5 rounded-xl bg-card px-4 py-2.5 text-sm font-medium text-foreground/90 shadow-[0_0_0_1px_color-mix(in_oklch,var(--foreground)_6%,transparent),0_2px_6px_-2px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:text-foreground"
              >
                <skill.icon className="size-5 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
                {skill.name}
              </li>
            ))}
          </InfiniteMovingCards>
        ))}
      </div>
    </section>
  );
}
