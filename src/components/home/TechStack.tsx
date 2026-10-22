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
                className="flex shrink-0 items-center gap-2.5 rounded-xl border border-border bg-card/70 px-4 py-2.5 text-sm font-medium text-foreground/90 backdrop-blur transition-colors hover:border-foreground/20"
              >
                <skill.icon className="size-5 shrink-0" />
                {skill.name}
              </li>
            ))}
          </InfiniteMovingCards>
        ))}
      </div>
    </section>
  );
}
