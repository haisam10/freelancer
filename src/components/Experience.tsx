import { ArrowUpRight, MapPin } from "lucide-react";
import Reveal, { SectionTag } from "./Reveal";

const jobs = [
  {
    img: "src/images/travel-joyfully.jpg",
    title: "Travel Joyfully",
    role: "Video Editor & Social Media Manager",
    location: "New York, United States",
    period: "Oct 2022 ~ Aug 2024",
    href: "https://www.facebook.com/traveljoyfullyblog/",
  },
  {
    img: "src/images/turtelOMG.jpg",
    title: "Turtle OMG",
    role: "Graphic Designer",
    location: "New York, United States",
    period: "Jan 2023 ~ Aug 2024",
    href: "https://www.facebook.com/turtleomg",
  },
  {
    img: "src/images/robnontech.jpg",
    title: "Robnon Tech",
    role: "Web Developer & Cybersecurity",
    location: "New York, United States",
    period: "May 2024 ~ Aug 2024",
    href: "https://www.facebook.com/robnontech1",
  },
  {
    img: "src/images/স তে সতেরো.png",
    title: "স তে সতেরো",
    role: "Web Developer & IT Support",
    location: "Dhaka, Bangladesh",
    period: "Jan 2023 ~ Present",
    href: "https://s-te-sotero.netlify.app/",
    badge: "Zero-Day 🏆",
    bengali: true,
  },
  {
    img: "src/images/mdhh.jpg",
    title: "MDHH GROUP",
    role: "IT Support",
    location: "Dhaka, Bangladesh",
    period: "Jan 2023 ~ Present",
    href: "https://haisam10.github.io/haisam_/",
  },
  {
    img: "src/images/shukriamarts.jpg",
    title: "shukriamarts.com",
    role: "Web Developer & IT Support",
    location: "Dhaka, Bangladesh",
    period: "Oct 2026 ~ Present",
    href: "http://shukriamarts.com",
  },
];

export default function Experience() {
  return (
    <section id="work" className="bg-white py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionTag index="04" label="Where did I work?" />
        </Reveal>
        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <Reveal delay={0.1}>
            <h2 className="font-display text-[clamp(2.4rem,7vw,6rem)] uppercase leading-[0.9]">
              Work <span className="text-red">&amp;</span>{" "}
              <span className="text-outline-ink">clients</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-ink/60">
              Check out where I've worked and see what I can do for you.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((j, i) => (
            <Reveal key={j.title} delay={(i % 3) * 0.1} className={i % 2 === 1 ? "lg:translate-y-10" : ""}>
              <a
                href={j.href}
                target="_blank"
                rel="noreferrer"
                className="group block"
                data-cursor-label="Visit"
              >
                <div className="relative overflow-hidden rounded-3xl border-2 border-ink/10 transition-colors duration-300 group-hover:border-red">
                  <img
                    src={j.img}
                    alt={j.title}
                    loading="lazy"
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy/85 via-burgundy/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute left-4 top-4 rounded-full bg-red px-3 py-1 text-xs font-bold text-white">
                    0{i + 1}
                  </span>
                  {j.badge && (
                    <span className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-burgundy">
                      {j.badge}
                    </span>
                  )}
                  <span className="absolute right-4 top-4 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-white text-ink opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={20} />
                  </span>
                  <p className="absolute bottom-4 left-4 right-4 translate-y-3 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {j.role}
                  </p>
                </div>
                <h3
                  className={`mt-5 font-display text-2xl uppercase transition-colors duration-300 group-hover:text-red ${
                    j.bengali ? "font-bengali" : ""
                  }`}
                >
                  {j.title}
                </h3>
                <p className="mt-1 font-medium text-ink/60">{j.role}</p>
                <p className="mt-1.5 flex items-center gap-1.5 text-sm text-ink/45">
                  <MapPin size={14} className="text-red" />
                  {j.location} · {j.period}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
