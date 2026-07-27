import Link from 'next/link';

export default function Button({ children, variant = 'primary', className = '', href, ...props }) {
  const baseClass = "inline-flex items-center justify-center px-lg py-md font-sans font-medium text-base tracking-widest uppercase transition-smooth border border-transparent";
  
  const variants = {
    primary: "bg-primary text-bg-light hover:bg-secondary hover:text-primary",
    secondary: "bg-transparent border-primary text-primary hover:bg-primary hover:text-bg-light",
    accent: "bg-secondary text-primary hover:bg-bg-light hover:text-primary"
  };

  const btnClass = `${baseClass} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <Link href={href} className={btnClass} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={btnClass} {...props}>
      {children}
    </button>
  );
}
