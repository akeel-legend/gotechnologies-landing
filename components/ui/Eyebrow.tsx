type EyebrowProps = {
  children: React.ReactNode;
  tone?: 'gold' | 'muted' | 'onDark';
  className?: string;
};

const toneClass: Record<NonNullable<EyebrowProps['tone']>, string> = {
  gold: 'text-gold',
  muted: 'text-stone/60',
  onDark: 'text-white/50',
};

// Small uppercase monospace label, used before select section titles —
// a deliberate "editorial" signature mark for the corporate site (see
// docs/design-direction.md, "Pivot to warm editorial").
export function Eyebrow({ children, tone = 'gold', className = '' }: EyebrowProps) {
  return (
    <p className={`font-mono uppercase text-eyebrow ${toneClass[tone]} ${className}`}>
      {children}
    </p>
  );
}
