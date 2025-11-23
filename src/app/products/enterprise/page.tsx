import { Navbar, Footer } from '@/components';
import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';
import Link from 'next/link';

export const metadata = {
  title: 'Levitas Enterprise Solutions | Custom Antigravity Systems',
  description: 'Custom antigravity solutions for enterprise, government, and industrial applications. Unlimited lift capacity, custom integration, dedicated support.',
};

const capabilities = [
  { title: 'Unlimited Capacity', desc: 'Multi-unit arrays scale to any lift requirement. Our largest deployment handles 50,000kg loads.', icon: '∞' },
  { title: 'Custom Form Factors', desc: 'Ground-up design to fit your specific equipment, vehicles, or facility requirements.', icon: '◇' },
  { title: 'Dedicated Integration', desc: 'Our engineering team works alongside yours to integrate with existing systems.', icon: '⬡' },
  { title: 'On-Site Support', desc: '24/7 on-site technicians available for mission-critical deployments.', icon: '◉' },
  { title: 'Regulatory Liaison', desc: 'We handle all regulatory approvals and certifications for your jurisdiction.', icon: '△' },
  { title: 'White Label Options', desc: 'Deploy under your brand with full OEM customization available.', icon: '○' },
];

const caseStudies = [
  { client: 'Global Logistics Corp', industry: 'Warehousing', result: 'Deployed 2,400 units across 12 distribution centers. Achieved 73% improvement in throughput.' },
  { client: 'Paramount Studios', industry: 'Film Production', result: 'Custom rig system for major blockbuster production. Zero injuries, 4x faster scene changes.' },
  { client: 'US Department of Defense', industry: 'Government', result: 'Classified deployment. Enhanced logistics capabilities in challenging environments.' },
  { client: 'Shanghai Construction Group', industry: 'Construction', result: 'High-rise glass installation system. 89% reduction in breakage, 60% faster installation.' },
];

export default function EnterprisePage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <PageHeader
        overline="Custom Solutions"
        title="Enterprise"
        titleAccent="Deployments"
        subtitle="For organizations with unique requirements, we design and deploy custom antigravity solutions at any scale. From concept to implementation, our enterprise team delivers."
        backgroundGlow="blue"
      />

      {/* Intro */}
      <ContentSection>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-['Orbitron',system-ui,sans-serif] text-3xl font-bold text-[var(--text-primary)] mb-6">
              Beyond Off-the-Shelf
            </h2>
            <p className="text-[var(--text-secondary)] text-lg mb-6 leading-relaxed">
              The Levitas X1 Civilian and Pro are designed for general use cases. But we understand that enterprise operations often have requirements that demand custom solutions.
            </p>
            <p className="text-[var(--text-secondary)] text-lg mb-6 leading-relaxed">
              Our Enterprise division works directly with your engineering and operations teams to design, build, and deploy antigravity systems tailored to your exact specifications.
            </p>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              Whether you need to lift 50 tons, integrate with legacy systems, or deploy in restricted environments, we have the expertise and technology to make it happen.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '50+', label: 'Enterprise Clients' },
              { value: '15,000+', label: 'Units Deployed' },
              { value: '99.99%', label: 'Uptime SLA' },
              { value: '< 4hr', label: 'Response Time' },
            ].map((stat) => (
              <div key={stat.label} className="p-6 bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-lg text-center">
                <div className="font-['Orbitron',system-ui,sans-serif] text-3xl font-bold text-[var(--neon-blue)] mb-2">{stat.value}</div>
                <div className="text-[var(--text-muted)] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>

      {/* Capabilities */}
      <ContentSection background="secondary">
        <div className="section-header">
          <span className="section-overline">[CAPABILITIES]</span>
          <h2 className="section-title">What We Deliver</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap) => (
            <div key={cap.title} className="card">
              <div className="w-12 h-12 rounded-lg bg-[var(--neon-blue)]/10 border border-[var(--neon-blue)]/30 flex items-center justify-center text-2xl text-[var(--neon-blue)] mb-4">
                {cap.icon}
              </div>
              <h3 className="font-['Orbitron',system-ui,sans-serif] text-lg font-semibold text-[var(--text-primary)] mb-2">{cap.title}</h3>
              <p className="text-[var(--text-secondary)] text-sm">{cap.desc}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Case Studies */}
      <ContentSection>
        <div className="section-header">
          <span className="section-overline">[CASE STUDIES]</span>
          <h2 className="section-title">Success Stories</h2>
        </div>
        <div className="space-y-6">
          {caseStudies.map((study, index) => (
            <div key={index} className="card flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-[var(--neon-blue)]/10 border border-[var(--neon-blue)]/30 flex items-center justify-center">
                <span className="font-['Orbitron',system-ui,sans-serif] font-bold text-[var(--neon-blue)]">0{index + 1}</span>
              </div>
              <div className="flex-grow">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-['Orbitron',system-ui,sans-serif] text-lg font-semibold text-[var(--text-primary)]">{study.client}</h3>
                  <span className="px-2 py-0.5 bg-[var(--bg-panel)] rounded text-xs font-mono text-[var(--neon-blue)]">{study.industry}</span>
                </div>
                <p className="text-[var(--text-secondary)]">{study.result}</p>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Process */}
      <ContentSection background="secondary">
        <div className="section-header">
          <span className="section-overline">[PROCESS]</span>
          <h2 className="section-title">How We Work</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Discovery', desc: 'We analyze your requirements, constraints, and objectives.' },
            { step: '02', title: 'Design', desc: 'Our engineers create a custom solution architecture.' },
            { step: '03', title: 'Build', desc: 'Manufacturing and quality assurance of your system.' },
            { step: '04', title: 'Deploy', desc: 'On-site installation, integration, and training.' },
          ].map((phase) => (
            <div key={phase.step} className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-[var(--neon-blue)]/10 border-2 border-[var(--neon-blue)] flex items-center justify-center mb-4">
                <span className="font-['Orbitron',system-ui,sans-serif] font-bold text-[var(--neon-blue)]">{phase.step}</span>
              </div>
              <h3 className="font-['Orbitron',system-ui,sans-serif] text-lg font-semibold text-[var(--text-primary)] mb-2">{phase.title}</h3>
              <p className="text-[var(--text-secondary)] text-sm">{phase.desc}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Contact CTA */}
      <ContentSection>
        <div className="bg-gradient-to-r from-[var(--neon-blue)]/10 to-[var(--neon-cyan)]/10 border-2 border-[var(--neon-blue)] rounded-lg p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-['Orbitron',system-ui,sans-serif] text-3xl font-bold text-[var(--text-primary)] mb-4">
                Let&apos;s Discuss Your Requirements
              </h2>
              <p className="text-[var(--text-secondary)] text-lg">
                Our enterprise team is ready to explore how Levitas technology can transform your operations. Schedule a consultation to get started.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link href="/contact" className="btn btn-primary bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-cyan)]">
                Schedule Consultation
              </Link>
              <a href="mailto:enterprise@levitas.tech" className="btn btn-secondary border-[var(--neon-blue)] text-[var(--neon-blue)]">
                enterprise@levitas.tech
              </a>
            </div>
          </div>
        </div>
      </ContentSection>

      <Footer />
    </main>
  );
}
