"use client";

import React, { useRef, useEffect } from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // If typing inside an input/textarea/editable component, ignore
      const activeEl = document.activeElement;
      if (
        activeEl &&
        (activeEl.tagName === "INPUT" ||
          activeEl.tagName === "TEXTAREA" ||
          activeEl.getAttribute("contenteditable") === "true")
      ) {
        return;
      }

      if (e.key === "/") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative flex items-center w-full">
      <div className="absolute left-3 flex items-center pointer-events-none text-muted-foreground">
        <Search className="h-3.5 w-3.5" />
      </div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search topics..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-9 pl-9 pr-12 rounded-lg bg-muted/30 border border-border/60 text-xs font-sans text-foreground placeholder:text-muted-foreground outline-hidden focus:border-primary/40 focus:ring-1 focus:ring-primary/10 transition-all"
        aria-label="Search topics"
      />
      <div className="absolute right-2.5 pointer-events-none select-none flex items-center">
        <kbd className="h-5 px-1.5 flex items-center text-[10px] font-mono border rounded bg-background/80 text-muted-foreground font-semibold">
          /
        </kbd>
      </div>
    </div>
  );
}
