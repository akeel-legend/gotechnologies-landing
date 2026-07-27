'use client';

import { useEffect, useRef, useState, type HTMLAttributes, type ReactNode } from 'react';

/**
 * Wraps decorative content (glow blobs, illustrations) and drifts it
 * vertically as the page scrolls, based on the element's distance from
 * the viewport centre. Keep `speed` small (0.05-0.2) -- this is meant to
 * add quiet depth, not a scroll-jacked "wow" effect. Disabled entirely
 * for prefers-reduced-motion.
 */
type ParallaxLayerProps = {
  speed?: number;
  className?: string;
  children: ReactNode;
} & Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'children' | 'style'>;

export function ParallaxLayer({
  speed = 0.12,
  className = '',
  children,
  ...rest
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ticking = false;

    function measure() {
      const el = ref.current;
      if (!el) {
        ticking = false;
        return;
      }
      const rect = el.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      setOffset((viewportCenter - elementCenter) * speed);
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(measure);
      }
    }

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [speed]);

  return (
    <div
      {...rest}
      ref={ref}
      className={className}
      style={{ transform: `translate3d(0, ${offset}px, 0)`, willChange: 'transform' }}
    >
      {children}
    </div>
  );
}
