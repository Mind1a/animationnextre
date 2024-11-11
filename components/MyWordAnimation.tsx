"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";

type ParagraphProps = {
  paragraph: string;
};

export default function MyWordAnimation({ paragraph }: ParagraphProps) {
  const container = useRef<HTMLParagraphElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["center 0.9", "start 0.25"],
  });

  const words = paragraph.split(" ");
  console.log(words);

  return (
    <p
      ref={container}
      className="flex flex-wrap text-[60px] leading-none p-10 max-w-[1280px] text-white"
    >
      {words.map((word, i) => {
        const start = i / word.length;
        const end = start + 1 / words.length;

        const opacity = useTransform(scrollYProgress, [start, end], [0.3, 1]);

        return (
          <motion.span
            key={i}
            style={{ opacity }}
            className="relative mr-3 mt-3"
          >
            {word}
          </motion.span>
        );
      })}
    </p>
  );
}

// Word 1: i = 0 → start = 0 / 5 = 0, end = 0 + (1 / 5) = 0.2

// Word 2: i = 1 → start = 1 / 5 = 0.2, end = 0.2 + (1 / 5) = 0.4

// Word 3: i = 2 → start = 2 / 5 = 0.4, end = 0.4 + (1 / 5) = 0.6

// Word 4: i = 3 → start = 3 / 5 = 0.6, end = 0.6 + (1 / 5) = 0.8

// Word 5: i = 4 → start = 4 / 5 = 0.8, end = 0.8 + (1 / 5) = 1
