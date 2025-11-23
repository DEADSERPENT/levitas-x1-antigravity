import { Navbar, Footer } from '@/components';
import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';
import Link from 'next/link';

export const metadata = {
  title: 'About Levitas Industries | Pioneering Post-Gravity Technology',
  description: 'Learn about Levitas Industries, the company revolutionizing transportation and logistics with quantum flux antigravity technology.',
};

const timeline = [
  { year: '2019', title: 'Theoretical Breakthrough', desc: 'Dr. Elena Vasquez publishes groundbreaking paper on macroscopic quantum flux pinning at Stanford.' },
  { year: '2020', title: 'Levitas Founded', desc: 'Dr. Vasquez and Marcus Chen found Levitas Industries with $50M seed funding from Founders Fund.' },
  { year: '2021', title: 'First Prototype', desc: 'Laboratory demonstration of 1kg levitation sustained for 72 hours. Proof of concept achieved.' },
  { year: '2022', title: 'Series B Funding', desc: '$500M raised. Nuclear diamond battery partnership with Element Six secured.' },
  { year: '2023', title: 'Civilian Certification', desc: 'FAA and EU regulatory approval for civilian antigravity devices under 100ft ceiling.' },
  { year: '2024', title: 'Production Begins', desc: 'First manufacturing facility opens in Nevada. Batch 001 reservations open.' },
  { year: '2025', title: 'First Deliveries', desc: 'Levitas X1 units begin shipping to early adopters worldwide.' },
];

const leadership = [
  { name: 'Dr. Elena Vasquez', role: 'CEO & Co-Founder', bio: 'Former Stanford physicist. Pioneer of macroscopic quantum flux pinning. Forbes 30 Under 30.' },
  { name: 'Marcus Chen', role: 'CTO & Co-Founder', bio: 'Ex-SpaceX propulsion engineer. 47 patents in advanced materials and energy systems.' },
  { name: 'Sarah Mitchell', role: 'COO', bio: 'Former Apple operations VP. Scaled manufacturing for iPhone and Apple Watch launches.' },
  { name: 'Dr. James Okonkwo', role: 'Chief Science Officer', bio: 'Nobel laureate in Physics (2018). Expert in superconductivity and quantum mechanics.' },
  { name: 'Lisa Park', role: 'CFO', bio: 'Former Goldman Sachs MD. Led IPOs for Tesla and Rivian. Harvard MBA.' },
  { name: 'David Rodriguez', role: 'VP of Engineering', bio: 'Ex-NASA JPL. Led Mars rover power systems. MIT aerospace engineering.' },
];

