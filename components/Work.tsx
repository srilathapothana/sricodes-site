import { projects } from '@/lib/content';

export default function Work() {
  return (
    <section id="work" className="max-w-[1120px] mx-auto px-6 py-[50px]">
      <div className="font-mono text-[12.5px] text-[var(--accent)] uppercase tracking-[0.08em] mb-3">
        Proof, not promises
      </div>
      <h2 className="font-display text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold tracking-[-0.01em] max-w-[640px]">
        Recent work, live and in production.
      </h2>
      <p className="text-[var(--text-dim)] text-base max-w-[560px] mt-3.5">
        These are projects I&apos;ve actually built and shipped, not mockups. Click through to
        see them running.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-[var(--surface)] border border-[var(--border)] rounded-[10px] p-[26px] flex flex-col hover:border-[var(--accent-dim)] hover:-translate-y-0.5 transition-all"
          >
            <div className="flex justify-between items-start mb-3.5">
              <div className="font-display text-lg font-semibold">{project.title}</div>
              {project.status === 'live' ? (
                <div className="font-mono text-[10.5px] text-[var(--live)] flex items-center gap-1.5 whitespace-nowrap border border-[rgba(61,220,151,0.3)] px-2 py-[3px] rounded-full">
                  <span className="w-[5px] h-[5px] rounded-full bg-[var(--live)]" />
                  LIVE
                </div>
              ) : (
                <div className="font-mono text-[10.5px] text-[var(--text-dim)] flex items-center gap-1.5 whitespace-nowrap border border-[var(--border)] px-2 py-[3px] rounded-full">
                  <span className="w-[5px] h-[5px] rounded-full bg-[var(--text-dim)]" />
                  IN DEV
                </div>
              )}
            </div>

            <p className="text-[13.5px] text-[var(--text-dim)] flex-grow mb-4">
              {project.description}
            </p>

            <div className="flex gap-1.5 flex-wrap mb-[18px]">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10.5px] text-[var(--text-dim)] border border-[var(--border)] px-[9px] py-[3px] rounded-[5px]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-[18px] font-mono text-[12.5px]">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] flex items-center gap-1.5 hover:underline"
                >
                  ↗ Live demo
                </a>
              ) : (
                <span className="text-[var(--text-dim)] opacity-60">Not yet deployed</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
