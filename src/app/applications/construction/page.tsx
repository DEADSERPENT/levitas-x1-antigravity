import { Navbar, Footer } from '@/components';
import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';
import Link from 'next/link';

export const metadata = {
  title: 'Construction | Precision Building | Levitas X1',
  description: 'Transform construction with Levitas X1. Precision material placement, glass installation, confined space work.',
};

const benefits = [
  { stat: '60%', label: 'Time Savings', desc: 'Average reduction in installation time for heavy components.' },
  { stat: '89%', label: 'Breakage Reduction', desc: 'Decrease in glass and fragile material damage.' },
  { stat: '0', label: 'Crane Rental', desc: 'Eliminate crane rental for loads under 1,000kg.' },
  { stat: '94%', label: 'Injury Reduction', desc: 'Fewer lifting-related injuries on site.' },
];

const applications = [
  { title: 'Glass Installation', desc: 'Position large glass panels with millimeter precision. Zero vibration, zero breakage risk from handling.' },
  { title: 'Structural Steel', desc: 'Place beams and columns without crane dependency. Work in tight spaces inaccessible to heavy equipment.' },
  { title: 'HVAC Systems', desc: 'Install heavy ductwork, units, and equipment in any position. No scaffolding required.' },
  { title: 'Elevator Installation', desc: 'Position cabs, counterweights, and machinery in confined shafts with complete control.' },
  { title: 'Facade Work', desc: 'Handle cladding panels, stone, and finishing materials at any height without swing stages.' },
  { title: 'Renovation', desc: 'Work in occupied buildings without heavy equipment disruption. Silent, clean operation.' },
];

export default function ConstructionPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageHeader
        overline="Industry Application"
        title="Precision"
        titleAccent="Construction"
        subtitle="Place anything, anywhere, with millimeter accuracy. No cranes, no breakage, no injuries."
        backgroundGlow="cyan"
      />

      <ContentSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((b) => (
            <div key={b.label} className="text-center p-6 bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-lg">
              <div className="font-['Orbitron',system-ui,sans-serif] text-4xl font-bold text-gradient mb-2">{b.stat}</div>
              <div className="text-[var(--text-primary)] font-semibold mb-1">{b.label}</div>
              <div className="text-[var(--text-muted)] text-sm">{b.desc}</div>
            </div>
          ))}
        </div>

        <div className="section-header">
          <h2 className="section-title">Construction Applications</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app) => (
            <div key={app.title} className="card">
              <h3 className="font-['Orbitron',system-ui,sans-serif] text-lg font-semibold text-[var(--text-primary)] mb-2">{app.title}</h3>
              <p className="text-[var(--text-secondary)] text-sm">{app.desc}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection background="secondary">
        <div className="text-center">
          <h2 className="section-title text-3xl mb-4">Build the Future</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products/pro" className="btn btn-primary">X1 Pro for Construction</Link>
            <Link href="/products/enterprise" className="btn btn-secondary">Fleet Deployment</Link>
          </div>
        </div>
      </ContentSection>

      <Footer />
    </main>
  );
}
