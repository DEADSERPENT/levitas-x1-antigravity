import {
  Navbar,
  Hero,
  Features,
  Specifications,
  Applications,
  Demo,
  Pricing,
  Safety,
  FAQ,
  Footer,
} from '@/components';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Specifications />
      <Applications />
      <Demo />
      <Pricing />
      <Safety />
      <FAQ />
      <Footer />
    </main>
  );
}
