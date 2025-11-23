'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Navbar, Footer } from '@/components';

// Intersection Observer Hook for scroll animations
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

// Animated Counter Component
function AnimatedCounter({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const { ref, isInView } = useInView();

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouse);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  const features = [
    { icon: '◈', label: 'ZERO_INERTIA', title: 'Zero Inertia', desc: 'Manipulate 250kg with fingertip precision. Quantum flux neutralizes all gravitational forces.', link: '/technology' },
    { icon: '◇', label: 'POWER_CORE', title: 'Nuclear Diamond', desc: '50-year betavoltaic cell. Zero charging. Zero maintenance. Perpetual operation.', link: '/technology#nuclear-diamond' },
    { icon: '△', label: 'SAFETY_LOCK', title: 'Auto-Descent', desc: 'Triple-redundant systems ensure controlled landing. Always safe, always protected.', link: '/safety' },
    { icon: '○', label: 'NEURAL_AI', title: 'Neural Engine', desc: '10,000 adjustments per second. Real-time environmental adaptation. Imperceptible corrections.', link: '/technology#neural-engine' },
    { icon: '⬡', label: 'ENV_ZERO', title: 'Zero Emission', desc: 'Silent operation. No combustion. No exhaust. The cleanest propulsion ever created.', link: '/technology' },
    { icon: '□', label: 'TITAN_BUILD', title: 'Compact Form', desc: 'Ti-6Al-4V aerospace titanium. 4.2kg total. Military-grade construction.', link: '/products/civilian' },
  ];

  const applications = [
    { num: '01', title: 'Industrial Logistics', desc: '73% efficiency gain in warehouse operations', link: '/applications/logistics', color: 'cyan' },
    { num: '02', title: 'Scientific Research', desc: 'Microgravity experiments on Earth', link: '/applications/research', color: 'violet' },
    { num: '03', title: 'Film Production', desc: 'Impossible shots, practical effects', link: '/applications/film', color: 'blue' },
    { num: '04', title: 'Construction', desc: '60% faster precision installation', link: '/applications/construction', color: 'cyan' },
    { num: '05', title: 'Healthcare', desc: '94% reduction in caregiver injuries', link: '/applications/healthcare', color: 'violet' },
  ];

  const specs = [
    { label: 'LIFT_CAPACITY', value: '250', unit: 'kg' },
    { label: 'BATTERY_LIFE', value: '50', unit: 'yrs' },
    { label: 'RESPONSE', value: '0.1', unit: 'ms' },
    { label: 'FLUX_DENSITY', value: '14.7', unit: 'T' },
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[var(--bg-primary)]">
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#050810] via-[#0a1628] to-[#050810]"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          />
          <div
            className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, var(--neon-cyan) 0%, transparent 70%)',
              filter: 'blur(100px)',
              transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`,
            }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, var(--neon-violet) 0%, transparent 70%)',
              filter: 'blur(100px)',
              transform: `translate(${-mousePos.x * 0.01}px, ${-mousePos.y * 0.01}px)`,
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-[var(--bg-card)]/60 backdrop-blur-sm border border-[var(--neon-cyan)]/30 rounded-full mb-8 animate-fade-in">
                <span className="w-2 h-2 bg-[var(--success)] rounded-full animate-pulse" />
                <span className="text-sm font-mono text-[var(--neon-cyan)] tracking-widest">SYSTEM ONLINE</span>
                <span className="text-[var(--text-muted)]">•</span>
                <span className="text-sm font-mono text-[var(--text-muted)]">v1.0</span>
              </div>

              <h1 className="font-['Orbitron',system-ui,sans-serif] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-none mb-8">
                <span className="block text-[var(--text-primary)] animate-slide-up">GRAVITY</span>
                <span className="block bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-blue)] to-[var(--neon-violet)] bg-clip-text text-transparent animate-slide-up animation-delay-100">
                  OBSOLETE
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-[var(--text-secondary)] leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 animate-fade-in animation-delay-200">
                The world&apos;s first consumer-grade quantum flux pinning device.
                <span className="text-[var(--text-primary)]"> Make any object weightless.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in animation-delay-300">
                <Link
                  href="/pricing"
                  className="group relative px-8 py-4 bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-blue)] rounded-lg font-['Orbitron',system-ui,sans-serif] font-bold text-[var(--bg-primary)] uppercase tracking-wider overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_var(--glow-cyan)] hover:scale-105"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span>◈</span> Acquire Unit
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
                <Link
                  href="/technology"
                  className="group px-8 py-4 border-2 border-[var(--neon-cyan)]/50 rounded-lg font-['Orbitron',system-ui,sans-serif] font-bold text-[var(--neon-cyan)] uppercase tracking-wider transition-all duration-300 hover:bg-[var(--neon-cyan)]/10 hover:border-[var(--neon-cyan)] hover:shadow-[0_0_30px_var(--glow-cyan)]"
                >
                  <span className="flex items-center justify-center gap-2">
                    <span>▶</span> How It Works
                  </span>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-center lg:justify-start gap-8 lg:gap-12 animate-fade-in animation-delay-400">
                {specs.map((spec, i) => (
                  <div key={spec.label} className="text-center group cursor-pointer" style={{ animationDelay: `${400 + i * 100}ms` }}>
                    <div className="font-['Orbitron',system-ui,sans-serif] text-3xl lg:text-4xl font-bold text-[var(--text-primary)] group-hover:text-[var(--neon-cyan)] transition-colors">
                      {spec.value}<span className="text-lg text-[var(--neon-cyan)]">{spec.unit}</span>
                    </div>
                    <div className="text-xs font-mono text-[var(--text-muted)] tracking-wider mt-1">{spec.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - 3D Device */}
            <div className="relative flex items-center justify-center">
              <div
                className="relative w-80 h-80 lg:w-[450px] lg:h-[450px]"
                style={{
                  transform: `rotateY(${mousePos.x * 0.02 - 10}deg) rotateX(${-mousePos.y * 0.01 + 5}deg)`,
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.1s ease-out',
                }}
              >
                {/* Orbital Rings */}
                <div className="absolute inset-0 border-2 border-[var(--neon-cyan)]/20 rounded-full animate-spin-slow" />
                <div className="absolute inset-8 border border-[var(--neon-violet)]/30 rounded-full animate-spin-slow-reverse" />
                <div className="absolute inset-16 border-2 border-[var(--neon-cyan)]/40 rounded-full animate-spin-slow" style={{ animationDuration: '15s' }} />

                {/* Core Device */}
                <div className="absolute inset-24 lg:inset-32">
                  <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-[#1a1f35] to-[#0d1020] border border-[var(--neon-cyan)]/50 shadow-[0_0_60px_var(--glow-cyan),inset_0_0_30px_rgba(0,240,255,0.1)] flex items-center justify-center overflow-hidden">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-[var(--neon-cyan)] animate-pulse-glow shadow-[0_0_80px_var(--glow-cyan)]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5" />
                  </div>
                </div>

                {/* HUD Labels */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 px-4 py-2 bg-[var(--bg-card)]/90 backdrop-blur border border-[var(--neon-cyan)]/50 rounded-lg animate-float">
                  <span className="font-mono text-xs text-[var(--neon-cyan)]">FLUX_ACTIVE</span>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 px-4 py-2 bg-[var(--bg-card)]/90 backdrop-blur border border-[var(--neon-cyan)]/50 rounded-lg animate-float animation-delay-500">
                  <span className="font-mono text-xs text-[var(--success)]">QUANTUM_LOCK</span>
                </div>
                <div className="absolute right-0 top-1/2 translate-x-2 -translate-y-1/2 px-4 py-2 bg-[var(--bg-card)]/90 backdrop-blur border border-[var(--neon-violet)]/50 rounded-lg animate-float animation-delay-300">
                  <span className="font-mono text-xs text-[var(--neon-violet)]">14.7T</span>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-8 bg-[var(--neon-cyan)]/30 rounded-full filter blur-xl" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce-slow">
          <span className="text-xs font-mono text-[var(--text-muted)] tracking-widest">SCROLL</span>
          <div className="w-6 h-10 border-2 border-[var(--text-muted)] rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-[var(--neon-cyan)] rounded-full animate-scroll-down" />
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section id="technology" className="relative py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            overline="CORE TECHNOLOGY"
            title="Engineering the"
            titleAccent="Impossible"
            subtitle="Six breakthrough technologies converge to create the first practical antigravity system."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/technology"
              className="inline-flex items-center gap-2 text-[var(--neon-cyan)] font-semibold hover:gap-4 transition-all duration-300"
            >
              Explore the Science <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PRODUCT SHOWCASE ===== */}
      <section className="relative py-32 bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            overline="PRODUCTS"
            title="Choose Your"
            titleAccent="Module"
            subtitle="From personal use to industrial scale. Find your perfect fit."
          />

          <div className="grid lg:grid-cols-3 gap-8">
            <ProductCard
              badge="CIVILIAN"
              name="X1 Standard"
              price="49,999"
              features={['250kg lift capacity', '50-year battery', '100ft altitude', 'App control']}
              link="/products/civilian"
              color="cyan"
            />
            <ProductCard
              badge="PRO"
              name="X1 Industrial"
              price="149,999"
              features={['1,000kg lift capacity', '75-year battery', '500ft altitude', 'Full API access']}
              link="/products/pro"
              color="violet"
              featured
            />
            <ProductCard
              badge="ENTERPRISE"
              name="Custom"
              price="Contact"
              features={['Unlimited capacity', 'Custom integration', 'On-site support', 'White label']}
              link="/products/enterprise"
              color="blue"
            />
          </div>
        </div>
      </section>

      {/* ===== APPLICATIONS ===== */}
      <section id="applications" className="relative py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            overline="USE CASES"
            title="Infinite"
            titleAccent="Applications"
            subtitle="Transforming industries across the globe."
          />

          <div className="space-y-4">
            {applications.map((app, index) => (
              <ApplicationRow key={app.title} app={app} index={index} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/applications/logistics"
              className="inline-flex items-center gap-2 text-[var(--neon-cyan)] font-semibold hover:gap-4 transition-all duration-300"
            >
              View All Applications <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== STATS BANNER ===== */}
      <section className="relative py-24 bg-gradient-to-r from-[var(--neon-cyan)]/10 via-[var(--bg-secondary)] to-[var(--neon-violet)]/10 border-y border-[var(--border-glow)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <StatItem value={10000} suffix="+" label="Units Reserved" />
            <StatItem value={50} suffix="+" label="Enterprise Clients" />
            <StatItem value={99.99} suffix="%" label="Uptime" />
            <StatItem value={0} suffix=" Injuries" label="Safety Record" />
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-['Orbitron',system-ui,sans-serif] text-4xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6">
            Ready to Defy <span className="text-gradient">Gravity</span>?
          </h2>
          <p className="text-xl text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
            Join thousands of innovators who are already reshaping their industries with Levitas X1.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="group relative px-10 py-5 bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-blue)] rounded-lg font-['Orbitron',system-ui,sans-serif] font-bold text-[var(--bg-primary)] text-lg uppercase tracking-wider overflow-hidden transition-all duration-300 hover:shadow-[0_0_60px_var(--glow-cyan)] hover:scale-105"
            >
              Reserve Your Unit
            </Link>
            <Link
              href="/contact"
              className="px-10 py-5 border-2 border-[var(--border-glow)] rounded-lg font-['Orbitron',system-ui,sans-serif] font-bold text-[var(--text-primary)] text-lg uppercase tracking-wider transition-all duration-300 hover:border-[var(--neon-cyan)] hover:text-[var(--neon-cyan)]"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// ===== COMPONENTS =====

function SectionHeader({ overline, title, titleAccent, subtitle }: { overline: string; title: string; titleAccent: string; subtitle: string }) {
  const { ref, isInView } = useInView();

  return (
    <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <span className="inline-block px-4 py-2 bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-full text-xs font-mono text-[var(--neon-cyan)] tracking-widest mb-6">
        [ {overline} ]
      </span>
      <h2 className="font-['Orbitron',system-ui,sans-serif] text-4xl lg:text-5xl font-bold mb-4">
        <span className="text-[var(--text-primary)]">{title} </span>
        <span className="text-gradient">{titleAccent}</span>
      </h2>
      <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
}

function FeatureCard({ feature, index }: { feature: { icon: string; label: string; title: string; desc: string; link: string }; index: number }) {
  const { ref, isInView } = useInView();

  return (
    <Link href={feature.link}>
      <div
        ref={ref}
        className={`group relative p-8 bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-panel)] border border-[var(--border-glow)] rounded-2xl overflow-hidden transition-all duration-500 hover:border-[var(--neon-cyan)] hover:shadow-[0_20px_60px_-20px_var(--glow-cyan)] hover:-translate-y-2 cursor-pointer ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-cyan)]/0 to-[var(--neon-cyan)]/0 group-hover:from-[var(--neon-cyan)]/5 group-hover:to-transparent transition-all duration-500" />

        {/* Corner Decorations */}
        <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-[var(--border-glow)] group-hover:border-[var(--neon-cyan)]/50 transition-colors" />
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-[var(--border-glow)] group-hover:border-[var(--neon-cyan)]/50 transition-colors" />

        <div className="relative z-10">
          <div className="text-4xl text-[var(--neon-cyan)] mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
          <div className="text-xs font-mono text-[var(--neon-violet)] tracking-wider mb-2">{feature.label}</div>
          <h3 className="font-['Orbitron',system-ui,sans-serif] text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--neon-cyan)] transition-colors">{feature.title}</h3>
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{feature.desc}</p>
        </div>

        {/* Arrow */}
        <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full border border-[var(--border-glow)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-[var(--neon-cyan)]">
          <span className="text-[var(--neon-cyan)]">→</span>
        </div>
      </div>
    </Link>
  );
}

