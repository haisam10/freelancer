import { useEffect, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [n, setN] = useState(0);
  const [exit, setExit] = useState(false);
  const p = useMotionValue(0);
  const bar = useTransform(p, (v) => v / 100);

  useEffect(() => {
    const controls = animate(p, 100, {
      duration: 2.1,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    controls.then(() => setTimeout(() => setExit(true), 250));
    return () => controls.stop();
  }, [p]);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex flex-col justify-between overflow-hidden bg-burgundy text-white"
      animate={exit ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => exit && onDone()}
    >
      <div className="flex items-center justify-between px-6 pt-6 text-[10px] font-bold uppercase tracking-[0.35em] text-white/70 md:px-10 md:text-xs">
        <span>MD Haisam Hoque</span>
        <span>Portfolio © 2026</span>
      </div>

      <div className="px-6 md:px-10">
        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(2.6rem,9vw,8rem)] uppercase leading-[0.85]"
        >
          Haisam<span className="text-red">.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 font-medium text-white/60"
        >
          Web Developer · Ethical Hacker · App Developer
        </motion.p>
      </div>

      <div className="px-6 pb-8 md:px-10">
        <div className="flex items-end justify-between">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/60 md:text-xs">
            Loading experience
          </span>
          <span className="font-anton text-[clamp(4rem,14vw,11rem)] leading-none">
            {n}
            <span className="text-red">%</span>
          </span>
        </div>
        <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/15">
          <motion.div className="h-full bg-red" style={{ scaleX: bar, transformOrigin: "left" }} />
        </div>
      </div>
    </motion.div>
  );
}
