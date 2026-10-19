"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { DATA } from "@/data/resume";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function TestScores() {
  const testScores = (DATA as any).testScores || [];

  if (testScores.length === 0) return null;

  return (
    <Accordion className="w-full grid gap-4">
      {testScores.map((test: any) => (
        <AccordionItem
          key={test.title}
          value={test.title}
          className="w-full border-b-0 grid gap-1.5"
        >
          <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 justify-between w-full text-left">
              <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                <div className="text-base sm:text-lg leading-snug flex items-center gap-2 flex-wrap">
                  <span>{test.title}</span>

                  <span className="relative inline-flex items-center w-4 h-4">
                    <ChevronRight
                      className={cn(
                        "absolute h-4 w-4 text-muted-foreground transition-all duration-300",
                        "opacity-0 group-hover:opacity-100 group-hover:translate-x-1",
                        "group-data-[state=open]:opacity-0"
                      )}
                    />
                    <ChevronDown
                      className={cn(
                        "absolute h-4 w-4 text-muted-foreground transition-all duration-200",
                        "opacity-0 group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180"
                      )}
                    />
                  </span>
                </div>

                {test.conductingBody && (
                  <div className="text-sm text-muted-foreground">
                    {test.conductingBody}
                  </div>
                )}
              </div>

              <div className="text-sm text-muted-foreground text-left sm:text-right">
                <span className="font-semibold text-foreground">
                  {test.score}
                </span>
                {test.date ? ` • ${test.date}` : ""}
              </div>
            </div>
          </AccordionTrigger>

          <AccordionContent className="mt-1.5 text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
            {test.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default TestScores;
