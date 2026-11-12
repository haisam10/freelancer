import { useEffect, useRef, useState, type ReactNode } from "react";
import { animate, motion, useInView } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  y = 48,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionTag({
  index,
  label,
  dark = false,
}: {
  index: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red opacity-60" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red" />
      </span>
      <span
        className={`text-xs md:text-sm font-bold tracking-[0.35em] uppercase ${
          dark ? "text-white/70" : "text-burgundy"
        }`}
      >
        {index} — {label}
      </span>
      <span className={`h-px flex-1 ${dark ? "bg-white/15" : "bg-ink/10"}`} />
    </div>
  );
}

export function SplitWords({
  parts,
  className,
}: {
  parts: { t: string; accent?: "red" | "wine" }[];
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  let i = 0;
  return (
    <span ref={ref} className={className}>
      {parts.map((p, k) => {
        const idx = i++;
        return (
          <span key={k} className="inline-block overflow-hidden align-bottom pb-[0.14em] -mb-[0.14em]">
            <motion.span
              className={`inline-block ${
                p.accent === "red" ? "text-red" : p.accent === "wine" ? "text-burgundy" : ""
              }`}
              initial={{ y: "115%" }}
              animate={{ y: isInView ? "0%" : "115%" }}
              transition={{ duration: 0.7, delay: idx * 0.032, ease: [0.22, 1, 0.36, 1] }}
            >
              {p.t}&nbsp;
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => c.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}
