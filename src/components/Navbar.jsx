import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const nodes = navLinks.map((link) => document.querySelector(link.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-nav backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-mono text-sm font-semibold tracking-[0.18em] text-accent">
          JS/SYS
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`font-mono text-sm tracking-[0.18em] uppercase ${isActive ? "text-white" : "text-subtle hover:text-white"}`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#contact" className="btn btn-primary px-4 py-2 font-mono text-sm tracking-[0.16em]">
            CONNECT
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </div>
      {open ? (
        <nav id="mobile-nav" className="border-t border-white/10 bg-elevated px-5 py-3 md:hidden" aria-label="Mobile">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 font-mono text-xs tracking-[0.16em] text-white uppercase"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
