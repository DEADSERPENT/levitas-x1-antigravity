'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const steps = [
  {
    number: '01',
    title: 'Unboxing',
    description: 'Carefully unpack your Levitas X1 unit and verify all components.',
    details: [
      'X1 Main Unit (quantum core pre-installed)',
      'Control Pad with haptic feedback',
      'Charging dock with ZPE converter',
      'Quick start guide and safety manual',
      'Calibration tools',
      'Premium carrying case',
    ],
    tip: 'Keep all packaging for warranty purposes and potential transport.',
  },
  {
    number: '02',
    title: 'Environment Setup',
    description: 'Prepare your space for optimal levitation performance.',
    details: [
      'Clear a minimum 3m × 3m area',
      'Ensure flat, stable surface',
      'Remove magnetic interference sources',
      'Maintain room temperature 15-30°C',
      'Ensure adequate ventilation',
      'Install safety markers (included)',
    ],
    tip: 'The X1 works best away from large metal structures and electronics.',
  },
  {
    number: '03',
    title: 'Power Initialization',
    description: 'Activate the quantum core and begin initial charging.',
    details: [
      'Place unit on charging dock',
      'Press power button for 3 seconds',
      'Wait for blue LED sequence (30 sec)',
      'Core temperature will stabilize at 2.4K',
      'Green status light indicates ready',
      'First-time initialization takes ~5 minutes',
    ],
    tip: 'After initial activation, the ZPE module maintains indefinite power.',
  },
  {
    number: '04',
    title: 'Software Connection',
    description: 'Connect your X1 to the Levitas Control Center.',
    details: [
      'Download Levitas Control Center',
      'Enable Bluetooth and WiFi',
      'Create/sign into your Levitas account',
      'Scan QR code on your X1 unit',
      'Accept pairing request on Control Pad',
      'Complete guided setup wizard',
    ],
    tip: 'Mobile app also available for iOS and Android.',
  },
  {
    number: '05',
    title: 'Calibration',
    description: 'Calibrate sensors for your specific environment.',
    details: [
      'Run "Auto-Calibrate" from the app',
      'Place calibration weight (included)',
      'System maps gravitational field',
      'Adjust for local magnetic anomalies',
      'Set maximum height limits',
      'Process completes in ~2 minutes',
    ],
    tip: 'Re-calibrate if you move the X1 to a new location.',
  },
  {
    number: '06',
    title: 'First Levitation',
    description: 'Experience anti-gravity for the first time.',
    details: [
      'Place object on levitation pad',
      'Select "Basic Lift" mode in app',
      'Slowly increase lift slider',
      'Object will begin floating',
      'Use joystick for position control',
      'Lower slider to descend',
    ],
    tip: 'Start with light objects (< 5kg) to get comfortable with controls.',
  },
];

const faqs = [
  {
    question: 'How long does setup take?',
    answer: 'First-time setup typically takes 15-20 minutes. Subsequent activations are instant.',
  },
  {
    question: 'Can I move the X1 after setup?',
    answer: 'Yes, but re-calibration is recommended when moving to a new location for optimal performance.',
  },
  {
    question: 'What if calibration fails?',
    answer: 'Ensure the area is free from magnetic interference. Contact support if issues persist.',
  },
  {
    question: 'Is the quantum core safe?',
    answer: 'Yes, the core is fully shielded. No radiation or harmful emissions. FDA and CE certified.',
  },
];

export default function GettingStartedPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--neon-green)]/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--bg-card)]/50 border border-[var(--border-glow)] rounded-full mb-6 animate-fade-in">
              <span className="text-xs font-mono text-[var(--neon-green)] tracking-wider">
                SETUP GUIDE
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
              <span className="text-[var(--text-primary)]">Getting </span>
              <span className="text-gradient">Started</span>
            </h1>
            <p className="text-lg text-[var(--text-secondary)] animate-slide-up animation-delay-200">
              Follow this step-by-step guide to set up your Levitas X1
              and experience anti-gravity in minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[300px_1fr] gap-12">
            {/* Step Navigation */}
            <div className="space-y-2">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-full text-left px-6 py-4 rounded-lg transition-all duration-500 ${
                    activeStep === index
                      ? 'bg-[var(--neon-cyan)]/10 border border-[var(--neon-cyan)]'
                      : 'bg-[var(--bg-card)] border border-transparent hover:border-[var(--border-glow)]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-sm transition-colors duration-300 ${
                      activeStep === index ? 'text-[var(--neon-cyan)]' : 'text-[var(--text-muted)]'
                    }`}>
                      {step.number}
                    </span>
                    <span className={`font-display font-semibold transition-colors duration-300 ${
                      activeStep === index ? 'text-[var(--neon-cyan)]' : 'text-[var(--text-primary)]'
                    }`}>
                      {step.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Step Content */}
            <div className="card animate-fade-in" key={activeStep}>
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-4xl font-bold text-[var(--neon-cyan)]">
                  {steps[activeStep].number}
                </span>
                <h2 className="font-display text-3xl font-bold text-[var(--text-primary)]">
                  {steps[activeStep].title}
                </h2>
              </div>
              <p className="text-lg text-[var(--text-secondary)] mb-8">
                {steps[activeStep].description}
              </p>

              <div className="mb-8">
                <h3 className="font-display text-lg font-semibold text-[var(--text-primary)] mb-4">
                  Checklist
                </h3>
                <ul className="space-y-3">
                  {steps[activeStep].details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-5 h-5 flex items-center justify-center bg-[var(--neon-cyan)]/20 text-[var(--neon-cyan)] rounded text-xs mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-[var(--text-secondary)]">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-[var(--neon-cyan)]/10 border border-[var(--neon-cyan)]/30 rounded-lg">
                <div className="flex items-start gap-3">
                  <span className="text-[var(--neon-cyan)]">💡</span>
                  <div>
                    <span className="font-semibold text-[var(--neon-cyan)]">Pro Tip: </span>
                    <span className="text-[var(--text-secondary)]">{steps[activeStep].tip}</span>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-8 border-t border-[var(--border-glow)]">
                <button
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                  className="btn btn-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-500"
                >
                  Previous
                </button>
                <button
                  onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                  disabled={activeStep === steps.length - 1}
                  className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-500"
                >
                  Next Step
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-8 text-center">
            Setup FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card transition-all duration-500">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="font-display font-semibold text-[var(--text-primary)]">
                    {faq.question}
                  </span>
                  <span className={`text-[var(--neon-cyan)] text-xl transition-transform duration-500 ${
                    openFaq === index ? 'rotate-45' : ''
                  }`}>
                    +
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${
                  openFaq === index ? 'max-h-40 mt-4' : 'max-h-0'
                }`}>
                  <p className="text-[var(--text-secondary)]">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] mb-6">
            Need More Help?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            Our support team is available 24/7 to assist with your setup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/support" className="btn btn-primary transition-all duration-500">
              Contact Support
            </Link>
            <Link href="/docs" className="btn btn-secondary transition-all duration-500">
              Full Documentation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
