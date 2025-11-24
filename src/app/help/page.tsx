'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const helpCategories = [
  {
    title: 'Getting Started',
    icon: '🚀',
    articles: [
      { title: 'Unboxing your Levitas X1', views: 15420 },
      { title: 'Initial setup and calibration', views: 12830 },
      { title: 'Connecting to the mobile app', views: 9876 },
      { title: 'Your first levitation', views: 8543 },
    ],
  },
  {
    title: 'Troubleshooting',
    icon: '🔧',
    articles: [
      { title: 'Unit not powering on', views: 7654 },
      { title: 'Calibration errors', views: 6543 },
      { title: 'Connectivity issues', views: 5432 },
      { title: 'Unexpected shutdowns', views: 4321 },
    ],
  },
  {
    title: 'Safety & Compliance',
    icon: '⚠️',
    articles: [
      { title: 'Safety guidelines overview', views: 11234 },
      { title: 'Weight limit warnings', views: 8765 },
      { title: 'Emergency procedures', views: 7654 },
      { title: 'Regulatory certifications', views: 3456 },
    ],
  },
  {
    title: 'Advanced Features',
    icon: '⚙️',
    articles: [
      { title: 'API integration guide', views: 6789 },
      { title: 'Multi-unit synchronization', views: 5678 },
      { title: 'Custom field profiles', views: 4567 },
      { title: 'Automation scripting', views: 3456 },
    ],
  },
  {
    title: 'Account & Billing',
    icon: '💳',
    articles: [
      { title: 'Managing your subscription', views: 4321 },
      { title: 'Invoice and receipts', views: 3210 },
      { title: 'Upgrading your plan', views: 2987 },
      { title: 'Warranty claims', views: 2654 },
    ],
  },
  {
    title: 'Hardware Care',
    icon: '🛠️',
    articles: [
      { title: 'Cleaning and maintenance', views: 5432 },
      { title: 'Storage guidelines', views: 4321 },
      { title: 'Transportation tips', views: 3456 },
      { title: 'Part replacement', views: 2345 },
    ],
  },
];

const popularArticles = [
  { title: 'How to calibrate for different environments', views: 25430 },
  { title: 'Understanding the quantum core status LEDs', views: 22150 },
  { title: 'Maximizing lift capacity safely', views: 19870 },
  { title: 'Troubleshooting common error codes', views: 18540 },
  { title: 'Setting up geofencing boundaries', views: 16230 },
];

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--neon-blue)]/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--bg-card)]/50 border border-[var(--border-glow)] rounded-full mb-6 animate-fade-in">
              <span className="text-xs font-mono text-[var(--neon-blue)] tracking-wider">
                SUPPORT CENTER
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
              <span className="text-[var(--text-primary)]">How can we </span>
              <span className="text-gradient">help?</span>
            </h1>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mt-8 animate-slide-up animation-delay-200">
              <input
                type="text"
                placeholder="Search for help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--neon-cyan)] transition-all duration-500"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-[var(--neon-cyan)] hover:scale-110 transition-transform duration-300">
                🔍
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 border-y border-[var(--border-glow)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: 'Contact Support', href: '/contact', icon: '📞' },
              { label: 'Video Tutorials', href: '#', icon: '🎬' },
              { label: 'Community Forum', href: '/community', icon: '💬' },
              { label: 'Downloads', href: '/downloads', icon: '⬇️' },
            ].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="flex items-center gap-2 px-6 py-3 bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-lg hover:border-[var(--neon-cyan)] hover:text-[var(--neon-cyan)] transition-all duration-500"
              >
                <span>{link.icon}</span>
                <span className="font-display text-sm">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-8 text-center">
            Browse by Category
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((category, index) => (
              <div
                key={index}
                className="card group transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="font-display text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--neon-cyan)] transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.articles.map((article, articleIndex) => (
                    <li key={articleIndex}>
                      <Link
                        href="#"
                        className="flex items-center justify-between text-sm text-[var(--text-secondary)] hover:text-[var(--neon-cyan)] transition-colors duration-300"
                      >
                        <span>{article.title}</span>
                        <span className="text-xs text-[var(--text-muted)]">
                          {(article.views / 1000).toFixed(1)}k
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#"
                  className="inline-block mt-4 text-sm text-[var(--neon-cyan)] hover:underline transition-all duration-300"
                >
                  View all articles →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-8 text-center">
            Most Popular Articles
          </h2>
          <div className="space-y-4">
            {popularArticles.map((article, index) => (
              <Link
                key={index}
                href="#"
                className="card flex items-center justify-between group transition-all duration-500 hover:scale-[1.01]"
              >
                <div className="flex items-center gap-4">
                  <span className="w-8 h-8 flex items-center justify-center bg-[var(--neon-cyan)]/20 text-[var(--neon-cyan)] rounded-lg font-mono text-sm">
                    {index + 1}
                  </span>
                  <span className="text-[var(--text-primary)] group-hover:text-[var(--neon-cyan)] transition-colors duration-300">
                    {article.title}
                  </span>
                </div>
                <span className="text-sm text-[var(--text-muted)]">
                  {(article.views / 1000).toFixed(1)}k views
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] mb-6">
            Still Need Help?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            Our expert support team is available around the clock.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: '💬', title: 'Live Chat', desc: 'Average response: 2 min' },
              { icon: '📧', title: 'Email', desc: 'Response within 24 hours' },
              { icon: '📞', title: 'Phone', desc: '24/7 support line' },
            ].map((option, index) => (
              <div
                key={index}
                className="card text-center py-8 transition-all duration-500 hover:scale-[1.05] cursor-pointer"
              >
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="font-display text-lg font-semibold text-[var(--text-primary)] mb-2">
                  {option.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)]">{option.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
