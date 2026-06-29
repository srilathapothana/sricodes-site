'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

type AdminReview = {
  id: number;
  name: string;
  rating: number;
  text: string;
  approved: boolean;
  created_at: string;
};

type AdminMessage = {
  id: number;
  name: string;
  email: string;
  message: string;
  read: boolean;
  created_at: string;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleString('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });
}

export default function AdminDashboard() {
  const router = useRouter();
  const [tab, setTab] = useState<'reviews' | 'messages'>('messages');
  const [reviews, setReviews] = useState<AdminReview[]>([]);
  const [messages, setMessages] = useState<AdminMessage[]>([]);
  const [loading, setLoading] = useState(true);

  const loadAll = useCallback(async () => {
    setLoading(true);
    try {
      const [reviewsRes, messagesRes] = await Promise.all([
        fetch('/api/admin/reviews'),
        fetch('/api/admin/messages'),
      ]);
      const reviewsData = await reviewsRes.json();
      const messagesData = await messagesRes.json();
      setReviews(reviewsData.reviews ?? []);
      setMessages(messagesData.messages ?? []);
    } catch {
      // leave existing state if fetch fails
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- standard fetch-on-mount; setState happens inside the async callback, not synchronously in the effect body
    loadAll();
  }, [loadAll]);

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  }

  async function toggleReviewApproval(review: AdminReview) {
    await fetch('/api/admin/reviews', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: review.id, approved: !review.approved }),
    });
    setReviews((prev) =>
      prev.map((r) => (r.id === review.id ? { ...r, approved: !r.approved } : r))
    );
  }

  async function deleteReview(id: number) {
    if (!confirm('Delete this review permanently?')) return;
    await fetch(`/api/admin/reviews?id=${id}`, { method: 'DELETE' });
    setReviews((prev) => prev.filter((r) => r.id !== id));
  }

  async function toggleMessageRead(msg: AdminMessage) {
    await fetch('/api/admin/messages', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: msg.id, read: !msg.read }),
    });
    setMessages((prev) =>
      prev.map((m) => (m.id === msg.id ? { ...m, read: !m.read } : m))
    );
  }

  async function deleteMessage(id: number) {
    if (!confirm('Delete this message permanently?')) return;
    await fetch(`/api/admin/messages?id=${id}`, { method: 'DELETE' });
    setMessages((prev) => prev.filter((m) => m.id !== id));
  }

  const unreadCount = messages.filter((m) => !m.read).length;
  const pendingCount = reviews.filter((r) => !r.approved).length;

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="max-w-[900px] mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-display text-2xl font-semibold">Admin dashboard</h1>
          <button
            onClick={handleLogout}
            className="font-mono text-xs border border-[var(--border)] px-3.5 py-2 rounded-md hover:border-[var(--accent-dim)] transition-colors bg-transparent text-[var(--text)] cursor-pointer"
          >
            Log out
          </button>
        </div>

        <div className="flex gap-2 mb-8 border-b border-[var(--border)]">
          <button
            onClick={() => setTab('messages')}
            className={`font-mono text-sm px-4 py-3 border-b-2 transition-colors bg-transparent cursor-pointer ${
              tab === 'messages'
                ? 'border-[var(--accent)] text-[var(--text)]'
                : 'border-transparent text-[var(--text-dim)]'
            }`}
          >
            Messages {unreadCount > 0 && `(${unreadCount} new)`}
          </button>
          <button
            onClick={() => setTab('reviews')}
            className={`font-mono text-sm px-4 py-3 border-b-2 transition-colors bg-transparent cursor-pointer ${
              tab === 'reviews'
                ? 'border-[var(--accent)] text-[var(--text)]'
                : 'border-transparent text-[var(--text-dim)]'
            }`}
          >
            Reviews {pendingCount > 0 && `(${pendingCount} pending)`}
          </button>
        </div>

        {loading ? (
          <p className="text-sm text-[var(--text-dim)]">Loading…</p>
        ) : tab === 'messages' ? (
          messages.length === 0 ? (
            <p className="text-sm text-[var(--text-dim)]">No messages yet.</p>
          ) : (
            <div className="space-y-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`bg-[var(--surface)] border rounded-[10px] p-5 ${
                    msg.read ? 'border-[var(--border)]' : 'border-[var(--accent-dim)]'
                  }`}
                >
                  <div className="flex justify-between items-start gap-3 mb-2">
                    <div>
                      <span className="font-display font-semibold">{msg.name}</span>{' '}
                      <a
                        href={`mailto:${msg.email}`}
                        className="text-sm text-[var(--accent)] hover:underline"
                      >
                        {msg.email}
                      </a>
                    </div>
                    <span className="font-mono text-xs text-[var(--text-dim)] whitespace-nowrap">
                      {formatDate(msg.created_at)}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-dim)] mb-3 whitespace-pre-wrap">
                    {msg.message}
                  </p>
                  <div className="flex gap-3 font-mono text-xs">
                    <button
                      onClick={() => toggleMessageRead(msg)}
                      className="text-[var(--accent)] hover:underline bg-transparent border-none cursor-pointer p-0"
                    >
                      Mark as {msg.read ? 'unread' : 'read'}
                    </button>
                    <button
                      onClick={() => deleteMessage(msg.id)}
                      className="text-[var(--text-dim)] hover:text-[var(--accent)] bg-transparent border-none cursor-pointer p-0"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )
        ) : reviews.length === 0 ? (
          <p className="text-sm text-[var(--text-dim)]">No reviews yet.</p>
        ) : (
          <div className="space-y-3">
            {reviews.map((review) => (
              <div
                key={review.id}
                className={`bg-[var(--surface)] border rounded-[10px] p-5 ${
                  review.approved ? 'border-[var(--border)]' : 'border-[var(--accent-dim)]'
                }`}
              >
                <div className="flex justify-between items-start gap-3 mb-2">
                  <div>
                    <span className="font-display font-semibold">{review.name}</span>{' '}
                    <span className="text-[var(--accent)] text-sm">
                      {'★'.repeat(review.rating)}
                      {'☆'.repeat(5 - review.rating)}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[var(--text-dim)] whitespace-nowrap">
                    {formatDate(review.created_at)}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-dim)] mb-3">{review.text}</p>
                <div className="flex gap-3 font-mono text-xs items-center">
                  <span
                    className={review.approved ? 'text-[var(--live)]' : 'text-[var(--accent)]'}
                  >
                    {review.approved ? 'Approved · visible on site' : 'Pending approval'}
                  </span>
                  <button
                    onClick={() => toggleReviewApproval(review)}
                    className="text-[var(--accent)] hover:underline bg-transparent border-none cursor-pointer p-0"
                  >
                    {review.approved ? 'Unpublish' : 'Approve'}
                  </button>
                  <button
                    onClick={() => deleteReview(review.id)}
                    className="text-[var(--text-dim)] hover:text-[var(--accent)] bg-transparent border-none cursor-pointer p-0"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
