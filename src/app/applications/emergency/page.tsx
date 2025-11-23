import { Navbar, Footer } from '@/components';
import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';
import Link from 'next/link';

export const metadata = {
  title: 'Emergency Services | First Response | Levitas X1',
  description: 'Emergency response with Levitas X1. Debris removal, patient extraction, rapid deployment.',
};

const applications = [
  { title: 'Debris Removal', desc: 'Clear collapsed structures, fallen trees, and accident debris quickly. Access trapped victims faster.' },
  { title: 'Patient Extraction', desc: 'Remove injured persons from vehicles, buildings, and confined spaces with minimal movement.' },
  { title: 'Equipment Deployment', desc: 'Position heavy rescue equipment, generators, and supplies in difficult terrain.' },
  { title: 'Flood Response', desc: 'IP68 rating allows operation in flooded areas. Move sandbags, pumps, and supplies.' },
  { title: 'Wildfire Support', desc: 'Rapid equipment positioning. Move firebreaks, create access paths, deploy supplies.' },
  { title: 'Urban Search & Rescue', desc: 'Navigate rubble and debris fields. Stabilize structures. Extract survivors safely.' },
];

export default function EmergencyPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageHeader
        overline="Industry Application"
        title="Emergency"
        titleAccent="Services"
        subtitle="When seconds matter, eliminate the physical barriers to rescue. Debris removal, patient extraction, rapid deployment."
        backgroundGlow="cyan"
      />

      <ContentSection>
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
          <h2 className="section-title text-3xl mb-4">First Responder Programs</h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-2xl mx-auto">
            Special pricing and training programs available for fire departments, EMS, and search & rescue teams.
          </p>
          <Link href="/contact" className="btn btn-primary">Contact Government Sales</Link>
        </div>
      </ContentSection>

      <Footer />
    </main>
  );
}
