import { Navbar, Footer } from '@/components';
import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';
import Link from 'next/link';

export const metadata = {
  title: 'Careers at Levitas Industries | Join the Revolution',
  description: 'Join Levitas Industries and help build the post-gravity future. Engineering, science, operations, and more.',
};

const departments = [
  { name: 'Engineering', count: 24, roles: ['Quantum Systems Engineer', 'Firmware Developer', 'Mechanical Engineer', 'Test Engineer'] },
  { name: 'Research', count: 12, roles: ['Physicist', 'Materials Scientist', 'Research Associate', 'Lab Technician'] },
  { name: 'Manufacturing', count: 18, roles: ['Production Engineer', 'Quality Assurance', 'Assembly Technician', 'Supply Chain Manager'] },
  { name: 'Product', count: 8, roles: ['Product Manager', 'UX Designer', 'Technical Writer', 'Program Manager'] },
  { name: 'Sales & Marketing', count: 15, roles: ['Enterprise Sales', 'Marketing Manager', 'Content Strategist', 'Events Coordinator'] },
  { name: 'Operations', count: 10, roles: ['Customer Support', 'Training Specialist', 'Logistics Coordinator', 'Facilities Manager'] },
];

const benefits = [
  { title: 'Competitive Compensation', desc: 'Top-tier salaries plus equity in a high-growth company.' },
  { title: 'Health & Wellness', desc: 'Premium medical, dental, vision. Mental health support. Gym membership.' },
  { title: 'Unlimited PTO', desc: 'Take the time you need. We trust you to manage your work.' },
  { title: 'Learning Budget', desc: '$5,000 annual budget for courses, conferences, and books.' },
  { title: 'Parental Leave', desc: '16 weeks paid leave for all new parents.' },
  { title: 'Remote Flexibility', desc: 'Hybrid work options for most roles. Relocate to any US office.' },
];

const values = [
  'Challenge the impossible',
  'Safety is non-negotiable',
  'Data over opinions',
  'Move fast, build carefully',
  'Diverse perspectives win',
];

export default function CareersPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageHeader
        overline="Join Us"
        title="Build the"
        titleAccent="Future"
        subtitle="We're assembling the team that will make gravity optional. If you're ready to work on the hardest problems in physics and engineering, we want to hear from you."
        backgroundGlow="violet"
      />

      <ContentSection>
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-['Orbitron',system-ui,sans-serif] text-3xl font-bold text-[var(--text-primary)] mb-6">Why Levitas?</h2>
            <p className="text-[var(--text-secondary)] text-lg mb-6 leading-relaxed">
              We&apos;re not building another app or incremental improvement. We&apos;re fundamentally changing how humanity interacts with the physical world. The challenges are immense, the impact is generational, and the team is world-class.
            </p>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              Every day, you&apos;ll work alongside Nobel laureates, SpaceX alumni, and brilliant minds from every discipline. Your contributions will directly impact products used by thousands—and eventually millions—of people.
            </p>
          </div>
          <div className="bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-lg p-8">
            <h3 className="font-['Orbitron',system-ui,sans-serif] text-lg font-semibold text-[var(--neon-cyan)] mb-6">Our Values</h3>
            <ul className="space-y-4">
              {values.map((v, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-[var(--neon-cyan)]">◈</span>
                  <span className="text-[var(--text-primary)]">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ContentSection>

      <ContentSection background="secondary">
        <div className="section-header">
          <h2 className="section-title">Open Positions</h2>
          <p className="section-subtitle">87 open roles across all departments</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept) => (
            <div key={dept.name} className="card">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-['Orbitron',system-ui,sans-serif] text-lg font-semibold text-[var(--text-primary)]">{dept.name}</h3>
                <span className="px-2 py-1 bg-[var(--neon-cyan)]/20 text-[var(--neon-cyan)] rounded text-sm font-mono">{dept.count} roles</span>
              </div>
              <ul className="space-y-2">
                {dept.roles.map((role) => (
                  <li key={role} className="text-[var(--text-secondary)] text-sm hover:text-[var(--neon-cyan)] cursor-pointer transition-colors">
                    → {role}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection>
        <div className="section-header">
          <h2 className="section-title">Benefits & Perks</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="p-6 bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-lg">
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">{b.title}</h3>
              <p className="text-[var(--text-secondary)] text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection background="secondary">
        <div className="text-center">
          <h2 className="section-title text-3xl mb-4">Ready to Apply?</h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-2xl mx-auto">
            Send your resume and a note about why you want to join Levitas.
          </p>
          <a href="mailto:careers@levitas.tech" className="btn btn-primary">careers@levitas.tech</a>
        </div>
      </ContentSection>

      <Footer />
    </main>
  );
}
