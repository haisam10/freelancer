import { Trophy } from "lucide-react";
import Marquee from "./Marquee";
import Reveal from "./Reveal";

const phrase = ["ZERO-DAY PROJECT", <span className="font-bengali normal-case">স তে সতেরো</span>, "AWARDED", <span className="font-bengali normal-case">স তে সতেরো</span>];

export default function Achievement() {
  return (
    <section className="relative overflow-hidden bg-red py-20 text-white md:py-28">
      <Reveal className="mb-10 flex justify-center">
        <span className="inline-flex items-center gap-2.5 rounded-full border-2 border-white/40 px-6 py-2.5 text-xs font-bold uppercase tracking-[0.3em] md:text-sm">
          <Trophy size={18} /> Big achievement
        </span>
      </Reveal>

      <div className="-rotate-1">
        <Marquee
          items={phrase}
          itemClassName="font-display text-5xl uppercase md:text-7xl"
          separatorClassName="h-8 w-8 md:h-12 md:w-12"
          duration={22}
        />
      </div>
      <div className="mt-4 rotate-1">
        <Marquee
          items={phrase}
          reverse
          itemClassName="text-outline-white font-display text-5xl uppercase md:text-7xl"
          separatorClassName="h-8 w-8 md:h-12 md:w-12 text-white"
          duration={30}
        />
      </div>

      <Reveal delay={0.15} className="mt-10 text-center">
        <p className="mx-auto max-w-2xl px-6 text-white/85">
          Recognized with a <b className="text-white">Zero-Day project</b> on the{" "}
          <span className="font-bengali font-bold text-white">স তে সতেরো</span> web page —
          found, reported and fixed before anyone else could exploit it.
        </p>
      </Reveal>
    </section>
  );
}
