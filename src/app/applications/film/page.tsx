import { Navbar, Footer } from '@/components';
import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';
import Link from 'next/link';

export const metadata = {
  title: 'Film & Production | Cinematic Antigravity | Levitas X1',
  description: 'Revolutionary film production with Levitas X1. Floating cameras, practical levitation effects, silent operation.',
};

const capabilities = [
  { title: 'Floating Camera Rigs', desc: 'Smooth, vibration-free camera movement without tracks, dollies, or cranes. Infinite positioning flexibility.' },
  { title: 'Practical Effects', desc: 'Real levitation for actors, props, and vehicles. No wires, no post-production removal, no CGI needed.' },
  { title: 'Silent Operation', desc: 'Zero acoustic signature. Capture live audio without equipment noise interference.' },
  { title: 'Rapid Scene Changes', desc: 'Move heavy set pieces, lighting rigs, and equipment in seconds. Dramatically reduce setup time.' },
  { title: 'Stunt Safety', desc: 'Controlled descent for aerial stunts. Fail-safe systems protect performers from injury.' },
  { title: 'Location Freedom', desc: 'No need for reinforced floors or heavy equipment access. Shoot anywhere.' },
];

const testimonials = [
  { quote: 'We shot an entire zero-gravity sequence practically. The director couldn\'t believe what was possible.', credit: 'VFX Supervisor, Major Studio' },
  { quote: 'Setup time dropped from hours to minutes. We added two extra shooting days worth of footage.', credit: 'Line Producer, Independent Film' },
];

export default function FilmPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageHeader
        overline="Industry Application"
        title="Film &"
        titleAccent="Production"
        subtitle="Create impossible shots with practical effects. Floating cameras, real levitation, and 4x faster scene changes."
        backgroundGlow="violet"
      />

      <ContentSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {capabilities.map((cap) => (
            <div key={cap.title} className="card">
              <h3 className="font-['Orbitron',system-ui,sans-serif] text-lg font-semibold text-[var(--text-primary)] mb-2">{cap.title}</h3>
              <p className="text-[var(--text-secondary)] text-sm">{cap.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-lg">
              <p className="text-[var(--text-primary)] text-lg italic mb-4">&ldquo;{t.quote}&rdquo;</p>
              <p className="text-[var(--neon-violet)] font-mono text-sm">— {t.credit}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection background="secondary">
        <div className="text-center">
          <h2 className="section-title text-3xl mb-4">Production Rentals Available</h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-2xl mx-auto">
            Short-term rentals for film productions. Full technical support and on-set training included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-primary">Contact Production Team</Link>
            <Link href="/products/enterprise" className="btn btn-secondary">Enterprise Solutions</Link>
          </div>
        </div>
      </ContentSection>

      <Footer />
    </main>
  );
}