function ProductCard({ badge, name, price, features, link, color, featured }: { badge: string; name: string; price: string; features: string[]; link: string; color: string; featured?: boolean }) {
  const { ref, isInView } = useInView();
  const colorVar = `var(--neon-${color})`;

  return (
    <Link href={link}>
      <div
        ref={ref}
        className={`group relative p-8 rounded-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${featured ? `bg-gradient-to-b from-[${colorVar}]/20 to-[var(--bg-card)] border-2` : 'bg-[var(--bg-card)] border'}`}
        style={{
          borderColor: featured ? colorVar : 'var(--border-glow)',
          boxShadow: featured ? `0 0 40px var(--glow-${color})` : 'none',
        }}
      >
        {featured && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold tracking-wider" style={{ background: colorVar, color: 'var(--bg-primary)' }}>
            MOST POPULAR
          </div>
        )}

        <div className="text-xs font-mono tracking-wider mb-2" style={{ color: colorVar }}>{badge}</div>
        <h3 className="font-['Orbitron',system-ui,sans-serif] text-2xl font-bold text-[var(--text-primary)] mb-2">{name}</h3>
        <div className="mb-6">
          <span className="text-[var(--text-muted)]">$</span>
          <span className="font-['Orbitron',system-ui,sans-serif] text-4xl font-bold text-[var(--text-primary)]">{price}</span>
        </div>

        <ul className="space-y-3 mb-8">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-3 text-[var(--text-secondary)]">
              <span style={{ color: colorVar }}>◈</span> {f}
            </li>
          ))}
        </ul>

        <div
          className="w-full py-4 rounded-lg font-['Orbitron',system-ui,sans-serif] font-bold text-center uppercase tracking-wider transition-all duration-300 group-hover:shadow-lg"
          style={{
            background: featured ? colorVar : 'transparent',
            color: featured ? 'var(--bg-primary)' : colorVar,
            border: featured ? 'none' : `2px solid ${colorVar}`,
          }}
        >
          {price === 'Contact' ? 'Contact Sales' : 'Learn More'}
        </div>
      </div>
    </Link>
  );
}

