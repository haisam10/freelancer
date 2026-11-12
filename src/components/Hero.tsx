import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Code2, Download, Mail, Shield, Zap } from "lucide-react";
import Marquee from "./Marquee";
import { FacebookIcon, XIcon, GithubIcon } from "./BrandIcons";

const marqueeItems = [
  "Web Development",
  "Ethical Hacking",
  "App Development",
  "Database Management",
  "OSINT",
  "Penetration Testing",
  "Video Editing",
  "WordPress",
  "Flutter",
  "Python",
];

const socials = [
  { icon: FacebookIcon, href: "https://www.facebook.com/md.haisam.hoque" },
  { icon: XIcon, href: "https://x.com/MD_Haisam_" },
  { icon: GithubIcon, href: "https://github.com/haisam10" },
  { icon: Mail, href: "mailto:mdhh.info@gmail.com" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const yTitle = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yBadge = useTransform(scrollYProgress, [0, 1], [0, 190]);

  return (
    <section ref={ref} id="home" className="bg-grid relative overflow-hidden pt-[72px]">
      <div className="absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full bg-red/10 blur-3xl" />
      <div className="absolute -left-40 top-48 h-[380px] w-[380px] rounded-full bg-burgundy/10 blur-3xl" />
      <span className="absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-90 text-[10px] font-bold tracking-[0.4em] text-ink/40 xl:block">
        PORTFOLIO © 2026 — DHAKA, BANGLADESH
      </span>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-10 md:px-8 md:pb-28 md:pt-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-ink/15 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red" />
            </span>
            Available for freelance
          </motion.div>

          <motion.h1
            style={{ y: yTitle }}
            className="mt-6 font-display text-[clamp(3.2rem,10.5vw,9.5rem)] uppercase leading-[0.85]"
          >
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ delay: 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="block overflow-hidden pb-[0.08em]">
                <span className="block">MD Haisam</span>
              </span>
            </motion.span>
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span
                className="text-outline-red block"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ delay: 0.38, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                Hoque<span className="text-red" style={{ WebkitTextStroke: "0px" }}>.</span>
              </motion.span>
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-7 flex flex-wrap items-center gap-3 text-sm font-bold md:text-base"
          >
            <span className="rounded-full bg-ink px-4 py-2 text-white">Web Developer</span>
            <span className="rounded-full bg-red px-4 py-2 text-white">Ethical Hacker</span>
            <span className="rounded-full border-2 border-burgundy px-4 py-2 text-burgundy">App Developer</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.68, duration: 0.6 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink/60"
          >
            I blend creativity with technical skill to build websites, Flutter apps and secure
            digital spaces. Let's bring your ideas to life — safely &amp; smartly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="https://www.fiverr.com/md_haisam_hoque/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-red px-7 py-3.5 font-semibold text-white transition-colors duration-300 hover:bg-burgundy"
            >
              Fiverr Profile
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-7 py-3.5 font-semibold transition-colors duration-300 hover:bg-ink hover:text-white"
            >
              View CV
              <Download size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.95, duration: 0.6 }}
            className="mt-9 flex items-center gap-3"
          >
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label="social link"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-all duration-300 hover:-translate-y-1 hover:border-red hover:bg-red hover:text-white"
              >
                <s.icon size={17} />
              </a>
            ))}
          </motion.div>
        </div>

        <div className="lg:col-span-5">
          <motion.div
            style={{ y: yImg }}
            initial={{ opacity: 0, scale: 0.92, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.45, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2.5rem] border-2 border-red" />
            <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-ink bg-white">
              <img
                src="src/images/haisam.png"
                alt="MD Haisam Hoque"
                className="h-[420px] w-full object-cover object-top grayscale transition-all duration-700 hover:scale-105 hover:grayscale-0 md:h-[540px]"
              />
            </div>

            <motion.div
              style={{ y: yBadge }}
              className="absolute -bottom-8 -left-4 flex h-32 w-32 items-center justify-center rounded-full bg-red text-white shadow-xl shadow-red/30 md:-left-10 md:h-40 md:w-40"
            >
              <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full animate-spin-slow">
                <defs>
                  <path
                    id="circ"
                    d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0"
                  />
                </defs>
                <text
                  className="fill-white text-[14.5px] font-semibold uppercase"
                  style={{ letterSpacing: "3.5px" }}
                >
                  <textPath href="#circ">Web Developer ✦ Ethical Hacker ✦ App Dev ✦</textPath>
                </text>
              </svg>
              <Shield size={34} />
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-2 top-8 flex items-center gap-2 rounded-2xl border border-ink/10 bg-white px-4 py-2.5 text-sm font-bold shadow-lg md:-right-5"
            >
              <Zap className="text-red" size={16} /> Kali Linux
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute -left-3 bottom-28 flex items-center gap-2 rounded-2xl bg-ink px-4 py-2.5 text-sm font-bold text-white shadow-lg md:-left-6"
            >
              <Code2 className="text-red" size={16} /> React · Flutter
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-bold tracking-[0.35em] text-ink/50 md:flex">
        SCROLL
        <span className="h-10 w-px overflow-hidden bg-ink/15">
          <span className="block h-4 w-full animate-scrollhint bg-red" />
        </span>
      </div>

      <div className="relative -mx-2 -rotate-1 scale-[1.02] bg-red py-4 text-white shadow-lg md:py-5">
        <Marquee
          items={marqueeItems}
          itemClassName="font-display text-2xl uppercase md:text-4xl"
          separatorClassName="h-6 w-6 md:h-8 md:w-8"
          duration={26}
        />
      </div>
    </section>
  );
}
