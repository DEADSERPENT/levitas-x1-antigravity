import { Navbar, Footer } from '@/components';
import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';
import Link from 'next/link';

export const metadata = {
  title: 'Technology | Quantum Flux Pinning Explained | Levitas X1',
  description: 'Deep dive into the revolutionary quantum flux pinning technology that powers the Levitas X1 antigravity module.',
};

const techSections = [
  {
    id: 'quantum-flux',
    title: 'Quantum Flux Pinning',
    subtitle: 'The Science Behind Levitation',
    content: `At the heart of Levitas X1 lies a phenomenon first observed in high-temperature superconductors: quantum flux pinning. When a type-II superconductor is cooled below its critical temperature in the presence of a magnetic field, magnetic flux lines become "pinned" at defect sites within the crystal structure.

Our breakthrough was achieving this effect at macroscopic scales with unprecedented stability. The Levitas X1 uses a proprietary metamaterial superconductor that maintains quantum coherence at temperatures achievable through our integrated cooling system.

The result is a stable equilibrium point where gravitational forces are effectively cancelled. Unlike magnetic levitation (which requires continuous power to maintain repulsion), quantum flux pinning creates a self-sustaining lock that requires minimal energy to maintain.`,
    specs: [
      { label: 'Flux Density', value: '14.7 Tesla' },
      { label: 'Coherence Time', value: '> 10^6 seconds' },
      { label: 'Pinning Sites', value: '10^12 per cm³' },
    ],
  },
  {
    id: 'nuclear-diamond',
    title: 'Nuclear Diamond Battery',
    subtitle: '50-Year Power Without Charging',
    content: `The Levitas X1 is powered by a revolutionary betavoltaic cell that converts radioactive decay directly into electricity. Our nuclear diamond battery uses carbon-14, a mildly radioactive isotope with a half-life of 5,730 years, encased in a diamond semiconductor.

As the carbon-14 decays, it emits beta particles (electrons) that are captured by the diamond lattice and converted to electrical current. The diamond shell also serves as both a radiation shield and semiconductor, making the battery completely safe for consumer use.

With a power output of 15μW continuous, the battery provides more than enough energy for the flux field generation and control systems. The 50-year operational lifespan means your Levitas X1 will outlast most other technology you own.`,
    specs: [
      { label: 'Power Output', value: '15 μW continuous' },
      { label: 'Half-Life', value: '5,730 years' },
      { label: 'Operational Life', value: '50+ years' },
    ],
  },
  {
    id: 'neural-engine',
    title: 'Neural Engine',
    subtitle: 'Real-Time Quantum-Classical Processing',
    content: `Maintaining a stable flux field requires continuous adjustment of thousands of parameters in response to environmental changes. The Levitas X1 Neural Engine is a hybrid quantum-classical processor designed specifically for this task.

The classical portion handles sensor fusion from 127 independent sensors monitoring temperature, magnetic field strength, position, acceleration, and atmospheric conditions. The quantum portion performs optimization calculations that would take classical computers milliseconds—but completes them in microseconds.

This allows the system to adjust flux field parameters 10,000 times per second, resulting in imperceptible corrections and rock-solid stability. Users report that levitated objects feel as if they're resting on an invisible shelf.`,
    specs: [
      { label: 'Adjustment Rate', value: '10,000 Hz' },
      { label: 'Sensor Count', value: '127 independent' },
      { label: 'Latency', value: '< 100 μs' },
    ],
  },
  {
    id: 'safety-systems',
    title: 'Triple-Redundant Safety',
    subtitle: 'Fail-Safe by Design',
    content: `Safety isn't a feature we added to the Levitas X1—it's the foundation upon which everything else is built. Our triple-redundant architecture ensures that no single point of failure can result in uncontrolled descent.

Three independent control circuits continuously monitor flux stability. If any circuit detects an anomaly, it can independently trigger safe mode. The graviton dampening system operates on separate physical principles from the main flux field, providing an additional layer of protection.

In the unlikely event of complete system failure, the auto-descent protocol ensures any levitated object returns to ground at less than 2 m/s—slower than walking speed. This system has been tested over 50,000 times with zero failures.`,
    specs: [
      { label: 'Redundancy Level', value: 'Triple (3x)' },
      { label: 'Max Descent Speed', value: '< 2 m/s' },
      { label: 'Failure Tests', value: '50,000+' },
    ],
  },
  {
    id: 'materials',
    title: 'Advanced Materials',
    subtitle: 'Aerospace-Grade Construction',
    content: `The Levitas X1 chassis is machined from Ti-6Al-4V, the same titanium alloy used in aircraft frames, jet engines, and spacecraft. This grade 5 titanium offers an exceptional strength-to-weight ratio, corrosion resistance, and thermal stability.

Internal components are mounted on a carbon fiber composite frame that provides vibration damping and additional structural integrity. The superconductor core is housed in a cryogenic vessel with multi-layer insulation achieving R-values exceeding 1000.

Every Levitas X1 undergoes 72 hours of environmental stress testing, including thermal cycling from -40°C to +85°C, vibration testing to military specifications, and salt spray exposure for corrosion resistance verification.`,
    specs: [
      { label: 'Chassis Material', value: 'Ti-6Al-4V Grade 5' },
      { label: 'Unit Weight', value: '4.2 kg' },
      { label: 'IP Rating', value: 'IP68' },
    ],
  },
];

