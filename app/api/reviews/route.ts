import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function GET() {
  try {
    const reviews = await sql`
      SELECT id, name, rating, text, created_at
      FROM reviews
      WHERE approved = TRUE
      ORDER BY created_at DESC
    `;
    return NextResponse.json({ reviews });
  } catch (error) {
    console.error('Failed to fetch reviews:', error);
    return NextResponse.json({ error: 'Failed to fetch reviews.' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = String(body.name ?? '').trim().slice(0, 60);
    const text = String(body.text ?? '').trim().slice(0, 500);
    const rating = Number(body.rating);

    if (!name || !text || !Number.isInteger(rating) || rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Please provide a name, a star rating (1-5), and a review.' },
        { status: 400 }
      );
    }

    const [review] = await sql`
      INSERT INTO reviews (name, rating, text, approved)
      VALUES (${name}, ${rating}, ${text}, FALSE)
      RETURNING id, name, rating, text, created_at
    `;

    return NextResponse.json(
      { review, message: 'Thanks! Your review will appear once it has been reviewed.' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Failed to submit review:', error);
    return NextResponse.json({ error: 'Failed to submit review.' }, { status: 500 });
  }
}
