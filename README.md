# Squish Trading Co.

Cute, school-friendly squishy trading hub built with Next.js + Supabase.

This repository contains the full site. You chose "NoKeysCreateLater" — the app is configured to read Supabase credentials from environment variables. Follow the instructions below to finish deployment.

Quick start (no terminal required)

1) Create a free Supabase project
   - Visit: https://app.supabase.com
   - Create a new project (free tier is fine). Name it e.g. "squish-trading-co".
   - Wait for the project to provision.

2) Add the database schema
   - In Supabase, open the SQL Editor and run the SQL in `supabase/schema.sql` (copy/paste). This creates the tables the app uses.

3) Add environment variables (GitHub Actions / Vercel / Netlify)
   - Add the following environment variables to your deployment platform or GitHub repo secrets:
     - SUPABASE_URL = your Supabase Project URL
     - SUPABASE_ANON_KEY = anon public key
     - SUPABASE_SERVICE_ROLE_KEY = service_role key (keep secret)
   - In local development you can create a file named `.env.local` with these values (do NOT commit it).

4) Deploy
   - Recommended: connect this GitHub repository to Vercel for automatic deploys.
   - Alternatively, use any platform that supports Next.js and set the env vars there.

Manager account

- To create the initial Manager user you can:
  A) Use the Supabase Auth UI in the Supabase dashboard to add a new user (Authentication → Users → New user). Then tell me the Manager email and I will promote them once the site is live.
  B) If you add SUPABASE_SERVICE_ROLE_KEY to repo secrets and tell me the Manager email I can run an automated seeding step to create/invite the Manager.

Privacy

- Join requests do NOT collect emails. Protected dashboards require authenticated users via Supabase Auth.

If you want me to finish seeding and deploy automatically, either add the SUPABASE_SERVICE_ROLE_KEY as a repo secret and tell me the Manager email, or paste the keys here (less secure). Otherwise reply when you completed steps above and I will continue.

