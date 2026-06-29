'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error ?? 'Login failed.');
        setSubmitting(false);
        return;
      }

      router.push('/admin');
      router.refresh();
    } catch {
      setError('Something went wrong. Please try again.');
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg)] text-[var(--text)] px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-[var(--surface)] border border-[var(--border)] rounded-[10px] p-9 max-w-sm w-full flex flex-col gap-4"
      >
        <h1 className="font-display text-xl font-semibold mb-1">Admin login</h1>
        <p className="text-sm text-[var(--text-dim)] mb-2">
          Enter the admin password to manage reviews and messages.
        </p>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoFocus
          className="bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] px-3.5 py-[13px] rounded-md text-sm focus:border-[var(--accent)] focus:outline-none"
        />
        <button
          type="submit"
          disabled={submitting}
          className="font-mono text-sm font-medium bg-[var(--accent)] text-[#0d1117] border-none px-3.5 py-[13px] rounded-md cursor-pointer hover:bg-[#ffa164] transition-colors disabled:opacity-60"
        >
          {submitting ? 'Checking…' : 'Log in'}
        </button>
        {error && <p className="text-[13px] text-[var(--accent)]">{error}</p>}
      </form>
    </div>
  );
}
