import { createClient } from '@supabase/supabase-js';

// Server-side Supabase admin client. Requires SUPABASE_SERVICE_ROLE_KEY in environment.
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const supabaseAdmin = createClient(url, serviceRole);
