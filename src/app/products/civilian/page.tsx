import { Navbar, Footer } from '@/components';
import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';
import Link from 'next/link';

export const metadata = {
  title: 'Levitas X1 Civilian | Personal Antigravity Module | $49,999',
  description: 'The Levitas X1 Civilian is the world\'s first consumer-grade antigravity device. 250kg lift capacity, 50-year battery, voice control.',
};

const specs = [
  { category: 'Performance', items: [
    { label: 'Lift Capacity', value: '250 kg', note: 'At Earth standard gravity (9.8 m/s²)' },
    { label: 'Operating Ceiling', value: '100 ft', note: 'Civilian geo-lock enforced' },
    { label: 'Flux Field Radius', value: '2.4 m', note: 'Adjustable via app' },
    { label: 'Response Time', value: '0.1 ms', note: 'Neural engine adjustment cycle' },
  ]},
  { category: 'Power', items: [
    { label: 'Battery Type', value: 'Nuclear Diamond', note: 'Carbon-14 betavoltaic' },
    { label: 'Operational Life', value: '50 years', note: 'No charging required' },
    { label: 'Power Output', value: '15 μW', note: 'Continuous' },
  ]},
  { category: 'Physical', items: [
    { label: 'Weight', value: '4.2 kg', note: 'Including power cell' },
    { label: 'Dimensions', value: '180 × 180 × 95 mm', note: 'L × W × H' },
    { label: 'Material', value: 'Ti-6Al-4V', note: 'Aerospace grade titanium' },
    { label: 'Protection', value: 'IP68', note: 'Submersible to 3m' },
  ]},
  { category: 'Connectivity', items: [
    { label: 'App Control', value: 'iOS & Android', note: 'Full device management' },
    { label: 'Voice Control', value: 'Yes', note: 'Siri, Google, Alexa' },
    { label: 'Bluetooth', value: '5.3', note: 'Low energy' },
    { label: 'WiFi', value: '802.11ax', note: 'WiFi 6' },
  ]},
];

const included = [
  'Levitas X1 Civilian Unit',
  'Titanium Protective Case',
  'Quick Start Guide',
  'Safety Manual',
  'Certification Documents',
  'Mounting Brackets (3x)',
  'Calibration Tool',
  '10-Year Warranty Card',
];

const features = [
  { title: 'Zero Maintenance', desc: 'No charging, no oil changes, no wear parts. The nuclear diamond battery and sealed construction mean your X1 will outlast you.' },
  { title: 'Intuitive Control', desc: 'Use the companion app to adjust lift height, field radius, and safety parameters. Voice commands let you go hands-free.' },
  { title: 'Silent Operation', desc: 'Quantum flux pinning produces no sound. Work in noise-sensitive environments without disturbance.' },
  { title: 'Instant Activation', desc: 'From off to full lift capacity in under 2 seconds. No warm-up time, no waiting.' },
];

