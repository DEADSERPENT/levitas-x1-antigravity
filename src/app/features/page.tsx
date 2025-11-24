'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const mainFeatures = [
  {
    title: 'Quantum Flux Pinning',
    description: 'Revolutionary quantum locking technology enables stable levitation at any height. Our proprietary flux pinning array maintains position without continuous power consumption.',
    icon: '⚛️',
    stats: [
      { label: 'Stability', value: '99.99%' },
      { label: 'Lock Time', value: '<0.1s' },
    ],
  },
  {
    title: 'Zero-Point Energy Harvesting',
    description: 'Harness ambient quantum fluctuations for continuous power. Our ZPE module extracts energy from vacuum fluctuations, enabling infinite runtime.',
    icon: '♾️',
    stats: [
      { label: 'Runtime', value: 'Infinite' },
      { label: 'Efficiency', value: '98.7%' },
    ],
  },
  {
    title: 'Neural Interface Control',
    description: 'Optional neural headband enables thought-based control of levitation parameters. Move objects with your mind through our BCI technology.',
    icon: '🧠',
    stats: [
      { label: 'Response', value: '50ms' },
      { label: 'Accuracy', value: '99.5%' },
    ],
  },
  {
    title: 'Gravitational Field Shaping',
    description: 'Precisely shape the anti-gravity field for custom lift profiles. Create stable platforms, rotating fields, or complex multi-object configurations.',
    icon: '🌀',
    stats: [
      { label: 'Resolution', value: '1mm' },
      { label: 'Range', value: '10m' },
    ],
  },
];

const technicalSpecs = [
  { category: 'Lift Capacity', specs: ['Standard: 250 kg', 'Pro: 500 kg', 'Enterprise: 2,000 kg'] },
  { category: 'Operating Temp', specs: ['Core: 2.4K (-270.75°C)', 'External: -40°C to 60°C', 'Auto-regulation'] },
  { category: 'Field Range', specs: ['Effective: 5m radius', 'Max extension: 10m', 'Precision: ±1mm'] },
  { category: 'Power System', specs: ['ZPE: Unlimited runtime', 'Backup: 72hr battery', 'Fast charge: 2hr'] },
  { category: 'Connectivity', specs: ['WiFi 6E', 'Bluetooth 5.3', 'LoRa mesh network'] },
  { category: 'Safety', specs: ['Triple redundancy', 'Auto soft-landing', 'Geofencing'] },
];

const useCases = [
  { title: 'Industrial Automation', icon: '🏭', description: 'Heavy lifting, precision positioning, vibration isolation' },
  { title: 'Medical & Healthcare', icon: '🏥', description: 'Patient transport, surgical assistance, rehabilitation' },
  { title: 'Entertainment', icon: '🎬', description: 'Stage effects, theme parks, immersive experiences' },
  { title: 'Research & Science', icon: '🔬', description: 'Microgravity simulation, isolation experiments' },
  { title: 'Architecture', icon: '🏛️', description: 'Floating structures, dynamic spaces, art installations' },
  { title: 'Transportation', icon: '🚀', description: 'Cargo handling, passenger systems, last-mile delivery' },
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--neon-cyan)]/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--bg-card)]/50 border border-[var(--border-glow)] rounded-full mb-6 animate-fade-in">
              <span className="text-xs font-mono text-[var(--neon-cyan)] tracking-wider">
                CAPABILITIES
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
              <span className="text-[var(--text-primary)]">Redefining </span>
              <span className="text-gradient">Possible</span>
            </h1>
            <p className="text-lg text-[var(--text-secondary)] animate-slide-up animation-delay-200">
              Explore the groundbreaking features that make the Levitas X1 the most
              advanced anti-gravity system ever created.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className="card group grid md:grid-cols-[auto_1fr_auto] gap-8 items-center transition-all duration-500 hover:scale-[1.01]"
              >
                <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-[var(--neon-cyan)]/20 to-[var(--neon-violet)]/20 rounded-2xl text-4xl">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--neon-cyan)] transition-colors duration-300 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="flex gap-6">
                  {feature.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="font-display text-2xl font-bold text-gradient">
                        {stat.value}
                      </div>
                      <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Technical Specifications
            </h2>
            <p className="text-[var(--text-secondary)]">
              Built for performance, engineered for reliability.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="card transition-all duration-500 hover:scale-[1.02]">
                <h3 className="font-display text-lg font-semibold text-[var(--neon-cyan)] mb-4">
                  {spec.category}
                </h3>
                <ul className="space-y-2">
                  {spec.specs.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                      <span className="w-1.5 h-1.5 bg-[var(--neon-cyan)] rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Endless Applications
            </h2>
            <p className="text-[var(--text-secondary)]">
              From industry to imagination, the possibilities are limitless.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="card text-center py-10 transition-all duration-500 hover:scale-[1.05]"
              >
                <div className="text-5xl mb-4">{useCase.icon}</div>
                <h3 className="font-display text-xl font-semibold text-[var(--text-primary)] mb-2">
                  {useCase.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-transparent to-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-6">
            Experience the Future
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            Ready to defy gravity? See the Levitas X1 in action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="btn btn-primary transition-all duration-500">
              View Pricing
            </Link>
            <Link href="/technology" className="btn btn-secondary transition-all duration-500">
              Learn the Science
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
