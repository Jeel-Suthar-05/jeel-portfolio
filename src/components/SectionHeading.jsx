export default function SectionHeading({ eyebrow, title, description, id }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">{eyebrow}</p>
      <h2
        id={id}
        className="mt-3 font-display text-3xl font-semibold tracking-tight text-balance text-text sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-subtle">{description}</p>
      ) : null}
    </div>
  );
}
