'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const securityFeatures = [
  {
    title: 'End-to-End Encryption',
    description: 'All communications between your X1, control devices, and cloud services use AES-256 encryption with perfect forward secrecy.',
    icon: '🔐',
  },
  {
    title: 'Hardware Security Module',
    description: 'Dedicated HSM chip stores cryptographic keys in tamper-resistant hardware, preventing extraction even with physical access.',
    icon: '🔒',
  },
  {
    title: 'Secure Boot Chain',
    description: 'Every boot verifies firmware integrity through cryptographic signatures. Unauthorized modifications are detected and blocked.',
    icon: '✓',
  },
  {
    title: 'Biometric Authentication',
    description: 'Optional fingerprint and facial recognition ensure only authorized users can operate your X1 unit.',
    icon: '👆',
  },
];

const physicalSafety = [
  {
    title: 'Triple Redundancy',
    description: 'Three independent control systems ensure safe operation even if primary systems fail.',
    details: ['Primary quantum controller', 'Secondary analog backup', 'Mechanical failsafe'],
  },
  {
    title: 'Auto Soft-Landing',
    description: 'If power or control is lost, objects descend gradually to prevent damage.',
    details: ['Capacitor-backed descent', 'Rate-limited lowering', 'Impact cushioning field'],
  },
  {
    title: 'Geofencing',
    description: 'Define safe operating boundaries. Unit refuses to levitate outside designated areas.',
    details: ['GPS + indoor positioning', 'Custom boundary shapes', 'Height limits'],
  },
  {
    title: 'Weight Monitoring',
    description: 'Real-time load sensing prevents overloading and ensures stable operation.',
    details: ['Continuous measurement', 'Overload warnings', 'Automatic adjustment'],
  },
];

const certifications = [
  { name: 'ISO 27001', description: 'Information Security Management', icon: '📋' },
  { name: 'SOC 2 Type II', description: 'Security & Availability', icon: '🛡️' },
  { name: 'CE Mark', description: 'European Conformity', icon: '🇪🇺' },
  { name: 'FCC Part 15', description: 'RF Emissions Compliance', icon: '📡' },
  { name: 'UL Listed', description: 'Safety Certification', icon: '⚡' },
  { name: 'FDA Class II', description: 'Medical Device (Pro model)', icon: '🏥' },
];

const securityPractices = [
  {
    title: 'Regular Security Audits',
    description: 'Independent third-party penetration testing conducted quarterly.',
  },
  {
    title: 'Bug Bounty Program',
    description: 'Rewards up to $100,000 for discovering critical vulnerabilities.',
  },
  {
    title: 'Automatic Updates',
    description: 'Security patches deployed automatically with user consent.',
  },
  {
    title: 'Data Minimization',
    description: 'We collect only what&apos;s necessary. Your usage data stays on-device.',
  },
  {
    title: 'Incident Response',
    description: '24/7 security team with <1 hour response time for critical issues.',
  },
  {
    title: 'Transparency Reports',
    description: 'Annual reports detail data requests and security incidents.',
  },
];

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--neon-green)]/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--bg-card)]/50 border border-[var(--border-glow)] rounded-full mb-6 animate-fade-in">
              <span className="text-xs font-mono text-[var(--neon-green)] tracking-wider">
                TRUST & SAFETY
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
              <span className="text-[var(--text-primary)]">Security </span>
              <span className="text-gradient">First</span>
            </h1>
            <p className="text-lg text-[var(--text-secondary)] animate-slide-up animation-delay-200">
              Your safety and privacy are fundamental to everything we build.
              Learn how we protect you and your data.
            </p>
          </div>
        </div>
      </section>

      {/* Digital Security */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] mb-4 text-center">
            Digital Security
          </h2>
          <p className="text-[var(--text-secondary)] text-center mb-12 max-w-2xl mx-auto">
            Enterprise-grade protection for your device and data.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="card text-center py-8 transition-all duration-500 hover:scale-[1.05]"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-display text-lg font-semibold text-[var(--text-primary)] mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Physical Safety */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] mb-4 text-center">
            Physical Safety
          </h2>
          <p className="text-[var(--text-secondary)] text-center mb-12 max-w-2xl mx-auto">
            Multiple layers of protection ensure safe operation.
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            {physicalSafety.map((safety, index) => (
              <div
                key={index}
                className="card transition-all duration-500 hover:scale-[1.02]"
              >
                <h3 className="font-display text-xl font-semibold text-[var(--neon-cyan)] mb-3">
                  {safety.title}
                </h3>
                <p className="text-[var(--text-secondary)] mb-4">
                  {safety.description}
                </p>
                <ul className="space-y-2">
                  {safety.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                      <span className="w-1.5 h-1.5 bg-[var(--neon-cyan)] rounded-full" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] mb-12 text-center">
            Certifications & Compliance
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="card flex items-center gap-4 transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-[var(--bg-secondary)] rounded-xl text-2xl">
                  {cert.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-[var(--text-primary)]">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)]">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] mb-12 text-center">
            Our Security Practices
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {securityPractices.map((practice, index) => (
              <div
                key={index}
                className="card transition-all duration-500 hover:scale-[1.02]"
              >
                <h3 className="font-display font-semibold text-[var(--text-primary)] mb-2">
                  {practice.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {practice.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Report a Vulnerability */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] mb-6">
            Found a Vulnerability?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            We take security seriously. If you&apos;ve discovered a vulnerability,
            please report it responsibly through our bug bounty program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-primary transition-all duration-500">
              Report Vulnerability
            </Link>
            <Link href="#" className="btn btn-secondary transition-all duration-500">
              Bug Bounty Program
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
