import { Navbar, Footer } from '@/components';
import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';
import Link from 'next/link';

export const metadata = {
  title: 'Regulatory & Legal Information | Levitas Industries',
  description: 'Regulatory certifications, export compliance, and legal information for Levitas X1.',
};

const certifications = [
  { name: 'FAA Part 107', desc: 'US civilian airspace operation certification', status: 'Approved' },
  { name: 'EU 2019/947', desc: 'European Union drone & UAS regulation compliance', status: 'Approved' },
  { name: 'CE Marking', desc: 'European conformity certification', status: 'Approved' },
  { name: 'FCC Part 15', desc: 'US radio frequency emissions compliance', status: 'Approved' },
  { name: 'UL 2272', desc: 'Electrical systems safety certification', status: 'Approved' },
  { name: 'ISO 9001:2025', desc: 'Quality management systems', status: 'Certified' },
  { name: 'IATA Special Cargo', desc: 'Air transport guidelines (pending)', status: 'In Progress' },
];

const exportRestrictions = [
  'Russia', 'Belarus', 'North Korea', 'Iran', 'Syria', 'Cuba', 'Venezuela'
];

export default function LegalPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageHeader overline="Compliance" title="Regulatory &" titleAccent="Legal" subtitle="Certifications, export compliance, and regulatory information." />

      <ContentSection>
        <div className="section-header text-left">
          <h2 className="section-title text-2xl">Certifications & Approvals</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {certifications.map((cert) => (
            <div key={cert.name} className="flex justify-between items-center p-4 bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-lg">
              <div>
                <h3 className="font-semibold text-[var(--text-primary)]">{cert.name}</h3>
                <p className="text-[var(--text-muted)] text-sm">{cert.desc}</p>
              </div>
              <span className={`px-3 py-1 rounded text-sm font-mono ${cert.status === 'Approved' || cert.status === 'Certified' ? 'bg-[var(--success)]/20 text-[var(--success)]' : 'bg-[var(--warning)]/20 text-[var(--warning)]'}`}>
                {cert.status}
              </span>
            </div>
          ))}
        </div>

        <div className="section-header text-left">
          <h2 className="section-title text-2xl">Export Compliance</h2>
        </div>
        <div className="bg-[var(--bg-card)] border border-[var(--warning)]/30 rounded-lg p-6 mb-12">
          <p className="text-[var(--text-secondary)] mb-4">
            Levitas X1 is subject to US Export Administration Regulations (EAR). Export is prohibited to the following countries:
          </p>
          <div className="flex flex-wrap gap-2">
            {exportRestrictions.map((country) => (
              <span key={country} className="px-3 py-1 bg-[var(--error)]/20 text-[var(--error)] rounded text-sm">{country}</span>
            ))}
          </div>
        </div>

        <div className="section-header text-left">
          <h2 className="section-title text-2xl">Legal Documents</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/privacy" className="card text-center hover:border-[var(--neon-cyan)]">
            <h3 className="font-semibold text-[var(--text-primary)]">Privacy Policy</h3>
          </Link>
          <Link href="/terms" className="card text-center hover:border-[var(--neon-cyan)]">
            <h3 className="font-semibold text-[var(--text-primary)]">Terms of Service</h3>
          </Link>
          <Link href="/safety" className="card text-center hover:border-[var(--neon-cyan)]">
            <h3 className="font-semibold text-[var(--text-primary)]">Safety Guidelines</h3>
          </Link>
        </div>
      </ContentSection>

      <Footer />
    </main>
  );
}
