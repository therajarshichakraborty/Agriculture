"use client";

import React, { useState } from "react";
import { Check, Copy, Code2, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function DeveloperCodeCard() {
  const [copied, setCopied] = useState(false);

  const rawCode = `const developer = {
  name: "Rajarshi Chakraborty",
  role: "Fullstack Backend Dev & AI Engineer",
  skills: {
    primary: ["JavaScript", "TypeScript", "Python", "Node.js", "Express.js", "REST APIs","tRPC"],
    secondary: ["React", "Next.js", "SQL", "PostgreSQL", "MongoDB", "Prisma", "Drizzle ORM", "Mongoose", "Pinecone", "LangChain"],
    others: ["Java", "Bash", "Git", "Docker", "Postman", "CI/CD Pipelines", "Linux", "Payment Gateways"]
  },
  projects: ["ExeOS-AI", "ReviewRay", "Zenith CLI"],
  passion: "clean code"
};`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-[130%] -ml-[15%] rounded-2xl bg-transparent text-foreground hover:translate-x-1 transition-all duration-300 overflow-hidden select-none relative group mt-4 shadow-none"
    >
      <div className="p-3.5 font-mono text-[11px] leading-relaxed text-left bg-transparent">
        <div className="flex items-start hover:bg-muted/40 rounded px-1 -mx-1 transition-colors">
          <span className="w-5 shrink-0 text-muted-foreground/40 text-[10px] select-none text-right mr-2.5 pt-0.5">
            1
          </span>
          <div>
            <span className="text-[#ff738a] font-semibold">const</span>{" "}
            <span className="text-[#39bae6] font-semibold">developer</span>{" "}
            <span className="text-[#ff9e3b] font-medium">=</span>{" "}
            <span className="text-foreground font-bold">&#123;</span>
          </div>
        </div>

        {/* Line 2 */}
        <div className="flex items-start hover:bg-muted/40 rounded px-1 -mx-1 transition-colors">
          <span className="w-5 shrink-0 text-muted-foreground/40 text-[10px] select-none text-right mr-2.5 pt-0.5">
            2
          </span>
          <div className="pl-3">
            <span className="text-[#ff9e3b] font-medium">name</span>
            <span className="text-muted-foreground/60">:</span>{" "}
            <span className="text-[#5a5ccb] font-medium">
              &quot;Rajarshi Chakraborty&quot;
            </span>
            <span className="text-muted-foreground/60">,</span>
          </div>
        </div>

        {/* Line 3 */}
        <div className="flex items-start hover:bg-muted/40 rounded px-1 -mx-1 transition-colors">
          <span className="w-5 shrink-0 text-muted-foreground/40 text-[10px] select-none text-right mr-2.5 pt-0.5">
            3
          </span>
          <div className="pl-3">
            <span className="text-[#ff9e3b] font-medium">role</span>
            <span className="text-muted-foreground/60">:</span>{" "}
            <span className="text-[#5a5ccb] font-medium">
              &quot;Fullstack Backend Dev &amp; AI Engineer&quot;
            </span>
            <span className="text-muted-foreground/60">,</span>
          </div>
        </div>

        {/* Line 4: skills open */}
        <div className="flex items-start hover:bg-muted/40 rounded px-1 -mx-1 transition-colors">
          <span className="w-5 shrink-0 text-muted-foreground/40 text-[10px] select-none text-right mr-2.5 pt-0.5">
            4
          </span>
          <div className="pl-3">
            <span className="text-[#ff9e3b] font-medium">skills</span>
            <span className="text-muted-foreground/60">:</span>{" "}
            <span className="text-foreground font-bold">&#123;</span>
          </div>
        </div>

        {/* Line 5: primary */}
        <div className="flex items-start hover:bg-muted/40 rounded px-1 -mx-1 transition-colors">
          <span className="w-5 shrink-0 text-muted-foreground/40 text-[10px] select-none text-right mr-2.5 pt-0.5">
            5
          </span>
          <div className="pl-6">
            <span className="text-[#39bae6] font-medium">primary</span>
            <span className="text-muted-foreground/60">:</span>{" "}
            <span className="text-foreground font-bold">[</span>
            <span className="text-[#5a5ccb] font-medium">
              &quot;JavaScript&quot;
            </span>
            <span className="text-muted-foreground/60">,</span>{" "}
            <span className="text-[#5a5ccb] font-medium">
              &quot;TypeScript&quot;
            </span>
            <span className="text-muted-foreground/60">,</span>{" "}
            <span className="text-[#5a5ccb] font-medium">
              &quot;Python&quot;
            </span>
            <span className="text-muted-foreground/60">,</span>{" "}
            <span className="text-[#5a5ccb] font-medium">
              &quot;Node.js&quot;
            </span>
            <span className="text-muted-foreground/60">,</span>{" "}
            <span className="text-[#5a5ccb] font-medium">
              &quot;Express.js&quot;
            </span>
            <span className="text-muted-foreground/60">,</span>{" "}
            <span className="text-[#5a5ccb] font-medium">
              &quot;REST APIs&quot;
            </span>
            <span className="text-foreground font-bold">]</span>
            <span className="text-muted-foreground/60">,</span>
          </div>
        </div>

        {/* Line 6: secondary */}
        <div className="flex items-start hover:bg-muted/40 rounded px-1 -mx-1 transition-colors">
          <span className="w-5 shrink-0 text-muted-foreground/40 text-[10px] select-none text-right mr-2.5 pt-0.5">
            6
          </span>
          <div className="pl-6">
            <span className="text-[#39bae6] font-medium">secondary</span>
            <span className="text-muted-foreground/60">:</span>{" "}
            <span className="text-foreground font-bold">[</span>
            <span className="text-[#5a5ccb] font-medium">
              &quot;React&quot;
            </span>
            <span className="text-muted-foreground/60">,</span>{" "}
            <span className="text-[#5a5ccb] font-medium">
              &quot;Next.js&quot;
            </span>
            <span className="text-muted-foreground/60">,</span>{" "}
            <span className="text-[#5a5ccb] font-medium">&quot;SQL&quot;</span>
            <span className="text-muted-foreground/60">,</span>{" "}
            <span className="text-[#5a5ccb] font-medium">
              &quot;PostgreSQL&quot;
            </span>
            <span className="text-muted-foreground/60">,</span>{" "}
            <span className="text-[#5a5ccb] font-medium">
              &quot;MongoDB&quot;
            </span>
            <span className="text-muted-foreground/60">,</span>{" "}
            <span className="text-[#5a5ccb] font-medium">
              &quot;Prisma&quot;
            </span>
            <span className="text-muted-foreground/60">,</span>{" "}
            <span className="text-[#5a5ccb] font-medium">
              &quot;Drizzle&quot;
            </span>
            <span className="text-muted-foreground/60">,</span>{" "}
            <span className="text-[#5a5ccb] font-medium">
              &quot;Mongoose&quot;
            </span>
            <span className="text-muted-foreground/60">,</span>{" "}
            <span className="text-[#5a5ccb] font-medium">
              &quot;Pinecone&quot;
            </span>
            <span className="text-muted-foreground/60">,</span>{" "}
            <span className="text-[#5a5ccb] font-medium">
              &quot;LangChain&quot;
            </span>
            <span className="text-foreground font-bold">]</span>
            <span className="text-muted-foreground/60">,</span>
          </div>
        </div>

        {/* Line 7: others */}
        <div className="flex items-start hover:bg-muted/40 rounded px-1 -mx-1 transition-colors">
          <span className="w-5 shrink-0 text-muted-foreground/40 text-[10px] select-none text-right mr-2.5 pt-0.5">
            7
          </span>
          <div className="pl-6">
            <span className="text-[#39bae6] font-medium">others</span>
            <span className="text-muted-foreground/60">:</span>{" "}
            <span className="text-foreground font-bold">[</span>
            <span className="text-[#5a5ccb] font-medium">&quot;Java&quot;</span>
            <span className="text-muted-foreground/60">,</span>{" "}
            <span className="text-[#5a5ccb] font-medium">&quot;Bash&quot;</span>
            <span className="text-muted-foreground/60">,</span>{" "}
            <span className="text-[#5a5ccb] font-medium">&quot;Git&quot;</span>
            <span className="text-muted-foreground/60">,</span>{" "}
            <span className="text-[#5a5ccb] font-medium">
              &quot;Docker&quot;
            </span>
            <span className="text-muted-foreground/60">,</span>{" "}
            <span className="text-[#5a5ccb] font-medium">
              &quot;Postman&quot;
            </span>
            <span className="text-muted-foreground/60">,</span>{" "}
            <span className="text-[#5a5ccb] font-medium">
              &quot;CI/CD&quot;
            </span>
            <span className="text-muted-foreground/60">,</span>{" "}
            <span className="text-[#5a5ccb] font-medium">
              &quot;Linux&quot;
            </span>
            <span className="text-muted-foreground/60">,</span>{" "}
            <span className="text-[#5a5ccb] font-medium">
              &quot;Payment Gateways&quot;
            </span>
            <span className="text-foreground font-bold">]</span>
          </div>
        </div>

        {/* Line 8: skills close */}
        <div className="flex items-start hover:bg-muted/40 rounded px-1 -mx-1 transition-colors">
          <span className="w-5 shrink-0 text-muted-foreground/40 text-[10px] select-none text-right mr-2.5 pt-0.5">
            8
          </span>
          <div className="pl-3">
            <span className="text-foreground font-bold">&#125;</span>
            <span className="text-muted-foreground/60">,</span>
          </div>
        </div>

        {/* Line 9: projects */}
        <div className="flex items-start hover:bg-muted/40 rounded px-1 -mx-1 transition-colors">
          <span className="w-5 shrink-0 text-muted-foreground/40 text-[10px] select-none text-right mr-2.5 pt-0.5">
            9
          </span>
          <div className="pl-3">
            <span className="text-[#ff9e3b] font-medium">projects</span>
            <span className="text-muted-foreground/60">:</span>{" "}
            <span className="text-foreground font-bold">[</span>
            <span className="text-[#5a5ccb] font-medium">
              &quot;ExeOS-AI&quot;
            </span>
            <span className="text-muted-foreground/60">,</span>{" "}
            <span className="text-[#5a5ccb] font-medium">
              &quot;ReviewRay&quot;
            </span>
            <span className="text-muted-foreground/60">,</span>{" "}
            <span className="text-[#5a5ccb] font-medium">
              &quot;Zenith CLI&quot;
            </span>
            <span className="text-foreground font-bold">]</span>
            <span className="text-muted-foreground/60">,</span>
          </div>
        </div>

        {/* Line 10: passion */}
        <div className="flex items-start hover:bg-muted/40 rounded px-1 -mx-1 transition-colors">
          <span className="w-5 shrink-0 text-muted-foreground/40 text-[10px] select-none text-right mr-2.5 pt-0.5">
            10
          </span>
          <div className="pl-3">
            <span className="text-[#ff9e3b] font-medium">passion</span>
            <span className="text-muted-foreground/60">:</span>{" "}
            <span className="text-[#5a5ccb] font-medium">
              &quot;clean code&quot;
            </span>
          </div>
        </div>

        {/* Line 11: closing brace */}
        <div className="flex items-start hover:bg-muted/40 rounded px-1 -mx-1 transition-colors">
          <span className="w-5 shrink-0 text-muted-foreground/40 text-[10px] select-none text-right mr-2.5 pt-0.5">
            11
          </span>
          <div>
            <span className="text-foreground font-bold">&#125;</span>
            <span className="text-muted-foreground/60">;</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
