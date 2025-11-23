import { Navbar, Footer, Safety } from '@/components';
import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';

export const metadata = {
  title: 'Safety Guidelines | Levitas X1 Operating Procedures',
  description: 'Safety guidelines, emergency procedures, and best practices for Levitas X1 operation.',
};

const guidelines = [
  { title: 'Pre-Operation Checklist', items: ['Verify certification is current', 'Check device status indicators', 'Confirm geo-fence compliance', 'Assess load weight accurately', 'Clear operating area of obstacles'] },
  { title: 'During Operation', items: ['Maintain visual contact with load', 'Stay within rated capacity', 'Monitor status indicators', 'Keep hands clear of flux field', 'Be prepared for emergency descent'] },
  { title: 'Emergency Procedures', items: ['Press emergency stop immediately', 'Clear area beneath load', 'Contact support if indicators show red', 'Document any incidents', 'Do not attempt to override safety systems'] },
  { title: 'Storage & Transport', items: ['Use provided protective case', 'Store in dry environment', 'Avoid magnetic field sources', 'Declare when air traveling', 'Keep away from children'] },
];

export default function SafetyPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageHeader
        overline="Important"
        title="Safety"
        titleAccent="Guidelines"
        subtitle="Your safety is our highest priority. Please read and understand these guidelines before operating your Levitas X1."
        backgroundGlow="cyan"
      />

      <ContentSection>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {guidelines.map((g) => (
            <div key={g.title} className="bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-lg p-6">
              <h3 className="font-['Orbitron',system-ui,sans-serif] text-lg font-semibold text-[var(--neon-cyan)] mb-4">{g.title}</h3>
              <ul className="space-y-2">
                {g.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[var(--text-secondary)]">
                    <span className="text-[var(--neon-cyan)]">◈</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ContentSection>

      <Safety />
      <Footer />
    </main>
  );
}
