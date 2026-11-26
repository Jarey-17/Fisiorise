"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import type { RevealDelay } from "@/lib/reveal";

interface RevealProps {
  className?: string;
  /** Escalona la entrada de tarjetas hermanas (ver staggerDelay en lib/reveal). */
  delay?: RevealDelay;
  children: ReactNode;
}

/**
 * Anima la entrada del bloque cuando entra en el viewport (fade + slide-up).
 * Renderiza un <div> con las clases `reveal` / `visible` definidas en globals.css.
 * Sin JavaScript el CSS muestra el contenido directamente (@media (scripting: none)).
 */
export default function Reveal({ className, delay, children }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = [
    className,
    "reveal",
    delay && `reveal-delay-${delay}`,
    visible && "visible",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
}
