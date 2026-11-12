import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import Lenis from "lenis";
import { setLenis } from "./lib/scroll";
import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievement from "./components/Achievement";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function App() {
  const [ready, setReady] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    setLenis(lenis);
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest?.('a[href^="#"]');
      if (!a) return;
      const href = a.getAttribute("href") || "";
      if (href.length > 1) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          lenis.scrollTo(el as HTMLElement, { offset: -70, duration: 1.3 });
        }
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      setLenis(null);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div id="top" className="overflow-x-clip bg-white font-sans text-ink antialiased">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[60] opacity-[0.05] mix-blend-multiply"
        style={{ backgroundImage: NOISE }}
      />
      <motion.div
        className="fixed left-0 right-0 top-0 z-[9800] h-[4px] origin-left bg-red"
        style={{ scaleX: scrollYProgress }}
      />
      <Cursor />
      <AnimatePresence>{!ready && <Preloader onDone={() => setReady(true)} />}</AnimatePresence>

      {ready && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Services />
            <Skills />
            <Experience />
            <Projects />
            <Achievement />
            <Gallery />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
