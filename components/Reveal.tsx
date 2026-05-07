"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import type { JSX } from "react";

type AsTag = "div" | "section" | "article" | "h1" | "h2" | "h3" | "p" | "li";

export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: AsTag;
}) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    const Tag = as as keyof JSX.IntrinsicElements;
    return <Tag className={className}>{children}</Tag>;
  }

  const Component = (motion as unknown as Record<AsTag, typeof motion.div>)[as];

  return (
    <Component
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "-50px 0px" }}
      transition={{
        duration: 0.55,
        delay: delay / 1000,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </Component>
  );
}
