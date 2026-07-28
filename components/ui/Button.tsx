import { type AnchorHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'onDark';

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
};

const base =
  'inline-flex min-h-[44px] items-center justify-center gap-2 rounded-control px-6 py-3 text-ui-label transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest';

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-forest text-cream hover:bg-forest-hover',
  // Outline style for the cream page background.
  secondary: 'border border-forest/30 text-forest hover:border-forest hover:bg-forest/5',
  ghost: 'text-forest underline-offset-4 hover:underline',
  // For buttons placed on a dark forest surface (product preview card,
  // closing band) — cream fill instead of forest fill.
  onDark: 'bg-cream text-forest hover:bg-white',
};

export function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
