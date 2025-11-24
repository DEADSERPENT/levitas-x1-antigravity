export interface NavLink {
  href: string;
  label: string;
}

export const mainNavLinks: NavLink[] = [
  { href: '/technology', label: 'Technology' },
  { href: '/products/compare', label: 'Specifications' },
  { href: '/applications/logistics', label: 'Applications' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
];

export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}

export const footerLinks: Record<string, NavLink[]> = {
  product: [
    { label: 'Technology', href: '/technology' },
    { label: 'Specifications', href: '/products/compare' },
    { label: 'Applications', href: '/applications/logistics' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Enterprise', href: '/products/enterprise' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Terms of Physics', href: '/legal' },
    { label: 'Safety Guidelines', href: '/safety' },
    { label: 'Export Compliance', href: '/legal' },
  ],
  support: [
    { label: 'Contact', href: '/contact' },
    { label: 'Quantum Support', href: '/support' },
    { label: 'Documentation', href: '/docs' },
    { label: 'Training Portal', href: '/training' },
    { label: 'API Reference', href: '/api' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
    { label: 'Investors', href: '/about' },
    { label: 'Research', href: '/applications/research' },
  ],
};
