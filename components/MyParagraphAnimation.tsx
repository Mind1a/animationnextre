"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";

type ParagraphProps = {
  paragraph: string;
};

export default function MyParagraphAnimation({ paragraph }: ParagraphProps) {
  const container = useRef<HTMLParagraphElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["center 0.9", "start 0.25"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    scrollYProgress.on("change", (e) => console.log(e));
  }, []);

  return (
    <motion.p
      ref={container}
      className="text-[60px] leading-none p-10 max-w-[1280px] text-white"
      style={{ opacity }}
    >
      {paragraph}
    </motion.p>
  );
}
