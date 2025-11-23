import { Navbar, Footer } from '@/components';
import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';
import Link from 'next/link';

export const metadata = {
  title: 'API Reference | Levitas X1 Developer Documentation',
  description: 'REST API documentation for Levitas X1 Pro and Enterprise integration.',
};

const endpoints = [
  { method: 'GET', path: '/devices', desc: 'List all devices in your fleet' },
  { method: 'GET', path: '/devices/{id}', desc: 'Get device status and telemetry' },
  { method: 'POST', path: '/devices/{id}/activate', desc: 'Activate flux field' },
  { method: 'POST', path: '/devices/{id}/deactivate', desc: 'Safely deactivate flux field' },
  { method: 'PUT', path: '/devices/{id}/settings', desc: 'Update device parameters' },
  { method: 'GET', path: '/devices/{id}/telemetry', desc: 'Real-time telemetry stream' },
  { method: 'POST', path: '/devices/{id}/calibrate', desc: 'Initiate calibration sequence' },
  { method: 'GET', path: '/fleet/status', desc: 'Aggregate fleet status' },
];

const sdks = [
  { lang: 'Python', version: '2.1.0', install: 'pip install levitas-sdk' },
  { lang: 'Node.js', version: '2.1.0', install: 'npm install @levitas/sdk' },
  { lang: 'Go', version: '2.1.0', install: 'go get github.com/levitas/sdk-go' },
  { lang: 'Rust', version: '1.0.0', install: 'cargo add levitas-sdk' },
];

export default function APIPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageHeader
        overline="Developer Docs"
        title="API"
        titleAccent="Reference"
        subtitle="Integrate Levitas X1 with your systems using our REST API. Available for Pro and Enterprise customers."
        backgroundGlow="blue"
      />

      <ContentSection>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="font-['Orbitron',system-ui,sans-serif] text-2xl font-bold text-[var(--text-primary)] mb-6">Endpoints</h2>
            <div className="space-y-2">
              {endpoints.map((ep) => (
                <div key={ep.path} className="flex items-center gap-4 p-4 bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-lg font-mono text-sm">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${ep.method === 'GET' ? 'bg-[var(--neon-cyan)]/20 text-[var(--neon-cyan)]' : ep.method === 'POST' ? 'bg-[var(--neon-violet)]/20 text-[var(--neon-violet)]' : 'bg-[var(--warning)]/20 text-[var(--warning)]'}`}>
                    {ep.method}
                  </span>
                  <span className="text-[var(--text-primary)]">{ep.path}</span>
                  <span className="text-[var(--text-muted)] ml-auto">{ep.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-['Orbitron',system-ui,sans-serif] text-2xl font-bold text-[var(--text-primary)] mb-6">SDKs</h2>
            <div className="space-y-4">
              {sdks.map((sdk) => (
                <div key={sdk.lang} className="p-4 bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-[var(--text-primary)]">{sdk.lang}</span>
                    <span className="text-[var(--text-muted)] text-xs">v{sdk.version}</span>
                  </div>
                  <code className="block p-2 bg-[var(--bg-primary)] rounded text-xs text-[var(--neon-cyan)]">{sdk.install}</code>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection background="secondary">
        <div className="text-center">
          <h2 className="section-title text-3xl mb-4">Need API Access?</h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8">
            API access is included with Pro and Enterprise plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products/pro" className="btn btn-primary">Get X1 Pro</Link>
            <Link href="/docs" className="btn btn-secondary">Full Documentation</Link>
          </div>
        </div>
      </ContentSection>

      <Footer />
    </main>
  );
}