export default function CivilianProductPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <PageHeader
        overline="Personal Use"
        title="Levitas X1"
        titleAccent="Civilian"
        subtitle="The world's first consumer-grade antigravity module. 250kg of effortless lift capacity, 50 years of maintenance-free operation, and a price that puts the future within reach."
        backgroundGlow="cyan"
      />

      {/* Hero Product Display */}
      <ContentSection>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Visual */}
          <div className="relative">
            <div className="aspect-square bg-[var(--bg-card)] rounded-lg border border-[var(--border-glow)] flex items-center justify-center overflow-hidden">
              <div className="relative w-64 h-64">
                {/* Device Visualization */}
                <div className="absolute inset-0 border-2 border-[var(--neon-cyan)]/30 rounded-full animate-[ring-rotate_20s_linear_infinite]" />
                <div className="absolute inset-8 border border-[var(--neon-cyan)]/50 rounded-full animate-[ring-rotate_15s_linear_infinite_reverse]" />
                <div className="absolute inset-16 bg-gradient-to-br from-[var(--bg-panel)] to-[var(--bg-card)] rounded-2xl border border-[var(--neon-cyan)] flex items-center justify-center">
                  <div className="w-12 h-12 bg-[var(--neon-cyan)] rounded-full animate-[ring-pulse_2s_ease-in-out_infinite]" />
                </div>
              </div>
              <div className="scan-line opacity-30" />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-[var(--bg-card)] border border-[var(--neon-cyan)] rounded-full">
              <span className="font-['Orbitron',system-ui,sans-serif] font-bold text-[var(--neon-cyan)]">$49,999</span>
              <span className="text-[var(--text-muted)] text-sm ml-2">USD</span>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="inline-block px-3 py-1 bg-[var(--success)]/20 border border-[var(--success)] rounded text-sm font-mono text-[var(--success)] mb-4">
              NOW ACCEPTING RESERVATIONS
            </div>
            <h2 className="font-['Orbitron',system-ui,sans-serif] text-3xl font-bold text-[var(--text-primary)] mb-4">
              Personal Antigravity for Everyone
            </h2>
            <p className="text-[var(--text-secondary)] text-lg mb-6 leading-relaxed">
              The Levitas X1 Civilian brings quantum flux antigravity technology to your home, workshop, or small business. Lift up to 250kg with zero physical effort, powered by a 50-year nuclear diamond battery.
            </p>
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3">
                  <span className="text-[var(--neon-cyan)] mt-1">◈</span>
                  <div>
                    <span className="font-semibold text-[var(--text-primary)]">{feature.title}:</span>
                    <span className="text-[var(--text-secondary)] ml-1">{feature.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/pricing" className="btn btn-primary">
                Reserve Now — $5,000 Deposit
              </Link>
              <Link href="/products/compare" className="btn btn-secondary">
                Compare Models
              </Link>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Specifications */}
      <ContentSection background="secondary">
        <div className="section-header">
          <span className="section-overline">[SPECIFICATIONS]</span>
          <h2 className="section-title">Technical Details</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {specs.map((group) => (
            <div key={group.category} className="bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-lg overflow-hidden">
              <div className="px-6 py-4 bg-[var(--bg-panel)] border-b border-[var(--border-glow)]">
                <h3 className="font-['Orbitron',system-ui,sans-serif] font-semibold text-[var(--neon-cyan)]">
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

      {/* What's Included */}
      <ContentSection>
        <div className="section-header">
          <span className="section-overline">[PACKAGE CONTENTS]</span>
          <h2 className="section-title">What&apos;s Included</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {included.map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-4 bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-lg">
              <span className="text-[var(--neon-cyan)]">◈</span>
              <span className="text-[var(--text-secondary)]">{item}</span>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Use Cases */}
      <ContentSection background="secondary">
        <div className="section-header">
          <span className="section-overline">[APPLICATIONS]</span>
          <h2 className="section-title">Perfect For</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Home Workshop', desc: 'Easily maneuver heavy machinery, lumber, and equipment in your garage or workshop.' },
            { title: 'Small Business', desc: 'Improve efficiency in retail stockrooms, small warehouses, and shipping operations.' },
            { title: 'Art & Design', desc: 'Position sculptures, installations, and heavy materials with unprecedented precision.' },
            { title: 'Moving & Storage', desc: 'Relocate furniture, appliances, and boxes without risk of injury or damage.' },
            { title: 'Agriculture', desc: 'Handle feed bags, equipment, and produce with minimal physical strain.' },
            { title: 'Healthcare', desc: 'Assist with patient transfer and positioning in home care settings.' },
          ].map((useCase, index) => (
            <div key={index} className="card">
              <h3 className="font-['Orbitron',system-ui,sans-serif] text-lg font-semibold text-[var(--text-primary)] mb-2">
                {useCase.title}
              </h3>
              <p className="text-[var(--text-secondary)] text-sm">{useCase.desc}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* CTA */}
      <ContentSection>
        <div className="bg-gradient-to-r from-[var(--neon-cyan)]/10 to-[var(--neon-violet)]/10 border border-[var(--border-glow)] rounded-lg p-8 lg:p-12 text-center">
          <h2 className="font-['Orbitron',system-ui,sans-serif] text-3xl font-bold text-[var(--text-primary)] mb-4">
            Ready to Defy Gravity?
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-2xl mx-auto">
            Reserve your Levitas X1 Civilian today with a $5,000 fully refundable deposit. First deliveries begin Q4 2025.
          </p>
          <Link href="/pricing" className="btn btn-primary text-lg px-12">
            Reserve Your Unit
          </Link>
        </div>
      </ContentSection>

      <Footer />
    </main>
  );
}
