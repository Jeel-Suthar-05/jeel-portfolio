export default function ProjectCard({ project, onOpen, wide = false }) {
  return (
    <article
      className={`hover-card flex h-full flex-col rounded-2xl border bg-elevated p-6 ${
        wide ? "border-accent/50" : "border-white/10"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
          <p className="mt-2 font-mono text-sm tracking-[0.14em] text-subtle uppercase">{project.category}</p>
        </div>
        {project.id === "payment-posting-rules-engine" ? (
          <span className="shrink-0 rounded border border-accent/40 px-2 py-1 font-mono text-sm tracking-[0.12em] text-accent">
            FLAGSHIP_MODULE
          </span>
        ) : null}
      </div>
      <p className="mt-4 flex-1 text-base leading-relaxed text-subtle">{project.summary}</p>
      <ul className="mt-4 space-y-2">
        {project.features.slice(0, 3).map((feature) => (
          <li key={feature} className="flex gap-2 text-base text-white/85">
            <span className="text-accent" aria-hidden="true">
              &gt;
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
        {project.stack.slice(0, 6).map((tech) => (
          <li key={tech} className="rounded border border-white/10 bg-black/30 px-2 py-1 font-mono text-sm tracking-[0.12em] text-subtle uppercase">
            {tech}
          </li>
        ))}
      </ul>
      <button type="button" className="btn btn-secondary mt-5 self-start font-mono text-sm tracking-[0.14em]" onClick={onOpen}>
        CASE_STUDY
      </button>
    </article>
  );
}
