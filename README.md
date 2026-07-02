# Sri Codes — Services Website

A full-stack Next.js site for freelance web development services, with a
real database backing client reviews and contact messages, plus a
password-protected admin page to manage both.

# Live Demo: https://sricodes-site.vercel.app/

## What's included

- **Public site** (`app/page.tsx`): services, live project showcase, pricing,
  client reviews, FAQ, and a contact form — all content lives in
  `lib/content.ts` so it's easy to edit without touching components.
- **Reviews**: visitors can submit a star rating + review. New reviews are
  saved as **pending** and only appear on the site once approved in `/admin`.
- **Contact form**: messages are saved to the database so you never miss one,
  even if you're not online when someone reaches out.
- **Admin dashboard** (`/admin`): password-protected. Approve/unpublish/delete
  reviews, and read/mark-as-read/delete contact messages.

## Tech stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Postgres via [Neon](https://neon.tech) (Vercel's current Postgres offering)
- `jose` for signed admin session cookies (no third-party auth needed)

## Local setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env.local` and fill in real values:
   ```bash
   cp .env.example .env.local
   ```
   - `DATABASE_URL`: your Postgres connection string (see below)
   - `ADMIN_SESSION_SECRET`: any long random string (`openssl rand -base64 32`)
   - `ADMIN_PASSWORD`: the password you'll use to log into `/admin`

3. Set up the database tables — run the SQL in `lib/schema.sql` against your
   database once:
   ```bash
   psql "$DATABASE_URL" -f lib/schema.sql
   ```
   (Or paste the contents of `lib/schema.sql` into your database provider's
   SQL editor — Neon and Vercel both have one built in.)

4. Run the dev server:
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000`.

## Deploying to Vercel

1. **Push this project to GitHub** (a new repo, not the old static site repo).

2. **Import the repo into Vercel**: vercel.com/new -> import -> Vercel
   auto-detects Next.js, no config needed.

3. **Add a Postgres database**: in your Vercel project -> Storage tab ->
   Create Database -> choose Neon (Postgres). Vercel will automatically set
   the `DATABASE_URL` environment variable for you.

4. **Add the remaining environment variables**: in Settings -> Environment
   Variables, add:
   - `ADMIN_SESSION_SECRET`
   - `ADMIN_PASSWORD`

   (`DATABASE_URL` is already set automatically by step 3.)

5. **Run the schema once** against your new production database. Easiest way:
   open the Neon dashboard (linked from your Vercel Storage tab) -> SQL editor
   -> paste the contents of `lib/schema.sql` -> run.

6. **Redeploy** (or it will deploy automatically after step 2). Your site
   should be live at `your-project.vercel.app`.

## Updating site content

All text content — services, pricing, projects, FAQ, contact info — lives in
`lib/content.ts`. Edit that file and redeploy; no need to touch components
unless you're changing layout or structure.

## Admin access

Go to `/admin` on your deployed site. You'll be redirected to `/admin/login`
if not signed in. Use the `ADMIN_PASSWORD` you set in environment variables.

From the dashboard you can:
- See contact messages, mark them read/unread, or delete them
- Approve or unpublish reviews, or delete them entirely

New reviews are **hidden until approved** — this protects you from spam or
fake reviews appearing on the live site before you've seen them.
