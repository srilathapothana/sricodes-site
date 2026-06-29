import { neon } from '@neondatabase/serverless';

// DATABASE_URL is provided automatically by Vercel once you add the
// Postgres (Neon) integration to your project, or set manually in .env.local
// for local development.
export const sql = neon(process.env.DATABASE_URL!);
