'use client';

import Link from 'next/link';
import { DiamondIcon, CheckIcon } from './icons';

const plans = [
  {
    badge: 'CIVILIAN',
    name: 'Standard Unit',
    desc: 'Personal and light commercial use',
    price: '49,999',
    features: [
      { text: '250kg lift capacity', included: true },
      { text: '50-year nuclear diamond cell', included: true },
      { text: '100ft civilian altitude lock', included: true },
      { text: 'iOS & Android app control', included: true },
      { text: 'Voice command interface', included: true },
      { text: 'Standard quantum support', included: true },
      { text: 'API access', included: false },
      { text: 'Custom chassis colors', included: false },
    ],
    cta: 'Reserve Standard',
    deposit: '$5,000 refundable deposit',
    featured: false,
  },
  {
    badge: 'PRO EDITION',
    name: 'Industrial Unit',
    desc: 'Commercial and industrial applications',
    price: '149,999',
    features: [
      { text: '1,000kg lift capacity', included: true, highlight: true },
      { text: '75-year extended power cell', included: true, highlight: true },
      { text: '500ft commercial altitude', included: true, highlight: true },
      { text: 'iOS & Android app control', included: true },
      { text: 'Voice command interface', included: true },
      { text: 'Priority quantum concierge', included: true, highlight: true },
      { text: 'Full API access & SDK', included: true, highlight: true },
      { text: 'Custom chassis colors', included: true, highlight: true },
    ],
    cta: 'Reserve Pro Unit',
    deposit: '$15,000 refundable deposit',
    featured: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <span className="section-overline">
            <span className="text-[var(--text-muted)]">[</span>
            ACQUIRE
            <span className="text-[var(--text-muted)]">]</span>
          </span>
          <h2 className="section-title">
            Choose Your <span className="text-gradient">Module</span>
          </h2>
          <p className="section-subtitle">
            Limited allocation. Batch 001 production slots are now open for reservation. Delivery begins Q4 2025.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-lg overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-y-[-8px] animate-slide-up ${
                plan.featured
                  ? 'bg-gradient-to-b from-[var(--bg-card)] to-[var(--bg-panel)] border-2 border-[var(--neon-cyan)] shadow-[0_0_40px_var(--glow-cyan)] hover:shadow-[0_0_60px_var(--glow-cyan)]'
                  : 'bg-[var(--bg-card)] border border-[var(--border-glow)] hover:border-[var(--neon-cyan)] hover:shadow-[0_0_30px_var(--glow-cyan)]'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {plan.featured && (
                <>
                  <div className="absolute -top-px left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--neon-cyan)] text-[var(--bg-primary)] text-xs font-bold tracking-wider rounded-b">
                    MOST POPULAR
                  </div>
                  <div className="absolute inset-0 bg-[var(--neon-cyan)]/5" />
                </>
              )}

              <div className="relative p-8">
                {/* Header */}
                <div className="mb-6">
                  <span className={`inline-block px-3 py-1 text-xs font-mono tracking-wider rounded ${
                    plan.featured
                      ? 'bg-[var(--neon-violet)]/20 text-[var(--neon-violet)] border border-[var(--neon-violet)]'
                      : 'bg-[var(--bg-panel)] text-[var(--neon-cyan)] border border-[var(--border-glow)]'
                  }`}>
                    {plan.badge}
                  </span>
                  <h3 className="font-[family-name:var(--font-orbitron)] text-2xl font-bold mt-4 text-[var(--text-primary)]">
                    {plan.name}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm mt-1">
                    {plan.desc}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-[var(--text-muted)] text-lg">$</span>
                  <span className="font-[family-name:var(--font-orbitron)] text-5xl font-bold text-[var(--text-primary)]">
                    {plan.price}
                  </span>
                  <span className="text-[var(--text-muted)] text-sm ml-2">USD</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8" role="list">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex items-center gap-3">
                      {feature.included ? (
                        <CheckIcon className="w-4 h-4 text-[var(--neon-cyan)] flex-shrink-0" />
                      ) : (
                        <DiamondIcon className="w-3 h-3 text-[var(--text-muted)] flex-shrink-0" />
                      )}
                      <span className={`text-sm ${
                        !feature.included
                          ? 'text-[var(--text-muted)] line-through'
                          : feature.highlight
                            ? 'text-[var(--text-primary)] font-medium'
                            : 'text-[var(--text-secondary)]'
                      }`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/contact"
                  className={`btn w-full ${plan.featured ? 'btn-primary' : 'btn-outline'}`}
                >
                  {plan.cta}
                </Link>
                <p className="text-center text-xs text-[var(--text-muted)] mt-3">
                  {plan.deposit}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise */}
        <div className="text-center mt-12">
          <p className="text-[var(--text-secondary)]">
            <strong className="text-[var(--text-primary)]">Enterprise & Government inquiries:</strong>{' '}
            <a href="mailto:enterprise@levitas.tech" className="text-[var(--neon-cyan)] hover:underline">
              enterprise@levitas.tech
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
