import { Navbar, Footer } from '@/components';
import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';
import Link from 'next/link';

export const metadata = {
  title: 'Healthcare & Mobility | Patient Care | Levitas X1',
  description: 'Transform patient care with Levitas X1. Effortless transfers, rehabilitation therapy, mobility assistance.',
};

const applications = [
  { title: 'Patient Transfer', desc: 'Move patients between beds, wheelchairs, and examination tables with zero physical strain. Dignity preserved, comfort maintained.' },
  { title: 'Rehabilitation Therapy', desc: 'Reduced-gravity environments for physical therapy. Help patients rebuild strength with adjustable resistance.' },
  { title: 'Bariatric Care', desc: 'Handle bariatric patients safely. No mechanical hoists, no embarrassment, no injury risk to caregivers.' },
  { title: 'Surgical Positioning', desc: 'Precise patient positioning for complex procedures. Micro-adjustments without physical manipulation.' },
  { title: 'Home Care', desc: 'Enable aging in place. Family caregivers can assist with transfers without injury risk.' },
  { title: 'Emergency Response', desc: 'Extract patients from difficult locations. Stairwells, confined spaces, disaster sites.' },
];

const stats = [
  { value: '73%', label: 'of nursing injuries are from patient handling' },
  { value: '$20B', label: 'annual cost of caregiver back injuries in US' },
  { value: '12%', label: 'of nurses leave profession due to injury' },
];

export default function HealthcarePage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageHeader
        overline="Industry Application"
        title="Healthcare &"
        titleAccent="Mobility"
        subtitle="Eliminate the leading cause of caregiver injury. Dignified patient care with effortless transfers."
        backgroundGlow="cyan"
      />

      <ContentSection>
        <div className="bg-[var(--bg-card)] border border-[var(--warning)]/30 rounded-lg p-6 mb-12">
          <h3 className="font-['Orbitron',system-ui,sans-serif] text-lg font-semibold text-[var(--warning)] mb-4">The Problem We&apos;re Solving</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-['Orbitron',system-ui,sans-serif] text-3xl font-bold text-[var(--text-primary)] mb-2">{s.value}</div>
                <div className="text-[var(--text-secondary)] text-sm">{s.label}</div>
              </div>
            ))}
          </div>
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
        <div className="text-center">
          <h2 className="section-title text-3xl mb-4">Healthcare Partnerships</h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-2xl mx-auto">
            We work with hospitals, care facilities, and home health providers to implement Levitas technology safely and effectively.
          </p>
          <Link href="/contact" className="btn btn-primary">Contact Healthcare Team</Link>
        </div>
      </ContentSection>

      <Footer />
    </main>
  );
}
