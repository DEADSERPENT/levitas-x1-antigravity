'use client';

import { ReactNode } from 'react';

interface ContentSectionProps {
  children: ReactNode;
  className?: string;
  background?: 'primary' | 'secondary';
}

export default function ContentSection({
  children,
  className = '',
  background = 'primary',
}: ContentSectionProps) {
  const bgClass = background === 'secondary' ? 'bg-[var(--bg-secondary)]' : '';

  return (
    <section className={`section relative ${bgClass} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
