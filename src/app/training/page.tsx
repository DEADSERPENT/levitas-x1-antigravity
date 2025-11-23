import { Navbar, Footer } from '@/components';
import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';
import Link from 'next/link';

export const metadata = {
  title: 'Training & Certification | Levitas X1 Operator Program',
  description: 'Complete the mandatory 8-hour certification program to operate your Levitas X1.',
};

const modules = [
  { num: '01', title: 'Safety Fundamentals', duration: '90 min', desc: 'Understanding safety systems, auto-descent, geo-fencing, and emergency procedures.' },
  { num: '02', title: 'Device Operation', duration: '120 min', desc: 'Power-on, basic controls, app interface, voice commands, and status indicators.' },
  { num: '03', title: 'Load Management', duration: '90 min', desc: 'Weight assessment, attachment methods, balance principles, and load limits.' },
  { num: '04', title: 'Environmental Factors', duration: '60 min', desc: 'Weather conditions, magnetic interference, operating environments, and limitations.' },
  { num: '05', title: 'Practical Exercises', duration: '90 min', desc: 'Hands-on practice with simulated loads under instructor supervision.' },
  { num: '06', title: 'Certification Exam', duration: '30 min', desc: 'Written and practical examination. 80% score required to pass.' },
];

const formats = [
  { type: 'Online Self-Paced', price: 'Included', desc: 'Complete at your own pace. Practical exam at authorized center.' },
  { type: 'Virtual Instructor-Led', price: '$299', desc: 'Live virtual sessions with Q&A. Remote practical assessment.' },
  { type: 'In-Person Workshop', price: '$499', desc: 'Full-day in-person training at Levitas facilities. Same-day certification.' },
  { type: 'Enterprise On-Site', price: 'Custom', desc: 'We come to you. Train your entire team at your facility.' },
];

export default function TrainingPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageHeader
        overline="Certification"
        title="Operator"
        titleAccent="Training"
        subtitle="Complete the mandatory 8-hour certification program before operating your Levitas X1. Safety is our first priority."
        backgroundGlow="cyan"
      />

      <ContentSection>
        <div className="bg-[var(--bg-card)] border border-[var(--warning)]/30 rounded-lg p-6 mb-12 text-center">
          <h3 className="font-['Orbitron',system-ui,sans-serif] text-lg font-semibold text-[var(--warning)] mb-2">Certification Required</h3>
          <p className="text-[var(--text-secondary)]">
            All Levitas X1 units require operator certification before activation. Your device will not activate until you complete certification.
          </p>
        </div>

        <div className="section-header">
          <h2 className="section-title">Course Curriculum</h2>
        </div>
        <div className="space-y-4 mb-16">
          {modules.map((m) => (
            <div key={m.num} className="flex gap-6 p-6 bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-lg">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[var(--neon-cyan)]/10 border border-[var(--neon-cyan)]/30 flex items-center justify-center">
                <span className="font-['Orbitron',system-ui,sans-serif] font-bold text-[var(--neon-cyan)]">{m.num}</span>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="font-['Orbitron',system-ui,sans-serif] text-lg font-semibold text-[var(--text-primary)]">{m.title}</h3>
                  <span className="text-[var(--text-muted)] font-mono text-sm">{m.duration}</span>
                </div>
                <p className="text-[var(--text-secondary)] mt-1">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="section-header">
          <h2 className="section-title">Training Formats</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {formats.map((f) => (
            <div key={f.type} className="card">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-['Orbitron',system-ui,sans-serif] text-lg font-semibold text-[var(--text-primary)]">{f.type}</h3>
                <span className="text-[var(--neon-cyan)] font-['Orbitron',system-ui,sans-serif] font-bold">{f.price}</span>
              </div>
              <p className="text-[var(--text-secondary)] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection background="secondary">
        <div className="text-center">
          <h2 className="section-title text-3xl mb-4">Ready to Get Certified?</h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-2xl mx-auto">
            Register for training once you&apos;ve received your order confirmation. Certification must be completed before your unit ships.
          </p>
          <Link href="/contact" className="btn btn-primary">Register for Training</Link>
        </div>
      </ContentSection>

      <Footer />
    </main>
  );
}
