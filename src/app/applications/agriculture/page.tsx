import { Navbar, Footer } from '@/components';
import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';
import Link from 'next/link';

export const metadata = {
  title: 'Agriculture | Farm Operations | Levitas X1',
  description: 'Modern farming with Levitas X1. Handle feed, equipment, and produce with zero physical strain.',
};

const applications = [
  { title: 'Feed Handling', desc: 'Move heavy feed bags, bales, and bulk containers without back strain. One person can do the work of three.' },
  { title: 'Equipment Maintenance', desc: 'Position heavy tractor parts, implements, and machinery for repair. No need for hydraulic lifts.' },
  { title: 'Harvest Transport', desc: 'Move produce bins, crates, and containers across uneven terrain smoothly.' },
  { title: 'Greenhouse Operations', desc: 'Position plants, containers, and growing media at any level. Maximize vertical growing space.' },
  { title: 'Livestock Management', desc: 'Move injured or ill animals without stress or injury to animal or handler.' },
  { title: 'Storage Organization', desc: 'Stack and retrieve stored equipment, supplies, and inventory from any height.' },
];

export default function AgriculturePage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageHeader
        overline="Industry Application"
        title="Agriculture &"
        titleAccent="Farming"
        subtitle="Reduce physical strain in farming operations. Handle heavy loads across challenging terrain with ease."
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
          <h2 className="section-title text-3xl mb-4">Farm Ready</h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-2xl mx-auto">
            IP68 weather resistance means Levitas X1 operates in dust, rain, and extreme temperatures.
          </p>
          <Link href="/products/civilian" className="btn btn-primary">Get X1 for Your Farm</Link>
        </div>
      </ContentSection>

      <Footer />
    </main>
  );
}
