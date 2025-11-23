import { Navbar, Footer } from '@/components';
import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';
import Link from 'next/link';

export const metadata = {
  title: 'Levitas X1 Pro | Industrial Antigravity Module | $149,999',
  description: 'The Levitas X1 Pro delivers 1,000kg lift capacity for commercial and industrial applications. 75-year battery, API access, priority support.',
};

const specs = [
  { category: 'Performance', items: [
    { label: 'Lift Capacity', value: '1,000 kg', note: 'At Earth standard gravity' },
    { label: 'Operating Ceiling', value: '500 ft', note: 'Commercial altitude unlock' },
    { label: 'Flux Field Radius', value: '4.8 m', note: 'Fully adjustable' },
    { label: 'Response Time', value: '0.05 ms', note: 'Enhanced neural engine' },
  ]},
  { category: 'Power', items: [
    { label: 'Battery Type', value: 'Nuclear Diamond+', note: 'Enhanced C-14 betavoltaic' },
    { label: 'Operational Life', value: '75 years', note: 'Extended formula' },
    { label: 'Power Output', value: '45 μW', note: 'Triple capacity' },
  ]},
  { category: 'Physical', items: [
    { label: 'Weight', value: '8.7 kg', note: 'Including power cell' },
    { label: 'Dimensions', value: '280 × 280 × 140 mm', note: 'L × W × H' },
    { label: 'Material', value: 'Ti-6Al-4V + CF', note: 'Titanium + Carbon Fiber' },
    { label: 'Protection', value: 'IP69K', note: 'High-pressure wash safe' },
  ]},
  { category: 'Integration', items: [
    { label: 'API Access', value: 'Full REST API', note: 'Plus SDK & webhooks' },
    { label: 'Fleet Management', value: 'Yes', note: 'Unlimited units' },
    { label: 'Data Export', value: 'Real-time', note: 'JSON, CSV, MQTT' },
    { label: 'Custom Integration', value: 'Available', note: 'Professional services' },
  ]},
];

const proFeatures = [
  { icon: '◈', title: '4x Lift Capacity', desc: 'Handle up to 1,000kg—four times the civilian model. Move pallets, machinery, and industrial equipment.' },
  { icon: '◉', title: 'Extended Altitude', desc: '500ft commercial ceiling for warehouse racking, construction, and aerial applications.' },
  { icon: '⬡', title: 'Full API Access', desc: 'Integrate with warehouse management systems, robotics platforms, and custom applications.' },
  { icon: '◇', title: 'Fleet Management', desc: 'Monitor and control unlimited units from a single dashboard. Perfect for logistics operations.' },
  { icon: '△', title: 'Priority Support', desc: '24/7 quantum concierge with 15-minute response SLA. Dedicated account manager.' },
  { icon: '○', title: 'Custom Colors', desc: 'Choose from 12 standard colors or request custom powder coating to match your brand.' },
];

