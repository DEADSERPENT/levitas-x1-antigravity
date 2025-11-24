'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const communityStats = [
  { label: 'Active Members', value: '50K+' },
  { label: 'Countries', value: '120+' },
  { label: 'Projects Shared', value: '10K+' },
  { label: 'Daily Discussions', value: '500+' },
];

const featuredProjects = [
  {
    title: 'Zero-G Art Installation',
    author: 'Sarah Chen',
    location: 'Tokyo, Japan',
    description: 'Interactive floating sculpture garden using 12 Levitas X1 units.',
    likes: 2847,
    image: '🎨',
  },
  {
    title: 'Medical Transport System',
    author: 'Dr. Marcus Webb',
    location: 'Boston, USA',
    description: 'Hospital-grade patient transfer with zero vibration.',
    likes: 1923,
    image: '🏥',
  },
  {
    title: 'Floating Home Office',
    author: 'Erik Johansson',
    location: 'Stockholm, Sweden',
    description: 'Complete workstation with adjustable height anti-gravity desk.',
    likes: 3156,
    image: '💼',
  },
  {
    title: 'Agricultural Automation',
    author: 'Maria Santos',
    location: 'São Paulo, Brazil',
    description: 'Autonomous crop monitoring with floating sensor array.',
    likes: 1654,
    image: '🌾',
  },
];

const events = [
  {
    date: 'Dec 15, 2024',
    title: 'Levitas Con 2024',
    type: 'Conference',
    location: 'San Francisco, CA',
    description: 'Annual gathering of the global Levitas community.',
  },
  {
    date: 'Dec 20, 2024',
    title: 'Quantum Flux Workshop',
    type: 'Workshop',
    location: 'Virtual',
    description: 'Deep dive into quantum flux pinning mechanics.',
  },
  {
    date: 'Jan 10, 2025',
    title: 'Developer Hackathon',
    type: 'Hackathon',
    location: 'Berlin, Germany',
    description: 'Build innovative applications using the Levitas API.',
  },
];

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('projects');

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
                GLOBAL NETWORK
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
              <span className="text-[var(--text-primary)]">Join the </span>
              <span className="text-gradient">Community</span>
            </h1>
            <p className="text-lg text-[var(--text-secondary)] mb-8 animate-slide-up animation-delay-200">
              Connect with innovators, share projects, and explore the future of
              anti-gravity technology together.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-slide-up animation-delay-300">
            {communityStats.map((stat, index) => (
              <div
                key={index}
                className="card text-center py-8 hover:border-[var(--neon-violet)] transition-all duration-500"
              >
                <div className="font-display text-3xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--text-muted)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            {['projects', 'events', 'forum'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-display text-sm uppercase tracking-wider rounded-lg transition-all duration-500 ${
                  activeTab === tab
                    ? 'bg-[var(--neon-cyan)] text-[var(--bg-primary)]'
                    : 'bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--neon-cyan)]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
              {featuredProjects.map((project, index) => (
                <div
                  key={index}
                  className="card group cursor-pointer transition-all duration-500 hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 flex items-center justify-center bg-[var(--bg-secondary)] rounded-xl text-3xl">
                      {project.image}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--neon-cyan)] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[var(--text-muted)] mb-2">
                        by {project.author} • {project.location}
                      </p>
                      <p className="text-[var(--text-secondary)]">
                        {project.description}
                      </p>
                      <div className="flex items-center gap-2 mt-4 text-sm text-[var(--neon-cyan)]">
                        <span>♥</span>
                        <span>{project.likes.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Events Tab */}
          {activeTab === 'events' && (
            <div className="space-y-6 animate-fade-in">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="card flex flex-col md:flex-row md:items-center gap-6 transition-all duration-500 hover:scale-[1.01]"
                >
                  <div className="text-center md:text-left md:w-32">
                    <div className="font-mono text-[var(--neon-cyan)]">{event.date}</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-display text-xl font-semibold text-[var(--text-primary)]">
                        {event.title}
                      </h3>
                      <span className="px-3 py-1 text-xs font-mono bg-[var(--neon-violet)]/20 text-[var(--neon-violet)] rounded-full">
                        {event.type}
                      </span>
                    </div>
                    <p className="text-[var(--text-secondary)]">{event.description}</p>
                    <p className="text-sm text-[var(--text-muted)] mt-2">{event.location}</p>
                  </div>
                  <Link
                    href="#"
                    className="btn btn-secondary transition-all duration-500"
                  >
                    Register
                  </Link>
                </div>
              ))}
            </div>
          )}

          {/* Forum Tab */}
          {activeTab === 'forum' && (
            <div className="text-center py-16 animate-fade-in">
              <div className="text-6xl mb-6">💬</div>
              <h3 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-4">
                Community Forum
              </h3>
              <p className="text-[var(--text-secondary)] mb-8 max-w-md mx-auto">
                Join discussions, ask questions, and share your experiences with
                fellow Levitas users worldwide.
              </p>
              <Link href="#" className="btn btn-primary transition-all duration-500">
                Visit Forum
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-6">
            Ready to Connect?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            Join thousands of innovators pushing the boundaries of what&apos;s possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-primary transition-all duration-500">
              Join Community
            </Link>
            <Link href="/docs" className="btn btn-secondary transition-all duration-500">
              Developer Portal
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
