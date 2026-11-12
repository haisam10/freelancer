import { ArrowUpRight, Download, Mail, MapPin, Phone } from "lucide-react";
import Reveal, { SectionTag } from "./Reveal";
import { FacebookIcon, XIcon, GithubIcon } from "./BrandIcons";

const cards = [
  {
    icon: Phone,
    label: "Phone",
    value: "+880 15371 61735",
    href: "tel:+8801537161735",
  },
  {
    icon: Mail,
    label: "Email",
    value: "mdhh.info@gmail.com",
    href: "mailto:mdhh.info@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: "https://www.google.com/maps/place/Dhaka",
  },
  {
    icon: ArrowUpRight,
    label: "Fiverr",
    value: "fiverr.com/md_haisam_hoque",
    href: "https://www.fiverr.com/md_haisam_hoque/",
  },
];

const socials = [
  { icon: FacebookIcon, href: "https://www.facebook.com/md.haisam.hoque" },
  { icon: XIcon, href: "https://x.com/MD_Haisam_" },
  { icon: GithubIcon, href: "https://github.com/haisam10" },
  { icon: Mail, href: "mailto:mdhh.info@gmail.com" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-burgundy py-24 text-white md:py-36">
      <img
        src="/images/footer.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-burgundy via-burgundy/85 to-[#4d0013]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionTag index="07" label="Contact me" dark />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display text-[clamp(2.8rem,9vw,8.5rem)] uppercase leading-[0.88]">
            <span className="block">Let's work</span>
            <span className="text-outline-white block">together</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-lg text-white/70">
            Feel free to reach out for any inquiries or collaborations. Ready to help with any
            advice!
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <a
            href="mailto:mdhh.info@gmail.com"
            className="group mt-8 inline-block font-display text-[clamp(1.3rem,4vw,3rem)] lowercase"
            data-cursor-label="Mail"
          >
            <span className="bg-gradient-to-r from-red to-red bg-[length:100%_4px] bg-left-bottom bg-no-repeat pb-1 transition-all duration-500 group-hover:bg-[length:0%_4px]">
              mdhh.info@gmail.com
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.34}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://www.fiverr.com/md_haisam_hoque/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-red px-7 py-3.5 font-semibold transition-colors duration-300 hover:bg-white hover:text-red"
            >
              Fiverr Profile
              <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://haisam10.github.io/freelancer/MD%20Haisam%20Hoque-cv.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-7 py-3.5 font-semibold transition-colors duration-300 hover:bg-white hover:text-burgundy"
            >
              View CV <Download size={18} />
            </a>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex h-full items-center gap-4 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-red hover:bg-red/20"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red text-white">
                  <c.icon size={20} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                    {c.label}
                  </span>
                  <span className="block truncate text-sm font-semibold">{c.value}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 flex items-center gap-3">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label="social link"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 transition-all duration-300 hover:-translate-y-1 hover:border-red hover:bg-red"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