export default function ProProductPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <PageHeader
        overline="Industrial Grade"
        title="Levitas X1"
        titleAccent="Pro"
        subtitle="Built for demanding commercial and industrial environments. 1,000kg lift capacity, 75-year extended battery, full API access, and priority quantum support."
        backgroundGlow="violet"
      />

      {/* Hero */}
      <ContentSection>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-panel)] rounded-lg border-2 border-[var(--neon-violet)] flex items-center justify-center overflow-hidden shadow-[0_0_60px_var(--glow-violet)]">
              <div className="relative w-72 h-72">
                <div className="absolute inset-0 border-2 border-[var(--neon-violet)]/40 rounded-full animate-[ring-rotate_15s_linear_infinite]" />
                <div className="absolute inset-6 border-2 border-[var(--neon-cyan)]/30 rounded-full animate-[ring-rotate_12s_linear_infinite_reverse]" />
                <div className="absolute inset-12 border border-[var(--neon-violet)]/60 rounded-full animate-[ring-rotate_8s_linear_infinite]" />
                <div className="absolute inset-20 bg-gradient-to-br from-[var(--neon-violet)]/20 to-[var(--neon-cyan)]/20 rounded-2xl border-2 border-[var(--neon-violet)] flex items-center justify-center">
                  <div className="w-16 h-16 bg-[var(--neon-violet)] rounded-full animate-[ring-pulse_2s_ease-in-out_infinite] shadow-[0_0_40px_var(--glow-violet)]" />
                </div>
                <div className="absolute top-4 left-1/2 -translate-x-1/2 px-2 py-1 bg-[var(--bg-primary)]/80 rounded text-xs font-mono text-[var(--neon-violet)]">PRO</div>
              </div>
              <div className="scan-line opacity-20" />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-[var(--bg-card)] border-2 border-[var(--neon-violet)] rounded-full">
              <span className="font-['Orbitron',system-ui,sans-serif] font-bold text-[var(--neon-violet)]">$149,999</span>
              <span className="text-[var(--text-muted)] text-sm ml-2">USD</span>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-block px-3 py-1 bg-[var(--neon-violet)]/20 border border-[var(--neon-violet)] rounded text-sm font-mono text-[var(--neon-violet)] mb-4">
              MOST POPULAR FOR BUSINESS
            </div>
            <h2 className="font-['Orbitron',system-ui,sans-serif] text-3xl font-bold text-[var(--text-primary)] mb-4">
              Industrial Power, Consumer Simplicity
            </h2>
            <p className="text-[var(--text-secondary)] text-lg mb-8 leading-relaxed">
              The X1 Pro is the choice for serious commercial operations. With 4x the lift capacity, extended altitude ceiling, and full integration capabilities, it&apos;s the backbone of modern logistics.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {proFeatures.map((feature, index) => (
                <div key={index} className="flex gap-3 p-3 bg-[var(--bg-card)]/50 rounded-lg border border-[var(--border-glow)]">
                  <span className="text-[var(--neon-violet)] text-lg">{feature.icon}</span>
                  <div>
                    <div className="font-semibold text-[var(--text-primary)] text-sm">{feature.title}</div>
                    <div className="text-[var(--text-muted)] text-xs">{feature.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/pricing" className="btn btn-primary bg-gradient-to-r from-[var(--neon-violet)] to-[var(--neon-blue)]">
                Reserve Pro — $15,000 Deposit
              </Link>
              <Link href="/products/compare" className="btn btn-secondary border-[var(--neon-violet)] text-[var(--neon-violet)]">
                Compare All Models
              </Link>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Specifications */}
      <ContentSection background="secondary">
        <div className="section-header">
          <span className="section-overline">[SPECIFICATIONS]</span>
          <h2 className="section-title">Pro Specifications</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {specs.map((group) => (
            <div key={group.category} className="bg-[var(--bg-card)] border border-[var(--neon-violet)]/30 rounded-lg overflow-hidden">
              <div className="px-6 py-4 bg-[var(--neon-violet)]/10 border-b border-[var(--neon-violet)]/30">
                <h3 className="font-['Orbitron',system-ui,sans-serif] font-semibold text-[var(--neon-violet)]">
                  {group.category}
                </h3>
              </div>
              <div className="p-6 space-y-4">
                {group.items.map((item) => (
                  <div key={item.label} className="flex justify-between items-start">
                    <div>
                      <div className="text-[var(--text-primary)] font-medium">{item.label}</div>
                      <div className="text-[var(--text-muted)] text-sm">{item.note}</div>
                    </div>
                    <div className="font-['Orbitron',system-ui,sans-serif] font-semibold text-[var(--text-primary)] text-right">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Industries */}
      <ContentSection>
        <div className="section-header">
          <span className="section-overline">[INDUSTRIES]</span>
          <h2 className="section-title">Built For Industry</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Warehousing', stat: '73%', metric: 'efficiency gain' },
            { name: 'Manufacturing', stat: '89%', metric: 'injury reduction' },
            { name: 'Film Production', stat: '4x', metric: 'faster setup' },
            { name: 'Construction', stat: '60%', metric: 'time savings' },
          ].map((industry) => (
            <div key={industry.name} className="text-center p-6 bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-lg">
              <div className="font-['Orbitron',system-ui,sans-serif] text-3xl font-bold text-[var(--neon-violet)] mb-1">{industry.stat}</div>
              <div className="text-[var(--text-muted)] text-sm mb-2">{industry.metric}</div>
              <div className="text-[var(--text-primary)] font-semibold">{industry.name}</div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* CTA */}
      <ContentSection background="secondary">
        <div className="bg-gradient-to-r from-[var(--neon-violet)]/10 to-[var(--neon-blue)]/10 border-2 border-[var(--neon-violet)] rounded-lg p-8 lg:p-12 text-center">
          <h2 className="font-['Orbitron',system-ui,sans-serif] text-3xl font-bold text-[var(--text-primary)] mb-4">
            Transform Your Operations
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-2xl mx-auto">
            Join the leading companies already using Levitas X1 Pro to revolutionize their workflows. Limited allocation available.
          </p>
          <Link href="/pricing" className="btn btn-primary bg-gradient-to-r from-[var(--neon-violet)] to-[var(--neon-blue)] text-lg px-12">
            Reserve Your Pro Unit
          </Link>
        </div>
      </ContentSection>

      <Footer />
    </main>
  );
}
