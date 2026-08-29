import { useEffect, useState } from "react";
import { nav } from "../data/content.generated";
import { Logo } from "./Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav.map((n) => document.getElementById(n.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__logo" aria-label="zarubin.dev — на главную">
          <Logo />
        </a>

        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? "is-active" : ""}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="nav__cta" onClick={() => setOpen(false)}>
            Связаться
          </a>
        </nav>

        <button
          className={`nav__burger ${open ? "is-open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Меню"
          aria-expanded={open}
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
