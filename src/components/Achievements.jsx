import { Bug, HeartPulse, Layers, Receipt, Server, Workflow } from "lucide-react";
import { achievements } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const icons = {
  layers: Layers,
  pulse: HeartPulse,
  workflow: Workflow,
  receipt: Receipt,
  server: Server,
  bug: Bug,
};

export default function Achievements() {
  return (
    <section id="achievements" className="border-t border-line bg-muted/60 py-20 sm:py-24" aria-labelledby="achievements-heading">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            id="achievements-heading"
            eyebrow="Highlights"
            title="What I can take ownership of."
            description="No invented percentages, revenue figures, or user counts. These are the kinds of problems the work actually covers."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.title}>
                <article className="flex h-full gap-4 rounded-2xl border border-line bg-elevated p-6">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-soft text-accent">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-text">{item.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-subtle">{item.text}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
