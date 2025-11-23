import { Navbar, Footer } from '@/components';
import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';

export const metadata = {
  title: 'Privacy Policy | Levitas Industries',
  description: 'How Levitas Industries collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageHeader overline="Legal" title="Privacy" titleAccent="Policy" subtitle="Last updated: November 1, 2024" />

      <ContentSection>
        <div className="prose prose-invert max-w-4xl mx-auto">
          <h2 className="font-['Orbitron',system-ui,sans-serif] text-2xl text-[var(--text-primary)]">1. Information We Collect</h2>
          <p className="text-[var(--text-secondary)]">We collect information you provide directly, including name, email, shipping address, and payment information when you make a purchase or reservation. We also collect device telemetry data from Levitas X1 units to improve safety and performance.</p>

          <h2 className="font-['Orbitron',system-ui,sans-serif] text-2xl text-[var(--text-primary)] mt-8">2. How We Use Your Information</h2>
          <p className="text-[var(--text-secondary)]">We use your information to process orders, provide customer support, send important product updates, improve our products, and comply with legal obligations. Device telemetry is anonymized and used for safety research.</p>

          <h2 className="font-['Orbitron',system-ui,sans-serif] text-2xl text-[var(--text-primary)] mt-8">3. Information Sharing</h2>
          <p className="text-[var(--text-secondary)]">We do not sell your personal information. We share information with service providers who help us operate (payment processors, shipping carriers), and when required by law.</p>

          <h2 className="font-['Orbitron',system-ui,sans-serif] text-2xl text-[var(--text-primary)] mt-8">4. Data Security</h2>
          <p className="text-[var(--text-secondary)]">We implement industry-standard security measures including encryption, access controls, and regular security audits. Device communications use quantum-encrypted channels.</p>

          <h2 className="font-['Orbitron',system-ui,sans-serif] text-2xl text-[var(--text-primary)] mt-8">5. Your Rights</h2>
          <p className="text-[var(--text-secondary)]">You may request access to, correction of, or deletion of your personal data. California residents have additional rights under CCPA. EU residents have rights under GDPR.</p>

          <h2 className="font-['Orbitron',system-ui,sans-serif] text-2xl text-[var(--text-primary)] mt-8">6. Device Data</h2>
          <p className="text-[var(--text-secondary)]">Levitas X1 units transmit operational data including position, status, and usage patterns. This data is used for safety monitoring, regulatory compliance, and product improvement. You may opt out of non-essential data collection in the app settings.</p>

          <h2 className="font-['Orbitron',system-ui,sans-serif] text-2xl text-[var(--text-primary)] mt-8">7. Contact Us</h2>
          <p className="text-[var(--text-secondary)]">For privacy inquiries, contact our Data Protection Officer at privacy@levitas.tech.</p>
        </div>
      </ContentSection>

      <Footer />
    </main>
  );
}