export default function TechnologyPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <PageHeader
        overline="Deep Dive"
        title="The Science of"
        titleAccent="Antigravity"
        subtitle="Understanding the revolutionary quantum flux pinning technology that makes the Levitas X1 possible. This isn't science fiction—it's physics, engineered for the real world."
        backgroundGlow="cyan"
      />

      {/* Tech Navigation */}
      <ContentSection>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {techSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="px-4 py-2 bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-lg text-sm font-mono text-[var(--text-secondary)] hover:text-[var(--neon-cyan)] hover:border-[var(--neon-cyan)] transition-colors"
            >
              {section.title}
            </a>
          ))}
        </div>
      </ContentSection>

      {/* Tech Sections */}
      {techSections.map((section, index) => (
        <ContentSection key={section.id} background={index % 2 === 1 ? 'secondary' : 'primary'}>
          <div id={section.id} className="scroll-mt-24">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <span className="text-[var(--neon-violet)] font-mono text-sm tracking-wider">
                  SECTION 0{index + 1}
                </span>
                <h2 className="font-['Orbitron',system-ui,sans-serif] text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mt-2 mb-2">
                  {section.title}
                </h2>
                <p className="text-[var(--neon-cyan)] text-lg mb-6">{section.subtitle}</p>
                <div className="prose prose-invert max-w-none">
                  {section.content.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-[var(--text-secondary)] leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <div className="sticky top-24">
                  <div className="bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-lg p-6">
                    <h3 className="font-mono text-sm text-[var(--neon-cyan)] mb-4">KEY SPECIFICATIONS</h3>
                    <div className="space-y-4">
                      {section.specs.map((spec) => (
                        <div key={spec.label} className="flex justify-between items-center py-2 border-b border-[var(--border-glow)]">
                          <span className="text-[var(--text-muted)] text-sm">{spec.label}</span>
                          <span className="font-['Orbitron',system-ui,sans-serif] font-semibold text-[var(--text-primary)]">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContentSection>
      ))}

      {/* Research Papers Section */}
      <ContentSection background="secondary">
        <div className="section-header">
          <span className="section-overline">[PUBLICATIONS]</span>
          <h2 className="section-title">Research & Papers</h2>
          <p className="section-subtitle">Our technology is built on peer-reviewed science. Explore the academic foundations.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: 'Macroscopic Quantum Flux Pinning in Metamaterial Superconductors', journal: 'Nature Physics', year: '2021' },
            { title: 'Diamond Betavoltaic Cells for Long-Duration Power Applications', journal: 'Science', year: '2022' },
            { title: 'Neural-Quantum Hybrid Processing for Real-Time Field Optimization', journal: 'Physical Review Letters', year: '2023' },
            { title: 'Safety Analysis of Consumer-Grade Antigravity Devices', journal: 'IEEE Transactions', year: '2024' },
          ].map((paper, index) => (
            <div key={index} className="card group cursor-pointer">
              <div className="text-[var(--neon-violet)] font-mono text-xs mb-2">{paper.journal} • {paper.year}</div>
              <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--neon-cyan)] transition-colors">
                {paper.title}
              </h3>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* CTA */}
      <ContentSection>
        <div className="text-center">
          <h2 className="section-title text-3xl mb-4">Ready to Experience It?</h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-2xl mx-auto">
            The best way to understand the technology is to see it in action. Reserve your Levitas X1 today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products/civilian" className="btn btn-primary">View Products</Link>
            <Link href="/pricing" className="btn btn-secondary">See Pricing</Link>
          </div>
        </div>
      </ContentSection>

      <Footer />
    </main>
  );
}
