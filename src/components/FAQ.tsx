'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'How does quantum flux pinning actually work?',
    answer: 'Levitas X1 generates a localized quantum field that pins magnetic flux lines in a superconducting state. This creates a stable equilibrium point where gravitational forces are effectively cancelled. The object "locks" into position relative to the Earth\'s magnetic field, allowing precise positioning without energy expenditure to maintain altitude.',
  },
  {
    question: 'Does the device require any maintenance?',
    answer: 'Levitas X1 is designed for zero maintenance operation. The nuclear diamond battery requires no charging or replacement within 50 years. The sealed titanium chassis prevents dust and moisture ingress. Annual diagnostic scans are recommended but not required, and can be performed remotely through the companion app.',
  },
  {
    question: 'Is it legal to use in my country?',
    answer: 'Levitas X1 is currently approved for civilian use in the United States, European Union, United Kingdom, Canada, Australia, Japan, and South Korea. Additional countries are in the approval process. The built-in geo-fencing ensures compliance with local airspace regulations regardless of location.',
  },
  {
    question: 'Can it interfere with electronics or pacemakers?',
    answer: 'The quantum flux field is precisely contained within a 2-meter radius with zero electromagnetic leakage beyond this boundary. It does not interfere with pacemakers, smartphones, or sensitive equipment outside the active field zone. However, electronic devices should not be placed directly within the flux field during operation.',
  },
  {
    question: 'What happens if the power fails?',
    answer: 'The nuclear diamond cell cannot "run out" in any practical sense. However, if systems are damaged, the auto-descent protocol activates immediately. Graviton dampeners (which operate on separate physics) engage to ensure any levitated object descends at less than 2 meters per second. This system has triple redundancy and has never failed in testing.',
  },
  {
    question: 'Can I take it on an airplane?',
    answer: 'Levitas X1 is classified as special cargo under pending IATA guidelines. It must be declared and transported in its provided shielded case, which prevents accidental activation. Most commercial airlines accept it as checked baggage with advance notice. Private aviation has no restrictions when properly cased.',
  },
  {
    question: "What's the warranty coverage?",
    answer: 'All Levitas X1 units include a 10-year comprehensive warranty covering all components including the nuclear diamond cell. Pro Edition units receive lifetime warranty on the power cell and 15-year coverage on all other components. Accidental damage protection is available as an add-on.',
  },
  {
    question: 'When will my unit ship?',
    answer: 'Batch 001 reservations are scheduled for delivery beginning Q4 2025. Delivery priority is determined by reservation date. Current estimated wait time for new reservations is 8-12 months. Pro Edition units are manufactured in smaller quantities and may have longer lead times.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <span className="section-overline">
            <span className="text-[var(--text-muted)]">[</span>
            KNOWLEDGE BASE
            <span className="text-[var(--text-muted)]">]</span>
          </span>
          <h2 className="section-title">
            Frequently <span className="text-gradient">Asked</span>
          </h2>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="pr-4">{faq.question}</span>
                <span className="faq-icon flex-shrink-0 text-[var(--neon-cyan)]">+</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
