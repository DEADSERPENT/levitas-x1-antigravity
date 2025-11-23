import { Navbar, Footer } from '@/components';
import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';

export const metadata = {
  title: 'Terms of Service | Levitas Industries',
  description: 'Terms and conditions for using Levitas products and services.',
};

export default function TermsPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageHeader overline="Legal" title="Terms of" titleAccent="Service" subtitle="Last updated: November 1, 2024" />

      <ContentSection>
        <div className="prose prose-invert max-w-4xl mx-auto">
          <h2 className="font-['Orbitron',system-ui,sans-serif] text-2xl text-[var(--text-primary)]">1. Acceptance of Terms</h2>
          <p className="text-[var(--text-secondary)]">By purchasing, using, or operating a Levitas X1 device, you agree to these Terms of Service. If you do not agree, do not use the device.</p>

          <h2 className="font-['Orbitron',system-ui,sans-serif] text-2xl text-[var(--text-primary)] mt-8">2. Certification Requirement</h2>
          <p className="text-[var(--text-secondary)]">All operators must complete the mandatory 8-hour certification program before device activation. Operating without certification voids your warranty and may violate local laws.</p>

          <h2 className="font-['Orbitron',system-ui,sans-serif] text-2xl text-[var(--text-primary)] mt-8">3. Permitted Use</h2>
          <p className="text-[var(--text-secondary)]">Levitas X1 Civilian is licensed for personal and light commercial use within approved jurisdictions. Operation is limited to 100ft altitude and geo-fenced areas. Modification of safety systems is prohibited.</p>

          <h2 className="font-['Orbitron',system-ui,sans-serif] text-2xl text-[var(--text-primary)] mt-8">4. Prohibited Uses</h2>
          <p className="text-[var(--text-secondary)]">You may not use Levitas X1 for: military applications without authorization, operation in restricted airspace, circumventing geo-fencing, lifting humans without safety certification, or any illegal activity.</p>

          <h2 className="font-['Orbitron',system-ui,sans-serif] text-2xl text-[var(--text-primary)] mt-8">5. Warranty</h2>
          <p className="text-[var(--text-secondary)]">Levitas X1 Civilian includes a 10-year warranty. Pro includes 15-year warranty. Warranty covers manufacturing defects but not damage from misuse, modification, or operation outside specified parameters.</p>

          <h2 className="font-['Orbitron',system-ui,sans-serif] text-2xl text-[var(--text-primary)] mt-8">6. Limitation of Liability</h2>
          <p className="text-[var(--text-secondary)]">Levitas Industries&apos; liability is limited to the purchase price of the device. We are not liable for consequential damages, lost profits, or injuries resulting from misuse or operation outside guidelines.</p>

          <h2 className="font-['Orbitron',system-ui,sans-serif] text-2xl text-[var(--text-primary)] mt-8">7. Software Updates</h2>
          <p className="text-[var(--text-secondary)]">You agree to install mandatory safety updates. Failure to update may result in reduced functionality or device lockout for safety compliance.</p>

          <h2 className="font-['Orbitron',system-ui,sans-serif] text-2xl text-[var(--text-primary)] mt-8">8. Governing Law</h2>
          <p className="text-[var(--text-secondary)]">These terms are governed by California law. Disputes will be resolved through binding arbitration in San Francisco.</p>
        </div>
      </ContentSection>

      <Footer />
    </main>
  );
}
