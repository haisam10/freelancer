import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight, Menu, X, Mail } from "lucide-react";
import { FacebookIcon, XIcon, GithubIcon } from "./BrandIcons";

const links = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Arsenal" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

const socials = [
  { icon: FacebookIcon, href: "https://www.facebook.com/md.haisam.hoque" },
  { icon: XIcon, href: "https://x.com/MD_Haisam_" },
  { icon: GithubIcon, href: "https://github.com/haisam10" },
  { icon: Mail, href: "mailto:mdhh.info@gmail.com" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-[9000] transition-all duration-300 ${
          scrolled ? "bg-white/90 shadow-[0_1px_0_rgba(14,14,14,0.08)] backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="#top" className="font-display text-xl uppercase tracking-tight text-ink">
            Haisam<span className="text-red">.</span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="group relative text-sm font-semibold text-ink/70 transition-colors hover:text-ink"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 bg-red transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="group hidden items-center gap-1.5 rounded-full bg-red px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-burgundy sm:inline-flex"
            >
              Let's Talk
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink/10 text-ink transition-colors hover:border-red hover:text-red lg:hidden"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[9500] flex flex-col bg-burgundy text-white"
          >
            <div className="flex h-[72px] items-center justify-between px-5 md:px-8">
              <span className="font-display text-xl uppercase">
                Haisam<span className="text-red">.</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition-colors hover:bg-red hover:border-red"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-1 px-6 md:px-12">
              {links.map((l, i) => (
                <motion.a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-baseline gap-4 border-b border-white/10 py-3"
                >
                  <span className="font-anton text-sm text-red">0{i + 1}</span>
                  <span className="font-display text-4xl uppercase transition-all duration-300 group-hover:translate-x-3 group-hover:text-red md:text-6xl">
                    {l.label}
                  </span>
                </motion.a>
              ))}
            </nav>
            <div className="flex items-center justify-between px-6 pb-8 md:px-12">
              <a href="mailto:mdhh.info@gmail.com" className="text-sm text-white/70 hover:text-white">
                mdhh.info@gmail.com
              </a>
              <div className="flex gap-2">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 transition-colors hover:border-red hover:bg-red"
                  >
                    <s.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
