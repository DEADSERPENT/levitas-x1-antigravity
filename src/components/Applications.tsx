'use client';

const applications = [
  {
    number: '01',
    title: 'Industrial Logistics',
    hook: 'Warehouse operations redefined.',
    points: [
      'Move heavy inventory with zero physical strain',
      'Eliminate forklift accidents and damage',
      'Stack and retrieve from any height safely',
      'Reduce worker compensation claims by 94%',
    ],
  },
  {
    number: '02',
    title: 'Scientific Research',
    hook: 'Microgravity experiments on Earth.',
    points: [
      'Simulate space conditions in any laboratory',
      'Study material behavior without gravity interference',
      'Enable new crystallography and fluid dynamics research',
      'Fraction of the cost of orbital experiments',
    ],
  },
  {
    number: '03',
    title: 'Film & Production',
    hook: 'Impossible shots made effortless.',
    points: [
      'Floating camera movements without rigging',
      'Practical levitation effects in-camera',
      'Rapid scene changes with heavy props',
      'Silent operation for live audio capture',
    ],
  },
  {
    number: '04',
    title: 'Precision Construction',
    hook: 'Place anything, anywhere, perfectly.',
    points: [
      'Position structural elements with millimeter accuracy',
      'Install glass and fragile materials safely',
      'Work in confined spaces without heavy equipment',
      'Reduce installation time by 60%',
    ],
  },
  {
    number: '05',
    title: 'Healthcare & Mobility',
    hook: 'Patient care transformed.',
    points: [
      'Effortless patient transfer and positioning',
      'Rehabilitation in reduced-gravity environments',
      'Eliminate caregiver back injuries',
      'Enable independence for mobility-impaired individuals',
    ],
  },
];

export default function Applications() {
  return (
    <section id="applications" className="section relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <span className="section-overline">
            <span className="text-[var(--text-muted)]">[</span>
            USE CASES
            <span className="text-[var(--text-muted)]">]</span>
          </span>
          <h2 className="section-title">
            Infinite <span className="text-gradient">Applications</span>
          </h2>
          <p className="section-subtitle">
            From industrial logistics to scientific research, Levitas X1 transforms how humanity interacts with mass.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, index) => (
            <div
              key={app.title}
              className={`card group ${index === 4 ? 'lg:col-span-1 md:col-span-2 lg:col-start-2' : ''}`}
            >
              <div className="relative z-10">
                <div className="font-[family-name:var(--font-orbitron)] text-4xl font-bold text-[var(--neon-cyan)]/20 mb-4">
                  {app.number}
                </div>
                <h3 className="font-[family-name:var(--font-orbitron)] text-xl font-semibold mb-2 text-[var(--text-primary)]">
                  {app.title}
                </h3>
                <p className="text-[var(--neon-cyan)] text-sm font-medium mb-4">
                  {app.hook}
                </p>
                <ul className="space-y-2">
                  {app.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <span className="text-[var(--neon-violet)] mt-1">◈</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
