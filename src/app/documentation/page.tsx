'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const docSections = [
  {
    title: 'Getting Started',
    icon: '🚀',
    items: [
      { title: 'Quick Start Guide', description: 'Get your X1 running in 5 minutes' },
      { title: 'Installation', description: 'Complete setup instructions' },
      { title: 'First Levitation', description: 'Your first anti-gravity experience' },
      { title: 'Safety Overview', description: 'Essential safety information' },
    ],
  },
  {
    title: 'Hardware',
    icon: '⚙️',
    items: [
      { title: 'Specifications', description: 'Technical specifications' },
      { title: 'Quantum Core', description: 'Understanding the core system' },
      { title: 'Control Pad', description: 'Using the control interface' },
      { title: 'Maintenance', description: 'Care and maintenance guide' },
    ],
  },
  {
    title: 'Software',
    icon: '💻',
    items: [
      { title: 'Control Center', description: 'Desktop application guide' },
      { title: 'Mobile App', description: 'iOS and Android app guide' },
      { title: 'Firmware Updates', description: 'Keeping your X1 updated' },
      { title: 'Diagnostics', description: 'System health monitoring' },
    ],
  },
  {
    title: 'API Reference',
    icon: '📡',
    items: [
      { title: 'REST API', description: 'HTTP API documentation' },
      { title: 'WebSocket API', description: 'Real-time control interface' },
      { title: 'MQTT Protocol', description: 'IoT integration' },
      { title: 'SDK Libraries', description: 'Client libraries for all platforms' },
    ],
  },
  {
    title: 'Integrations',
    icon: '🔗',
    items: [
      { title: 'Home Automation', description: 'Smart home integration' },
      { title: 'Industrial Systems', description: 'PLC and SCADA integration' },
      { title: 'Third-Party Apps', description: 'Partner integrations' },
      { title: 'Custom Development', description: 'Building custom solutions' },
    ],
  },
  {
    title: 'Troubleshooting',
    icon: '🔧',
    items: [
      { title: 'Common Issues', description: 'Frequently encountered problems' },
      { title: 'Error Codes', description: 'Complete error reference' },
      { title: 'Calibration', description: 'Recalibration procedures' },
      { title: 'Support Contact', description: 'When to contact support' },
    ],
  },
];

const apiExample = `// Initialize Levitas SDK
import { LevitasClient } from '@levitas/sdk';

const client = new LevitasClient({
  apiKey: 'your-api-key',
  unitId: 'X1-XXXXX'
});

// Start levitation
await client.levitate({
  height: 1.5,  // meters
  weight: 50,   // kg
  duration: null // indefinite
});

// Monitor status
client.on('status', (status) => {
  console.log('Height:', status.height);
  console.log('Power:', status.power);
});`;

export default function DocumentationPage() {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--neon-cyan)]/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--bg-card)]/50 border border-[var(--border-glow)] rounded-full mb-6 animate-fade-in">
              <span className="text-xs font-mono text-[var(--neon-cyan)] tracking-wider">
                DEVELOPER DOCS
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
              <span className="text-gradient">Documentation</span>
            </h1>
            <p className="text-lg text-[var(--text-secondary)] mb-8 animate-slide-up animation-delay-200">
              Everything you need to integrate, customize, and build with the Levitas X1.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto animate-slide-up animation-delay-300">
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full px-6 py-4 bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--neon-cyan)] transition-all duration-500"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">
                ⌘K
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 border-y border-[var(--border-glow)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {['Quick Start', 'API Reference', 'SDK Download', 'Examples'].map((link, index) => (
              <Link
                key={index}
                href="#"
                className="px-4 py-2 text-sm font-mono text-[var(--text-secondary)] hover:text-[var(--neon-cyan)] transition-colors duration-300"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[280px_1fr] gap-12">
            {/* Sidebar */}
            <div className="space-y-2">
              {docSections.map((section, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSection(index)}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-all duration-500 ${
                    activeSection === index
                      ? 'bg-[var(--neon-cyan)]/10 border border-[var(--neon-cyan)]'
                      : 'hover:bg-[var(--bg-card)]'
                  }`}
                >
                  <span className="text-xl">{section.icon}</span>
                  <span className={`font-display transition-colors duration-300 ${
                    activeSection === index ? 'text-[var(--neon-cyan)]' : 'text-[var(--text-primary)]'
                  }`}>
                    {section.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Content */}
            <div>
              <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-8 flex items-center gap-3">
                <span className="text-3xl">{docSections[activeSection].icon}</span>
                {docSections[activeSection].title}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {docSections[activeSection].items.map((item, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="card group transition-all duration-500 hover:scale-[1.02]"
                  >
                    <h3 className="font-display font-semibold text-[var(--text-primary)] group-hover:text-[var(--neon-cyan)] transition-colors duration-300 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-8 text-center">
            Quick Code Example
          </h2>
          <div className="card bg-[#0d1117] border-[var(--border-glow)] overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-[var(--bg-panel)] border-b border-[var(--border-glow)]">
              <span className="w-3 h-3 bg-red-500 rounded-full" />
              <span className="w-3 h-3 bg-yellow-500 rounded-full" />
              <span className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="ml-4 text-sm text-[var(--text-muted)] font-mono">levitate.ts</span>
            </div>
            <pre className="p-6 overflow-x-auto">
              <code className="text-sm font-mono text-[var(--text-secondary)]">
                {apiExample}
              </code>
            </pre>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="#" className="btn btn-primary transition-all duration-500">
              View Full API Reference
            </Link>
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-8 text-center">
            Official SDKs
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'JavaScript', icon: '🟨', version: 'v2.1.0' },
              { name: 'Python', icon: '🐍', version: 'v2.0.3' },
              { name: 'Go', icon: '🔵', version: 'v1.8.0' },
              { name: 'Rust', icon: '🦀', version: 'v1.5.0' },
            ].map((sdk, index) => (
              <Link
                key={index}
                href="#"
                className="card text-center py-8 transition-all duration-500 hover:scale-[1.05]"
              >
                <div className="text-4xl mb-3">{sdk.icon}</div>
                <h3 className="font-display font-semibold text-[var(--text-primary)]">
                  {sdk.name}
                </h3>
                <p className="text-sm text-[var(--text-muted)] font-mono mt-1">{sdk.version}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-transparent to-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] mb-6">
            Need Help?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            Our developer support team is here to help you build amazing things.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/community" className="btn btn-primary transition-all duration-500">
              Join Discord
            </Link>
            <Link href="/support" className="btn btn-secondary transition-all duration-500">
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
