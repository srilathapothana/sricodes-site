export default function Hero() {
  return (
    <header className="max-w-[1120px] mx-auto px-6 pt-[100px] pb-[50px] relative">
      <div
        className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none -z-10"
        style={{
          background:
            'radial-gradient(ellipse 600px 300px at 20% 0%, rgba(255,138,61,0.08), transparent)',
        }}
      />

      <h1 className="font-display text-[clamp(2.4rem,5.5vw,4.2rem)] font-semibold leading-[1.08] tracking-[-0.02em] max-w-[780px]">
        Full Stack Developer building{' '}
        <span className="text-[var(--accent)]">scalable web applications</span>, from first
        feature to production deploy.
      </h1>

      <p className="text-lg text-[var(--text-dim)] max-w-[580px] mt-6 leading-[1.7]">
        Full-stack developer, now focused full-time on freelance and client work, with
        enterprise experience and 6+ shipped projects including AI tools, dashboards, and
        real-time apps. I take on website builds, feature work, bug fixes, and student project
        help.
      </p>

      <div className="flex gap-3.5 mt-9 flex-wrap">
        <a
          href="#contact"
          className="font-mono text-sm font-medium bg-[var(--accent)] text-[#0d1117] px-6 py-[13px] rounded-md inline-flex items-center gap-2 hover:bg-[#ffa164] hover:-translate-y-px transition-all"
        >
          Start a project →
        </a>
        <a
          href="#work"
          className="font-mono text-sm border border-[var(--border)] text-[var(--text)] px-6 py-[13px] rounded-md hover:border-[var(--accent-dim)] hover:bg-[var(--surface)] transition-all"
        >
          See live work
        </a>
      </div>

      <div className="flex gap-12 mt-16 flex-wrap pt-8 border-t border-[var(--border)]">
        <div>
          <div className="font-display text-3xl font-semibold">6+</div>
          <div className="font-mono text-[12.5px] text-[var(--text-dim)] mt-0.5">
            PROJECTS SHIPPED
          </div>
        </div>
        <div>
          <div className="font-display text-3xl font-semibold">Full-time</div>
          <div className="font-mono text-[12.5px] text-[var(--text-dim)] mt-0.5">
            AVAILABLE NOW
          </div>
        </div>
        <div>
          <div className="font-display text-3xl font-semibold">24-48h</div>
          <div className="font-mono text-[12.5px] text-[var(--text-dim)] mt-0.5">
            TYPICAL RESPONSE TIME
          </div>
        </div>
      </div>
    </header>
  );
}
