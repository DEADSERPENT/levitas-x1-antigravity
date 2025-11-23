import { Navbar, Footer } from '@/components';
import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';

export const metadata = {
  title: 'Testimonials | What Customers Say About Levitas X1',
  description: 'Hear from real Levitas X1 customers about their experience with antigravity technology.',
};

const testimonials = [
  { quote: 'I thought I\'d seen it all in 40 years of filmmaking. Then I saw an actor genuinely floating. No wires, no post. Just floating. I had to sit down.', name: 'James Cameron', title: 'Director', type: 'Enterprise' },
  { quote: 'We reduced our worker\'s compensation claims by 94% in the first year. The ROI was achieved in under 8 months.', name: 'Sarah Chen', title: 'COO, Global Logistics Corp', type: 'Enterprise' },
  { quote: 'My workshop will never be the same. Moving a 200kg lathe is now a one-person job. It feels like cheating.', name: 'Mike Rodriguez', title: 'Small Business Owner', type: 'Civilian' },
  { quote: 'The experiments we can now do in our lab would have required a trip to the ISS. At a fraction of the cost.', name: 'Dr. Lisa Park', title: 'MIT Materials Science', type: 'Pro' },
  { quote: 'Patient transfers used to be the hardest part of my job. Now it\'s effortless. My back thanks me every day.', name: 'Jennifer Williams', title: 'Registered Nurse', type: 'Pro' },
  { quote: 'We installed 200 glass panels in a week. Previously that would have taken a month. Zero breakage.', name: 'David Kim', title: 'Construction Foreman', type: 'Pro' },
  { quote: 'The future arrived, and it\'s quieter and more elegant than I imagined.', name: 'Elon Musk', title: 'CEO, SpaceX', type: 'Enterprise' },
  { quote: 'I\'m 73 years old and I can move furniture by myself again. That\'s worth more than I can express.', name: 'Robert Thompson', title: 'Retired Teacher', type: 'Civilian' },
];

export default function TestimonialsPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageHeader
        overline="Customer Stories"
        title="What People"
        titleAccent="Are Saying"
        subtitle="Don't take our word for it. Hear from the people using Levitas X1 every day."
      />

      <ContentSection>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="card">
              <p className="text-[var(--text-primary)] text-lg italic mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-[var(--text-primary)]">{t.name}</div>
                  <div className="text-[var(--text-muted)] text-sm">{t.title}</div>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-mono ${t.type === 'Civilian' ? 'bg-[var(--neon-cyan)]/20 text-[var(--neon-cyan)]' : t.type === 'Pro' ? 'bg-[var(--neon-violet)]/20 text-[var(--neon-violet)]' : 'bg-[var(--neon-blue)]/20 text-[var(--neon-blue)]'}`}>
                  {t.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      <Footer />
    </main>
  );
}
