import Button from './Button';

export default function CtaSection({
  title = 'Ready to transform your space?',
  buttonLabel = 'Start Your Project',
  href = '/contact',
  dark = false,
}) {
  return (
    <section className={`${dark ? 'bg-primary text-bg-light' : 'bg-secondary text-primary'} py-xl md:py-[8rem]`}>
      <div className="container-custom text-center">
        <h2 className={`mb-[2rem] font-serif text-[clamp(2.5rem,5vw,4rem)] ${dark ? 'text-bg-light' : 'text-primary'}`}>
          {title}
        </h2>

        <Button
          variant={dark ? 'accent' : 'primary'}
          href={href}
          className={dark ? 'bg-secondary text-primary hover:bg-bg-light hover:text-primary' : 'bg-primary text-bg-light hover:bg-bg-light hover:text-primary'}
        >
          {buttonLabel}
        </Button>
      </div>
    </section>
  );
}
