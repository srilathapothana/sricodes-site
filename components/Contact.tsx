'use client';

import { useState } from 'react';
import { siteConfig } from '@/lib/content';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    setFeedback('');

    try {
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus('error');
        setFeedback(data.error ?? 'Something went wrong. Please try again.');
        return;
      }

      setStatus('success');
      setFeedback(data.message ?? "Thanks! I'll get back to you within 24-48 hours.");
      setName('');
      setEmail('');
      setMessage('');
    } catch {
      setStatus('error');
      setFeedback('Could not send your message. Please try again.');
    }
  }

  return (
    <section id="contact" className="max-w-[1120px] mx-auto px-6 py-[50px]">
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-9 sm:p-14 max-w-[1072px] mx-auto">
        <div className="font-mono text-[12.5px] text-[var(--accent)] uppercase tracking-[0.08em] mb-3">
          Get in touch
        </div>
        <h2 className="font-display text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold tracking-[-0.01em] max-w-[640px]">
          Tell me what you&apos;re trying to build.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          <div>
            <div className="flex items-center gap-3 mb-[18px] text-[14.5px]">
              <span className="w-[34px] h-[34px] rounded-[7px] bg-[var(--surface-2)] flex items-center justify-center text-[15px] flex-shrink-0">
                ✉️
              </span>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-[var(--accent)]">
                {siteConfig.email}
              </a>
            </div>
            <div className="flex items-center gap-3 mb-[18px] text-[14.5px]">
              <span className="w-[34px] h-[34px] rounded-[7px] bg-[var(--surface-2)] flex items-center justify-center text-[15px] flex-shrink-0">
                📍
              </span>
              <span>Remote, available worldwide</span>
            </div>
            <div className="flex items-center gap-3 mb-[18px] text-[14.5px]">
              <span className="w-[34px] h-[34px] rounded-[7px] bg-[var(--surface-2)] flex items-center justify-center text-[15px] flex-shrink-0">
                ⏱️
              </span>
              <span>Replies within 24-48 hours</span>
            </div>
            <div className="flex items-center gap-3 text-[14.5px]">
              <span className="w-[34px] h-[34px] rounded-[7px] bg-[var(--surface-2)] flex items-center justify-center text-[15px] flex-shrink-0">
                🕒
              </span>
              <span>Available full-time, can start immediately</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] px-3.5 py-[13px] rounded-md text-sm focus:border-[var(--accent)] focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] px-3.5 py-[13px] rounded-md text-sm focus:border-[var(--accent)] focus:outline-none"
            />
            <textarea
              placeholder="What do you need built or fixed?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] px-3.5 py-[13px] rounded-md text-sm min-h-[90px] resize-y focus:border-[var(--accent)] focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="font-mono text-sm font-medium bg-[var(--accent)] text-[#0d1117] border-none px-3.5 py-[13px] rounded-md cursor-pointer hover:bg-[#ffa164] transition-colors disabled:opacity-60"
            >
              {status === 'submitting' ? 'Sending…' : 'Send message →'}
            </button>
            {feedback && (
              <p
                className={`text-[13px] ${
                  status === 'success' ? 'text-[var(--live)]' : 'text-[var(--accent)]'
                }`}
              >
                {feedback}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
