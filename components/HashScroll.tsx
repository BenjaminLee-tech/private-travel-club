"use client";

import { useEffect } from "react";

export default function HashScroll() {
  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) return;

    const scrollToHash = () => {
      const element = document.querySelector(hash);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    // Wait until the page has finished rendering.
    const timer = window.setTimeout(scrollToHash, 100);

    return () => window.clearTimeout(timer);
  }, []);

  return null;
}