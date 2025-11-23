'use client';

const safetyFeatures = [
  {
    number: '01',
    title: 'Triple Redundant Systems',
    description: 'Three independent control circuits monitor flux stability. Any single failure triggers automatic safe mode with controlled descent.',
  },
  {
    number: '02',
    title: 'Geo-Fenced Operation',
    description: 'Built-in GPS limits civilian units to 100ft altitude and prevents operation in restricted airspace, near airports, or government facilities.',
  },
  {
    number: '03',
    title: 'Auto-Descent Protocol',
    description: 'Graviton dampening ensures any object returns to ground at safe terminal velocity (< 2 m/s) regardless of circumstances.',
  },
  {
    number: '04',
    title: 'Certified Training Required',
    description: 'All operators must complete 8-hour certification program before unit activation. Online and in-person options available.',
  },
  {
    number: '05',
    title: 'Regulatory Compliance',
    description: 'Fully compliant with FAA Part 107, EU Regulation 2019/947, and pending IATA special cargo guidelines. License included with purchase.',
  },
];

export default function Safety() {
  return (
    <section id="safety" className="section relative bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <div className="section-header text-left mb-8">
              <span className="section-overline">
                <span className="text-[var(--text-muted)]">[</span>
                SAFETY PROTOCOLS
                <span className="text-[var(--text-muted)]">]</span>
              </span>
              <h2 className="section-title">
                Engineered for <span className="text-gradient">Safety</span>
              </h2>
              <p className="section-subtitle mx-0">
                Revolutionary technology demands revolutionary safety standards. Levitas X1 exceeds them all.
              </p>
            </div>

            <div className="space-y-6">
              {safetyFeatures.map((feature) => (
                <div key={feature.number} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[var(--bg-card)] border border-[var(--border-glow)] flex items-center justify-center font-[family-name:var(--font-orbitron)] text-sm font-bold text-[var(--neon-cyan)] group-hover:border-[var(--neon-cyan)] transition-colors">
                    {feature.number}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)] mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Badge */}
          <div className="flex items-center justify-center">
            <div className="relative w-64 h-64">
              {/* Outer ring */}
              <div className="absolute inset-0 border-2 border-[var(--neon-cyan)]/30 rounded-full animate-[ring-rotate_20s_linear_infinite]" />
              <div className="absolute inset-4 border border-[var(--neon-violet)]/20 rounded-full animate-[ring-rotate_15s_linear_infinite_reverse]" />
              <div className="absolute inset-8 border border-[var(--neon-cyan)]/40 rounded-full animate-[ring-rotate_10s_linear_infinite]" />

              {/* Center badge */}
              <div className="absolute inset-12 bg-[var(--bg-card)] rounded-full border border-[var(--neon-cyan)] flex flex-col items-center justify-center text-center shadow-[0_0_40px_var(--glow-cyan)]">
                <div className="text-4xl text-[var(--neon-cyan)] mb-2">◈</div>
                <div className="font-[family-name:var(--font-orbitron)] text-sm font-bold text-[var(--text-primary)] tracking-wider">
                  CERTIFIED
                </div>
                <div className="font-[family-name:var(--font-orbitron)] text-sm font-bold text-[var(--neon-cyan)] tracking-wider">
                  SAFE
                </div>
                <div className="text-xs text-[var(--text-muted)] mt-2">
                  ISO 9001:2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
