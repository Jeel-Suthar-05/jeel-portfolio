import { moreWork } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function MoreWork() {
  return (
    <section id="more-work" className="border-t border-line py-20 sm:py-24" aria-labelledby="more-work-heading">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            id="more-work-heading"
            eyebrow="Also"
            title="More automation work."
            description="Smaller pieces of the same job: files, ledgers, executables, rules, SQL, and Azure. No internal documents or production details."
          />
        </Reveal>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {moreWork.map((item) => (
            <li key={item.title}>
              <article className="h-full rounded-2xl border border-line bg-elevated p-5">
                <h3 className="font-display text-lg font-semibold text-text">{item.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-subtle">{item.text}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
