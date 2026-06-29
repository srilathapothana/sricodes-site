import { NextRequest, NextResponse } from 'next/server';
import { checkAdminPassword, createAdminSession } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const password = String(body.password ?? '');

    if (!checkAdminPassword(password)) {
      return NextResponse.json({ error: 'Incorrect password.' }, { status: 401 });
    }

    await createAdminSession();
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Admin login error:', error);
    return NextResponse.json({ error: 'Login failed.' }, { status: 500 });
  }
}
