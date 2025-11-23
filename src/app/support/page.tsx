import { Navbar, Footer } from '@/components';
import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';
import Link from 'next/link';

export const metadata = {
  title: 'Support | Levitas Industries Customer Service',
  description: 'Get help with your Levitas X1. Technical support, troubleshooting, and customer service.',
};

const supportOptions = [
  { title: 'Documentation', desc: 'User guides, technical specs, and how-to articles', link: '/docs', icon: '◈' },
  { title: 'FAQ', desc: 'Answers to common questions', link: '/faq', icon: '◉' },
  { title: 'Training Portal', desc: 'Certification courses and video tutorials', link: '/training', icon: '△' },
  { title: 'Community Forum', desc: 'Connect with other Levitas owners', link: '#', icon: '○' },
];

const contactChannels = [
  { type: 'Email Support', contact: 'support@levitas.tech', response: '< 24 hours', tier: 'Standard' },
  { type: 'Priority Email', contact: 'priority@levitas.tech', response: '< 4 hours', tier: 'Pro' },
  { type: 'Phone Support', contact: '1-800-LEVITAS', response: 'Immediate', tier: 'Pro' },
  { type: 'Quantum Concierge', contact: 'Dedicated Line', response: '< 15 minutes', tier: 'Enterprise' },
];

export default function SupportPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageHeader
        overline="Help Center"
        title="Customer"
        titleAccent="Support"
        subtitle="We're here to help you get the most out of your Levitas X1."
      />

      <ContentSection>
        <div className="section-header">
          <h2 className="section-title">Self-Service Resources</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportOptions.map((opt) => (
            <Link key={opt.title} href={opt.link} className="card text-center group">
              <div className="text-3xl text-[var(--neon-cyan)] mb-4">{opt.icon}</div>
              <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--neon-cyan)] transition-colors">{opt.title}</h3>
              <p className="text-[var(--text-muted)] text-sm mt-2">{opt.desc}</p>
            </Link>
          ))}
        </div>

        <div className="section-header">
          <h2 className="section-title">Contact Support</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {contactChannels.map((ch) => (
            <div key={ch.type} className="flex justify-between items-center p-6 bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-lg">
              <div>
                <h3 className="font-semibold text-[var(--text-primary)]">{ch.type}</h3>
                <p className="text-[var(--neon-cyan)]">{ch.contact}</p>
                <p className="text-[var(--text-muted)] text-sm">Response: {ch.response}</p>
              </div>
              <span className={`px-3 py-1 rounded text-xs font-mono ${ch.tier === 'Standard' ? 'bg-[var(--bg-panel)] text-[var(--text-muted)]' : ch.tier === 'Pro' ? 'bg-[var(--neon-violet)]/20 text-[var(--neon-violet)]' : 'bg-[var(--neon-blue)]/20 text-[var(--neon-blue)]'}`}>
                {ch.tier}
              </span>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection background="secondary">
        <div className="text-center">
          <h2 className="section-title text-3xl mb-4">Emergency Support</h2>
          <p className="text-[var(--text-secondary)] text-lg mb-4">
            For safety emergencies or device malfunctions, call our 24/7 emergency line:
          </p>
          <p className="font-['Orbitron',system-ui,sans-serif] text-3xl font-bold text-[var(--error)]">1-800-555-SAFE</p>
        </div>
      </ContentSection>

      <Footer />
    </main>
  );
}
