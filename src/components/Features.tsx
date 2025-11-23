'use client';

const features = [
  {
    label: 'INERTIA_NULLIFICATION',
    title: 'Zero Inertia',
    description: 'Effortlessly manipulate objects up to 250kg with fingertip precision. Our quantum flux field completely neutralizes gravitational and inertial forces.',
    icon: (
      <svg viewBox="0 0 64 64" className="w-full h-full">
        <circle cx="32" cy="32" r="28" className="fill-none stroke-[var(--neon-cyan)] stroke-[1.5]" />
        <circle cx="32" cy="32" r="8" className="fill-[var(--neon-cyan)]" />
        <path d="M32 4 L32 16 M32 48 L32 60 M4 32 L16 32 M48 32 L60 32" className="fill-none stroke-[var(--neon-cyan)] stroke-[1.5]" />
      </svg>
    ),
  },
  {
    label: 'POWER_SYSTEM',
    title: 'Nuclear Diamond Cell',
    description: '50-year betavoltaic power cell using carbon-14 diamond semiconductors. Zero charging. Zero maintenance. Perpetual operation within your lifetime.',
    icon: (
      <svg viewBox="0 0 64 64" className="w-full h-full">
        <polygon points="32,4 58,24 48,58 16,58 6,24" className="fill-none stroke-[var(--neon-cyan)] stroke-[1.5]" />
        <circle cx="32" cy="32" r="10" className="fill-[var(--neon-cyan)]" />
      </svg>
    ),
  },
  {
    label: 'SAFETY_PROTOCOL',
    title: 'Auto-Descent',
    description: 'Graviton dampening system ensures controlled descent in any failure scenario. Triple-redundant sensors prevent uncontrolled drops. Always land safely.',
    icon: (
      <svg viewBox="0 0 64 64" className="w-full h-full">
        <path d="M32 8 L32 48" className="fill-none stroke-[var(--neon-cyan)] stroke-[1.5]" />
        <path d="M20 40 L32 52 L44 40" className="fill-none stroke-[var(--neon-cyan)] stroke-[1.5]" />
        <circle cx="32" cy="56" r="4" className="fill-[var(--neon-cyan)]" />
      </svg>
    ),
  },
  {
    label: 'COMPUTE_CORE',
    title: 'Neural Engine',
    description: 'Quantum-classical hybrid processor adjusts flux field parameters 10,000 times per second. Real-time environmental adaptation. Imperceptible corrections.',
    icon: (
      <svg viewBox="0 0 64 64" className="w-full h-full">
        <circle cx="32" cy="32" r="24" className="fill-none stroke-[var(--neon-cyan)] stroke-[1.5]" />
        <path d="M20 32 Q26 20 32 32 Q38 44 44 32" className="fill-none stroke-[var(--neon-cyan)] stroke-[1.5]" />
        <circle cx="20" cy="32" r="4" className="fill-[var(--neon-cyan)]" />
        <circle cx="44" cy="32" r="4" className="fill-[var(--neon-cyan)]" />
      </svg>
    ),
  },
  {
    label: 'ENV_IMPACT',
    title: 'Zero Emission',
    description: 'Silent operation. No combustion. No exhaust. No electromagnetic interference beyond 2 meters. The cleanest propulsion system ever created.',
    icon: (
      <svg viewBox="0 0 64 64" className="w-full h-full">
        <circle cx="32" cy="32" r="20" className="fill-none stroke-[var(--neon-cyan)] stroke-[1.5]" />
        <circle cx="32" cy="32" r="12" className="fill-none stroke-[var(--neon-cyan)] stroke-[1.5]" />
        <circle cx="32" cy="32" r="4" className="fill-[var(--neon-cyan)]" />
      </svg>
    ),
  },
  {
    label: 'CHASSIS_SPEC',
    title: 'Compact Form',
    description: 'Aerospace-grade Ti-6Al-4V titanium chassis. 4.2kg total weight. Ergonomic grip surfaces. Fits standard equipment mounts. Built to military specifications.',
    icon: (
      <svg viewBox="0 0 64 64" className="w-full h-full">
        <rect x="16" y="16" width="32" height="32" rx="4" className="fill-none stroke-[var(--neon-cyan)] stroke-[1.5]" />
        <rect x="24" y="24" width="16" height="16" rx="2" className="fill-[var(--neon-cyan)]" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="technology" className="section relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <span className="section-overline">
            <span className="text-[var(--text-muted)]">[</span>
            CORE TECHNOLOGY
            <span className="text-[var(--text-muted)]">]</span>
          </span>
          <h2 className="section-title">
            Engineering the <span className="text-gradient">Impossible</span>
          </h2>
          <p className="section-subtitle">
            Six breakthrough technologies converge to create the first practical antigravity system for civilian use.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 mb-4 text-[var(--neon-cyan)] transition-transform group-hover:scale-110">
                  {feature.icon}
                </div>
                <div className="text-xs font-mono text-[var(--neon-violet)] tracking-wider mb-2">
                  {feature.label}
                </div>
                <h3 className="font-[family-name:var(--font-orbitron)] text-xl font-semibold mb-3 text-[var(--text-primary)]">
                  {feature.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-[var(--border-glow)] opacity-50" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-[var(--border-glow)] opacity-50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
