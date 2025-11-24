'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const designPrinciples = [
  {
    title: 'Form Follows Function',
    description: 'Every curve, surface, and material choice serves a purpose. The hexagonal geometry optimizes field distribution while the titanium chassis provides durability.',
    icon: '🎯',
  },
  {
    title: 'Invisible Technology',
    description: 'Advanced engineering disappears behind intuitive interfaces. Complex quantum mechanics become simple gestures and voice commands.',
    icon: '✨',
  },
  {
    title: 'Human-Centered',
    description: 'Designed for how people actually live and work. Ergonomic controls, ambient status indicators, and adaptive interfaces.',
    icon: '👤',
  },
  {
    title: 'Sustainable Luxury',
    description: 'Premium materials selected for longevity. Modular construction enables repairs and upgrades without replacement.',
    icon: '♻️',
  },
];

const designDetails = [
  {
    title: 'Quantum Core Housing',
    description: 'The heart of the X1 sits within a hexagonal chamber of aerogel-insulated titanium. The geometric design creates optimal magnetic field distribution while providing visual feedback through integrated status rings.',
    features: ['Hexagonal symmetry', 'Aerogel insulation', 'Status ring LEDs', 'Titanium grade 5'],
  },
  {
    title: 'Control Interface',
    description: 'The haptic control pad features a tempered glass surface with force-sensing zones. Capacitive touch combined with physical feedback creates an intuitive, satisfying control experience.',
    features: ['Tempered glass', 'Force sensing', 'Haptic motors', 'Ambient lighting'],
  },
  {
    title: 'Field Shaper Array',
    description: '32 micro-emitters arranged in concentric rings allow for precise field manipulation. Each emitter is independently addressable, enabling complex gravitational field profiles.',
    features: ['32 emitters', 'Concentric layout', 'Individual control', 'Real-time adjustment'],
  },
  {
    title: 'Thermal Management',
    description: 'Active cooling maintains the quantum core at 2.4K using a closed-loop helium system. External surfaces remain at ambient temperature through multi-layer insulation.',
    features: ['Helium cooling', 'Multi-layer insulation', 'Silent operation', 'Fail-safe systems'],
  },
];

const materials = [
  { name: 'Aerospace Titanium', use: 'Chassis & Structure', icon: '🔩' },
  { name: 'Synthetic Sapphire', use: 'Window & Sensors', icon: '💎' },
  { name: 'Carbon Nanotube Composites', use: 'Field Emitters', icon: '🔬' },
  { name: 'Liquid Helium', use: 'Cryogenic Cooling', icon: '❄️' },
  { name: 'YBCO Superconductor', use: 'Flux Pinning Core', icon: '⚡' },
  { name: 'Aerogel', use: 'Thermal Insulation', icon: '🌫️' },
];

const awards = [
  { name: 'Red Dot Design Award', year: '2024', category: 'Product Design' },
  { name: 'iF Design Award', year: '2024', category: 'Gold' },
  { name: 'Good Design Award', year: '2024', category: 'Best 100' },
  { name: 'CES Innovation Award', year: '2024', category: 'Best of Innovation' },
];

export default function ProductDesignPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--neon-violet)]/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--bg-card)]/50 border border-[var(--border-glow)] rounded-full mb-6 animate-fade-in">
              <span className="text-xs font-mono text-[var(--neon-violet)] tracking-wider">
                DESIGN PHILOSOPHY
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
              <span className="text-[var(--text-primary)]">Designed for the </span>
              <span className="text-gradient">Impossible</span>
            </h1>
            <p className="text-lg text-[var(--text-secondary)] animate-slide-up animation-delay-200">
              Where aerospace engineering meets sculptural art. Every detail of the
              Levitas X1 has been obsessively refined for beauty and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {designPrinciples.map((principle, index) => (
              <div
                key={index}
                className="card text-center py-10 transition-all duration-500 hover:scale-[1.05]"
              >
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h3 className="font-display text-lg font-semibold text-[var(--text-primary)] mb-3">
                  {principle.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Details */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] mb-12 text-center">
            Anatomy of Excellence
          </h2>
          <div className="space-y-8">
            {designDetails.map((detail, index) => (
              <div
                key={index}
                className={`card grid md:grid-cols-2 gap-8 items-center transition-all duration-500 hover:scale-[1.01] ${
                  index % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-4">
                    {detail.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] mb-6">
                    {detail.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {detail.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 text-xs font-mono bg-[var(--neon-cyan)]/10 text-[var(--neon-cyan)] rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={`aspect-video bg-[var(--bg-panel)] rounded-xl flex items-center justify-center ${
                  index % 2 === 1 ? 'md:col-start-1' : ''
                }`}>
                  <div className="text-6xl opacity-50">🔍</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] mb-12 text-center">
            Premium Materials
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((material, index) => (
              <div
                key={index}
                className="card flex items-center gap-4 transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-[var(--bg-secondary)] rounded-xl text-2xl">
                  {material.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-[var(--text-primary)]">
                    {material.name}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)]">{material.use}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] mb-12 text-center">
            Recognition
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="card flex items-center gap-4 transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[var(--neon-cyan)] to-[var(--neon-violet)] rounded-xl text-xl">
                  🏆
                </div>
                <div>
                  <h3 className="font-display font-semibold text-[var(--text-primary)]">
                    {award.name}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)]">
                    {award.year} • {award.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-6">
            Experience the Design
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            Visit our experience centers to see the X1 in person.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-primary transition-all duration-500">
              Book a Visit
            </Link>
            <Link href="/product" className="btn btn-secondary transition-all duration-500">
              View Specifications
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
