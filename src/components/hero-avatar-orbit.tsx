"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import { Typescript } from "@/components/ui/svgs/typescript";
import { JavaScript } from "@/components/ui/svgs/js";
import { React as ReactIcon } from "@/components/ui/svgs/react";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Tailwind } from "@/components/ui/svgs/tailwind";

import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Postgres } from "@/components/ui/svgs/postgresql";
import { MongoDB } from "@/components/ui/svgs/mongodb";
import { Prisma } from "@/components/ui/svgs/prisma";
import { Golang } from "@/components/ui/svgs/golang";
import { Python } from "@/components/ui/svgs/python";
import { CPP } from "@/components/ui/svgs/c++";

interface OrbitIcon {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  angle: number;
}

export default function HeroAvatarOrbit() {
  const innerIcons: OrbitIcon[] = [
    { name: "TypeScript", icon: Typescript, angle: 0 },
    { name: "JavaScript", icon: JavaScript, angle: 60 },
    { name: "React", icon: ReactIcon, angle: 120 },
    { name: "Next.js", icon: NextjsIconDark, angle: 180 },
    { name: "Node.js", icon: Nodejs, angle: 240 },
    { name: "Tailwind CSS", icon: Tailwind, angle: 300 }
  ];

  const outerIcons: OrbitIcon[] = [
    { name: "Docker", icon: Docker, angle: 0 },
    { name: "Kubernetes", icon: Kubernetes, angle: 45 },
    { name: "PostgreSQL", icon: Postgres, angle: 90 },
    { name: "MongoDB", icon: MongoDB, angle: 135 },
    { name: "Prisma", icon: Prisma, angle: 180 },
    { name: "Go", icon: Golang, angle: 225 },
    { name: "Python", icon: Python, angle: 270 },
    { name: "C++", icon: CPP, angle: 315 }
  ];

  return (
    <div className="relative flex items-center justify-center size-[272px] min-[380px]:size-[308px] sm:size-[352px] md:size-[396px] lg:size-[370px] overflow-visible group/orbit-container">
      {/* Inline styles for starry float, revolve & twinkle animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes orbit-cw {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes orbit-ccw {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes twinkle-star {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
            filter: drop-shadow(0 0 6px rgba(99, 102, 241, 0.12));
          }
        }
        .anim-orbit-cw {
          animation: orbit-cw var(--speed, 60s) linear infinite;
        }
        .anim-orbit-ccw {
          animation: orbit-ccw var(--speed, 60s) linear infinite;
        }
        .anim-twinkle {
          animation: twinkle-star var(--twinkle-speed, 5s) ease-in-out infinite;
        }
        .group\\/orbit-container:hover .anim-orbit-cw,
        .group\\/orbit-container:hover .anim-orbit-ccw,
        .group\\/orbit-container:hover .anim-twinkle {
          animation-play-state: paused;
        }
      `
        }}
      />

      {/* Actual Orbit Widget (Scaled to fit parent boundaries) */}
      <div className="absolute flex items-center justify-center select-none w-[440px] h-[440px] scale-[0.62] min-[380px]:scale-[0.7] sm:scale-[0.8] md:scale-[0.9] lg:scale-[0.86] transition-all duration-500 origin-center">
        {/* Ambient Pulsing Glow Background */}
        <div className="absolute w-[260px] h-[260px] rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-pink-500/10 dark:from-blue-500/15 dark:via-indigo-500/15 dark:to-pink-500/15 blur-2xl animate-pulse -z-10" />

        {/* Central Avatar */}
        <div className="relative z-10">
          <Avatar className="size-44 sm:size-46 md:size-48 lg:size-50 rounded-full border-2 shadow-2xl ring-4 ring-background bg-background">
            <AvatarImage
              alt={DATA.name}
              src={DATA.avatarUrl}
              className="object-cover"
            />
            <AvatarFallback>{DATA.initials}</AvatarFallback>
          </Avatar>
        </div>

        {/* INNER ORBIT RINGS & ICONS (Counter-Clockwise Orbit, Clockwise Counter-Rotation) */}
        <div className="flex absolute inset-0 items-center justify-center pointer-events-none z-20">
          {/* Rotating Container */}
          <div
            className="absolute w-[300px] h-[300px] rounded-full anim-orbit-ccw pointer-events-auto"
            style={{ "--speed": "50s" } as React.CSSProperties}
          >
            {innerIcons.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${item.angle}deg) translate(150px) rotate(${-item.angle}deg)`
                  }}
                >
                  {/* Counter-rotation to keep the icon upright */}
                  <div
                    className="anim-orbit-cw"
                    style={{ "--speed": "50s" } as React.CSSProperties}
                  >
                    {/* Twinkling star animation with staggered delay */}
                    <div
                      className="anim-twinkle group"
                      style={
                        {
                          animationDelay: `${idx * 0.6}s`,
                          "--twinkle-speed": "4.5s"
                        } as React.CSSProperties
                      }
                    >
                      <div className="relative flex items-center justify-center size-8 sm:size-8.5 md:size-9 rounded-xl border border-black/10 dark:border-white/15 bg-white dark:bg-neutral-900 shadow-md backdrop-blur-xs transition-all duration-300 hover:scale-125 hover:border-indigo-500/50 dark:hover:border-indigo-400/50 hover:shadow-indigo-500/20 cursor-pointer">
                        <Icon className="size-5" />

                        {/* Tooltip */}
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-medium bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none whitespace-nowrap z-50">
                          {item.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* OUTER ORBIT RINGS & ICONS (Clockwise Orbit, Counter-Clockwise Counter-Rotation) */}
        <div className="flex absolute inset-0 items-center justify-center pointer-events-none z-20">
          {/* Rotating Container */}
          <div
            className="absolute w-[400px] h-[400px] rounded-full anim-orbit-cw pointer-events-auto"
            style={{ "--speed": "70s" } as React.CSSProperties}
          >
            {outerIcons.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${item.angle}deg) translate(200px) rotate(${-item.angle}deg)`
                  }}
                >
                  {/* Counter-rotation to keep the icon upright */}
                  <div
                    className="anim-orbit-ccw"
                    style={{ "--speed": "70s" } as React.CSSProperties}
                  >
                    {/* Twinkling star animation with staggered delay */}
                    <div
                      className="anim-twinkle group"
                      style={
                        {
                          animationDelay: `${idx * 0.8}s`,
                          "--twinkle-speed": "5.5s"
                        } as React.CSSProperties
                      }
                    >
                      <div className="relative flex items-center justify-center size-8 sm:size-8.5 md:size-9 rounded-xl border border-black/10 dark:border-white/15 bg-white dark:bg-neutral-900 shadow-md backdrop-blur-xs transition-all duration-300 hover:scale-125 hover:border-pink-500/50 dark:hover:border-pink-400/50 hover:shadow-pink-500/20 cursor-pointer">
                        <Icon className="size-5" />

                        {/* Tooltip */}
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-medium bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none whitespace-nowrap z-50">
                          {item.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
