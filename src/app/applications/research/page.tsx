import { Navbar, Footer } from '@/components';
import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';
import Link from 'next/link';

export const metadata = {
  title: 'Scientific Research | Microgravity Experiments | Levitas X1',
  description: 'Conduct microgravity research on Earth with Levitas X1. Fraction of orbital experiment costs.',
};

const applications = [
  { title: 'Materials Science', desc: 'Study crystal formation, metallurgy, and polymer behavior without gravitational interference. Perfect spheres, uniform alloys, novel structures.' },
  { title: 'Fluid Dynamics', desc: 'Observe fluid behavior in microgravity conditions. Capillary effects, surface tension phenomena, multiphase flows.' },
  { title: 'Biological Research', desc: 'Study cell behavior, protein crystallization, and tissue growth in reduced gravity. Accelerate pharmaceutical research.' },
  { title: 'Physics Experiments', desc: 'Test fundamental physics principles. Observe phenomena masked by gravity. Educational demonstrations at any scale.' },
  { title: 'Combustion Studies', desc: 'Spherical flame propagation, soot formation, fire safety research without convection complications.' },
  { title: 'Calibration & Testing', desc: 'Zero-g sensor calibration, accelerometer testing, space hardware validation on Earth.' },
];

const comparison = [
  { method: 'Drop Tower', duration: '4.7 seconds', cost: '$500/test', quality: 'Brief, limited samples' },
  { method: 'Parabolic Flight', duration: '20 seconds', cost: '$5,000/flight', quality: 'Turbulent, motion sickness' },
  { method: 'Sounding Rocket', duration: '6 minutes', cost: '$1M/launch', quality: 'Single shot, no iteration' },
  { method: 'ISS Research', duration: 'Months', cost: '$50M+', quality: 'Best, but inaccessible' },
  { method: 'Levitas X1', duration: 'Unlimited', cost: '$149,999 once', quality: 'Continuous, controlled, local' },
];

export default function ResearchPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageHeader
        overline="Industry Application"
        title="Scientific"
        titleAccent="Research"
        subtitle="Bring microgravity experiments from orbit to your laboratory. Unlimited duration, instant iteration, fraction of the cost."
        backgroundGlow="violet"
      />

      <ContentSection>
        <div className="section-header">
          <h2 className="section-title">Research Applications</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app) => (
            <div key={app.title} className="card">
              <h3 className="font-['Orbitron',system-ui,sans-serif] text-lg font-semibold text-[var(--text-primary)] mb-2">{app.title}</h3>
              <p className="text-[var(--text-secondary)] text-sm">{app.desc}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection background="secondary">
        <div className="section-header">
          <h2 className="section-title">Compare Methods</h2>
          <p className="section-subtitle">How Levitas X1 compares to traditional microgravity research platforms.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="text-left">
                <th className="p-4 text-[var(--text-muted)] font-mono text-sm">Method</th>
                <th className="p-4 text-[var(--text-muted)] font-mono text-sm">Duration</th>
                <th className="p-4 text-[var(--text-muted)] font-mono text-sm">Cost</th>
                <th className="p-4 text-[var(--text-muted)] font-mono text-sm">Quality</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={row.method} className={`${row.method === 'Levitas X1' ? 'bg-[var(--neon-cyan)]/10 border-2 border-[var(--neon-cyan)]' : i % 2 === 0 ? 'bg-[var(--bg-card)]/50' : ''}`}>
                  <td className="p-4 font-semibold text-[var(--text-primary)]">{row.method}</td>
                  <td className="p-4 text-[var(--text-secondary)]">{row.duration}</td>
                  <td className="p-4 text-[var(--text-secondary)]">{row.cost}</td>
                  <td className="p-4 text-[var(--text-secondary)]">{row.quality}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="text-center">
          <h2 className="section-title text-3xl mb-4">Accelerate Your Research</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products/pro" className="btn btn-primary">Get X1 Pro for Research</Link>
            <Link href="/contact" className="btn btn-secondary">Academic Partnerships</Link>
          </div>
        </div>
      </ContentSection>

      <Footer />
    </main>
  );
}
