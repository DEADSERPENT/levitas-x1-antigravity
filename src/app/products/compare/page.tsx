import { Navbar, Footer } from '@/components';
import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';
import Link from 'next/link';

export const metadata = {
  title: 'Compare Levitas X1 Models | Civilian vs Pro vs Enterprise',
  description: 'Compare all Levitas X1 antigravity module models. Find the perfect fit for your needs.',
};

const comparisonData = [
  { feature: 'Lift Capacity', civilian: '250 kg', pro: '1,000 kg', enterprise: 'Custom (unlimited)' },
  { feature: 'Operating Ceiling', civilian: '100 ft', pro: '500 ft', enterprise: 'Custom' },
  { feature: 'Battery Life', civilian: '50 years', pro: '75 years', enterprise: 'Custom' },
  { feature: 'Flux Field Radius', civilian: '2.4 m', pro: '4.8 m', enterprise: 'Custom' },
  { feature: 'Response Time', civilian: '0.1 ms', pro: '0.05 ms', enterprise: '0.01 ms' },
  { feature: 'Weight', civilian: '4.2 kg', pro: '8.7 kg', enterprise: 'Varies' },
  { feature: 'IP Rating', civilian: 'IP68', pro: 'IP69K', enterprise: 'Custom' },
  { feature: 'App Control', civilian: '✓', pro: '✓', enterprise: '✓' },
  { feature: 'Voice Control', civilian: '✓', pro: '✓', enterprise: '✓' },
  { feature: 'API Access', civilian: '—', pro: '✓', enterprise: '✓' },
  { feature: 'Fleet Management', civilian: '—', pro: '✓', enterprise: '✓' },
  { feature: 'Custom Integration', civilian: '—', pro: 'Limited', enterprise: '✓' },
  { feature: 'Custom Colors', civilian: '—', pro: '12 options', enterprise: 'Unlimited' },
  { feature: 'On-Site Support', civilian: '—', pro: 'Available', enterprise: 'Included' },
  { feature: 'Warranty', civilian: '10 years', pro: '15 years', enterprise: 'Custom SLA' },
  { feature: 'Support Level', civilian: 'Standard', pro: 'Priority', enterprise: 'Dedicated' },
  { feature: 'Deposit', civilian: '$5,000', pro: '$15,000', enterprise: 'Custom' },
  { feature: 'Price', civilian: '$49,999', pro: '$149,999', enterprise: 'Contact Us' },
];

export default function ComparePage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <PageHeader
        overline="Product Comparison"
        title="Choose Your"
        titleAccent="Model"
        subtitle="Compare all Levitas X1 configurations to find the perfect fit for your requirements."
      />

      <ContentSection>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr>
                <th className="text-left p-4 bg-[var(--bg-card)] border-b border-[var(--border-glow)]">
                  <span className="font-['Orbitron',system-ui,sans-serif] text-[var(--text-muted)]">Feature</span>
                </th>
                <th className="text-center p-4 bg-[var(--bg-card)] border-b border-[var(--neon-cyan)]">
                  <div className="font-['Orbitron',system-ui,sans-serif] text-[var(--neon-cyan)] text-lg">Civilian</div>
                  <div className="text-[var(--text-muted)] text-sm">Personal Use</div>
                </th>
                <th className="text-center p-4 bg-gradient-to-b from-[var(--neon-violet)]/20 to-[var(--bg-card)] border-b-2 border-[var(--neon-violet)] relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[var(--neon-violet)] text-[var(--bg-primary)] text-xs font-bold rounded">
                    POPULAR
                  </div>
                  <div className="font-['Orbitron',system-ui,sans-serif] text-[var(--neon-violet)] text-lg">Pro</div>
                  <div className="text-[var(--text-muted)] text-sm">Commercial</div>
                </th>
                <th className="text-center p-4 bg-[var(--bg-card)] border-b border-[var(--neon-blue)]">
                  <div className="font-['Orbitron',system-ui,sans-serif] text-[var(--neon-blue)] text-lg">Enterprise</div>
                  <div className="text-[var(--text-muted)] text-sm">Custom Solutions</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-[var(--bg-card)]/50' : ''}>
                  <td className="p-4 text-[var(--text-secondary)] border-b border-[var(--border-glow)]">
                    {row.feature}
                  </td>
                  <td className="p-4 text-center text-[var(--text-primary)] border-b border-[var(--border-glow)]">
                    <span className={row.civilian === '✓' ? 'text-[var(--success)]' : row.civilian === '—' ? 'text-[var(--text-muted)]' : ''}>
                      {row.civilian}
                    </span>
                  </td>
                  <td className="p-4 text-center text-[var(--text-primary)] border-b border-[var(--border-glow)] bg-[var(--neon-violet)]/5">
                    <span className={row.pro === '✓' ? 'text-[var(--success)]' : row.pro === '—' ? 'text-[var(--text-muted)]' : ''}>
                      {row.pro}
                    </span>
                  </td>
                  <td className="p-4 text-center text-[var(--text-primary)] border-b border-[var(--border-glow)]">
                    <span className={row.enterprise === '✓' ? 'text-[var(--success)]' : row.enterprise === '—' ? 'text-[var(--text-muted)]' : ''}>
                      {row.enterprise}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA Buttons */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6 bg-[var(--bg-card)] border border-[var(--neon-cyan)] rounded-lg">
            <h3 className="font-['Orbitron',system-ui,sans-serif] text-xl font-bold text-[var(--neon-cyan)] mb-2">Civilian</h3>
            <p className="text-[var(--text-secondary)] text-sm mb-4">Perfect for personal and home use</p>
            <Link href="/products/civilian" className="btn btn-secondary w-full">Learn More</Link>
          </div>
          <div className="text-center p-6 bg-gradient-to-b from-[var(--neon-violet)]/10 to-[var(--bg-card)] border-2 border-[var(--neon-violet)] rounded-lg">
            <h3 className="font-['Orbitron',system-ui,sans-serif] text-xl font-bold text-[var(--neon-violet)] mb-2">Pro</h3>
            <p className="text-[var(--text-secondary)] text-sm mb-4">Best for commercial operations</p>
            <Link href="/products/pro" className="btn btn-primary bg-gradient-to-r from-[var(--neon-violet)] to-[var(--neon-blue)] w-full">Learn More</Link>
          </div>
          <div className="text-center p-6 bg-[var(--bg-card)] border border-[var(--neon-blue)] rounded-lg">
            <h3 className="font-['Orbitron',system-ui,sans-serif] text-xl font-bold text-[var(--neon-blue)] mb-2">Enterprise</h3>
            <p className="text-[var(--text-secondary)] text-sm mb-4">Custom solutions at any scale</p>
            <Link href="/products/enterprise" className="btn btn-secondary border-[var(--neon-blue)] text-[var(--neon-blue)] w-full">Contact Sales</Link>
          </div>
        </div>
      </ContentSection>

      <Footer />
    </main>
  );
}
