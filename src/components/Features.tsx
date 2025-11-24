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
import { features as featuresData, Feature } from '@/data/features';

// Map icon keys to actual icon components
const iconMap: Record<Feature['iconKey'], ReactNode> = {
  inertia: <InertiaIcon className="w-full h-full text-[var(--neon-cyan)]" />,
  power: <PowerIcon className="w-full h-full text-[var(--neon-cyan)]" />,
  safety: <SafetyIcon className="w-full h-full text-[var(--neon-cyan)]" />,
  compute: <ComputeIcon className="w-full h-full text-[var(--neon-cyan)]" />,
  environment: <EnvironmentIcon className="w-full h-full text-[var(--neon-cyan)]" />,
  chassis: <ChassisIcon className="w-full h-full text-[var(--neon-cyan)]" />,
};

// Transform data features with icons
const features = featuresData.map((feature) => ({
  ...feature,
  icon: iconMap[feature.iconKey],
}));

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
