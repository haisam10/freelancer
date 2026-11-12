import { ArrowUpRight, GitFork, MapPin, Star } from "lucide-react";
import Reveal, { SectionTag } from "./Reveal";
import { GithubIcon } from "./BrandIcons";

const repos = [
  {
    name: "sql-doppler",
    desc: "SQL injection detection tool built for Kali Linux — raw code, no shortcuts.",
    tag: "Python · Kali Linux",
    href: "https://github.com/haisam10/sql-doppler",
  },
  {
    name: "Attendance-Management-System-javafx",
    desc: "Desktop software for student attendance tracking.",
    tag: "JavaFX",
    href: "https://github.com/haisam10/Attendance-Management-System-javafx",
  },
  {
    name: "S-te-sotero",
    desc: "React-based restaurant website project — the zero-day showcase.",
    tag: "React",
    href: "https://github.com/haisam10/S-te-sotero",
  },
  {
    name: "mdhh-shop",
    desc: "PHP-based eCommerce website project with a full cart & checkout flow.",
    tag: "PHP",
    href: "https://github.com/haisam10/mdhh-shop",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white pb-24 md:pb-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionTag index="05" label="GitHub project highlights" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display text-[clamp(2.4rem,7vw,6rem)] uppercase leading-[0.9]">
            Open <span className="text-outline-red">source</span>
          </h2>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mt-4 max-w-xl text-lg text-ink/60">
            ⚠️ Don't run to the plugin or library — make your own <b>RAW code</b>.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <a
            href="https://github.com/haisam10"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-wrap items-center gap-5 rounded-3xl border-2 border-ink/10 bg-white p-6 transition-colors duration-300 hover:border-red"
            data-cursor-label="GitHub"
          >
            <img
              src="https://github.com/haisam10.png"
              alt="GitHub avatar"
              className="h-20 w-20 rounded-full border-2 border-red object-cover"
            />
            <div className="min-w-0 flex-1">
              <p className="font-display text-xl">MD Haisam Hoque</p>
              <p className="text-sm text-ink/60">Web Developer | Video Editor | Ethical Hacker</p>
              <p className="mt-1 flex items-center gap-1 text-sm text-ink/45">
                <MapPin size={14} className="text-red" /> Dhaka, Bangladesh
              </p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white transition-colors duration-300 group-hover:bg-red">
              <GithubIcon size={16} /> haisam10
            </span>
          </a>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {repos.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <a
                href={r.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-3xl border-2 border-ink/10 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-ink hover:bg-ink hover:text-white hover:shadow-[10px_10px_0_#d21404]"
                data-cursor-label="Repo"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2.5 font-mono text-lg font-bold">
                    <GitFork size={18} className="text-red" />
                    {r.name}
                  </span>
                  <ArrowUpRight
                    size={22}
                    className="text-ink/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red"
                  />
                </div>
                <p className="mt-4 flex-1 text-ink/60 transition-colors duration-300 group-hover:text-white/70">
                  {r.desc}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="rounded-full bg-red/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-red transition-colors duration-300 group-hover:bg-red group-hover:text-white">
                    {r.tag}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-ink/40 transition-colors group-hover:text-white/60">
                    <Star size={15} className="text-red" /> star on GitHub
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
