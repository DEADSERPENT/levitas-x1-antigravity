import { ReactNode } from 'react';

export interface Feature {
  /** Machine-readable label for the feature */
  label: string;
  /** Human-readable title */
  title: string;
  /** Detailed description of the feature */
  description: string;
  /** Icon component key - maps to icons in the icons folder */
  iconKey: 'inertia' | 'power' | 'safety' | 'compute' | 'environment' | 'chassis';
}

export const features: Feature[] = [
  {
    label: 'INERTIA_NULLIFICATION',
    title: 'Zero Inertia',
    description:
      'Effortlessly manipulate objects up to 250kg with fingertip precision. Our quantum flux field completely neutralizes gravitational and inertial forces.',
    iconKey: 'inertia',
  },
  {
    label: 'POWER_SYSTEM',
    title: 'Nuclear Diamond Cell',
    description:
      '50-year betavoltaic power cell using carbon-14 diamond semiconductors. Zero charging. Zero maintenance. Perpetual operation within your lifetime.',
    iconKey: 'power',
  },
  {
    label: 'SAFETY_PROTOCOL',
    title: 'Auto-Descent',
    description:
      'Graviton dampening system ensures controlled descent in any failure scenario. Triple-redundant sensors prevent uncontrolled drops. Always land safely.',
    iconKey: 'safety',
  },
  {
    label: 'COMPUTE_CORE',
    title: 'Neural Engine',
    description:
      'Quantum-classical hybrid processor adjusts flux field parameters 10,000 times per second. Real-time environmental adaptation. Imperceptible corrections.',
    iconKey: 'compute',
  },
  {
    label: 'ENV_IMPACT',
    title: 'Zero Emission',
    description:
      'Silent operation. No combustion. No exhaust. No electromagnetic interference beyond 2 meters. The cleanest propulsion system ever created.',
    iconKey: 'environment',
  },
  {
    label: 'CHASSIS_SPEC',
    title: 'Compact Form',
    description:
      'Aerospace-grade Ti-6Al-4V titanium chassis. 4.2kg total weight. Ergonomic grip surfaces. Fits standard equipment mounts. Built to military specifications.',
    iconKey: 'chassis',
  },
];

// Additional feature highlights for marketing pages
export interface FeatureHighlight {
  title: string;
  value: string;
  unit: string;
  description: string;
}

export const featureHighlights: FeatureHighlight[] = [
  {
    title: 'Lift Capacity',
    value: '250',
    unit: 'kg',
    description: 'Maximum weight that can be levitated with precision control',
  },
  {
    title: 'Runtime',
    value: '50',
    unit: 'years',
    description: 'Continuous operation from nuclear diamond cell power source',
  },
  {
    title: 'Core Temp',
    value: '2.4',
    unit: 'K',
    description: 'Superconducting quantum core operating temperature',
  },
  {
    title: 'Response',
    value: '<10',
    unit: 'ms',
    description: 'Time to adjust field parameters for position changes',
  },
];

// Technology categories for detailed breakdowns
export interface TechnologyCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  specs: { label: string; value: string }[];
}

export const technologyCategories: TechnologyCategory[] = [
  {
    id: 'quantum-core',
    name: 'Quantum Core',
    icon: '⚛️',
    description: 'YBCO superconducting matrix with engineered flux pinning centers',
    specs: [
      { label: 'Material', value: 'YBCO (YBa₂Cu₃O₇)' },
      { label: 'Critical Temp', value: '92K (-181°C)' },
      { label: 'Operating Temp', value: '2.4K (-270.75°C)' },
      { label: 'Field Strength', value: '14.7 Tesla' },
    ],
  },
  {
    id: 'power-cell',
    name: 'Nuclear Diamond Cell',
    icon: '💎',
    description: 'Betavoltaic power source using carbon-14 encased in diamond',
    specs: [
      { label: 'Isotope', value: 'Carbon-14' },
      { label: 'Half-life', value: '5,730 years' },
      { label: 'Output', value: '15W continuous' },
      { label: 'Efficiency', value: '98.7%' },
    ],
  },
  {
    id: 'field-array',
    name: 'Field Shaper Array',
    icon: '🌀',
    description: '32 independently controlled micro-emitters for precision field control',
    specs: [
      { label: 'Emitters', value: '32 units' },
      { label: 'Update Rate', value: '10,000 Hz' },
      { label: 'Precision', value: '±1mm' },
      { label: 'Range', value: '5m radius' },
    ],
  },
  {
    id: 'neural-engine',
    name: 'Neural Engine',
    icon: '🧠',
    description: 'Quantum-classical hybrid processor for real-time field optimization',
    specs: [
      { label: 'Architecture', value: 'Hybrid QC' },
      { label: 'Qubits', value: '127 logical' },
      { label: 'Classical', value: '16-core ARM' },
      { label: 'Latency', value: '<1ms' },
    ],
  },
];
