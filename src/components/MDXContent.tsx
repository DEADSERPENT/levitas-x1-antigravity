'use client';

import { ReactNode } from 'react';

interface MDXContentProps {
  children: ReactNode;
}

// MDX component styles for rendering markdown content
export default function MDXContent({ children }: MDXContentProps) {
  return (
    <article className="mdx-content prose prose-invert prose-lg max-w-none">
      <style jsx global>{`
        .mdx-content {
          color: var(--text-secondary);
          line-height: 1.8;
        }

        .mdx-content h1 {
          font-family: 'Orbitron', system-ui, sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-top: 2rem;
          margin-bottom: 1rem;
          letter-spacing: 0.02em;
        }

        .mdx-content h2 {
          font-family: 'Orbitron', system-ui, sans-serif;
          font-size: 1.875rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--border-glow);
        }

        .mdx-content h3 {
          font-family: 'Orbitron', system-ui, sans-serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }

        .mdx-content h4 {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .mdx-content p {
          margin-bottom: 1.5rem;
        }

        .mdx-content a {
          color: var(--neon-cyan);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .mdx-content a:hover {
          text-decoration: underline;
          text-shadow: 0 0 10px var(--glow-cyan);
        }

        .mdx-content strong {
          color: var(--text-primary);
          font-weight: 600;
        }

        .mdx-content em {
          color: var(--neon-violet);
          font-style: italic;
        }

        .mdx-content ul,
        .mdx-content ol {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }

        .mdx-content li {
          margin-bottom: 0.5rem;
          position: relative;
        }

        .mdx-content ul li::marker {
          color: var(--neon-cyan);
        }

        .mdx-content ol li::marker {
          color: var(--neon-cyan);
          font-family: 'JetBrains Mono', monospace;
        }

        .mdx-content blockquote {
          border-left: 3px solid var(--neon-cyan);
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          color: var(--text-secondary);
          background: var(--bg-card);
          padding: 1.5rem;
          border-radius: 0 8px 8px 0;
        }

        .mdx-content code {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.875em;
          background: var(--bg-card);
          padding: 0.2em 0.4em;
          border-radius: 4px;
          color: var(--neon-cyan);
        }

        .mdx-content pre {
          background: var(--bg-card);
          border: 1px solid var(--border-glow);
          border-radius: 8px;
          padding: 1.5rem;
          overflow-x: auto;
          margin: 2rem 0;
        }

        .mdx-content pre code {
          background: transparent;
          padding: 0;
          font-size: 0.875rem;
          line-height: 1.7;
        }

        .mdx-content hr {
          border: none;
          border-top: 1px solid var(--border-glow);
          margin: 3rem 0;
        }

        .mdx-content img {
          border-radius: 8px;
          border: 1px solid var(--border-glow);
          margin: 2rem 0;
        }

        .mdx-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 2rem 0;
        }

        .mdx-content th,
        .mdx-content td {
          padding: 0.75rem 1rem;
          border: 1px solid var(--border-glow);
          text-align: left;
        }

        .mdx-content th {
          background: var(--bg-card);
          color: var(--text-primary);
          font-family: 'Orbitron', system-ui, sans-serif;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .mdx-content tr:hover {
          background: var(--bg-card);
        }

        /* Callouts */
        .mdx-content .callout {
          padding: 1.5rem;
          border-radius: 8px;
          margin: 2rem 0;
          border: 1px solid;
        }

        .mdx-content .callout-info {
          background: rgba(0, 240, 255, 0.1);
          border-color: var(--neon-cyan);
        }

        .mdx-content .callout-warning {
          background: rgba(245, 158, 11, 0.1);
          border-color: var(--warning);
        }

        .mdx-content .callout-error {
          background: rgba(239, 68, 68, 0.1);
          border-color: var(--error);
        }
      `}</style>
      {children}
    </article>
  );
}

// Additional MDX components for use in MDX files
export const MDXComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h1 {...props} />,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 {...props} />,
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h3 {...props} />,
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h4 {...props} />,
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p {...props} />,
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a {...props} target={props.href?.startsWith('http') ? '_blank' : undefined} rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => <ul {...props} />,
  ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => <ol {...props} />,
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => <li {...props} />,
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => <blockquote {...props} />,
  code: (props: React.HTMLAttributes<HTMLElement>) => <code {...props} />,
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => <pre {...props} />,
  hr: () => <hr />,
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img {...props} alt={props.alt || ''} />,
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => <table {...props} />,
  th: (props: React.ThHTMLAttributes<HTMLTableHeaderCellElement>) => <th {...props} />,
  td: (props: React.TdHTMLAttributes<HTMLTableDataCellElement>) => <td {...props} />,

  // Custom components
  Callout: ({ type = 'info', children }: { type?: 'info' | 'warning' | 'error'; children: React.ReactNode }) => (
    <div className={`callout callout-${type}`}>{children}</div>
  ),
};
