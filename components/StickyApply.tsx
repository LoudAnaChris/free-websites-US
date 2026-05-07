"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export function StickyApply() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <a
      href="/#qualifier"
      className="btn btn-primary sticky-cta"
      aria-label="Apply for a free website build slot"
    >
      Apply <ArrowRight size={16} strokeWidth={2.5} />
    </a>
  );
}
