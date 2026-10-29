import { careerStory } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function CareerStory() {
  return (
    <section className="border-t border-line py-20 sm:py-24" aria-labelledby="story-heading">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            id="story-heading"
            eyebrow="Career story"
            title="From Python scripts to payment-posting automation."
            description="The dated jobs are in Experience. This is the through-line of the work: data and backend first, then healthcare operations, rules, posting, and APIs."
          />
        </Reveal>
        <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {careerStory.map((step, index) => (
            <li key={step}>
              <Reveal delay={(index % 4) * 0.04}>
                <article className="h-full rounded-2xl border border-line bg-elevated p-4">
                  <p className="font-display text-sm font-semibold text-accent">{String(index + 1).padStart(2, "0")}</p>
                  <p className="mt-2 font-medium leading-snug text-text">{step}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
