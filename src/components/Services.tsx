import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal, { SectionTag } from "./Reveal";

const services = [
  {
    n: "01",
    title: "Web Development",
    desc: "Modern, fast and responsive websites — from landing pages to full eCommerce. Clean code, SEO-friendly and built to convert visitors into customers.",
    tags: ["React", "PHP", "WordPress", "Tailwind CSS", "JavaScript"],
  },
  {
    n: "02",
    title: "App Development",
    desc: "Cross-platform mobile applications with Flutter — one codebase, native feel on both Android and iOS.",
    tags: ["Flutter", "Dart", "Firebase", "REST APIs"],
  },
  {
    n: "03",
    title: "Ethical Hacking & Security",
    desc: "Penetration testing, OSINT and vulnerability assessment with Kali Linux. I find the security holes before the bad guys do — and show you how to fix them.",
    tags: ["Kali Linux", "Burp Suite", "Nmap", "Metasploit", "OWASP ZAP"],
  },
  {
    n: "04",
    title: "Database Management",
    desc: "Well-structured, optimized and secure databases that keep your application fast and reliable at any scale.",
    tags: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    n: "05",
    title: "Video Editing & Social Media",
    desc: "Scroll-stopping video content and social media management that grows your brand and keeps your audience engaged.",
    tags: ["Video Editing", "Content Strategy", "Branding"],
  },
];

export default function Services() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="services" className="bg-white py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionTag index="02" label="What can I do for you?" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display text-[clamp(2.4rem,7vw,6rem)] uppercase leading-[0.9]">
            What I <span className="text-outline-red">do</span>
          </h2>
        </Reveal>

        <div className="mt-14 border-t-2 border-ink/10">
          {services.map((s, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={s.n} delay={i * 0.05}>
                <div className="group relative overflow-hidden border-b-2 border-ink/10">
                  <div className="absolute inset-0 origin-bottom scale-y-0 bg-burgundy transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100" />
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="relative z-10 flex w-full items-center gap-5 px-2 py-7 text-left md:gap-10 md:px-6 md:py-9"
                  >
                    <span className="font-anton text-lg text-red transition-colors duration-300 group-hover:text-white/60 md:text-2xl">
                      {s.n}
                    </span>
                    <h3 className="flex-1 font-display text-xl uppercase leading-tight transition-all duration-500 group-hover:translate-x-3 group-hover:text-white sm:text-3xl md:text-5xl">
                      {s.title}
                    </h3>
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-500 group-hover:border-white group-hover:text-white md:h-14 md:w-14 ${
                        isOpen ? "rotate-45 border-red bg-red text-white" : "border-ink/20 text-ink"
                      }`}
                    >
                      <Plus size={22} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="relative z-10 overflow-hidden"
                      >
                        <div className="flex flex-wrap items-center gap-x-10 gap-y-5 px-2 pb-9 md:px-6 md:pl-[4.5rem]">
                          <p className="max-w-xl text-ink/60">{s.desc}</p>
                          <div className="flex flex-wrap gap-2">
                            {s.tags.map((t) => (
                              <span
                                key={t}
                                className="rounded-full border border-ink/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-ink/70"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
