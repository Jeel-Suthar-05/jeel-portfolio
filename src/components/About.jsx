import { Bot, FileSearch } from "lucide-react";
import { about } from "../data/portfolio";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="border-t border-white/10 py-20 sm:py-24" aria-labelledby="about-heading">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
        <Reveal>
          <h2 id="about-heading" className="font-display text-5xl leading-none font-bold tracking-tight sm:text-6xl">
            <span className="block text-white">ABOUT_</span>
            <span className="block text-accent">CORE</span>
          </h2>
        </Reveal>
        <div>
          <Reveal>
            <p className="text-lg leading-relaxed text-white/90">{about[0]}</p>
            <p className="mt-4 leading-relaxed text-subtle">{about[1]}</p>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="hover-card rounded-xl border border-white/10 bg-elevated p-5">
              <Bot className="text-accent" size={18} aria-hidden="true" />
              <h3 className="mt-4 font-display text-xl font-semibold">Automation</h3>
              <p className="mt-2 text-base leading-relaxed text-subtle">
                Rule engines, Selenium portal flows, and executable jobs for payment posting, claims, and day-to-day healthcare operations.
              </p>
            </article>
            <article className="hover-card rounded-xl border border-white/10 bg-elevated p-5">
              <FileSearch className="text-accent" size={18} aria-hidden="true" />
              <h3 className="mt-4 font-display text-xl font-semibold">EOB Data Scraping</h3>
              <p className="mt-2 text-base leading-relaxed text-subtle">
                PDF scraping that pulls payment, allowed, adjustment, and patient-responsibility fields out of EOB documents into Excel.
              </p>
            </article>
          </div>
          <aside className="hover-card mt-4 border border-white/10 border-l-2 border-l-accent bg-elevated px-5 py-4">
            <p className="font-mono text-sm tracking-[0.16em] text-accent">CURRENT_FOCUS</p>
            <p className="mt-2 text-base leading-relaxed text-white/90">
              Payment posting rules, EOB PDF scraping, Practice Fusion and Tebra browser automation, SQL Server rule data, and Excel tracking.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
