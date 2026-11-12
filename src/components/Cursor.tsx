import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [active, setActive] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [hover, setHover] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 300, damping: 25, mass: 0.4 });
  const ry = useSpring(y, { stiffness: 300, damping: 25, mass: 0.4 });

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setActive(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const labelled = t.closest("[data-cursor-label]");
      if (labelled) {
        setLabel(labelled.getAttribute("data-cursor-label"));
        setHover(false);
        return;
      }
      setLabel(null);
      setHover(!!t.closest("a, button, [data-cursor]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  if (!active) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[10001] h-2 w-2 rounded-full bg-red"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: label ? 0 : 1 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[10000] flex items-center justify-center rounded-full border-2 border-red"
        style={{ x: rx, y: ry, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: label ? 84 : hover ? 52 : 30,
          height: label ? 84 : hover ? 52 : 30,
          backgroundColor: label ? "rgba(210,20,4,0.92)" : "rgba(210,20,4,0.08)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
      >
        <span
          className="text-[10px] font-bold uppercase tracking-widest text-white transition-opacity"
          style={{ opacity: label ? 1 : 0 }}
        >
          {label}
        </span>
      </motion.div>
    </>
  );
}
