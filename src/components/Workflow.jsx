export default function Workflow({ steps, label = "Workflow" }) {
  if (!steps?.length) return null;

  return (
    <div>
      <h4 className="text-sm font-semibold tracking-[0.14em] text-accent uppercase">{label}</h4>
      <ol className="mt-3 flex flex-col gap-2">
        {steps.map((step, index) => (
          <li key={step} className="flex items-start gap-3 text-base leading-relaxed text-text">
            <span className="mt-0.5 grid h-6 min-w-6 place-items-center rounded-full bg-soft px-1 text-xs font-semibold text-accent">
              {index + 1}
            </span>
            <span className="pt-0.5">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
