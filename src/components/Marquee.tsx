import type { ReactNode } from "react";
import { Asterisk } from "lucide-react";

export default function Marquee({
  items,
  className = "",
  itemClassName = "",
  duration = 24,
  reverse = false,
  separatorClassName = "",
}: {
  items: ReactNode[];
  className?: string;
  itemClassName?: string;
  duration?: number;
  reverse?: boolean;
  separatorClassName?: string;
}) {
  const half = (keyPrefix: string) =>
    items.map((it, i) => (
      <span key={`${keyPrefix}${i}`} className={`flex shrink-0 items-center ${itemClassName}`}>
        {it}
        <Asterisk className={`mx-5 md:mx-8 shrink-0 ${separatorClassName}`} />
      </span>
    ));

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`flex w-max hover:[animation-play-state:paused] ${
          reverse ? "animate-marquee-rev" : "animate-marquee"
        }`}
        style={{ animationDuration: `${duration}s` }}
      >
        {half("a")}
        {half("b")}
      </div>
    </div>
  );
}
