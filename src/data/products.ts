export interface PlanFeature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

export interface Plan {
  badge: string;
  name: string;
  desc: string;
  price: string;
  features: PlanFeature[];
  cta: string;
  deposit: string;
  featured: boolean;
}

export const plans: Plan[] = [
  {
    badge: 'CIVILIAN',
    name: 'Standard Unit',
    desc: 'Personal and light commercial use',
    price: '49,999',
    features: [
      { text: '250kg lift capacity', included: true },
      { text: '50-year nuclear diamond cell', included: true },
      { text: '100ft civilian altitude lock', included: true },
      { text: 'iOS & Android app control', included: true },
      { text: 'Voice command interface', included: true },
      { text: 'Standard quantum support', included: true },
      { text: 'API access', included: false },
      { text: 'Custom chassis colors', included: false },
    ],
    cta: 'Reserve Standard',
    deposit: '$5,000 refundable deposit',
    featured: false,
  },
  {
    badge: 'PRO EDITION',
    name: 'Industrial Unit',
    desc: 'Commercial and industrial applications',
    price: '149,999',
    features: [
      { text: '1,000kg lift capacity', included: true, highlight: true },
      { text: '75-year extended power cell', included: true, highlight: true },
      { text: '500ft commercial altitude', included: true, highlight: true },
      { text: 'iOS & Android app control', included: true },
      { text: 'Voice command interface', included: true },
      { text: 'Priority quantum concierge', included: true, highlight: true },
      { text: 'Full API access & SDK', included: true, highlight: true },
      { text: 'Custom chassis colors', included: true, highlight: true },
    ],
    cta: 'Reserve Pro Unit',
    deposit: '$15,000 refundable deposit',
    featured: true,
  },
];

export interface Specification {
  category: string;
  specs: { label: string; standard: string; pro: string }[];
}

export const specifications: Specification[] = [
  {
    category: 'Performance',
    specs: [
      { label: 'Lift Capacity', standard: '250 kg', pro: '1,000 kg' },
      { label: 'Max Altitude', standard: '100 ft', pro: '500 ft' },
      { label: 'Max Speed', standard: '15 mph', pro: '25 mph' },
      { label: 'Response Time', standard: '< 10 ms', pro: '< 5 ms' },
    ],
  },
  {
    category: 'Power',
    specs: [
      { label: 'Power Source', standard: 'Nuclear Diamond Cell', pro: 'Nuclear Diamond Cell XL' },
      { label: 'Lifespan', standard: '50 years', pro: '75 years' },
      { label: 'Recharge', standard: 'Never', pro: 'Never' },
    ],
  },
  {
    category: 'Physical',
    specs: [
      { label: 'Weight', standard: '4.2 kg', pro: '6.8 kg' },
      { label: 'Dimensions', standard: '30 x 20 x 15 cm', pro: '45 x 30 x 20 cm' },
      { label: 'Material', standard: 'Ti-6Al-4V Titanium', pro: 'Ti-6Al-4V Titanium' },
    ],
  },
];
