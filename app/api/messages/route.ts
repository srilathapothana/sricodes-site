import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = String(body.name ?? '').trim().slice(0, 60);
    const email = String(body.email ?? '').trim().slice(0, 120);
    const message = String(body.message ?? '').trim().slice(0, 2000);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message || !emailPattern.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid name, email, and message.' },
        { status: 400 }
      );
    }

    const [saved] = await sql`
      INSERT INTO messages (name, email, message, read)
      VALUES (${name}, ${email}, ${message}, FALSE)
      RETURNING id, created_at
    `;

    return NextResponse.json(
      { message: "Thanks! I'll get back to you within 24-48 hours.", id: saved.id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Failed to save message:', error);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}
