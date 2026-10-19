"use client";

import { motion } from "motion/react";
import { Button } from "../ui/button";
import { LeetCode } from "../ui/svgs/leetcode";
import Link from "next/link";

const SoftProfileCard = () => {
  return (
    <div className="flex items-center justify-center bg-transparent">
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 180 }}
        className="w-[300px] rounded-[28px] p-4 bg-[#fff]"
        // style={{
        //   boxShadow: `
        //     5px 10px 25px #cfcfcf,
        //     -10px -10px 25px #ffffff
        //   `,
        // }}
      >
        {/* Image */}
        <div
          className="rounded-[22px] overflow-hidden"
          style={{
            boxShadow: `
              inset 2px 2px 6px rgba(0,0,0,0.05),
              inset -2px -2px 6px rgba(255,255,255,0.7)
            `
          }}
        >
          <motion.img
            src="/img7.png"
            alt="profile"
            className="w-full h-[220px] object-cover"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Content */}
        <div className="mt-5 px-2">
          {/* Name */}
          <h2 className="text-[18px] font-semibold flex items-center gap-2">
            <span className="bg-gradient-to-r from-red-500 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
              Rajarshi Chakraborty
            </span>

            <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs shadow">
              ✓
            </span>
          </h2>

          {/* Identity */}
          <p className="text-xs mt-1 text-gray-500 tracking-wide">
            Full Stack Developer • TypeScript • GenAI
          </p>

          {/* Description */}
          <p className="text-sm text-gray-600 mt-3 leading-relaxed">
            I'm a Backend-focused developer working with Node.js, Express, and
            TypeScript. Exploring distributed systems,DevOps, and AI-driven
            architectures.
          </p>

          {/* Highlight line */}
          <p className="text-xs mt-2 font-medium">
            <span className="bg-gradient-to-r from-red-500 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
              Building scalable systems, one abstraction at a time.
            </span>
          </p>

          {/* CTA */}
          <div className="mt-4">
            <Link
              href="https://leetcode.com/u/rajarshi_2005/"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                size="sm"
                className="bg-[#eaeaea] text-gray-800 border-none shadow-[6px_6px_12px_#cfcfcf,-6px_-6px_12px_#ffffff] hover:shadow-[inset_4px_4px_10px_#cfcfcf,inset_-4px_-4px_10px_#ffffff] transition-all flex items-center gap-2 dark:text-black"
              >
                <LeetCode />
                View LeetCode
              </Button>
            </Link>
          </div>

          {/* Footer */}
          <div className="mt-5 flex items-center justify-between">
            <span className="text-xs text-gray-500">Kolkata, India</span>

            <motion.button
              whileTap={{ scale: 0.95 }}
              className="px-4 py-1.5 rounded-full text-xs font-medium text-gray-700"
              style={{
                boxShadow: `
                  6px 6px 12px #cfcfcf,
                  -6px -6px 12px #ffffff
                `
              }}
            >
              Visit X
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SoftProfileCard;
