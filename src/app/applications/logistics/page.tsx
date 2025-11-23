import { Navbar, Footer } from '@/components';
import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';
import Link from 'next/link';

export const metadata = {
  title: 'Industrial Logistics | Warehouse Antigravity | Levitas X1',
  description: 'Transform warehouse operations with Levitas X1 antigravity technology. 73% efficiency gains, 89% injury reduction.',
};

const benefits = [
  { stat: '73%', label: 'Efficiency Gain', desc: 'Average throughput improvement in pilot warehouse deployments.' },
  { stat: '89%', label: 'Injury Reduction', desc: 'Decrease in lifting-related workplace injuries.' },
  { stat: '4x', label: 'Vertical Storage', desc: 'Increase in usable vertical space utilization.' },
  { stat: '60%', label: 'Labor Savings', desc: 'Reduction in physical handling labor costs.' },
];

const useCases = [
  { title: 'Pallet Movement', desc: 'Move fully loaded pallets up to 1,000kg with a single operator. No forklifts, no narrow aisle constraints.' },
  { title: 'Vertical Stacking', desc: 'Stack inventory to any height without cherry pickers or scaffolding. Access any level instantly.' },
  { title: 'Fragile Goods', desc: 'Handle glass, electronics, and delicate items with zero vibration. Eliminate breakage from drops and impacts.' },
  { title: 'Cold Storage', desc: 'IP69K rating means full operation in freezer environments down to -40°C.' },
  { title: 'Cross-Docking', desc: 'Rapid load/unload without dock equipment. Reduce dwell time dramatically.' },
  { title: 'Returns Processing', desc: 'Quick inspection and restock of returned items. Reduce returns backlog.' },
];

export default function LogisticsPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageHeader
        overline="Industry Application"
        title="Industrial"
        titleAccent="Logistics"
        subtitle="Revolutionize warehouse operations with effortless load handling, unlimited vertical storage, and dramatic safety improvements."
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
          <h2 className="section-title">Use Cases</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc) => (
            <div key={uc.title} className="card">
              <h3 className="font-['Orbitron',system-ui,sans-serif] text-lg font-semibold text-[var(--text-primary)] mb-2">{uc.title}</h3>
              <p className="text-[var(--text-secondary)] text-sm">{uc.desc}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection background="secondary">
        <div className="text-center">
          <h2 className="section-title text-3xl mb-4">Ready to Transform Your Warehouse?</h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-2xl mx-auto">
            Contact our enterprise team for a customized deployment plan and ROI analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products/enterprise" className="btn btn-primary">Enterprise Solutions</Link>
            <Link href="/contact" className="btn btn-secondary">Contact Sales</Link>
          </div>
        </div>
      </ContentSection>

      <Footer />
    </main>
  );
}
