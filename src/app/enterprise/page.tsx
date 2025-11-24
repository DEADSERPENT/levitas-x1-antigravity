'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const enterpriseFeatures = [
  {
    title: 'Dedicated Support',
    description: '24/7 priority support with dedicated account manager and 1-hour response SLA for critical issues.',
    icon: '🎯',
  },
  {
    title: 'Custom Integration',
    description: 'Our engineering team works directly with you to integrate X1 into your existing systems.',
    icon: '🔧',
  },
  {
    title: 'Volume Licensing',
    description: 'Flexible deployment options with significant volume discounts for fleet deployments.',
    icon: '📊',
  },
  {
    title: 'Advanced Security',
    description: 'SSO, RBAC, audit logging, and compliance certifications for enterprise requirements.',
    icon: '🔒',
  },
  {
    title: 'Training Programs',
    description: 'Comprehensive on-site training for your team with certification programs.',
    icon: '🎓',
  },
  {
    title: 'Custom Hardware',
    description: 'Modified units for specific industrial applications with enhanced specifications.',
    icon: '⚙️',
  },
];

const useCases = [
  {
    industry: 'Manufacturing',
    title: 'Assembly Line Automation',
    description: 'Precision positioning of heavy components without mechanical fixtures. Reduce setup time by 80%.',
    metric: '80% faster',
  },
  {
    industry: 'Healthcare',
    title: 'Patient Transport Systems',
    description: 'Zero-vibration patient transfer for sensitive medical procedures and post-surgery care.',
    metric: '0 vibration',
  },
  {
    industry: 'Logistics',
    title: 'Warehouse Operations',
    description: 'Floating conveyors and automated storage systems that adapt to any space configuration.',
    metric: '3x throughput',
  },
  {
    industry: 'Entertainment',
    title: 'Stage & Production',
    description: 'Create impossible visual effects for live events, film production, and immersive experiences.',
    metric: 'Unlimited creativity',
  },
];

const clients = [
  'Fortune 500 Manufacturers',
  'Major Film Studios',
  'Leading Research Institutions',
  'Global Healthcare Systems',
  'International Logistics Companies',
  'Space Agencies',
];

const deploymentOptions = [
  {
    title: 'On-Premise',
    description: 'Full control with local installation. All data stays within your network.',
    features: ['Air-gapped operation', 'Local control server', 'No cloud dependency'],
  },
  {
    title: 'Cloud Connected',
    description: 'Enhanced features with secure cloud connectivity for analytics and updates.',
    features: ['Real-time monitoring', 'OTA updates', 'Fleet management'],
  },
  {
    title: 'Hybrid',
    description: 'Best of both worlds with local operation and optional cloud features.',
    features: ['Selective sync', 'Offline capable', 'Compliance friendly'],
  },
];

export default function EnterprisePage() {
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
                FOR BUSINESS
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
              <span className="text-[var(--text-primary)]">Levitas for </span>
              <span className="text-gradient">Enterprise</span>
            </h1>
            <p className="text-lg text-[var(--text-secondary)] mb-8 animate-slide-up animation-delay-200">
              Scale anti-gravity technology across your organization with
              enterprise-grade support, security, and customization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-300">
              <Link href="/contact" className="btn btn-primary transition-all duration-500">
                Contact Sales
              </Link>
              <Link href="#" className="btn btn-secondary transition-all duration-500">
                Download Whitepaper
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] mb-12 text-center">
            Enterprise Benefits
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {enterpriseFeatures.map((feature, index) => (
              <div
                key={index}
                className="card transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="font-display text-xl font-semibold text-[var(--text-primary)] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[var(--text-secondary)]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] mb-12 text-center">
            Industry Solutions
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="card transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-mono bg-[var(--neon-cyan)]/20 text-[var(--neon-cyan)] rounded-full">
                    {useCase.industry}
                  </span>
                  <span className="font-display font-bold text-[var(--neon-violet)]">
                    {useCase.metric}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-[var(--text-primary)] mb-3">
                  {useCase.title}
                </h3>
                <p className="text-[var(--text-secondary)]">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-8">
            Trusted By Industry Leaders
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-lg text-[var(--text-secondary)]"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] mb-12 text-center">
            Flexible Deployment
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {deploymentOptions.map((option, index) => (
              <div
                key={index}
                className="card text-center py-10 transition-all duration-500 hover:scale-[1.03]"
              >
                <h3 className="font-display text-xl font-semibold text-[var(--neon-cyan)] mb-4">
                  {option.title}
                </h3>
                <p className="text-[var(--text-secondary)] mb-6">
                  {option.description}
                </p>
                <ul className="space-y-2">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center gap-2 text-sm text-[var(--text-muted)]">
                      <span className="text-[var(--neon-cyan)]">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card bg-gradient-to-br from-[var(--neon-cyan)]/10 to-[var(--neon-violet)]/10 text-center py-16">
            <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how Levitas can solve your specific challenges.
              Our enterprise team will create a custom solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary transition-all duration-500">
                Schedule a Demo
              </Link>
              <Link href="/pricing" className="btn btn-secondary transition-all duration-500">
                View Enterprise Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
