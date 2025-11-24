'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { PlayIcon, RecordIcon } from './icons';

export default function Demo() {
  const [isActive, setIsActive] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [levitationHeight, setLevitationHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  // Throttle mouse movement
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
    if (!isActive || !containerRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 30;
      setRotation({ x: -y, y: x });
    };

    const throttledMouseMove = throttle(handleMouseMove, 16);
    containerRef.current.addEventListener('mousemove', throttledMouseMove);

    return () => {
      containerRef.current?.removeEventListener('mousemove', throttledMouseMove);
    };
  }, [isActive, throttle]);

  // Levitation animation
  useEffect(() => {
    if (!isActive) {
      setLevitationHeight(0);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      return;
    }

    let startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const height = Math.sin(elapsed / 1000) * 10 + 10;
      setLevitationHeight(height);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isActive]);

  const handleActivate = () => {
    setIsActive(!isActive);
  };

  return (
    <section id="demo" className="section relative bg-[var(--bg-secondary)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <span className="section-overline">
            <span className="text-[var(--text-muted)]">[</span>
            EXPERIENCE
            <span className="text-[var(--text-muted)]">]</span>
          </span>
          <h2 className="section-title">
            See It In <span className="text-gradient">Action</span>
          </h2>
          <p className="section-subtitle">
            Experience the future before you own it. Our quantum simulation provides an accurate preview of Levitas X1 capabilities.
          </p>
        </div>

        {/* Interactive Demo */}
        <div className="relative">
          <div
            ref={containerRef}
            className="aspect-video bg-[var(--bg-card)] rounded-lg border border-[var(--border-glow)] overflow-hidden cursor-pointer"
            style={{ perspective: '1000px' }}
            role="application"
            aria-label="Interactive 3D demonstration of Levitas X1"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {/* 3D Device Visualization */}
              <div
                className="relative transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  transform: isActive
                    ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateY(-${levitationHeight}px) translateZ(0)`
                    : 'rotateX(0) rotateY(0) translateZ(0)',
                  transformStyle: 'preserve-3d',
                  willChange: 'transform',
                  backfaceVisibility: 'hidden',
                }}
              >
                {/* Orbital Rings */}
                <div
                  className={`absolute inset-0 w-48 h-48 -ml-24 -mt-24 border-2 rounded-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive
                      ? 'border-[var(--neon-cyan)] animate-[ring-rotate_8s_linear_infinite]'
                      : 'border-[var(--neon-cyan)]/30'
                  }`}
                  style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
                />
                <div
                  className={`absolute inset-0 w-36 h-36 -ml-18 -mt-18 border rounded-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive
                      ? 'border-[var(--neon-violet)] animate-[ring-rotate_6s_linear_infinite_reverse]'
                      : 'border-[var(--neon-violet)]/20'
                  }`}
                  style={{ marginLeft: '-72px', marginTop: '-72px', willChange: 'transform', backfaceVisibility: 'hidden' }}
                />

                {/* Core Device */}
                <div
                  className={`relative w-24 h-24 rounded-xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive
                      ? 'bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-panel)] border-2 border-[var(--neon-cyan)] shadow-[0_0_60px_var(--glow-cyan)]'
                      : 'bg-[var(--bg-panel)] border border-[var(--border-glow)]'
                  }`}
                >
                  <div
                    className={`absolute inset-4 rounded-lg flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isActive ? 'bg-[var(--neon-cyan)]/20' : 'bg-[var(--neon-cyan)]/5'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isActive
                          ? 'bg-[var(--neon-cyan)] animate-[ring-pulse_2s_cubic-bezier(0.76,0,0.24,1)_infinite] shadow-[0_0_40px_var(--glow-cyan)]'
                          : 'bg-[var(--neon-cyan)]/30'
                      }`}
                    />
                  </div>
                </div>

                {/* Status Labels */}
                {isActive && (
                  <>
                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 px-2 py-1 bg-[var(--bg-card)]/90 border border-[var(--neon-cyan)] rounded text-xs font-mono text-[var(--neon-cyan)] whitespace-nowrap animate-fade-in">
                      FLUX: ACTIVE
                    </div>
                    <div className="absolute top-1/2 -right-20 -translate-y-1/2 px-2 py-1 bg-[var(--bg-card)]/90 border border-[var(--neon-violet)] rounded text-xs font-mono text-[var(--neon-violet)] animate-fade-in">
                      14.7T
                    </div>
                  </>
                )}
              </div>

              {/* Shadow */}
              <div
                className={`absolute bottom-20 left-1/2 -translate-x-1/2 w-32 h-4 rounded-full filter blur-xl transition-all duration-500 ${
                  isActive ? 'bg-[var(--neon-cyan)]/30 scale-110' : 'bg-[var(--neon-cyan)]/10'
                }`}
                style={{
                  transform: isActive
                    ? `translateX(-50%) scale(${1 + levitationHeight / 50})`
                    : 'translateX(-50%)',
                }}
              />

              {/* Instruction Overlay */}
              {!isActive && (
                <div className="absolute inset-0 flex items-center justify-center bg-[var(--bg-primary)]/50">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-[var(--neon-cyan)] flex items-center justify-center hover:bg-[var(--neon-cyan)]/10 transition-colors">
                      <PlayIcon className="w-8 h-8 text-[var(--neon-cyan)]" />
                    </div>
                    <div className="font-mono text-sm text-[var(--text-muted)] tracking-wider">
                      CLICK TO INITIALIZE
                    </div>
                  </div>
                </div>
              )}

              {/* Scan Line Effect */}
              <div className="scan-line opacity-30" />
            </div>

            {/* Corner Decorations */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[var(--neon-cyan)]/50" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[var(--neon-cyan)]/50" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[var(--neon-cyan)]/50" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[var(--neon-cyan)]/50" />

            {/* Click Handler */}
            <button
              className="absolute inset-0 w-full h-full cursor-pointer z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--neon-cyan)]"
              onClick={handleActivate}
              aria-label={isActive ? 'Deactivate simulation' : 'Activate simulation'}
            />
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button
              onClick={handleActivate}
              className={`btn ${isActive ? 'btn-secondary' : 'btn-primary'}`}
            >
              {isActive ? (
                <>
                  <RecordIcon className="w-4 h-4" />
                  Stop Demo
                </>
              ) : (
                <>
                  <PlayIcon className="w-4 h-4" />
                  Launch Demo
                </>
              )}
            </button>
            <button className="btn btn-secondary">
              <RecordIcon className="w-4 h-4" />
              AR Preview
            </button>
          </div>

          {/* Status Panel */}
          {isActive && (
            <div className="mt-6 p-4 bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-lg">
              <div className="flex flex-wrap justify-center gap-6 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--success)] rounded-full animate-pulse" />
                  <span className="text-[var(--text-muted)]">STATUS:</span>
                  <span className="text-[var(--success)]">LEVITATING</span>
                </div>
                <div>
                  <span className="text-[var(--text-muted)]">ALTITUDE:</span>{' '}
                  <span className="text-[var(--neon-cyan)]">{levitationHeight.toFixed(1)}cm</span>
                </div>
                <div>
                  <span className="text-[var(--text-muted)]">FLUX:</span>{' '}
                  <span className="text-[var(--neon-violet)]">14.7 Tesla</span>
                </div>
                <div>
                  <span className="text-[var(--text-muted)]">STABILITY:</span>{' '}
                  <span className="text-[var(--success)]">99.97%</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
