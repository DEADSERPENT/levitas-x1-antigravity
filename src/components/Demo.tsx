'use client';

export default function Demo() {
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

        {/* Demo Player */}
        <div className="relative">
          <div className="aspect-video bg-[var(--bg-card)] rounded-lg border border-[var(--border-glow)] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Placeholder Content */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full border-2 border-[var(--neon-cyan)] flex items-center justify-center group cursor-pointer hover:bg-[var(--neon-cyan)]/10 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-[var(--neon-cyan)]">
                    <polygon points="9,6 9,18 18,12" fill="currentColor" />
                  </svg>
                </div>
                <div className="font-mono text-sm text-[var(--text-muted)] tracking-wider">
                  INITIALIZE SIMULATION
                </div>
              </div>

              {/* Scan Line Effect */}
              <div className="scan-line opacity-30" />
            </div>

            {/* Corner Decorations */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[var(--neon-cyan)]/50" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[var(--neon-cyan)]/50" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[var(--neon-cyan)]/50" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[var(--neon-cyan)]/50" />
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button className="btn btn-primary">
              <span>▶</span>
              Launch Demo
            </button>
            <button className="btn btn-secondary">
              <span>◉</span>
              AR Preview
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
