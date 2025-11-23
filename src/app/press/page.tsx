import { Navbar, Footer } from '@/components';
import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';
import Link from 'next/link';

export const metadata = {
  title: 'Press & Media | Levitas Industries',
  description: 'Press releases, media kit, and news coverage of Levitas Industries.',
};

const pressReleases = [
  { date: 'Nov 15, 2024', title: 'Levitas X1 Achieves FAA Civilian Certification', excerpt: 'First consumer antigravity device approved for civilian use in the United States.' },
  { date: 'Sep 22, 2024', title: 'Levitas Raises $800M Series C', excerpt: 'Funding round led by Sequoia Capital values company at $8.5 billion.' },
  { date: 'Jul 10, 2024', title: 'Manufacturing Facility Opens in Nevada', excerpt: '500,000 sq ft facility begins production of Levitas X1 units.' },
  { date: 'Apr 5, 2024', title: 'Levitas Partners with Major Film Studio', excerpt: 'Multi-year agreement brings antigravity technology to Hollywood productions.' },
  { date: 'Jan 18, 2024', title: 'Pre-Orders Exceed 10,000 Units', excerpt: 'Strong demand signals consumer appetite for antigravity technology.' },
];

const coverage = [
  { outlet: 'TechCrunch', headline: '"Levitas is building the future of logistics"' },
  { outlet: 'Wired', headline: '"The physics-defying startup that might actually work"' },
  { outlet: 'Bloomberg', headline: '"$8.5B valuation makes Levitas highest-valued deeptech startup"' },
  { outlet: 'The Verge', headline: '"We tried the Levitas X1 and gravity will never be the same"' },
  { outlet: 'MIT Technology Review', headline: '"Quantum flux pinning leaves the lab"' },
  { outlet: 'Forbes', headline: '"Dr. Vasquez named to Midas List for Levitas success"' },
];

export default function PressPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageHeader
        overline="News & Media"
        title="Press"
        titleAccent="Room"
        subtitle="Media resources, press releases, and news coverage of Levitas Industries."
      />

      <ContentSection>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="font-['Orbitron',system-ui,sans-serif] text-2xl font-bold text-[var(--text-primary)] mb-6">Press Releases</h2>
            <div className="space-y-4">
              {pressReleases.map((pr) => (
                <div key={pr.title} className="card cursor-pointer group">
                  <span className="text-[var(--neon-cyan)] font-mono text-xs">{pr.date}</span>
                  <h3 className="font-semibold text-[var(--text-primary)] mt-1 group-hover:text-[var(--neon-cyan)] transition-colors">{pr.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm mt-2">{pr.excerpt}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-['Orbitron',system-ui,sans-serif] text-2xl font-bold text-[var(--text-primary)] mb-6">Media Kit</h2>
            <div className="bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-lg p-6 mb-8">
              <p className="text-[var(--text-secondary)] text-sm mb-4">
                Download logos, product images, executive headshots, and brand guidelines.
              </p>
              <button className="btn btn-secondary w-full">Download Media Kit</button>
            </div>

            <h2 className="font-['Orbitron',system-ui,sans-serif] text-2xl font-bold text-[var(--text-primary)] mb-6">Press Contact</h2>
            <div className="bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-lg p-6">
              <p className="text-[var(--text-primary)] font-semibold">Sarah Kim</p>
              <p className="text-[var(--text-muted)] text-sm">VP of Communications</p>
              <a href="mailto:press@levitas.tech" className="text-[var(--neon-cyan)] hover:underline block mt-2">press@levitas.tech</a>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection background="secondary">
        <div className="section-header">
          <h2 className="section-title">In the News</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coverage.map((c) => (
            <div key={c.outlet} className="card">
              <span className="text-[var(--neon-violet)] font-mono text-sm">{c.outlet}</span>
              <p className="text-[var(--text-primary)] mt-2 italic">{c.headline}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <Footer />
    </main>
  );
}
