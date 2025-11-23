'use client';

const specs = [
  { label: 'LIFT_CAPACITY', value: '250', unit: 'kg', note: '@ 9.8 m/s² Earth standard gravity' },
  { label: 'POWER_DURATION', value: '50', unit: 'years', note: 'Nuclear diamond betavoltaic cell' },
  { label: 'OPERATING_CEILING', value: '100', unit: 'ft', note: 'Civilian geo-lock enforced' },
  { label: 'FLUX_DENSITY', value: '14.7', unit: 'Tesla', note: 'Peak quantum field strength' },
  { label: 'RESPONSE_TIME', value: '0.1', unit: 'ms', note: 'Neural engine adjustment cycle' },
  { label: 'CORE_TEMPERATURE', value: '2.4', unit: 'K', note: 'Superconducting quantum state' },
  { label: 'CHASSIS_MATERIAL', value: 'Ti-6Al-4V', unit: '', note: 'Aerospace grade titanium alloy' },
  { label: 'PROTECTION_RATING', value: 'IP68', unit: '', note: 'Dust tight, submersible to 3m' },
  { label: 'UNIT_WEIGHT', value: '4.2', unit: 'kg', note: 'Including power cell' },
  { label: 'CONNECTIVITY', value: 'QUANTUM', unit: '', note: 'Voice, iOS, Android, API' },
];

export default function Specifications() {
  return (
    <section id="specs" className="section relative bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Specs */}
          <div>
            <div className="section-header text-left mb-8">
              <span className="section-overline">
                <span className="text-[var(--text-muted)]">[</span>
                TECHNICAL DATA
                <span className="text-[var(--text-muted)]">]</span>
              </span>
              <h2 className="section-title">
                System <span className="text-gradient">Specifications</span>
              </h2>
              <p className="section-subtitle mx-0">
                Every parameter engineered for optimal performance. Every component tested beyond failure thresholds.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="p-4 bg-[var(--bg-card)]/50 border border-[var(--border-glow)] rounded-lg hover:border-[var(--neon-cyan)]/50 transition-colors"
                >
                  <div className="text-xs font-mono text-[var(--neon-cyan)] tracking-wider mb-1">
                    {spec.label}
                  </div>
                  <div className="font-[family-name:var(--font-orbitron)] text-2xl font-bold text-[var(--text-primary)]">
                    {spec.value}
                    {spec.unit && (
                      <span className="text-sm text-[var(--neon-violet)] ml-1">{spec.unit}</span>
                    )}
                  </div>
                  <div className="text-xs text-[var(--text-muted)] mt-1">
                    {spec.note}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Blueprint */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Blueprint Background */}
              <div className="absolute inset-0 bg-[var(--bg-card)] rounded-lg border border-[var(--border-glow)] overflow-hidden">
                <div className="blueprint-grid" />
                <div className="scan-line" />
              </div>

              {/* Blueprint Device */}
              <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full p-8">
                {/* Outer ring */}
                <circle
                  cx="200"
                  cy="200"
                  r="150"
                  className="fill-none stroke-[var(--neon-cyan)] stroke-[0.5] opacity-60"
                  strokeDasharray="4 4"
                />
                {/* Middle ring */}
                <circle
                  cx="200"
                  cy="200"
                  r="110"
                  className="fill-none stroke-[var(--neon-cyan)] stroke-[1] opacity-80"
                />
                {/* Inner ring */}
                <circle
                  cx="200"
                  cy="200"
                  r="70"
                  className="fill-none stroke-[var(--neon-cyan)] stroke-[1.5]"
                />
                {/* Core */}
                <circle
                  cx="200"
                  cy="200"
                  r="30"
                  className="fill-[var(--neon-cyan)]/20 stroke-[var(--neon-cyan)] stroke-2"
                />
                {/* Cross lines */}
                <line x1="200" y1="20" x2="200" y2="80" className="stroke-[var(--neon-cyan)] stroke-[0.5] opacity-60" />
                <line x1="200" y1="320" x2="200" y2="380" className="stroke-[var(--neon-cyan)] stroke-[0.5] opacity-60" />
                <line x1="20" y1="200" x2="80" y2="200" className="stroke-[var(--neon-cyan)] stroke-[0.5] opacity-60" />
                <line x1="320" y1="200" x2="380" y2="200" className="stroke-[var(--neon-cyan)] stroke-[0.5] opacity-60" />
                {/* Diagonal lines */}
                <line x1="60" y1="60" x2="100" y2="100" className="stroke-[var(--neon-cyan)] stroke-[0.5] opacity-40" />
                <line x1="340" y1="60" x2="300" y2="100" className="stroke-[var(--neon-cyan)] stroke-[0.5] opacity-40" />
                <line x1="60" y1="340" x2="100" y2="300" className="stroke-[var(--neon-cyan)] stroke-[0.5] opacity-40" />
                <line x1="340" y1="340" x2="300" y2="300" className="stroke-[var(--neon-cyan)] stroke-[0.5] opacity-40" />
                {/* Markers */}
                <circle cx="200" cy="50" r="4" className="fill-[var(--neon-cyan)]" />
                <circle cx="200" cy="350" r="4" className="fill-[var(--neon-cyan)]" />
                <circle cx="50" cy="200" r="4" className="fill-[var(--neon-cyan)]" />
                <circle cx="350" cy="200" r="4" className="fill-[var(--neon-cyan)]" />
              </svg>

              {/* Blueprint Labels */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-[var(--bg-primary)]/80 border border-[var(--border-glow)] rounded text-xs font-mono">
                <span className="text-[var(--text-muted)]">FLUX_EMITTER: </span>
                <span className="text-[var(--success)]">ACTIVE</span>
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-[var(--bg-primary)]/80 border border-[var(--border-glow)] rounded text-xs font-mono">
                <span className="text-[var(--text-muted)]">RADIUS: </span>
                <span className="text-[var(--neon-cyan)]">2.4m</span>
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-[var(--bg-primary)]/80 border border-[var(--border-glow)] rounded text-xs font-mono">
                <span className="text-[var(--text-muted)]">POWER_CELL: </span>
                <span className="text-[var(--neon-violet)]">98.7%</span>
              </div>
              <div className="absolute left-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-[var(--bg-primary)]/80 border border-[var(--border-glow)] rounded text-xs font-mono">
                <span className="text-[var(--text-muted)]">STATUS: </span>
                <span className="text-[var(--success)]">NOMINAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
