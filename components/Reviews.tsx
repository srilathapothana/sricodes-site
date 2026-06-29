'use client';

import { useEffect, useState, useCallback } from 'react';

type Review = {
  id: number;
  name: string;
  rating: number;
  text: string;
  created_at: string;
};

function Stars({ rating, size = 'text-sm' }: { rating: number; size?: string }) {
  return (
    <span className={`text-[var(--accent)] tracking-[2px] ${size}`}>
      {'★'.repeat(rating)}
      {'☆'.repeat(5 - rating)}
    </span>
  );
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [formOpen, setFormOpen] = useState(false);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const loadReviews = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/reviews');
      const data = await res.json();
      setReviews(data.reviews ?? []);
    } catch {
      setReviews([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- standard fetch-on-mount; setState happens inside the async callback, not synchronously in the effect body
    loadReviews();
  }, [loadReviews]);

  const average =
    reviews.length > 0
      ? Math.round((reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length) * 10) / 10
      : 0;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    if (!name.trim() || !text.trim() || rating < 1) {
      setError('Please add your name, a star rating, and a short review.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), rating, text: text.trim() }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? 'Something went wrong. Please try again.');
        return;
      }

      setSuccessMessage(
        data.message ?? 'Thanks! Your review will appear once it has been reviewed.'
      );
      setName('');
      setRating(0);
      setText('');
      setFormOpen(false);
    } catch {
      setError('Could not submit your review. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="reviews" className="max-w-[1120px] mx-auto px-6 py-[50px]">
      <div className="font-mono text-[12.5px] text-[var(--accent)] uppercase tracking-[0.08em] mb-3">
        Client feedback
      </div>
      <h2 className="font-display text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold tracking-[-0.01em] max-w-[640px]">
        What people say after working together.
      </h2>
      <p className="text-[var(--text-dim)] text-base max-w-[560px] mt-3.5">
        Real feedback from real projects. If we&apos;ve worked together, I&apos;d love for you
        to add yours.
      </p>

      {!loading && reviews.length > 0 && (
        <div className="flex items-center gap-3.5 mt-10 font-mono text-sm text-[var(--text-dim)]">
          <Stars rating={Math.round(average)} size="text-lg" />
          <span>
            {average} average from {reviews.length} review{reviews.length === 1 ? '' : 's'}
          </span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[18px] mt-7">
        {loading ? (
          <p className="text-sm text-[var(--text-dim)]">Loading reviews…</p>
        ) : reviews.length === 0 ? (
          <p className="col-span-full text-sm text-[var(--text-dim)] mt-5 border border-dashed border-[var(--border)] rounded-[10px] p-8 text-center">
            No reviews yet. Be the first to share how a project went.
          </p>
        ) : (
          reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-[10px] p-[22px] flex flex-col gap-2.5"
            >
              <Stars rating={review.rating} />
              <p className="text-sm text-[var(--text)] leading-[1.6]">{review.text}</p>
              <p className="font-mono text-xs text-[var(--text-dim)] mt-auto">{review.name}</p>
            </div>
          ))
        )}
      </div>

      {successMessage && (
        <p className="mt-6 text-sm text-[var(--live)] border border-[rgba(61,220,151,0.3)] rounded-md px-4 py-3">
          {successMessage}
        </p>
      )}

      {!formOpen ? (
        <button
          onClick={() => {
            setFormOpen(true);
            setSuccessMessage('');
          }}
          className="font-mono text-sm border border-[var(--border)] text-[var(--text)] px-6 py-[13px] rounded-md mt-8 hover:border-[var(--accent-dim)] hover:bg-[var(--surface)] transition-all cursor-pointer bg-transparent"
        >
          + Leave a review
        </button>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-[var(--surface)] border border-[var(--border)] rounded-[10px] p-[26px] flex flex-col gap-3.5 max-w-[480px] mt-6"
        >
          <div className="flex items-center gap-4 flex-wrap">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={60}
              required
              className="flex-1 min-w-[160px] bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] px-3.5 py-[13px] rounded-md text-sm focus:border-[var(--accent)] focus:outline-none"
            />
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setRating(val)}
                  onMouseEnter={() => setHoverRating(val)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="text-[22px] cursor-pointer select-none bg-transparent border-none p-0"
                  style={{
                    color: (hoverRating || rating) >= val ? 'var(--accent)' : 'var(--border)',
                  }}
                  aria-label={`Rate ${val} star${val === 1 ? '' : 's'}`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
          <textarea
            placeholder="How was the project?"
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={280}
            required
            className="bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] px-3.5 py-[13px] rounded-md text-sm min-h-[90px] resize-y focus:border-[var(--accent)] focus:outline-none"
          />
          <button
            type="submit"
            disabled={submitting}
            className="font-mono text-sm font-medium bg-[var(--accent)] text-[#0d1117] border-none px-3.5 py-[13px] rounded-md cursor-pointer hover:bg-[#ffa164] transition-colors disabled:opacity-60"
          >
            {submitting ? 'Submitting…' : 'Submit review'}
          </button>
          {error && <p className="text-[13px] text-[var(--accent)]">{error}</p>}
        </form>
      )}
    </section>
  );
}
