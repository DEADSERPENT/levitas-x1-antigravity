import { Navbar, Footer } from '@/components';
import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';
import Link from 'next/link';

export const metadata = {
  title: 'Case Studies | Levitas X1 Success Stories',
  description: 'Real-world success stories from companies using Levitas X1 antigravity technology.',
};

const caseStudies = [
  { id: 1, client: 'Global Logistics Corp', industry: 'Warehousing', result: '73% efficiency gain', units: 2400, summary: 'Deployed across 12 distribution centers. Achieved 73% throughput improvement and 89% reduction in workplace injuries.' },
  { id: 2, client: 'Paramount Pictures', industry: 'Film Production', result: '4x faster setup', units: 48, summary: 'Custom rig system for major blockbuster. Zero injuries, practical levitation effects, silent operation for live audio.' },
  { id: 3, client: 'Shanghai Construction Group', industry: 'Construction', result: '89% less breakage', units: 120, summary: 'High-rise glass installation system. Precision positioning eliminated breakage and reduced installation time by 60%.' },
  { id: 4, client: 'Johns Hopkins Hospital', industry: 'Healthcare', result: '94% injury reduction', units: 36, summary: 'Patient transfer and positioning system. Eliminated lifting injuries for nursing staff.' },
  { id: 5, client: 'CERN', industry: 'Research', result: 'New discoveries', units: 12, summary: 'Microgravity research platform enabling experiments previously only possible in orbit.' },
  { id: 6, client: 'Amazon Fulfillment', industry: 'E-Commerce', result: '4x vertical storage', units: 1800, summary: 'Pilot program in three fulfillment centers. Exploring wider deployment.' },
];

export default function CaseStudiesPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageHeader
        overline="Success Stories"
        title="Case"
        titleAccent="Studies"
        subtitle="See how organizations across industries are transforming their operations with Levitas X1."
      />

      <ContentSection>
        <div className="space-y-8">
          {caseStudies.map((cs) => (
            <div key={cs.id} className="card">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-shrink-0 w-24 h-24 rounded-lg bg-gradient-to-br from-[var(--neon-cyan)]/20 to-[var(--neon-violet)]/20 border border-[var(--border-glow)] flex items-center justify-center">
                  <span className="font-['Orbitron',system-ui,sans-serif] text-3xl font-bold text-gradient">0{cs.id}</span>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-['Orbitron',system-ui,sans-serif] text-xl font-bold text-[var(--text-primary)]">{cs.client}</h3>
                    <span className="px-2 py-0.5 bg-[var(--bg-panel)] rounded text-xs font-mono text-[var(--neon-cyan)]">{cs.industry}</span>
                  </div>
                  <p className="text-[var(--text-secondary)] mb-4">{cs.summary}</p>
                  <div className="flex flex-wrap gap-6">
                    <div>
                      <span className="text-[var(--text-muted)] text-sm">Result</span>
                      <div className="font-['Orbitron',system-ui,sans-serif] font-bold text-[var(--neon-cyan)]">{cs.result}</div>
                    </div>
                    <div>
                      <span className="text-[var(--text-muted)] text-sm">Units Deployed</span>
                      <div className="font-['Orbitron',system-ui,sans-serif] font-bold text-[var(--text-primary)]">{cs.units.toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection background="secondary">
        <div className="text-center">
          <h2 className="section-title text-3xl mb-4">Become Our Next Success Story</h2>
          <Link href="/contact" className="btn btn-primary">Contact Enterprise Sales</Link>
        </div>
      </ContentSection>

      <Footer />
    </main>
  );
}
