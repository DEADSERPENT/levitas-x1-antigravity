'use client';

interface PageHeroProps {
  overline?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  accentColor?: 'cyan' | 'violet' | 'green' | 'blue' | 'magenta';
  children?: React.ReactNode;
}

const accentColors = {
  cyan: 'var(--neon-cyan)',
  violet: 'var(--neon-violet)',
  green: 'var(--neon-green)',
  blue: 'var(--neon-blue)',
  magenta: 'var(--neon-magenta)',
};

export default function PageHero({
  overline,
  title,
  titleHighlight,
  description,
  accentColor = 'cyan',
  children,
}: PageHeroProps) {
  const color = accentColors[accentColor];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `linear-gradient(to bottom, ${color}, transparent)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Overline */}
          {overline && (
            <div
              className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--bg-card)]/50 border border-[var(--border-glow)] rounded-full mb-6 animate-fade-in"
            >
              <span
                className="text-xs font-mono tracking-wider"
                style={{ color }}
              >
                {overline}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            <span className="text-[var(--text-primary)]">{title} </span>
            {titleHighlight && (
              <span className="text-gradient">{titleHighlight}</span>
            )}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-lg text-[var(--text-secondary)] animate-slide-up animation-delay-200">
              {description}
            </p>
          )}

          {/* Custom Children */}
          {children && (
            <div className="mt-8 animate-slide-up animation-delay-300">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
