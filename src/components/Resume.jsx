import { resume, profile } from "../data/portfolio";

export default function Resume() {
  const fileHref = resume.available ? resume.href : "#resume";

  return (
    <section id="resume" className="border-t border-white/10 py-20 sm:py-24" aria-labelledby="resume-heading">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="hover-card rounded-2xl border border-accent/40 bg-elevated px-6 py-12 text-center sm:px-12">
          <h2 id="resume-heading" className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            RESUME_INTERFACE
          </h2>
          <p className="mt-3 text-base text-subtle">Download the full technical specification of my journey and skills.</p>
          <dl className="mt-10 grid gap-6 text-left sm:grid-cols-3">
            <div className="border-l-2 border-accent pl-4">
              <dt className="font-mono text-sm tracking-[0.16em] text-subtle">EXPERIENCE</dt>
              <dd className="mt-2 font-display text-xl font-semibold">{profile.experienceLabel}</dd>
            </div>
            <div className="border-l-2 border-sky-400 pl-4">
              <dt className="font-mono text-sm tracking-[0.16em] text-subtle">LOCATION</dt>
              <dd className="mt-2 font-display text-xl font-semibold">Ahmedabad, IN</dd>
            </div>
            <div className="border-l-2 border-accent pl-4">
              <dt className="font-mono text-sm tracking-[0.16em] text-subtle">STATUS</dt>
              <dd className="mt-2 font-display text-xl font-semibold">Open to Work</dd>
            </div>
          </dl>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href={fileHref} className="btn btn-primary font-mono text-sm tracking-[0.14em]" {...(resume.available ? { target: "_blank", rel: "noreferrer" } : {})}>
              VIEW_INLINE
            </a>
            <a
              href={fileHref}
              className="btn btn-secondary font-mono text-sm tracking-[0.14em]"
              {...(resume.available ? { download: resume.fileName } : {})}
            >
              GET_PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
