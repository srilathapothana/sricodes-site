import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { isAdminAuthenticated } from '@/lib/auth';

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
  }

  try {
    const reviews = await sql`
      SELECT id, name, rating, text, approved, created_at
      FROM reviews
      ORDER BY created_at DESC
    `;
    return NextResponse.json({ reviews });
  } catch (error) {
    console.error('Failed to fetch reviews for admin:', error);
    return NextResponse.json({ error: 'Failed to fetch reviews.' }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const id = Number(body.id);
    const approved = Boolean(body.approved);

    if (!Number.isInteger(id)) {
      return NextResponse.json({ error: 'Invalid review id.' }, { status: 400 });
    }

    await sql`UPDATE reviews SET approved = ${approved} WHERE id = ${id}`;
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to update review:', error);
    return NextResponse.json({ error: 'Failed to update review.' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = Number(searchParams.get('id'));

    if (!Number.isInteger(id)) {
      return NextResponse.json({ error: 'Invalid review id.' }, { status: 400 });
    }

    await sql`DELETE FROM reviews WHERE id = ${id}`;
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete review:', error);
    return NextResponse.json({ error: 'Failed to delete review.' }, { status: 500 });
  }
}
