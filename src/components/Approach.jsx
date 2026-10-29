import { approach } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Approach() {
  return (
    <section id="approach" className="border-t border-line py-20 sm:py-24" aria-labelledby="approach-heading">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            id="approach-heading"
            eyebrow="Approach"
            title="How I build automation."
            description="The code sits on top of the business process. I start with how the work is done by hand, then design the flow, the rules, and the checks."
          />
        </Reveal>
        <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {approach.map((step, index) => (
            <li key={step} className="flex items-center gap-3 rounded-2xl border border-line bg-elevated px-4 py-3">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-soft text-sm font-semibold text-accent">
                {index + 1}
              </span>
              <span className="font-medium text-text">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
