export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)]">
      <div className="relative">
        {/* Outer Ring */}
        <div className="w-24 h-24 border-2 border-[var(--neon-cyan)]/30 rounded-full animate-[ring-rotate_3s_linear_infinite]" />

        {/* Middle Ring */}
        <div className="absolute inset-2 border border-[var(--neon-violet)]/40 rounded-full animate-[ring-rotate_2s_linear_infinite_reverse]" />

        {/* Inner Ring */}
        <div className="absolute inset-4 border border-[var(--neon-cyan)]/50 rounded-full animate-[ring-rotate_1.5s_linear_infinite]" />

        {/* Core */}
        <div className="absolute inset-8 flex items-center justify-center">
          <div className="w-8 h-8 bg-[var(--neon-cyan)] rounded-full animate-[ring-pulse_1s_ease-in-out_infinite] shadow-[0_0_30px_var(--glow-cyan)]" />
        </div>

        {/* Loading Text */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="text-xs font-mono text-[var(--neon-cyan)] tracking-widest animate-pulse">
            INITIALIZING QUANTUM FLUX...
          </span>
        </div>
      </div>
    </div>
  );
}
