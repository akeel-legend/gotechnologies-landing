import { Eyebrow } from './Eyebrow';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: 'left' | 'center';
  /** Set true only when this heading sits on a dark forest band, not the cream page background. */
  onDark?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = 'left',
  onDark = false,
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div className={`max-w-2xl ${isCenter ? 'mx-auto text-center' : ''}`}>
      {eyebrow ? (
        <Eyebrow tone={onDark ? 'onDark' : 'gold'} className={isCenter ? 'text-center' : ''}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2
        className={`mt-3 font-serif text-section-title ${onDark ? 'text-cream' : 'text-ink'}`}
      >
        {title}
      </h2>
      {body ? (
        <p className={`mt-4 text-body leading-relaxed ${onDark ? 'text-cream/70' : 'text-stone'}`}>
          {body}
        </p>
      ) : null}
    </div>
  );
}
