'use client';

import { ReactNode } from 'react';
import {
  InertiaIcon,
  PowerIcon,
  SafetyIcon,
  ComputeIcon,
  EnvironmentIcon,
  ChassisIcon,
} from './icons';

interface Feature {
  label: string;
  title: string;
  description: string;
  icon: ReactNode;
}

const features: Feature[] = [
  {
    label: 'INERTIA_NULLIFICATION',
    title: 'Zero Inertia',
    description: 'Effortlessly manipulate objects up to 250kg with fingertip precision. Our quantum flux field completely neutralizes gravitational and inertial forces.',
    icon: <InertiaIcon className="w-full h-full text-[var(--neon-cyan)]" />,
  },
  {
    label: 'POWER_SYSTEM',
    title: 'Nuclear Diamond Cell',
    description: '50-year betavoltaic power cell using carbon-14 diamond semiconductors. Zero charging. Zero maintenance. Perpetual operation within your lifetime.',
    icon: <PowerIcon className="w-full h-full text-[var(--neon-cyan)]" />,
  },
  {
    label: 'SAFETY_PROTOCOL',
    title: 'Auto-Descent',
    description: 'Graviton dampening system ensures controlled descent in any failure scenario. Triple-redundant sensors prevent uncontrolled drops. Always land safely.',
    icon: <SafetyIcon className="w-full h-full text-[var(--neon-cyan)]" />,
  },
  {
    label: 'COMPUTE_CORE',
    title: 'Neural Engine',
    description: 'Quantum-classical hybrid processor adjusts flux field parameters 10,000 times per second. Real-time environmental adaptation. Imperceptible corrections.',
    icon: <ComputeIcon className="w-full h-full text-[var(--neon-cyan)]" />,
  },
  {
    label: 'ENV_IMPACT',
    title: 'Zero Emission',
    description: 'Silent operation. No combustion. No exhaust. No electromagnetic interference beyond 2 meters. The cleanest propulsion system ever created.',
    icon: <EnvironmentIcon className="w-full h-full text-[var(--neon-cyan)]" />,
  },
  {
    label: 'CHASSIS_SPEC',
    title: 'Compact Form',
    description: 'Aerospace-grade Ti-6Al-4V titanium chassis. 4.2kg total weight. Ergonomic grip surfaces. Fits standard equipment mounts. Built to military specifications.',
    icon: <ChassisIcon className="w-full h-full text-[var(--neon-cyan)]" />,
  },
];

export default function Features() {
  return (
    <section id="technology" className="section relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <span className="section-overline">
            <span className="text-[var(--text-muted)]">[</span>
            CORE TECHNOLOGY
            <span className="text-[var(--text-muted)]">]</span>
          </span>
          <h2 className="section-title">
            Engineering the <span className="text-gradient">Impossible</span>
          </h2>
          <p className="section-subtitle">
            Six breakthrough technologies converge to create the first practical antigravity system for civilian use.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative z-10">
                <div className="w-16 h-16 mb-4 text-[var(--neon-cyan)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:rotate-3">
                  {feature.icon}
                </div>
                <div className="text-xs font-mono text-[var(--neon-violet)] tracking-wider mb-2">
                  {feature.label}
                </div>
                <h3 className="font-[family-name:var(--font-orbitron)] text-xl font-semibold mb-3 text-[var(--text-primary)]">
                  {feature.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-[var(--border-glow)] opacity-50" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-[var(--border-glow)] opacity-50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
