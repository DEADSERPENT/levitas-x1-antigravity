import { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

// Feature Icons
export function InertiaIcon({ className = 'w-full h-full', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...props}>
      <circle cx="32" cy="32" r="28" className="fill-none stroke-current stroke-[1.5]" />
      <circle cx="32" cy="32" r="8" className="fill-current" />
      <path d="M32 4 L32 16 M32 48 L32 60 M4 32 L16 32 M48 32 L60 32" className="fill-none stroke-current stroke-[1.5]" />
    </svg>
  );
}

export function PowerIcon({ className = 'w-full h-full', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...props}>
      <polygon points="32,4 58,24 48,58 16,58 6,24" className="fill-none stroke-current stroke-[1.5]" />
      <circle cx="32" cy="32" r="10" className="fill-current" />
    </svg>
  );
}

export function SafetyIcon({ className = 'w-full h-full', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...props}>
      <path d="M32 8 L32 48" className="fill-none stroke-current stroke-[1.5]" />
      <path d="M20 40 L32 52 L44 40" className="fill-none stroke-current stroke-[1.5]" />
      <circle cx="32" cy="56" r="4" className="fill-current" />
    </svg>
  );
}

export function ComputeIcon({ className = 'w-full h-full', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...props}>
      <circle cx="32" cy="32" r="24" className="fill-none stroke-current stroke-[1.5]" />
      <path d="M20 32 Q26 20 32 32 Q38 44 44 32" className="fill-none stroke-current stroke-[1.5]" />
      <circle cx="20" cy="32" r="4" className="fill-current" />
      <circle cx="44" cy="32" r="4" className="fill-current" />
    </svg>
  );
}

export function EnvironmentIcon({ className = 'w-full h-full', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...props}>
      <circle cx="32" cy="32" r="20" className="fill-none stroke-current stroke-[1.5]" />
      <circle cx="32" cy="32" r="12" className="fill-none stroke-current stroke-[1.5]" />
      <circle cx="32" cy="32" r="4" className="fill-current" />
    </svg>
  );
}

export function ChassisIcon({ className = 'w-full h-full', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...props}>
      <rect x="16" y="16" width="32" height="32" rx="4" className="fill-none stroke-current stroke-[1.5]" />
      <rect x="24" y="24" width="16" height="16" rx="2" className="fill-current" />
    </svg>
  );
}

// UI Icons
export function PlayIcon({ className = 'w-6 h-6', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <polygon points="9,6 9,18 18,12" fill="currentColor" />
    </svg>
  );
}

export function DiamondIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true" {...props}>
      <path d="M8 1L15 8L8 15L1 8L8 1Z" fill="currentColor" />
    </svg>
  );
}

export function CheckIcon({ className = 'w-5 h-5', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="currentColor" aria-hidden="true" {...props}>
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

export function InfinityIcon({ className = 'w-6 h-6', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true" {...props}>
      <path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.267-8-5.096 0-5.096 8 0 8 5.134 0 7.172-8 12.267-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function RecordIcon({ className = 'w-4 h-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true" {...props}>
      <circle cx="8" cy="8" r="6" fill="currentColor" />
    </svg>
  );
}

export function SpinnerIcon({ className = 'w-5 h-5 animate-spin', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true" {...props}>
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  );
}
