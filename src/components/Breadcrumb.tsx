'use client';

import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-4">
      <ol className="flex items-center gap-2 text-sm font-mono">
        <li>
          <Link href="/" className="text-[var(--text-muted)] hover:text-[var(--neon-cyan)] transition-colors">
            HOME
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-[var(--text-muted)]">/</span>
            {item.href ? (
              <Link href={item.href} className="text-[var(--text-muted)] hover:text-[var(--neon-cyan)] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-[var(--neon-cyan)]">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
