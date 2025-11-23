import { Navbar, Footer } from '@/components';
import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';
import Link from 'next/link';

export const metadata = {
  title: 'Space & Aerospace | Space Industry | Levitas X1',
  description: 'Space industry applications of Levitas X1. Satellite handling, launch preparation, space habitat construction.',
};

const applications = [
  { title: 'Satellite Integration', desc: 'Position and orient satellites during integration with zero risk of impact damage. Precision alignment for sensitive instruments.' },
  { title: 'Launch Vehicle Assembly', desc: 'Handle rocket stages, fairings, and payload adapters. Reduce integration time and tooling requirements.' },
  { title: 'Cleanroom Operations', desc: 'Move equipment in cleanroom environments without floor contact. Maintain contamination control.' },
  { title: 'Astronaut Training', desc: 'Realistic microgravity simulation for EVA training, tool familiarization, and procedure practice.' },
  { title: 'Space Habitat Modules', desc: 'Assemble and position habitat modules, life support systems, and interior components.' },
  { title: 'Hardware Testing', desc: 'Validate space hardware in simulated microgravity. Test deployment mechanisms, antennas, solar arrays.' },
];

const partners = ['NASA', 'SpaceX', 'Blue Origin', 'ESA', 'JAXA', 'Northrop Grumman'];

export default function SpacePage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageHeader
        overline="Industry Application"
        title="Space &"
        titleAccent="Aerospace"
        subtitle="From satellite integration to astronaut training, Levitas technology is enabling the next era of space exploration."
        backgroundGlow="blue"
      />

      <ContentSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {applications.map((app) => (
            <div key={app.title} className="card">
              <h3 className="font-['Orbitron',system-ui,sans-serif] text-lg font-semibold text-[var(--text-primary)] mb-2">{app.title}</h3>
              <p className="text-[var(--text-secondary)] text-sm">{app.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-[var(--text-muted)] font-mono text-sm mb-6">TRUSTED BY LEADING SPACE ORGANIZATIONS</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((p) => (
              <div key={p} className="px-6 py-3 bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-lg">
                <span className="font-['Orbitron',system-ui,sans-serif] text-[var(--text-secondary)]">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>

      <ContentSection background="secondary">
        <div className="text-center">
          <h2 className="section-title text-3xl mb-4">Aerospace Partnerships</h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-2xl mx-auto">
            Custom solutions for space agencies, launch providers, and satellite manufacturers.
          </p>
          <Link href="/products/enterprise" className="btn btn-primary">Enterprise Solutions</Link>
        </div>
      </ContentSection>

      <Footer />
    </main>
  );
}
