"use client";
import { useEffect, useRef } from "react";

export default function Reveal({ children, as = "div", className = "", delay = 0, ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => el.classList.add("in"), delay);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  const Tag = as;
  return (
    <Tag ref={ref} className={"reveal " + className} {...rest}>
      {children}
    </Tag>
  );
}
