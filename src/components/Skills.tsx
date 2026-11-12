import { useEffect, useState } from "react";
import {
  Braces,
  Code2,
  Database,
  Globe,
  Shield,
  Smartphone,
  Terminal,
} from "lucide-react";
import Marquee from "./Marquee";
import Reveal, { SectionTag } from "./Reveal";

const tech = [
  { name: "React", icon: Code2 },
  { name: "TypeScript", icon: Braces },
  { name: "PHP", icon: Braces },
  { name: "WordPress", icon: Globe },
  { name: "Python", icon: Terminal },
  { name: "Flutter", icon: Smartphone },
  { name: "MongoDB", icon: Database },
  { name: "PostgreSQL", icon: Database },
  { name: "Kali Linux", icon: Terminal },
  { name: "OSINT", icon: Globe },
  { name: "Penetration Testing", icon: Shield },
  { name: "Vulnerability Assessment", icon: Shield },
];

const tools = [
  "sqlmap",
  "Burp Suite",
  "Nmap",
  "Metasploit",
  "Wireshark",
  "John the Ripper",
  "Hydra",
  "OWASP ZAP",
  "DirBuster",
  "Social Engineering Toolkit",
];

const LINES: { cmd: string; out: string }[] = [
  { cmd: "nmap -sV target.com", out: "[+] 22/tcp open ssh   [+] 80/tcp open http   [+] 443/tcp open https" },
  { cmd: "sqlmap -u 'http://target.com?id=1' --dbs", out: "[!] parameter 'id' is injectable → databases: users, orders, payments" },
  { cmd: "msfconsole -q -x 'exploit/multi/handler'", out: "[*] handler started — waiting for incoming session..." },
  { cmd: "hydra -l admin -P rockyou.txt ssh://target.com", out: "[+] host: target.com  login: admin  password: ********" },
  { cmd: "wireshark -i eth0 -k", out: "[*] capturing packets on eth0 (1,024 packets...)" },
  { cmd: "zap-baseline.py -t https://target.com", out: "[!] 2 medium-risk alerts · 5 low-risk alerts found" },
  { cmd: "john --wordlist=rockyou.txt hashes.txt", out: "[+] 3 password hashes cracked" },
  { cmd: "dirb http://target.com /usr/share/dirb/wordlists", out: "[+] found: /admin  /backup  /config.php" },
  { cmd: "setoolkit", out: "[*] Social-Engineering Toolkit — payload ready" },
];

type Line = { type: "cmd" | "out"; text: string };

export default function Skills() {
  const [lines, setLines] = useState<Line[]>([]);

  useEffect(() => {
    let cancelled = false;
    let li = 0;
    let ci = 0;
    let timer = 0;

    const tick = () => {
      if (cancelled) return;
      if (li >= LINES.length) {
        timer = window.setTimeout(() => {
          if (cancelled) return;
          setLines([]);
          li = 0;
          ci = 0;
          tick();
        }, 3500);
        return;
      }
      const line = LINES[li];
      if (ci <= line.cmd.length) {
        setLines((prev) => {
          const arr = [...prev];
          const cmdCount = arr.filter((l) => l.type === "cmd").length;
          if (cmdCount === li) arr.push({ type: "cmd", text: "" });
          arr[arr.length - 1] = { type: "cmd", text: line.cmd.slice(0, ci) };
          return arr;
        });
        ci++;
        timer = window.setTimeout(tick, 24 + Math.random() * 45);
      } else {
        setLines((prev) => {
          const arr = [...prev];
          arr.push({ type: "out", text: line.out });
          return arr;
        });
        li++;
        ci = 0;
        timer = window.setTimeout(tick, 550);
      }
    };

    timer = window.setTimeout(tick, 700);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  const visible = lines.slice(-9);

  return (
    <section id="skills" className="relative overflow-hidden bg-burgundy py-24 text-white md:py-36">
      <span className="text-outline-white pointer-events-none absolute -bottom-10 left-0 whitespace-nowrap font-display text-[16vw] uppercase leading-none opacity-10">
        Kali Linux
      </span>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionTag index="03" label="Skills & arsenal" dark />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 font-display text-[clamp(2.4rem,7vw,6rem)] uppercase leading-[0.9]">
            My <span className="text-red">toolkit</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="max-w-xl text-lg leading-relaxed text-white/70">
              I use <b className="text-white">Kali Linux</b> for ethical hacking and penetration
              testing — network analysis, vulnerability assessment and exploitation. Development
              stack meets security stack, all in one pair of hands.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {tech.map((t) => (
                <span
                  key={t.name}
                  className="flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-red hover:bg-red"
                >
                  <t.icon size={16} className="text-red" />
                  {t.name}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#0b0b0b] shadow-2xl shadow-black/40">
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
                <span className="h-3 w-3 rounded-full bg-red" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
                <span className="ml-3 font-mono text-xs text-white/50">haisam@kali: ~</span>
              </div>
              <div className="flex h-[360px] flex-col justify-end gap-1.5 overflow-hidden px-5 py-4 font-mono text-[13px] leading-relaxed">
                {visible.map((l, i) =>
                  l.type === "cmd" ? (
                    <p key={i} className="whitespace-pre-wrap text-white">
                      <span className="mr-2 text-green-400">haisam@kali:~$</span>
                      {l.text}
                      {i === visible.length - 1 && <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-red align-middle" />}
                    </p>
                  ) : (
                    <p key={i} className="whitespace-pre-wrap text-red/90">
                      {l.text}
                    </p>
                  )
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <Marquee
        items={tools}
        className="mt-16 border-y border-white/15 py-4"
        itemClassName="font-anton text-xl uppercase tracking-wider text-white/70"
        separatorClassName="h-4 w-4 text-red"
        duration={30}
      />
    </section>
  );
}
