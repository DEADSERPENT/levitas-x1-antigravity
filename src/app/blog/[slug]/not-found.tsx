import { Navbar, Footer } from '@/components';
import ContentSection from '@/components/ContentSection';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <ContentSection>
        <div className="text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--bg-card)]/50 border border-[var(--error)] rounded-full mb-6">
            <span className="w-2 h-2 bg-[var(--error)] rounded-full animate-pulse" />
            <span className="text-xs font-mono text-[var(--error)] tracking-wider">
              ERROR 404
            </span>
          </div>
          <h1 className="section-title">Article Not Found</h1>
          <p className="text-[var(--text-secondary)] mt-4 mb-8 max-w-md mx-auto">
            The article you&apos;re looking for doesn&apos;t exist or has been moved to a different location.
          </p>
          <Link href="/blog" className="btn btn-primary">
            Back to Blog
          </Link>
        </div>
      </ContentSection>
      <Footer />
    </main>
  );
}
