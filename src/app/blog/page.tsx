import { Navbar, Footer } from '@/components';
import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';
import Link from 'next/link';

export const metadata = {
  title: 'Blog | Levitas Industries News & Insights',
  description: 'Latest news, technology insights, and updates from Levitas Industries.',
};

const posts = [
  { slug: 'faa-certification-milestone', date: 'Nov 15, 2024', category: 'Company News', title: 'Levitas X1 Achieves Historic FAA Civilian Certification', excerpt: 'A landmark moment for antigravity technology as the first consumer device receives regulatory approval for civilian use in the United States.', featured: true },
  { slug: 'quantum-flux-explained', date: 'Nov 8, 2024', category: 'Technology', title: 'Quantum Flux Pinning: The Science Behind Levitation', excerpt: 'A deep dive into the physics that makes the Levitas X1 possible, explained for non-physicists.' },
  { slug: 'warehouse-case-study', date: 'Oct 28, 2024', category: 'Case Study', title: 'How Global Logistics Corp Achieved 73% Efficiency Gain', excerpt: 'Inside the largest Levitas deployment to date: 2,400 units across 12 distribution centers.' },
  { slug: 'safety-philosophy', date: 'Oct 15, 2024', category: 'Safety', title: 'Why Safety Is Engineered In, Not Added On', excerpt: 'Our Chief Safety Officer explains the triple-redundant approach that makes Levitas X1 the safest antigravity device ever built.' },
  { slug: 'nuclear-diamond-battery', date: 'Oct 1, 2024', category: 'Technology', title: '50 Years of Power: The Nuclear Diamond Battery', excerpt: 'How carbon-14 and diamond semiconductors create a battery that lasts longer than you will.' },
  { slug: 'film-industry-revolution', date: 'Sep 20, 2024', category: 'Industry', title: 'Hollywood Embraces Antigravity', excerpt: 'From impossible camera movements to practical levitation effects, film production will never be the same.' },
  { slug: 'series-c-announcement', date: 'Sep 10, 2024', category: 'Company News', title: 'Levitas Raises $800M Series C at $8.5B Valuation', excerpt: 'Funding will accelerate production capacity and international expansion.' },
  { slug: 'manufacturing-tour', date: 'Aug 25, 2024', category: 'Behind the Scenes', title: 'Inside the Nevada Gigafactory', excerpt: 'A virtual tour of where Levitas X1 units come to life.' },
];

export default function BlogPage() {
  const featured = posts.find(p => p.featured);
  const regular = posts.filter(p => !p.featured);

  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageHeader
        overline="Insights"
        title="News &"
        titleAccent="Blog"
        subtitle="The latest updates, technology deep-dives, and stories from the post-gravity frontier."
      />

      <ContentSection>
        {featured && (
          <Link href={`/blog/${featured.slug}`} className="block mb-12 group">
            <div className="grid lg:grid-cols-2 gap-8 p-8 bg-gradient-to-r from-[var(--neon-cyan)]/10 to-[var(--neon-violet)]/10 border border-[var(--neon-cyan)] rounded-lg">
              <div className="aspect-video bg-[var(--bg-card)] rounded-lg flex items-center justify-center">
                <span className="text-6xl">◈</span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[var(--neon-cyan)] font-mono text-sm mb-2">{featured.category} • {featured.date}</span>
                <h2 className="font-['Orbitron',system-ui,sans-serif] text-2xl lg:text-3xl font-bold text-[var(--text-primary)] group-hover:text-[var(--neon-cyan)] transition-colors mb-4">
                  {featured.title}
                </h2>
                <p className="text-[var(--text-secondary)] text-lg">{featured.excerpt}</p>
              </div>
            </div>
          </Link>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regular.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card group">
              <span className="text-[var(--neon-violet)] font-mono text-xs">{post.category} • {post.date}</span>
              <h3 className="font-['Orbitron',system-ui,sans-serif] text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--neon-cyan)] transition-colors mt-2 mb-3">
                {post.title}
              </h3>
              <p className="text-[var(--text-secondary)] text-sm">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </ContentSection>

      <Footer />
    </main>
  );
}
