import { Navbar, Footer } from '@/components';
import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Levitas Industries | Get in Touch',
  description: 'Contact Levitas Industries for sales inquiries, support, partnerships, and press.',
};

const contacts = [
  { title: 'Sales Inquiries', email: 'sales@levitas.tech', desc: 'Product questions, pricing, and reservations' },
  { title: 'Enterprise Solutions', email: 'enterprise@levitas.tech', desc: 'Custom deployments and large-scale projects' },
  { title: 'Technical Support', email: 'support@levitas.tech', desc: 'Product support and troubleshooting' },
  { title: 'Press & Media', email: 'press@levitas.tech', desc: 'Interview requests and media inquiries' },
  { title: 'Partnerships', email: 'partners@levitas.tech', desc: 'Business development and integrations' },
  { title: 'Careers', email: 'careers@levitas.tech', desc: 'Job opportunities and recruiting' },
];

const offices = [
  { city: 'San Francisco', address: '100 Innovation Way, SF, CA 94105', type: 'Headquarters' },
  { city: 'Austin', address: '200 Congress Ave, Austin, TX 78701', type: 'Engineering Hub' },
  { city: 'Nevada', address: 'Apex Industrial Park, NV', type: 'Manufacturing' },
  { city: 'London', address: 'Canary Wharf, London E14', type: 'EMEA Office' },
  { city: 'Tokyo', address: 'Shibuya, Tokyo 150-0002', type: 'APAC Office' },
  { city: 'Munich', address: 'Maximilianstraße, Munich', type: 'EU Engineering' },
];

export default function ContactPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <PageHeader
        overline="Get in Touch"
        title="Contact"
        titleAccent="Us"
        subtitle="Questions about Levitas X1? Interested in enterprise solutions? We're here to help."
      />

      <ContentSection>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-['Orbitron',system-ui,sans-serif] text-2xl font-bold text-[var(--text-primary)] mb-6">Contact Departments</h2>
            <div className="space-y-4">
              {contacts.map((c) => (
                <div key={c.title} className="p-4 bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-lg">
                  <h3 className="font-semibold text-[var(--text-primary)]">{c.title}</h3>
                  <a href={`mailto:${c.email}`} className="text-[var(--neon-cyan)] hover:underline">{c.email}</a>
                  <p className="text-[var(--text-muted)] text-sm mt-1">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-['Orbitron',system-ui,sans-serif] text-2xl font-bold text-[var(--text-primary)] mb-6">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </ContentSection>

      <ContentSection background="secondary">
        <div className="section-header">
          <h2 className="section-title">Global Offices</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offices.map((o) => (
            <div key={o.city} className="p-6 bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-lg">
              <span className="text-[var(--neon-cyan)] font-mono text-xs">{o.type}</span>
              <h3 className="font-['Orbitron',system-ui,sans-serif] text-xl font-semibold text-[var(--text-primary)] mt-1">{o.city}</h3>
              <p className="text-[var(--text-secondary)] text-sm mt-2">{o.address}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <Footer />
    </main>
  );
}
