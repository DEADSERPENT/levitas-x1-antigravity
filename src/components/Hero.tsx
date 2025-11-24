'use client';

import { useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { DiamondIcon, PlayIcon, InfinityIcon } from './icons';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const deviceRef = useRef<HTMLDivElement>(null);

  // Throttle function for performance optimization
  const throttle = useCallback(<T extends (...args: Parameters<T>) => void>(
    func: T,
    limit: number
  ): ((...args: Parameters<T>) => void) => {
    let inThrottle = false;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!deviceRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;

      deviceRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    };

    const throttledMouseMove = throttle(handleMouseMove, 16); // ~60fps

    window.addEventListener('mousemove', throttledMouseMove);
    return () => window.removeEventListener('mousemove', throttledMouseMove);
  }, [throttle]);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-[var(--bg-secondary)] to-[var(--bg-primary)]" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--neon-cyan)] rounded-full filter blur-[150px] animate-[glow-pulse_4s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--neon-violet)] rounded-full filter blur-[150px] animate-[glow-pulse_4s_ease-in-out_infinite_1s]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--bg-card)]/50 border border-[var(--border-glow)] rounded-full mb-6">
              <span className="status-dot" />
              <span className="text-xs font-mono text-[var(--neon-cyan)] tracking-wider">
                SYSTEM ONLINE
              </span>
              <span className="text-[var(--text-muted)]">//</span>
              <span className="text-xs font-mono text-[var(--text-muted)]">v1.0.0</span>
            </div>

            <h1 className="font-[family-name:var(--font-orbitron)] text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="block text-[var(--text-primary)]">GRAVITY</span>
              <span className="block text-gradient">OBSOLETE</span>
            </h1>

            <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-xl mx-auto lg:mx-0 mb-8">
              The world&apos;s first consumer-grade quantum flux pinning device.
              Harness the power of quantum locking to make any object weightless.
              The post-gravity era begins now.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link href="/pricing" className="btn btn-primary text-base px-8 py-4">
                <DiamondIcon className="w-4 h-4" />
                Acquire Unit
              </Link>
              <Link href="/technology" className="btn btn-secondary text-base px-8 py-4">
                <PlayIcon className="w-4 h-4" />
                How It Works
              </Link>
            </div>

            {/* Telemetry Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-6 sm:gap-10">
              <div className="text-center">
                <div className="font-[family-name:var(--font-orbitron)] text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                  250<span className="text-base text-[var(--neon-cyan)]">kg</span>
                </div>
                <div className="text-xs font-mono text-[var(--text-muted)] tracking-wider">LIFT_CAPACITY</div>
              </div>
              <div className="w-px h-12 bg-[var(--border-glow)]" />
              <div className="text-center">
                <div className="font-[family-name:var(--font-orbitron)] text-2xl sm:text-3xl font-bold text-[var(--text-primary)] flex items-center justify-center gap-1">
                  <InfinityIcon className="w-8 h-8" />
                  <span className="text-base text-[var(--neon-cyan)]">hrs</span>
                </div>
                <div className="text-xs font-mono text-[var(--text-muted)] tracking-wider">RUNTIME</div>
              </div>
              <div className="w-px h-12 bg-[var(--border-glow)]" />
              <div className="text-center">
                <div className="font-[family-name:var(--font-orbitron)] text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                  2.4<span className="text-base text-[var(--neon-cyan)]">K</span>
                </div>
                <div className="text-xs font-mono text-[var(--text-muted)] tracking-wider">CORE_TEMP</div>
              </div>
            </div>
          </div>

          {/* Right Column - Device */}
          <div className="relative flex items-center justify-center perspective-[1000px]">
            <div ref={deviceRef} className="device-container relative w-80 h-80 sm:w-96 sm:h-96 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" style={{ transformStyle: 'preserve-3d', willChange: 'transform', backfaceVisibility: 'hidden' }}>
              {/* Orbital Rings */}
              <div className="absolute inset-0 border-2 border-[var(--neon-cyan)]/30 rounded-full animate-[ring-rotate_20s_linear_infinite]" />
              <div className="absolute inset-8 border border-[var(--neon-violet)]/20 rounded-full animate-[ring-rotate_15s_linear_infinite_reverse]" />
              <div className="absolute inset-16 border border-[var(--neon-cyan)]/40 rounded-full animate-[ring-rotate_10s_linear_infinite]" />

              {/* Core Device */}
              <div className="absolute inset-24 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-panel)] rounded-2xl border border-[var(--border-glow)] shadow-2xl" />
                  <div className="absolute inset-4 bg-[var(--neon-cyan)]/10 rounded-xl flex items-center justify-center">
                    <div className="w-16 h-16 bg-[var(--neon-cyan)] rounded-full animate-[ring-pulse_2s_ease-in-out_infinite] shadow-[0_0_60px_var(--glow-cyan)]" />
                  </div>
                </div>
              </div>

              {/* HUD Labels */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 px-3 py-1 bg-[var(--bg-card)]/80 border border-[var(--border-glow)] rounded text-xs font-mono text-[var(--neon-cyan)]">
                FLUX_ACTIVE
              </div>
              <div className="absolute right-0 top-1/2 translate-x-4 -translate-y-1/2 px-3 py-1 bg-[var(--bg-card)]/80 border border-[var(--border-glow)] rounded text-xs font-mono text-[var(--neon-violet)]">
                14.7T
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 px-3 py-1 bg-[var(--bg-card)]/80 border border-[var(--border-glow)] rounded text-xs font-mono text-[var(--neon-cyan)]">
                QUANTUM_LOCK
              </div>
              <div className="absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 px-3 py-1 bg-[var(--bg-card)]/80 border border-[var(--border-glow)] rounded text-xs font-mono text-[var(--success)]">
                STABLE
              </div>
            </div>

            {/* Device Shadow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-4 bg-[var(--neon-cyan)]/20 rounded-full filter blur-xl" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-muted)]">
        <span className="text-xs tracking-wider">Scroll to explore</span>
        <div className="w-px h-8 bg-gradient-to-b from-[var(--neon-cyan)] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
