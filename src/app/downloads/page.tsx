'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const downloads = {
  software: [
    {
      name: 'Levitas Control Center',
      version: '3.2.1',
      size: '124 MB',
      platform: 'Windows / macOS / Linux',
      description: 'Primary control interface for all Levitas X1 units.',
      icon: '🎛️',
    },
    {
      name: 'Levitas Mobile App',
      version: '2.8.0',
      size: '45 MB',
      platform: 'iOS / Android',
      description: 'Control and monitor your units from anywhere.',
      icon: '📱',
    },
    {
      name: 'Levitas SDK',
      version: '1.5.0',
      size: '89 MB',
      platform: 'All Platforms',
      description: 'Build custom applications with our comprehensive SDK.',
      icon: '⚙️',
    },
    {
      name: 'Firmware Update Tool',
      version: '1.2.3',
      size: '12 MB',
      platform: 'Windows / macOS',
      description: 'Keep your X1 units up to date with latest firmware.',
      icon: '🔄',
    },
  ],
  documentation: [
    {
      name: 'User Manual',
      format: 'PDF',
      size: '8.5 MB',
      description: 'Complete guide to operating your Levitas X1.',
      icon: '📖',
    },
    {
      name: 'Quick Start Guide',
      format: 'PDF',
      size: '2.1 MB',
      description: 'Get up and running in minutes.',
      icon: '🚀',
    },
    {
      name: 'API Documentation',
      format: 'HTML/PDF',
      size: '15 MB',
      description: 'Complete API reference for developers.',
      icon: '📚',
    },
    {
      name: 'Safety Guidelines',
      format: 'PDF',
      size: '1.2 MB',
      description: 'Important safety information and compliance.',
      icon: '⚠️',
    },
  ],
  resources: [
    {
      name: '3D CAD Models',
      format: 'STEP/OBJ',
      size: '156 MB',
      description: 'Design integration files for engineers.',
      icon: '🎯',
    },
    {
      name: 'Marketing Kit',
      format: 'ZIP',
      size: '234 MB',
      description: 'Logos, images, and brand guidelines.',
      icon: '🎨',
    },
    {
      name: 'Sample Projects',
      format: 'ZIP',
      size: '67 MB',
      description: 'Example code and configuration files.',
      icon: '💾',
    },
  ],
};

export default function DownloadsPage() {
  const [activeCategory, setActiveCategory] = useState('software');

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
                RESOURCE CENTER
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
              <span className="text-[var(--text-primary)]">Downloads & </span>
              <span className="text-gradient">Resources</span>
            </h1>
            <p className="text-lg text-[var(--text-secondary)] animate-slide-up animation-delay-200">
              Access software, documentation, and resources to get the most
              out of your Levitas X1.
            </p>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(downloads).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 font-display text-sm uppercase tracking-wider rounded-lg transition-all duration-500 ${
                  activeCategory === category
                    ? 'bg-[var(--neon-cyan)] text-[var(--bg-primary)]'
                    : 'bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--neon-cyan)]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Downloads Grid */}
          <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
            {downloads[activeCategory as keyof typeof downloads].map((item, index) => (
              <div
                key={index}
                className="card group transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 flex items-center justify-center bg-[var(--bg-secondary)] rounded-xl text-2xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <h3 className="font-display text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--neon-cyan)] transition-colors duration-300">
                        {item.name}
                      </h3>
                      {'version' in item && (
                        <span className="px-2 py-0.5 text-xs font-mono bg-[var(--neon-cyan)]/20 text-[var(--neon-cyan)] rounded">
                          v{item.version}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mb-3">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                      {'platform' in item && (
                        <span>{item.platform}</span>
                      )}
                      {'format' in item && (
                        <span>{item.format}</span>
                      )}
                      <span>{item.size}</span>
                    </div>
                  </div>
                  <button className="btn btn-secondary text-sm px-4 py-2 flex-shrink-0 transition-all duration-500">
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-8 text-center">
            System Requirements
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                platform: 'Windows',
                requirements: [
                  'Windows 10/11 (64-bit)',
                  '8GB RAM minimum',
                  '500MB disk space',
                  'USB 3.0 port',
                  'Bluetooth 5.0',
                ],
              },
              {
                platform: 'macOS',
                requirements: [
                  'macOS 12 or later',
                  '8GB RAM minimum',
                  '500MB disk space',
                  'USB-C port',
                  'Bluetooth 5.0',
                ],
              },
              {
                platform: 'Linux',
                requirements: [
                  'Ubuntu 20.04+ / Fedora 35+',
                  '8GB RAM minimum',
                  '500MB disk space',
                  'USB 3.0 port',
                  'BlueZ 5.50+',
                ],
              },
            ].map((platform, index) => (
              <div key={index} className="card transition-all duration-500 hover:scale-[1.02]">
                <h3 className="font-display text-lg font-semibold text-[var(--neon-cyan)] mb-4">
                  {platform.platform}
                </h3>
                <ul className="space-y-2">
                  {platform.requirements.map((req, reqIndex) => (
                    <li key={reqIndex} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                      <span className="w-1.5 h-1.5 bg-[var(--neon-cyan)] rounded-full" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
