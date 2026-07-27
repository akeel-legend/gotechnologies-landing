import { type AnchorHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
};

const base =
  'inline-flex min-h-[44px] items-center justify-center gap-2 rounded-control px-6 py-3 text-ui-label transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal';

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-teal text-white hover:bg-teal-hover',
  secondary:
    'bg-white text-ink border border-mist hover:border-teal hover:text-teal',
  ghost: 'text-white/90 hover:text-white underline-offset-4 hover:underline',
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
