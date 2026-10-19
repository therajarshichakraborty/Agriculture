"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { DATA } from "@/data/resume";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface LogoImageProps {
  src: string;
  alt: string;
}

function LogoImage({ src, alt }: LogoImageProps) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none " />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      height={24}
      width={24}
      className="size-10 p-1 border rounded-full shadow ring-2 ring-border object-contain flex-none "
      onError={() => setImageError(true)}
    />
  );
}

export function Education() {
  return (
    <Accordion className="w-full grid gap-6">
      {DATA.education.map((education) => (
        <AccordionItem
          key={education.school}
          value={education.school}
          className="w-full border-b-0 grid gap-2 "
        >
          <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
            <div className="flex items-start sm:items-center gap-2 justify-between w-full text-left">
              <div className="flex items-center gap-x-3 sm:gap-x-4 flex-1 min-w-0">
                <Link href={education.href} target="_blank">
                  <LogoImage src={education.logoUrl} alt={education.school} />
                </Link>

                <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                  <div className="font-semibold text-sm sm:text-lg md:text-xl leading-tight flex items-center gap-1.5 flex-wrap">
                    {education.school}
                  </div>

                  <div className="text-xs sm:text-sm md:text-base text-muted-foreground">
                    {education.title}
                  </div>
                </div>
              </div>

              <div className="text-xs sm:text-sm md:text-base text-muted-foreground text-right shrink-0 whitespace-nowrap pl-2">
                {education.start} - {education.end ?? "Present"}
              </div>
            </div>
          </AccordionTrigger>

          <AccordionContent className="ml-12 sm:ml-14 mt-2 text-xs sm:text-sm md:text-base text-muted-foreground whitespace-pre-line leading-relaxed">
            {education.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default Education;
