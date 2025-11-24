'use client';

interface Icon3DProps {
  className?: string;
  size?: number;
  color?: string;
  secondaryColor?: string;
}

// Floating Cube Icon
export function CubeIcon({ className = '', size = 48, color = 'var(--neon-cyan)', secondaryColor = 'var(--neon-violet)' }: Icon3DProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
    >
      <defs>
        <linearGradient id="cube-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor={secondaryColor} />
        </linearGradient>
      </defs>
      {/* Front face */}
      <path
        d="M8 16L24 8L40 16V32L24 40L8 32V16Z"
        fill="url(#cube-gradient)"
        fillOpacity="0.2"
        stroke="url(#cube-gradient)"
        strokeWidth="1.5"
      />
      {/* Top edge */}
      <path
        d="M24 8L40 16L24 24L8 16L24 8Z"
        fill={color}
        fillOpacity="0.3"
        stroke={color}
        strokeWidth="1"
      />
      {/* Center line */}
      <path
        d="M24 24V40"
        stroke={secondaryColor}
        strokeWidth="1.5"
        strokeOpacity="0.8"
      />
    </svg>
  );
}

// Quantum Core Icon
export function QuantumCoreIcon({ className = '', size = 48, color = 'var(--neon-cyan)', secondaryColor = 'var(--neon-violet)' }: Icon3DProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
    >
      <defs>
        <linearGradient id="core-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor={secondaryColor} />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      {/* Outer ring */}
      <circle cx="24" cy="24" r="20" stroke={color} strokeWidth="1" fill="none" strokeOpacity="0.3" />
      {/* Middle ring */}
      <circle cx="24" cy="24" r="14" stroke={secondaryColor} strokeWidth="1.5" fill="none" strokeOpacity="0.5" />
      {/* Inner core */}
      <circle cx="24" cy="24" r="8" fill="url(#core-gradient)" filter="url(#glow)" />
      {/* Orbital particles */}
      <circle cx="24" cy="4" r="2" fill={color} opacity="0.8" />
      <circle cx="44" cy="24" r="2" fill={secondaryColor} opacity="0.8" />
      <circle cx="24" cy="44" r="2" fill={color} opacity="0.8" />
      <circle cx="4" cy="24" r="2" fill={secondaryColor} opacity="0.8" />
    </svg>
  );
}

// Levitation Field Icon
export function FieldIcon({ className = '', size = 48, color = 'var(--neon-cyan)', secondaryColor = 'var(--neon-violet)' }: Icon3DProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
    >
      <defs>
        <linearGradient id="field-gradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="0" />
          <stop offset="100%" stopColor={color} stopOpacity="0.5" />
        </linearGradient>
      </defs>
      {/* Field waves */}
      <ellipse cx="24" cy="36" rx="18" ry="6" stroke={color} strokeWidth="1" fill="none" strokeOpacity="0.3" />
      <ellipse cx="24" cy="30" rx="14" ry="4" stroke={color} strokeWidth="1" fill="none" strokeOpacity="0.5" />
      <ellipse cx="24" cy="24" rx="10" ry="3" stroke={secondaryColor} strokeWidth="1" fill="none" strokeOpacity="0.7" />
      {/* Floating object */}
      <rect x="18" y="10" width="12" height="8" rx="2" fill="url(#field-gradient)" stroke={secondaryColor} strokeWidth="1.5" />
      {/* Energy beams */}
      <path d="M24 18L24 24" stroke={color} strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  );
}

// Shield/Security Icon
export function ShieldIcon({ className = '', size = 48, color = 'var(--neon-cyan)', secondaryColor = 'var(--neon-violet)' }: Icon3DProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
    >
      <defs>
        <linearGradient id="shield-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor={secondaryColor} />
        </linearGradient>
      </defs>
      {/* Shield shape */}
      <path
        d="M24 4L40 10V22C40 32 32 40 24 44C16 40 8 32 8 22V10L24 4Z"
        fill="url(#shield-gradient)"
        fillOpacity="0.2"
        stroke="url(#shield-gradient)"
        strokeWidth="1.5"
      />
      {/* Check mark */}
      <path
        d="M16 24L22 30L32 18"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Hexagon Tech Icon
export function HexagonIcon({ className = '', size = 48, color = 'var(--neon-cyan)', secondaryColor = 'var(--neon-violet)' }: Icon3DProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
    >
      <defs>
        <linearGradient id="hex-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor={secondaryColor} />
        </linearGradient>
      </defs>
      {/* Hexagon */}
      <path
        d="M24 4L42 14V34L24 44L6 34V14L24 4Z"
        fill="url(#hex-gradient)"
        fillOpacity="0.15"
        stroke="url(#hex-gradient)"
        strokeWidth="1.5"
      />
      {/* Inner circuit pattern */}
      <path
        d="M24 14L24 24M24 24L16 28M24 24L32 28M24 24L24 34"
        stroke={color}
        strokeWidth="1"
        strokeOpacity="0.6"
      />
      {/* Center node */}
      <circle cx="24" cy="24" r="4" fill={color} fillOpacity="0.8" />
    </svg>
  );
}

// Infinity/Power Icon
export function InfinityPowerIcon({ className = '', size = 48, color = 'var(--neon-cyan)', secondaryColor = 'var(--neon-violet)' }: Icon3DProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
    >
      <defs>
        <linearGradient id="infinity-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} />
          <stop offset="50%" stopColor={secondaryColor} />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
      </defs>
      {/* Infinity symbol */}
      <path
        d="M14 24C14 20 10 16 6 20C2 24 6 32 14 24C22 16 26 16 30 20C34 24 38 24 42 20C46 16 42 16 38 20C34 24 30 32 22 24C14 16 10 20 14 24Z"
        stroke="url(#infinity-gradient)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Energy dots */}
      <circle cx="6" cy="24" r="2" fill={color} />
      <circle cx="24" cy="24" r="3" fill={secondaryColor} />
      <circle cx="42" cy="24" r="2" fill={color} />
    </svg>
  );
}

// Export all as named object
const Icons3D = {
  Cube: CubeIcon,
  QuantumCore: QuantumCoreIcon,
  Field: FieldIcon,
  Shield: ShieldIcon,
  Hexagon: HexagonIcon,
  InfinityPower: InfinityPowerIcon,
};

export default Icons3D;
