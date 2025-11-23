import { Navbar, Footer } from '@/components';
import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';
import Link from 'next/link';

export const metadata = {
  title: 'Documentation | Levitas X1 User Guides & API',
  description: 'Technical documentation, user guides, and API reference for Levitas X1.',
};

const sections = [
  {
    title: 'Getting Started',
    docs: [
      { name: 'Quick Start Guide', desc: 'Unbox and activate your Levitas X1 in 15 minutes' },
      { name: 'Safety Overview', desc: 'Essential safety information for all operators' },
      { name: 'Certification Guide', desc: 'How to complete mandatory operator training' },
      { name: 'App Setup', desc: 'Download and configure the Levitas companion app' },
    ]
  },
  {
    title: 'User Manual',
    docs: [
      { name: 'Device Controls', desc: 'Physical controls, buttons, and indicators' },
      { name: 'App Interface', desc: 'Complete guide to the mobile application' },
      { name: 'Voice Commands', desc: 'Supported voice commands and configuration' },
      { name: 'Maintenance Guide', desc: 'Cleaning, storage, and care instructions' },
    ]
  },
  {
    title: 'Technical Reference',
    docs: [
      { name: 'Specifications', desc: 'Complete technical specifications' },
      { name: 'Operating Parameters', desc: 'Temperature, altitude, and environmental limits' },
      { name: 'Error Codes', desc: 'Understanding status codes and troubleshooting' },
      { name: 'Firmware Updates', desc: 'How updates are delivered and installed' },
    ]
  },
  {
    title: 'API & Integration (Pro)',
    docs: [
      { name: 'API Overview', desc: 'Introduction to the Levitas REST API' },
      { name: 'Authentication', desc: 'API keys and OAuth 2.0 setup' },
      { name: 'Endpoints Reference', desc: 'Complete API endpoint documentation' },
      { name: 'Webhooks', desc: 'Real-time event notifications' },
      { name: 'SDK Libraries', desc: 'Official SDKs for Python, Node.js, and Go' },
    ]
  },
];

export default function DocsPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageHeader
        overline="Resources"
        title="Documentation"
        titleAccent=""
        subtitle="Everything you need to operate, maintain, and integrate with Levitas X1."
      />

      <ContentSection>
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <h3 className="font-mono text-sm text-[var(--neon-cyan)]">NAVIGATION</h3>
              {sections.map((s) => (
                <a key={s.title} href={`#${s.title.toLowerCase().replace(/ /g, '-')}`} className="block text-[var(--text-secondary)] hover:text-[var(--neon-cyan)] transition-colors">
                  {s.title}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 space-y-12">
            {sections.map((section) => (
              <div key={section.title} id={section.title.toLowerCase().replace(/ /g, '-')}>
                <h2 className="font-['Orbitron',system-ui,sans-serif] text-2xl font-bold text-[var(--text-primary)] mb-6">{section.title}</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {section.docs.map((doc) => (
                    <div key={doc.name} className="card cursor-pointer group">
                      <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--neon-cyan)] transition-colors">{doc.name}</h3>
                      <p className="text-[var(--text-muted)] text-sm mt-1">{doc.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>

      <ContentSection background="secondary">
        <div className="text-center">
          <h2 className="section-title text-3xl mb-4">Need Help?</h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">Can&apos;t find what you&apos;re looking for?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/support" className="btn btn-primary">Contact Support</Link>
            <Link href="/faq" className="btn btn-secondary">View FAQ</Link>
          </div>
        </div>
      </ContentSection>

      <Footer />
    </main>
  );
}
