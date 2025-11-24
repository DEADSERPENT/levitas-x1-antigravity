'use client';

import { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: 'Sales Inquiry',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // Simulate API call - replace with actual API endpoint
    try {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In production, you would call your API here:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      // if (!response.ok) throw new Error('Failed to send message');

      setStatus('success');
      setFormData({ name: '', email: '', subject: 'Sales Inquiry', message: '' });
    } catch {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-[var(--text-secondary)] text-sm mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-lg text-[var(--text-primary)] focus:border-[var(--neon-cyan)] focus:outline-none transition-colors"
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-[var(--text-secondary)] text-sm mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-lg text-[var(--text-primary)] focus:border-[var(--neon-cyan)] focus:outline-none transition-colors"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-[var(--text-secondary)] text-sm mb-2">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-lg text-[var(--text-primary)] focus:border-[var(--neon-cyan)] focus:outline-none transition-colors"
        >
          <option value="Sales Inquiry">Sales Inquiry</option>
          <option value="Technical Support">Technical Support</option>
          <option value="Enterprise Solutions">Enterprise Solutions</option>
          <option value="Partnership">Partnership</option>
          <option value="Press/Media">Press/Media</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-[var(--text-secondary)] text-sm mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-lg text-[var(--text-primary)] focus:border-[var(--neon-cyan)] focus:outline-none transition-colors resize-none"
          placeholder="How can we help you?"
        />
      </div>

      {status === 'error' && (
        <div className="p-3 bg-[var(--error)]/10 border border-[var(--error)] rounded-lg text-[var(--error)] text-sm">
          {errorMessage}
        </div>
      )}

      {status === 'success' && (
        <div className="p-3 bg-[var(--success)]/10 border border-[var(--success)] rounded-lg text-[var(--success)] text-sm flex items-center gap-2">
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Message sent successfully! We&apos;ll get back to you soon.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          <>
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Transmitting...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
}
