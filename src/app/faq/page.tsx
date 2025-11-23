import { Navbar, Footer, FAQ } from '@/components';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'FAQ | Frequently Asked Questions | Levitas X1',
  description: 'Answers to common questions about Levitas X1 antigravity technology.',
};

export default function FAQPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageHeader
        overline="Knowledge Base"
        title="Frequently"
        titleAccent="Asked"
        subtitle="Find answers to common questions about Levitas X1 technology, operation, and ownership."
      />
      <FAQ />
      <Footer />
    </main>
  );
}
