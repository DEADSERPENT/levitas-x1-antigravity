'use client';

interface PageHeaderProps {
  overline: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  backgroundGlow?: 'cyan' | 'violet' | 'blue';
}

export default function PageHeader({
  overline,
  title,
  titleAccent,
  subtitle,
  backgroundGlow = 'cyan',
}: PageHeaderProps) {
  const glowColors = {
    cyan: 'var(--neon-cyan)',
    violet: 'var(--neon-violet)',
    blue: 'var(--neon-blue)',
  };

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-primary)]" />
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-1/3 left-1/3 w-[600px] h-[600px] rounded-full filter blur-[200px] animate-[glow-pulse_6s_ease-in-out_infinite]"
          style={{ background: glowColors[backgroundGlow] }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--bg-card)]/50 border border-[var(--border-glow)] rounded-full mb-6">
          <span className="text-xs font-mono text-[var(--neon-cyan)] tracking-wider uppercase">
            {overline}
          </span>
        </div>

        <h1 className="font-['Orbitron',system-ui,sans-serif] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          <span className="text-[var(--text-primary)]">{title}</span>
          {titleAccent && (
            <>
              {' '}
              <span className="text-gradient">{titleAccent}</span>
            </>
          )}
        </h1>

        <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
