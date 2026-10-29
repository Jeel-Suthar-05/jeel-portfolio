import { BookOpen, GraduationCap } from "lucide-react";
import { courses, education } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Card({ item, icon: Icon }) {
  return (
    <article className="h-full rounded-2xl border border-line bg-elevated p-6 sm:p-7">
      <div className="flex items-center justify-between gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-soft text-accent">
          <Icon size={20} aria-hidden="true" />
        </span>
        <p className="text-sm font-semibold tracking-[0.14em] text-subtle uppercase">{item.kind}</p>
      </div>
      <h3 className="mt-5 font-display text-2xl font-semibold text-text">{item.title}</h3>
      <p className="mt-2 font-medium text-accent">
        {item.org}
        {item.dates ? ` · ${item.dates}` : ""}
      </p>
      {item.detail ? <p className="mt-3 leading-relaxed text-subtle">{item.detail}</p> : null}
    </article>
  );
}

export default function Education() {
  return (
    <section id="education" className="border-t border-line py-20 sm:py-24" aria-labelledby="education-heading">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            id="education-heading"
            eyebrow="Education"
            title="Education and courses."
            description="M.Sc. from Gujarat University, and a Python programming course on Udemy."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {education.map((item) => (
            <Reveal key={item.title}>
              <Card item={item} icon={GraduationCap} />
            </Reveal>
          ))}
          {courses.map((item) => (
            <Reveal key={item.title}>
              <Card item={item} icon={BookOpen} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
