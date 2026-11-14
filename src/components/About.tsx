import Reveal, { Counter, SectionTag, SplitWords } from "./Reveal";

const stats = [
  { to: 4, suffix: "+", label: "Years of hands-on experience" },
  { to: 5, suffix: "+", label: "Workplaces & happy clients" },
  { to: 4, suffix: "", label: "Open-source GitHub projects" },
  { to: 10, suffix: "+", label: "Certificates & achievements" },
];

export default function About() {
  return (
    <section id="about" className="relative bg-white py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionTag index="01" label="Why me?" />
        </Reveal>

        <h2 className="mt-8 max-w-5xl font-display text-balance text-[clamp(1.8rem,4.6vw,4.1rem)] uppercase leading-[1.05] tracking-tight">
          <SplitWords
            parts={[
              { t: "I'm" },
              { t: "Haisam" },
              { t: "—" },
              { t: "a" },
              { t: "Web", accent: "red" },
              { t: "Developer," },
              { t: "App" },
              { t: "Developer" },
              { t: "&" },
              { t: "Ethical", accent: "wine" },
              { t: "Hacker." },
              { t: "I" },
              { t: "build" },
              { t: "websites," },
              { t: "Flutter" },
              { t: "apps" },
              { t: "and" },
              { t: "secure" },
              { t: "digital" },
              { t: "spaces." },
            ]}
          />
        </h2>

        <div className="mt-12 grid items-end gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <p className="max-w-2xl text-lg leading-relaxed text-ink/60">
              From pixel-perfect front-ends to hardened back-ends, I handle the full stack —
              design, development, database management and security. Ready to help with any
              advice, and very qualified to help and skilled at work.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-5">
            <div className="relative ml-auto w-full max-w-sm -rotate-2 rounded-2xl border-2 border-ink bg-white p-2 shadow-[8px_8px_0_#d21404]">
              <img
                src="src/images/haisam2.png"
                alt="Haisam at work"
                className="h-64 w-full rounded-xl object-cover"
              />
              <p className="px-2 py-3 text-center font-display text-sm uppercase">
                MDHH Group - CEO · Dhaka, BD
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border-2 border-ink/10 bg-ink/10 lg:grid-cols-4">
          {stats.map((s) => (
            <Reveal key={s.label} className="bg-white p-7 transition-colors duration-300 hover:bg-red md:p-9 group">
              <div className="font-display text-5xl text-ink transition-colors duration-300 group-hover:text-white md:text-6xl">
                <Counter to={s.to} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-sm font-medium text-ink/50 transition-colors duration-300 group-hover:text-white/85">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