function ApplicationRow({ app, index }: { app: { num: string; title: string; desc: string; link: string; color: string }; index: number }) {
  const { ref, isInView } = useInView();

  return (
    <Link href={app.link}>
      <div
        ref={ref}
        className={`group flex items-center justify-between p-6 lg:p-8 bg-[var(--bg-card)]/50 border border-[var(--border-glow)] rounded-xl transition-all duration-500 hover:bg-[var(--bg-card)] hover:border-[var(--neon-cyan)] hover:shadow-[0_10px_40px_-10px_var(--glow-cyan)] cursor-pointer ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div className="flex items-center gap-6 lg:gap-10">
          <span className="font-['Orbitron',system-ui,sans-serif] text-3xl lg:text-4xl font-bold text-[var(--text-muted)] group-hover:text-[var(--neon-cyan)] transition-colors">{app.num}</span>
          <div>
            <h3 className="font-['Orbitron',system-ui,sans-serif] text-xl lg:text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--neon-cyan)] transition-colors">{app.title}</h3>
            <p className="text-[var(--text-secondary)] mt-1">{app.desc}</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <span className="text-[var(--text-muted)] group-hover:text-[var(--neon-cyan)] transition-colors">Explore</span>
          <div className="w-10 h-10 rounded-full border border-[var(--border-glow)] flex items-center justify-center group-hover:border-[var(--neon-cyan)] group-hover:bg-[var(--neon-cyan)]/10 transition-all">
            <span className="text-[var(--text-muted)] group-hover:text-[var(--neon-cyan)] transition-colors">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, isInView } = useInView();

  return (
    <div ref={ref} className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
      <div className="font-['Orbitron',system-ui,sans-serif] text-4xl lg:text-5xl font-bold text-gradient">
        <AnimatedCounter end={value} suffix={suffix} />
      </div>
      <div className="text-[var(--text-muted)] font-mono text-sm mt-2">{label}</div>
    </div>
  );
}
