import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { profile, resume } from "../data/portfolio";

export default function Hero() {
  const [photo, setPhoto] = useState(profile.portrait);
  const resumeHref = resume.available ? resume.href : "#resume";

  return (
    <section id="top" className="relative">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
        <div>
          <p className="inline-flex items-center gap-3 border-l-2 border-accent bg-accent/10 px-3 py-1.5 font-mono text-sm tracking-[0.14em] text-accent uppercase">
            System_status: Active // Role: Python_Developer
          </p>
          <h1 className="mt-6 font-display text-6xl leading-none font-bold tracking-tight sm:text-7xl lg:text-8xl">
            <span className="text-white">Jeel </span>
            <span className="name-gradient">Suthar</span>
          </h1>
          <p className="mt-6 font-display text-2xl font-semibold text-white">Python Developer</p>
          <p className="mt-2 text-lg text-white/90">Python · Automation Systems · Data Science · AI/ML · API Integration · Web Scraping</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-subtle sm:text-lg">{profile.tagline}</p>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-subtle">{profile.supporting}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary font-mono text-sm tracking-[0.14em]">
              EXPLORE_BUILDS
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href={resumeHref}
              className="btn btn-secondary font-mono text-sm tracking-[0.14em]"
              {...(resume.available ? { download: resume.fileName } : {})}
            >
              RESUME_PDF
            </a>
          </div>
        </div>

        <figure className="relative mx-auto w-full max-w-md">
          <span className="absolute -top-3 left-6 font-mono text-sm tracking-[0.2em] text-accent">REF // 001</span>
          <span className="absolute top-4 left-0 h-10 w-10 border-t border-l border-accent" aria-hidden="true" />
          <span className="absolute right-0 bottom-4 h-10 w-10 border-r border-b border-accent" aria-hidden="true" />
          <img
            src={photo}
            alt="Portrait of Jeel Suthar"
            width="640"
            height="800"
            className="aspect-[4/5] w-full object-cover object-[center_70%] grayscale"
            onError={() => setPhoto("/portrait.svg")}
          />
        </figure>
      </div>
      <p className="pb-8 text-center font-mono text-sm tracking-[0.28em] text-subtle">
        SCROLL
        <span className="mt-2 block" aria-hidden="true">
          ↓
        </span>
      </p>
    </section>
  );
}
