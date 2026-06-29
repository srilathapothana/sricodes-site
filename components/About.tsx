export default function About() {
  return (
    <section id="about" className="max-w-[1120px] mx-auto px-6 py-[50px]">
      <div className="font-mono text-[12.5px] text-[var(--accent)] uppercase tracking-[0.08em] mb-3">
        Background
      </div>
      <h2 className="font-display text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold tracking-[-0.01em] max-w-[640px]">
        A bit about the person doing the work.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 mt-12">
        <div className="text-[15.5px] text-[var(--text-dim)] space-y-4">
          <p>
            <strong className="text-[var(--text)]">
              I previously worked as a full-stack developer
            </strong>
            , building backend services and frontend features for a large-scale trade platform
            with real production code, real users, and real deadlines.
          </p>
          <p>
            I&apos;m now focused full-time on freelance and client work, mostly things that
            combine a practical use case with a piece of tech I want to actually understand,
            like LLM integrations or real-time systems, rather than just read about.
          </p>
          <p>
            That combination is what I bring to client work:{' '}
            <strong className="text-[var(--text)]">enterprise habits</strong> like clear scoping
            and testing, not vanishing mid-project, applied to{' '}
            <strong className="text-[var(--text)]">smaller, faster-moving projects</strong> that
            bigger teams aren&apos;t set up for.
          </p>
        </div>

        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[10px] p-[26px]">
          {[
            ['Experience', '1 year, enterprise (CGI)'],
            ['Core stack', 'Java · Spring Boot · React'],
            ['Also comfortable in', 'Next.js · Angular · NestJS'],
            ['Database', 'PostgreSQL · Prisma'],
            ['Shipped projects', '6+ live / in dev'],
            ['Availability', 'Full-time, starts immediately'],
          ].map(([k, v], i, arr) => (
            <div
              key={k}
              className={`flex justify-between items-center py-[13px] text-sm ${
                i < arr.length - 1 ? 'border-b border-[var(--border)]' : ''
              }`}
            >
              <span className="text-[var(--text-dim)]">{k}</span>
              <span className="font-mono text-[13px]">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
