'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const productHighlights = [
  {
    title: 'Quantum Core',
    description: 'Heart of the levitation system, featuring superconducting materials at 2.4K for stable flux pinning.',
    icon: '⚛️',
  },
  {
    title: 'Smart Control Pad',
    description: 'Haptic-enabled interface for precise control. Connects via Bluetooth 5.3 for instant response.',
    icon: '🎛️',
  },
  {
    title: 'ZPE Module',
    description: 'Zero-Point Energy harvester provides unlimited runtime by extracting energy from vacuum fluctuations.',
    icon: '♾️',
  },
  {
    title: 'Field Shaper Array',
    description: '360° gravitational field manipulation with millimeter precision and 10-meter range.',
    icon: '🌀',
  },
];

const specifications = {
  'Performance': [
    { label: 'Max Lift Capacity', value: '250 kg (Standard) / 500 kg (Pro)' },
    { label: 'Field Range', value: 'Up to 10 meters' },
    { label: 'Position Accuracy', value: '±1 mm' },
    { label: 'Response Time', value: '<10 ms' },
  ],
  'Power': [
    { label: 'Primary Power', value: 'Zero-Point Energy (unlimited)' },
    { label: 'Backup Battery', value: '72 hours emergency reserve' },
    { label: 'Charge Time', value: '2 hours (0-100%)' },
    { label: 'Standby Power', value: '<1W' },
  ],
  'Physical': [
    { label: 'Dimensions', value: '30 × 30 × 15 cm' },
    { label: 'Weight', value: '8.5 kg' },
    { label: 'Materials', value: 'Aerospace-grade titanium alloy' },
    { label: 'Operating Temp', value: '-40°C to 60°C (external)' },
  ],
  'Connectivity': [
    { label: 'WiFi', value: '6E (802.11ax)' },
    { label: 'Bluetooth', value: '5.3 LE' },
    { label: 'Mesh Network', value: 'LoRa (up to 15km)' },
    { label: 'API', value: 'REST, WebSocket, MQTT' },
  ],
};

const gallery = [
  { title: 'Front View', emoji: '🔷' },
  { title: 'Side Profile', emoji: '🔶' },
  { title: 'Control Pad', emoji: '🎮' },
  { title: 'Quantum Core', emoji: '💠' },
  { title: 'In Action', emoji: '✨' },
  { title: 'Charging Dock', emoji: '🔌' },
];

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--neon-cyan)]/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--bg-card)]/50 border border-[var(--border-glow)] rounded-full mb-6 animate-fade-in">
                <span className="status-dot" />
                <span className="text-xs font-mono text-[var(--neon-cyan)] tracking-wider">
                  NOW AVAILABLE
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
                <span className="text-[var(--text-primary)]">LEVITAS </span>
                <span className="text-gradient">X1</span>
              </h1>
              <p className="text-lg text-[var(--text-secondary)] mb-8 animate-slide-up animation-delay-200">
                The world&apos;s first consumer-grade anti-gravity device. Harness quantum
                flux pinning technology to make any object float with precision control.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-300">
                <Link href="/pricing" className="btn btn-primary transition-all duration-500">
                  Order Now — $49,999
                </Link>
                <Link href="/technology" className="btn btn-secondary transition-all duration-500">
                  How It Works
                </Link>
              </div>
            </div>

            {/* Product Visual */}
            <div className="relative flex items-center justify-center animate-fade-in animation-delay-300">
              <div className="w-80 h-80 relative">
                <div className="absolute inset-0 border-2 border-[var(--neon-cyan)]/30 rounded-full animate-spin-slow" />
                <div className="absolute inset-8 border border-[var(--neon-violet)]/20 rounded-full animate-spin-slow-reverse" />
                <div className="absolute inset-16 bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-panel)] rounded-2xl border border-[var(--border-glow)] flex items-center justify-center">
                  <div className="w-20 h-20 bg-[var(--neon-cyan)] rounded-full animate-pulse-glow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productHighlights.map((item, index) => (
              <div
                key={index}
                className="card text-center py-8 transition-all duration-500 hover:scale-[1.05]"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-display text-lg font-semibold text-[var(--text-primary)] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] mb-12 text-center">
            Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((item, index) => (
              <div
                key={index}
                className={`card aspect-square flex flex-col items-center justify-center cursor-pointer transition-all duration-500 hover:scale-[1.02] ${
                  index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className="text-6xl mb-4">{item.emoji}</div>
                <span className="text-sm text-[var(--text-muted)]">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] mb-12 text-center">
            Technical Specifications
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {Object.entries(specifications).map(([category, specs], index) => (
              <div key={index} className="card transition-all duration-500 hover:scale-[1.01]">
                <h3 className="font-display text-lg font-semibold text-[var(--neon-cyan)] mb-4 pb-4 border-b border-[var(--border-glow)]">
                  {category}
                </h3>
                <dl className="space-y-3">
                  {specs.map((spec, specIndex) => (
                    <div key={specIndex} className="flex justify-between items-start">
                      <dt className="text-sm text-[var(--text-muted)]">{spec.label}</dt>
                      <dd className="text-sm text-[var(--text-primary)] text-right max-w-[60%]">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's in the Box */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] mb-12 text-center">
            What&apos;s in the Box
          </h2>
          <div className="card">
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                'Levitas X1 Main Unit',
                'Smart Control Pad',
                'Charging Dock with ZPE Converter',
                'Quick Start Guide',
                'Safety Manual',
                'Calibration Tools',
                'Premium Carrying Case',
                '2-Year Warranty Card',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="w-6 h-6 flex items-center justify-center bg-[var(--neon-cyan)]/20 text-[var(--neon-cyan)] rounded-full text-sm">
                    ✓
                  </span>
                  <span className="text-[var(--text-secondary)]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-transparent to-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-6">
            Ready to Defy Gravity?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            Join thousands of innovators already experiencing the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="btn btn-primary transition-all duration-500">
              View All Models
            </Link>
            <Link href="/contact" className="btn btn-secondary transition-all duration-500">
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
