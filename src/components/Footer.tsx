'use client';

import Link from 'next/link';

const footerLinks = {
  product: [
    { label: 'Technology', href: '#technology' },
    { label: 'Specifications', href: '#specs' },
    { label: 'Applications', href: '#applications' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Enterprise', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Terms of Physics', href: '#' },
    { label: 'Safety Guidelines', href: '#' },
    { label: 'Export Compliance', href: '#' },
  ],
  support: [
    { label: 'Contact', href: '#' },
    { label: 'Quantum Support', href: '#' },
    { label: 'Documentation', href: '#' },
    { label: 'Training Portal', href: '#' },
    { label: 'API Reference', href: '#' },
  ],
  company: [
    { label: 'About', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Investors', href: '#' },
    { label: 'Research', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-[var(--bg-secondary)] border-t border-[var(--border-glow)]">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-[var(--neon-cyan)] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 border-2 border-[var(--neon-cyan)] rounded-full opacity-60" />
                <div className="absolute inset-2 bg-[var(--neon-cyan)] rounded-full" />
              </div>
              <span className="font-[family-name:var(--font-orbitron)] text-xl font-bold tracking-wider">
                LEVITAS
              </span>
            </Link>
            <p className="text-lg text-[var(--neon-cyan)] font-medium mb-4">
              Pioneering the post-gravity era.
            </p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
              Levitas Industries is dedicated to making gravity optional. Founded in 2023, we are building the transportation infrastructure for a three-dimensional civilization.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--success)]">
              <span className="status-dot" />
              <span>ALL SYSTEMS OPERATIONAL</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-[family-name:var(--font-orbitron)] text-sm font-semibold text-[var(--text-primary)] tracking-wider mb-4">
              PRODUCT
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[var(--text-secondary)] hover:text-[var(--neon-cyan)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-orbitron)] text-sm font-semibold text-[var(--text-primary)] tracking-wider mb-4">
              LEGAL
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[var(--text-secondary)] hover:text-[var(--neon-cyan)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-orbitron)] text-sm font-semibold text-[var(--text-primary)] tracking-wider mb-4">
              SUPPORT
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[var(--text-secondary)] hover:text-[var(--neon-cyan)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[var(--border-glow)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-[var(--text-muted)]">
                © 2025 Levitas Industries. All rights reserved.
              </p>
              <p className="text-xs text-[var(--neon-cyan)] font-mono mt-1">
                Gravity is optional.
              </p>
            </div>
            <div className="flex items-center gap-6 text-xs font-mono text-[var(--text-muted)]">
              <span>SYS_STATUS: <span className="text-[var(--success)]">ONLINE</span></span>
              <span>QUANTUM_LINK: <span className="text-[var(--neon-cyan)]">ACTIVE</span></span>
              <span>FLUX_STABILITY: <span className="text-[var(--neon-violet)]">99.97%</span></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
