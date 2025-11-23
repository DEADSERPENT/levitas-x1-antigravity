'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#technology', label: 'Technology' },
    { href: '#specs', label: 'Specifications' },
    { href: '#applications', label: 'Applications' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-scrolled' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 border-2 border-[var(--neon-cyan)] rounded-full animate-[ring-rotate_8s_linear_infinite] opacity-60" />
              <div className="absolute inset-2 bg-[var(--neon-cyan)] rounded-full animate-[ring-pulse_2s_ease-in-out_infinite]" />
            </div>
            <span className="font-[var(--font-orbitron)] text-xl font-bold tracking-wider">
              LEVITAS
            </span>
            <span className="px-2 py-0.5 bg-[var(--neon-cyan)]/20 border border-[var(--neon-cyan)] rounded text-xs font-mono text-[var(--neon-cyan)]">
              X1
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--neon-cyan)] transition-colors font-medium tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
              <span className="status-dot" />
              <span>SYSTEM ONLINE</span>
            </div>
            <Link
              href="#pricing"
              className="btn btn-primary text-sm"
            >
              Acquire Unit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-[var(--text-primary)] transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-[var(--text-primary)] transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-[var(--text-primary)] transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-[var(--bg-primary)]/95 backdrop-blur-xl border-b border-[var(--border-glow)] py-6 px-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[var(--text-secondary)] hover:text-[var(--neon-cyan)] transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#pricing"
                className="btn btn-primary mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Acquire Unit
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
