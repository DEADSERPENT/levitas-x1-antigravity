import { Navbar, Footer, Pricing } from '@/components';
import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';

export const metadata = {
  title: 'Pricing | Levitas X1 Antigravity Module',
  description: 'Pricing for Levitas X1 Civilian and Pro models. Reserve your unit today.',
};

export default function PricingPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageHeader
        overline="Investment"
        title="Transparent"
        titleAccent="Pricing"
        subtitle="No hidden fees. Choose your model, place your deposit, and join the post-gravity revolution."
      />
      <Pricing />
      <ContentSection>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-['Orbitron',system-ui,sans-serif] text-2xl font-bold text-[var(--text-primary)] mb-6 text-center">Reservation FAQ</h2>
          <div className="space-y-4">
            {[
              { q: 'Is the deposit refundable?', a: 'Yes, your deposit is fully refundable at any time before your unit ships.' },
              { q: 'When will I be charged the full amount?', a: 'The remaining balance is charged 30 days before your scheduled delivery date.' },
              { q: 'Can I upgrade from Civilian to Pro?', a: 'Yes, you can upgrade at any time. Your deposit transfers and you pay the difference.' },
              { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, wire transfers, and cryptocurrency (BTC, ETH).' },
              { q: 'Is financing available?', a: 'Yes, we offer 0% APR financing for 24 months on approved credit.' },
            ].map((item, i) => (
              <div key={i} className="p-4 bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-lg">
                <h3 className="font-semibold text-[var(--text-primary)] mb-2">{item.q}</h3>
                <p className="text-[var(--text-secondary)] text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>
      <Footer />
    </main>
  );
}
