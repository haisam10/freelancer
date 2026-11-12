import { ArrowUp } from "lucide-react";
import { scrollToTop } from "../lib/scroll";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-8 md:flex-row md:px-8">
        <p className="text-center text-sm">© 2026 MDHH Group &amp; Technology. All rights reserved.</p>
        <p className="font-display text-sm uppercase tracking-wider text-white">
          Designed by <span className="text-red">Haisam</span>
        </p>
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-red text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-red"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
}
