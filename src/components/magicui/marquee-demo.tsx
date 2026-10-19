import { cn } from "@/lib/utils";
import { Marquee } from "../ui/marquee";
import type { ComponentType } from "react";
import { DATA } from "@/data/resume";

const rowCount = 2;
const rowSize = Math.ceil(DATA.skills.length / rowCount);
const firstRow = DATA.skills.slice(0, rowSize);
const secondRow = DATA.skills.slice(rowSize);

const ReviewCard = ({
  name,
  icon: Icon
}: {
  name: string;
  icon?: ComponentType<{ className?: string }>;
}) => {
  return (
    <figure
      className={cn(
        "relative flex cursor-pointer items-center gap-2.5 overflow-hidden rounded-xl border p-2.5 px-4 transition-all duration-300",
        "border-white/80 bg-white/60 text-neutral-900 shadow-sm hover:bg-white/80",
        "dark:border-white/10 dark:bg-white/5 dark:text-neutral-100 dark:hover:bg-white/10"
      )}
    >
      <div className="flex items-center justify-center shrink-0">
        {Icon && <Icon className="size-5" />}
      </div>
      <figcaption className="text-sm font-medium">{name}</figcaption>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-1">
      <Marquee pauseOnHover className="[--duration:45s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:45s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-linear-to-r from-background to-transparent z-10"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-linear-to-l from-background to-transparent z-10"></div>
    </div>
  );
}
