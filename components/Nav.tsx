'use client';

import { useState } from 'react';
import Image from 'next/image';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#0d1117]/85 backdrop-blur-md border-b border-[var(--border)]">
      <div className="max-w-[1120px] mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <Image src="/logo.svg" alt="Sri Codes" width={36} height={36} className="rounded-full" />
          <span className="font-mono text-[15px] font-medium">Sri Codes</span>
        </a>

        <div
          className={`
            md:flex md:gap-8 md:static md:bg-transparent md:border-0 md:p-0 md:flex-row md:opacity-100 md:pointer-events-auto md:translate-y-0
            ${open ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-[110%] opacity-0 pointer-events-none'}
            fixed top-16 left-0 right-0 flex flex-col gap-0 bg-[var(--surface)] border-b border-[var(--border)] py-2 transition-all duration-250 text-sm text-[var(--text-dim)]
          `}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-6 py-3.5 border-b border-[var(--border)] md:border-0 md:px-0 md:py-0 hover:text-[var(--text)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex font-mono text-[13px] bg-[var(--accent)] text-[#0d1117] px-[18px] py-[9px] rounded-md font-medium hover:bg-[#ffa164] transition-colors"
        >
          Get in touch
        </a>

        <button
          className="md:hidden text-2xl bg-transparent border-none text-[var(--text)] cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
    </nav>
  );
}
