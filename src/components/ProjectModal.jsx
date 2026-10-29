import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import Workflow from "./Workflow";

function Block({ title, children }) {
  if (!children) return null;
  return (
    <section className="mt-6">
      <h4 className="text-sm font-semibold tracking-[0.14em] text-accent uppercase">{title}</h4>
      <div className="mt-2 text-base leading-relaxed text-subtle">{children}</div>
    </section>
  );
}

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);
  const titleId = "project-dialog-title";

  useEffect(() => {
    const previous = document.activeElement;
    closeRef.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      if (previous instanceof HTMLElement) previous.focus();
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-6">
      <button type="button" className="absolute inset-0 bg-[#07111c]/70" aria-label="Close project details" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-t-3xl border border-line bg-elevated shadow-[var(--shadow)] sm:rounded-3xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-line px-5 py-4 sm:px-7">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">{project.category}</p>
            <h3 id={titleId} className="mt-1 font-display text-2xl font-semibold tracking-tight text-text">
              {project.title}
            </h3>
            {project.company ? (
              <p className="mt-1 text-sm text-subtle">
                {project.roleLabel ? `${project.roleLabel} · ` : ""}
                {project.company}
              </p>
            ) : null}
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-text"
            aria-label="Close"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">
          <Block title="Overview">{project.summary}</Block>
          <Block title="Problem">{project.problem}</Block>
          <Block title="Solution">{project.solution}</Block>

          {project.role?.length ? (
            <Block title="My role">
              <ul className="space-y-2">
                {project.role.map((item) => (
                  <li key={item} className="flex gap-3 text-text">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Block>
          ) : null}

          <div className="mt-6">
            <h4 className="text-sm font-semibold tracking-[0.14em] text-accent uppercase">Technologies</h4>
            <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies">
              {project.stack.map((tech) => (
                <li key={tech} className="rounded-full border border-line bg-chip px-3 py-1 text-xs font-semibold text-text">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <Workflow steps={project.workflow} />
          </div>

          {project.features?.length ? (
            <Block title="Key features">
              <ul className="space-y-2">
                {project.features.map((item) => (
                  <li key={item} className="flex gap-3 text-text">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Block>
          ) : null}

          {project.rules?.length ? (
            <section className="mt-6">
              <h4 className="text-sm font-semibold tracking-[0.14em] text-accent uppercase">Simplified rule examples</h4>
              <p className="mt-2 text-base leading-relaxed text-subtle">
                These are teaching examples only. Production rules are proprietary and are not listed here.
              </p>
              <ul className="mt-3 space-y-2">
                {project.rules.map((rule) => (
                  <li key={rule.title} className="rounded-xl border border-line bg-muted px-4 py-3">
                    <p className="text-sm font-semibold text-text">{rule.title}</p>
                    <p className="mt-1 font-mono text-sm text-subtle">{rule.text}</p>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {project.impact?.length ? (
            <Block title="Business value">
              <ul className="space-y-2">
                {project.impact.map((item) => (
                  <li key={item} className="flex gap-3 text-text">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Block>
          ) : null}

          {project.challenges?.length ? (
            <Block title="Challenges solved">
              <ul className="space-y-2">
                {project.challenges.map((item) => (
                  <li key={item} className="flex gap-3 text-text">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Block>
          ) : null}

          {project.note ? <p className="mt-6 text-base leading-relaxed text-subtle">{project.note}</p> : null}
        </div>
      </div>
    </div>
  );
}
