type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = 'left',
  tone = 'light',
}: SectionHeadingProps) {
  const isCenter = align === 'center';
  const isDark = tone === 'dark';

  return (
    <div className={`max-w-2xl ${isCenter ? 'mx-auto text-center' : ''}`}>
      {eyebrow ? (
        <p
          className={`text-ui-label uppercase tracking-wide ${
            isDark ? 'text-gold' : 'text-teal'
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-2 text-section-title ${
          isDark ? 'text-white' : 'text-midnight'
        }`}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={`mt-4 text-body leading-relaxed ${
            isDark ? 'text-white/75' : 'text-ink/75'
          }`}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
