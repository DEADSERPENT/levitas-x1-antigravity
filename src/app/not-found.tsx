'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center">
          {/* Animated 404 */}
          <div className="relative mb-8">
            <div className="font-display text-[150px] sm:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[var(--neon-cyan)] to-[var(--neon-violet)] opacity-20 select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Floating device */}
                <div className="w-24 h-24 relative animate-float">
                  <div className="absolute inset-0 border-2 border-[var(--neon-cyan)]/30 rounded-full animate-spin-slow" />
                  <div className="absolute inset-4 border border-[var(--neon-violet)]/20 rounded-full animate-spin-slow-reverse" />
                  <div className="absolute inset-8 bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-panel)] rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-[var(--neon-cyan)] rounded-full animate-pulse" />
                  </div>
                </div>
                {/* Shadow */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-2 bg-[var(--neon-cyan)]/20 rounded-full blur-sm" />
              </div>
            </div>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4 animate-slide-up">
            Lost in Zero-G
          </h1>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-md mx-auto animate-slide-up animation-delay-200">
            The page you&apos;re looking for has drifted beyond our gravitational field.
            Let&apos;s get you back to solid ground.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-300">
            <Link href="/" className="btn btn-primary transition-all duration-500">
              Return Home
            </Link>
            <Link href="/help" className="btn btn-secondary transition-all duration-500">
              Get Help
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-[var(--border-glow)] animate-fade-in animation-delay-500">
            <p className="text-sm text-[var(--text-muted)] mb-4">Popular destinations:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: 'Product', href: '/product' },
                { label: 'Features', href: '/features' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Documentation', href: '/documentation' },
                { label: 'Contact', href: '/contact' },
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--neon-cyan)] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