const values = [
  { title: 'Safety First', desc: 'Every decision prioritizes user safety. Triple redundancy is our minimum standard.' },
  { title: 'Scientific Rigor', desc: 'We question everything, test relentlessly, and let data guide our path.' },
  { title: 'Accessible Innovation', desc: 'Breakthrough technology should benefit humanity, not just the privileged few.' },
  { title: 'Environmental Responsibility', desc: 'Zero emissions, zero noise, zero compromise on our planet.' },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <PageHeader
        overline="Our Story"
        title="Making Gravity"
        titleAccent="Optional"
        subtitle="Founded in 2020, Levitas Industries is on a mission to liberate humanity from the constraints of gravity. We're building the infrastructure for a three-dimensional civilization."
        backgroundGlow="violet"
      />

      {/* Mission Section */}
      <ContentSection>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="section-title text-3xl mb-6">Our Mission</h2>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-6">
              For millennia, gravity has been humanity&apos;s invisible prison. Every structure we build, every object we move, every step we take is a negotiation with this fundamental force.
            </p>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-6">
              At Levitas Industries, we believe the future is three-dimensional. Our quantum flux pinning technology doesn&apos;t fight gravity—it makes it irrelevant. We&apos;re not building flying cars or jetpacks. We&apos;re fundamentally changing how mass interacts with space.
            </p>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              The Levitas X1 is just the beginning. By 2030, we envision a world where heavy lifting is effortless, where warehouses extend vertically into the sky, where mobility is no longer limited by muscle or machine.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square bg-[var(--bg-card)] rounded-lg border border-[var(--border-glow)] flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl font-['Orbitron',system-ui,sans-serif] font-bold text-gradient mb-4">∞</div>
                <div className="text-[var(--text-muted)] font-mono text-sm">POSSIBILITIES UNLOCKED</div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Timeline Section */}
      <ContentSection background="secondary">
        <div className="section-header">
          <span className="section-overline">[TIMELINE]</span>
          <h2 className="section-title">Our Journey</h2>
        </div>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-[var(--border-glow)]" />
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-20">
                <div className="absolute left-6 top-1 w-5 h-5 rounded-full bg-[var(--neon-cyan)] border-4 border-[var(--bg-secondary)]" />
                <div className="font-mono text-[var(--neon-cyan)] text-sm mb-1">{item.year}</div>
                <h3 className="font-['Orbitron',system-ui,sans-serif] text-xl font-semibold text-[var(--text-primary)] mb-2">{item.title}</h3>
                <p className="text-[var(--text-secondary)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>

      {/* Leadership Section */}
      <ContentSection>
        <div className="section-header">
          <span className="section-overline">[LEADERSHIP]</span>
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">World-class scientists, engineers, and operators united by a singular vision.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadership.map((person) => (
            <div key={person.name} className="card">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--neon-cyan)]/20 to-[var(--neon-violet)]/20 border border-[var(--border-glow)] flex items-center justify-center mb-4">
                <span className="text-2xl font-['Orbitron',system-ui,sans-serif] font-bold text-[var(--neon-cyan)]">
                  {person.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="font-['Orbitron',system-ui,sans-serif] text-lg font-semibold text-[var(--text-primary)] mb-1">{person.name}</h3>
              <div className="text-[var(--neon-violet)] text-sm font-mono mb-3">{person.role}</div>
              <p className="text-[var(--text-secondary)] text-sm">{person.bio}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Values Section */}
      <ContentSection background="secondary">
        <div className="section-header">
          <span className="section-overline">[VALUES]</span>
          <h2 className="section-title">What We Stand For</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[var(--neon-cyan)]/10 border border-[var(--neon-cyan)]/30 flex items-center justify-center">
                <span className="font-['Orbitron',system-ui,sans-serif] font-bold text-[var(--neon-cyan)]">0{index + 1}</span>
              </div>
              <div>
                <h3 className="font-['Orbitron',system-ui,sans-serif] text-xl font-semibold text-[var(--text-primary)] mb-2">{value.title}</h3>
                <p className="text-[var(--text-secondary)]">{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* Stats Section */}
      <ContentSection>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="font-['Orbitron',system-ui,sans-serif] text-4xl lg:text-5xl font-bold text-gradient mb-2">500+</div>
            <div className="text-[var(--text-muted)] font-mono text-sm">EMPLOYEES WORLDWIDE</div>
          </div>
          <div>
            <div className="font-['Orbitron',system-ui,sans-serif] text-4xl lg:text-5xl font-bold text-gradient mb-2">127</div>
            <div className="text-[var(--text-muted)] font-mono text-sm">PATENTS FILED</div>
          </div>
          <div>
            <div className="font-['Orbitron',system-ui,sans-serif] text-4xl lg:text-5xl font-bold text-gradient mb-2">$2.1B</div>
            <div className="text-[var(--text-muted)] font-mono text-sm">TOTAL FUNDING</div>
          </div>
          <div>
            <div className="font-['Orbitron',system-ui,sans-serif] text-4xl lg:text-5xl font-bold text-gradient mb-2">12</div>
            <div className="text-[var(--text-muted)] font-mono text-sm">GLOBAL OFFICES</div>
          </div>
        </div>
      </ContentSection>

      {/* CTA Section */}
      <ContentSection background="secondary">
        <div className="text-center">
          <h2 className="section-title text-3xl mb-4">Join the Revolution</h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for brilliant minds who want to reshape the fundamental laws of how we interact with the physical world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/careers" className="btn btn-primary">View Open Positions</Link>
            <Link href="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </ContentSection>

      <Footer />
    </main>
  );
}
