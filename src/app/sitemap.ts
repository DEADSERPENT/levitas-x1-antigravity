import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://levitas.tech';

  // Static pages
  const staticPages = [
    '',
    '/technology',
    '/pricing',
    '/about',
    '/contact',
    '/faq',
    '/blog',
    '/careers',
    '/press',
    '/safety',
    '/support',
    '/training',
    '/docs',
    '/api',
    '/privacy',
    '/terms',
    '/legal',
    '/products/compare',
    '/products/enterprise',
    '/applications/logistics',
    '/applications/research',
  ];

  // Blog articles
  const blogArticles = [
    'faa-certification-milestone',
    'quantum-flux-explained',
    'warehouse-case-study',
  ];

  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: page === '' ? 1 : 0.8,
  }));

  const blogUrls = blogArticles.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticUrls, ...blogUrls];
}
