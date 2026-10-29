import { courses, education, experience } from "../data/portfolio";
import Reveal from "./Reveal";

function Bullets({ items }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((point) => (
        <li key={point} className="flex gap-2 text-base leading-relaxed text-subtle">
          <span className="text-accent" aria-hidden="true">
            &gt;
          </span>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Experience() {
  const current = experience[0];
  const earlier = experience.slice(1);

  return (
    <section id="experience" className="border-t border-white/10 py-20 sm:py-24" aria-labelledby="experience-heading">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal>
          <h2 id="experience-heading" className="text-center font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            WORK_EXPERIENCE
          </h2>
        </Reveal>

        <Reveal>
          <article className="hover-card mt-12 rounded-2xl border border-accent/40 bg-elevated/80 p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="font-display text-3xl font-semibold text-accent">{current.role}</h3>
                <p className="mt-1 text-sm text-subtle">
                  {current.company} | {current.location}
                </p>
              </div>
              <p className="w-fit rounded-md border border-white/10 bg-black/40 px-3 py-2 font-mono text-sm tracking-[0.12em] text-subtle uppercase">
                Nov_2024 – Present
              </p>
            </div>
            <div className="mt-8 grid gap-8 lg:grid-cols-3">
              {current.columns.map((column) => (
                <div key={column.title}>
                  <h4 className="border-b border-white/10 pb-2 font-mono text-sm tracking-[0.16em] text-accent uppercase">
                    {column.title}
                  </h4>
                  <Bullets items={column.points} />
                </div>
              ))}
            </div>
            <ul className="mt-8 grid gap-2 border-t border-white/10 pt-5 sm:grid-cols-2">
              {current.value.map((item) => (
                <li key={item} className="text-sm text-white/80">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {earlier.map((job) => (
            <Reveal key={job.company}>
              <article className="hover-card h-full rounded-xl border border-white/10 bg-elevated p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold text-white">{job.company}</h3>
                  <p className="font-mono text-sm tracking-[0.12em] text-subtle uppercase">{job.dates}</p>
                </div>
                <p className="mt-1 text-sm text-accent">
                  {job.role} · {job.location}
                </p>
                <Bullets items={job.points} />
              </article>
            </Reveal>
          ))}
        </div>

        <div id="education" className="mt-4 grid gap-4 md:grid-cols-2">
          {education.map((item) => (
            <article key={item.title} className="hover-card rounded-xl border border-white/10 bg-elevated p-5">
              <p className="font-mono text-sm tracking-[0.16em] text-accent">DEGREE // {item.dates}</p>
              <h3 className="mt-3 font-display text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-subtle">
                {item.org}. {item.detail}
              </p>
            </article>
          ))}
          {courses.map((item) => (
            <article key={item.title} className="hover-card rounded-xl border border-white/10 bg-elevated p-5">
              <p className="font-mono text-sm tracking-[0.16em] text-accent">COURSE</p>
              <h3 className="mt-3 font-display text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-subtle">
                {item.org}. {item.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
