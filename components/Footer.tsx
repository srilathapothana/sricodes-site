import { siteConfig } from '@/lib/content';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="pt-16 mt-[60px] border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr_1.2fr] gap-10 pb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-3.5">
              <Image src="/logo.svg" alt="Sri Codes" width={32} height={32} className="rounded-full" />
              <span className="font-mono text-[15px] font-medium">Sri Codes</span>
            </div>
            <p className="text-[13.5px] text-[var(--text-dim)] leading-[1.7] max-w-[280px]">
              Full Stack Developer building scalable, production-ready web applications.
              Reliable, well-documented, and delivered on time.
            </p>
          </div>

          <div className="flex flex-col gap-2.5">
            <h4 className="font-mono text-xs uppercase tracking-[0.06em] text-[var(--text-dim)] mb-2 font-medium">
              Services
            </h4>
            <a href="#services" className="text-[13.5px] text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors">Web Development</a>
            <a href="#services" className="text-[13.5px] text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors">Full Stack Application Development</a>
            <a href="#services" className="text-[13.5px] text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors">Feature Development</a>
            <a href="#services" className="text-[13.5px] text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors">Debugging & Issue Resolution</a>
            <a href="#services" className="text-[13.5px] text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors">Technical Mentorship</a>
          </div>

          <div className="flex flex-col gap-2.5">
            <h4 className="font-mono text-xs uppercase tracking-[0.06em] text-[var(--text-dim)] mb-2 font-medium">
              Quick links
            </h4>
            <a href="#work" className="text-[13.5px] text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors">Work</a>
            <a href="#pricing" className="text-[13.5px] text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors">Pricing</a>
            <a href="#reviews" className="text-[13.5px] text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors">Reviews</a>
            <a href="#about" className="text-[13.5px] text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors">About</a>
            <a href="#contact" className="text-[13.5px] text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors">Contact</a>
          </div>

          <div className="flex flex-col gap-2.5">
            <h4 className="font-mono text-xs uppercase tracking-[0.06em] text-[var(--text-dim)] mb-2 font-medium">
              Get in touch
            </h4>
            <a href={`mailto:${siteConfig.email}`} className="text-[13.5px] text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors">
              {siteConfig.email}
            </a>
            <span className="font-mono text-xs uppercase tracking-[0.06em] text-[var(--text-dim)] mt-1.5 font-medium">
              Find me online
            </span>
            <div className="flex gap-3.5">
              <a href="https://github.com/srilathapothana" className="text-[13.5px] text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/pothanasrilatha/" className="text-[13.5px] text-[var(--text-dim)] hover:text-[var(--accent)] transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center flex-wrap gap-2.5 py-[22px] border-t border-[var(--border)] font-mono text-xs text-[var(--text-dim)]">
          <span>© 2026 Srilatha. All rights reserved.</span>
          <span>Built with care, deployed with confidence.</span>
        </div>
      </div>
    </footer>
  );
}
