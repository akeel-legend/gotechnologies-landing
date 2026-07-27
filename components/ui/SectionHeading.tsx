import { Eyebrow } from './Eyebrow';

type SectionHeadingProps = {
  eyebrow?: string;
  eyebrowTone?: 'teal' | 'gold' | 'muted';
  title: string;
  body?: string;
  align?: 'left' | 'center';
  /** Set true only when this heading sits on a light accent card, not the dark page background. */
  onLight?: boolean;
};

export function SectionHeading({
  eyebrow,
  eyebrowTone = 'teal',
  title,
  body,
  align = 'left',
  onLight = false,
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div className={`max-w-2xl ${isCenter ? 'mx-auto text-center' : ''}`}>
      {eyebrow ? (
        <Eyebrow tone={eyebrowTone} className={isCenter ? 'justify-center' : ''}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2
        className={`mt-3 text-section-title ${onLight ? 'text-midnight' : 'text-white'}`}
      >
        {title}
      </h2>
      {body ? (
        <p className={`mt-4 text-body leading-relaxed ${onLight ? 'text-ink/75' : 'text-white/65'}`}>
          {body}
        </p>
      ) : null}
    </div>
  );
}
