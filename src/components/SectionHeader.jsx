export default function SectionHeader({ eyebrow, title, description, align = 'center', dark = false }) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center';

  return (
    <div className={`${alignClass} mb-xl`}>
      {eyebrow && (
        <span
          className={`mb-md block font-sans uppercase tracking-[0.15em] text-[0.9rem] ${
            dark ? 'text-secondary' : 'text-secondary'
          }`}
        >
          {eyebrow}
        </span>
      )}

      {title && (
        <h2 className="font-serif text-[2.2rem] md:text-[3rem] text-inherit">
          {title}
        </h2>
      )}

      {description && (
        <p className="mx-auto mt-md max-w-3xl text-[1.05rem] leading-[1.8] opacity-80">
          {description}
        </p>
      )}
    </div>
  );
}
