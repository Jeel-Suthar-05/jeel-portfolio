import { useCallback, useState } from "react";
import { moreWork, projectFilters, projects } from "../data/portfolio";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import Reveal from "./Reveal";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [activeId, setActiveId] = useState(null);
  const visible = projects.filter((project) => filter === "All" || project.filters.includes(filter));
  const active = projects.find((project) => project.id === activeId) ?? null;
  const close = useCallback(() => setActiveId(null), []);

  return (
    <section id="projects" className="border-t border-white/10 py-20 sm:py-24" aria-labelledby="projects-heading">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.16em] text-accent">// {String(projects.length).padStart(2, "0")}_SELECTED_BUILDS</p>
          <h2 id="projects-heading" className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            FEATURED_PROJECTS
          </h2>
          <p className="mt-4 max-w-3xl text-base text-subtle">
            Healthcare automation I can walk through: EOB PDF scraping, payment-posting rules, portal workflows, and the data jobs behind them. No patient data and no production rules on this page.
          </p>
        </Reveal>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-1" role="toolbar" aria-label="Filter projects">
          {projectFilters.map((item) => {
            const selected = filter === item;
            return (
              <button
                key={item}
                type="button"
                aria-pressed={selected}
                onClick={() => setFilter(item)}
                className={`shrink-0 rounded border px-3 py-1.5 font-mono text-sm tracking-[0.12em] uppercase ${
                  selected ? "border-accent bg-accent text-white" : "border-white/10 text-subtle hover:text-white"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {visible.map((project) => (
            <Reveal key={project.id} className={project.id === "eob-data-scraping" && filter === "All" ? "md:col-span-2" : ""}>
              <ProjectCard
                project={project}
                wide={project.id === "eob-data-scraping" || project.id === "payment-posting-rules-engine"}
                onOpen={() => setActiveId(project.id)}
              />
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <p className="font-mono text-sm tracking-[0.16em] text-accent">ALSO_SHIPPED</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {moreWork.map((item) => (
              <li key={item.title} className="hover-card rounded-xl border border-white/10 bg-elevated px-4 py-4">
                <h3 className="font-display text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-subtle">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {active ? <ProjectModal project={active} onClose={close} /> : null}
    </section>
  );
}
