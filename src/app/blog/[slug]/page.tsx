import { Navbar, Footer } from '@/components';
import ContentSection from '@/components/ContentSection';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

const articles: Record<string, { title: string; date: string; category: string; content: string[] }> = {
  'faa-certification-milestone': {
    title: 'Levitas X1 Achieves Historic FAA Civilian Certification',
    date: 'November 15, 2024',
    category: 'Company News',
    content: [
      'Today marks a historic milestone for Levitas Industries and the future of personal transportation. The Federal Aviation Administration has officially certified the Levitas X1 for civilian use, making it the first antigravity device approved for consumer operation in the United States.',
      'This certification is the culmination of four years of rigorous testing, safety validation, and regulatory collaboration. Our engineering team conducted over 50,000 test flights, demonstrating the reliability of our triple-redundant safety systems and auto-descent protocols.',
      '"This approval represents a fundamental shift in how regulators view antigravity technology," said Dr. Elena Vasquez, CEO of Levitas Industries. "We\'ve proven that quantum flux devices can meet and exceed the safety standards of any transportation technology."',
      'The certification allows Levitas X1 Civilian units to operate at altitudes up to 100 feet in approved airspace. Built-in geo-fencing ensures compliance with all local regulations and prevents operation in restricted areas.',
      'European Union certification under Regulation 2019/947 is expected within the next 30 days, followed by approvals in the UK, Canada, Australia, Japan, and South Korea.',
      'Pre-order customers will begin receiving delivery notifications next week, with first shipments scheduled for Q4 2025.',
    ],
  },
  'quantum-flux-explained': {
    title: 'Quantum Flux Pinning: The Science Behind Levitation',
    date: 'November 8, 2024',
    category: 'Technology',
    content: [
      'Every great technology starts with a fundamental scientific principle. For the Levitas X1, that principle is quantum flux pinning—a phenomenon first observed in superconductors that our team has successfully scaled to practical applications.',
      'In a type-II superconductor, magnetic field lines can penetrate the material in discrete bundles called flux vortices. At defect sites in the crystal structure, these vortices become "pinned" in place. The result is a stable equilibrium where the superconductor maintains its position relative to a magnetic field without any energy input.',
      'Traditional demonstrations of this effect required temperatures near absolute zero and couldn\'t support meaningful loads. Our breakthrough was developing a metamaterial superconductor that exhibits strong flux pinning at achievable temperatures while supporting loads up to 1,000 kg.',
      'The Levitas X1 generates a precisely controlled magnetic field using permanent magnets and electromagnetic coils. The superconducting core—cooled by our integrated cryogenic system—locks onto Earth\'s magnetic field, creating a stable levitation point.',
      'Unlike magnetic levitation systems that require continuous power to maintain repulsion, quantum flux pinning creates genuine stability. The locked flux lines resist movement in all directions, which is why levitated objects feel like they\'re resting on an invisible, frictionless shelf.',
      'Our Neural Engine continuously optimizes the flux field parameters, making 10,000 adjustments per second to maintain perfect stability regardless of external disturbances. The result is levitation so smooth that users often forget physics is being defied right in front of them.',
    ],
  },
  'warehouse-case-study': {
    title: 'How Global Logistics Corp Achieved 73% Efficiency Gain',
    date: 'October 28, 2024',
    category: 'Case Study',
    content: [
      'When Global Logistics Corp approached us in early 2024, they were facing a familiar challenge: how to move more inventory through their facilities without expanding their physical footprint or increasing their workforce.',
      'Their solution was ambitious: deploy 2,400 Levitas X1 Pro units across 12 distribution centers in North America. The results exceeded everyone\'s expectations.',
      'Within 90 days of full deployment, Global Logistics reported a 73% improvement in throughput—the number of items picked, packed, and shipped per hour. But the efficiency gains were just the beginning.',
      'Workplace injuries dropped by 89%. Before Levitas, their distribution centers averaged 12 lifting-related injuries per month across all facilities. After deployment, that number fell to just 1.3 per month, and those were primarily unrelated to material handling.',
      'The vertical storage revolution was equally dramatic. By eliminating the need for forklifts in most aisles, Global Logistics was able to install racking systems that extended 40 feet high. Workers with Levitas X1 units could access any level instantly, increasing usable storage capacity by 4x.',
      '"We thought we were buying an efficiency tool," said Marcus Thompson, VP of Operations at Global Logistics. "What we got was a complete reimagining of what a warehouse can be."',
      'The deployment also enabled Global Logistics to handle fragile goods that previously required special handling. Electronics returns processing—previously their slowest operation—became one of their fastest.',
    ],
  },
};

// Type for page props
interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

// Dynamic metadata generation
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return {
      title: 'Article Not Found | Levitas Industries',
    };
  }

  return {
    title: `${article.title} | Levitas Industries`,
    description: article.content[0]?.substring(0, 160) + '...',
    openGraph: {
      title: article.title,
      description: article.content[0]?.substring(0, 160) + '...',
      type: 'article',
    },
  };
}

export default async function BlogArticle({ params }: PageProps) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    notFound(); // Triggers proper 404 status code
  }

  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Breadcrumb items={[{ label: 'BLOG', href: '/blog' }, { label: article.category.toUpperCase() }]} />

      <ContentSection>
        <article className="max-w-3xl mx-auto">
          <header className="mb-12 text-center">
            <span className="text-[var(--neon-violet)] font-mono text-sm">{article.category} • {article.date}</span>
            <h1 className="font-['Orbitron',system-ui,sans-serif] text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mt-4">
              {article.title}
            </h1>
          </header>

          <div className="prose prose-invert max-w-none">
            {article.content.map((paragraph, i) => (
              <p key={i} className="text-[var(--text-secondary)] text-lg leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          <footer className="mt-16 pt-8 border-t border-[var(--border-glow)]">
            <Link href="/blog" className="text-[var(--neon-cyan)] hover:underline">← Back to Blog</Link>
          </footer>
        </article>
      </ContentSection>

      <Footer />
    </main>
  );
}
