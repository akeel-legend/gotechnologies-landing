type EyebrowProps = {
  children: React.ReactNode;
  tone?: 'teal' | 'gold' | 'muted';
  className?: string;
};

const toneClass: Record<NonNullable<EyebrowProps['tone']>, string> = {
  teal: 'text-teal',
  gold: 'text-gold',
  muted: 'text-white/50',
};

// Small monospace label + ring bullet, used before every section title.
// A deliberate "editorial/technical" signature mark for the corporate
// site (see brand guide v1.1, "Corporate digital direction").
export function Eyebrow({ children, tone = 'teal', className = '' }: EyebrowProps) {
  return (
    <p className={`flex items-center gap-2 font-mono text-eyebrow ${toneClass[tone]} ${className}`}>
      <span className="h-[7px] w-[7px] shrink-0 rounded-full border border-current" aria-hidden="true" />
      {children}
    </p>
  );
}
