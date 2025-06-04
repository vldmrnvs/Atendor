import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';

function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error('Missing Supabase environment variables');
  }

  return createBrowserSupabaseClient({ supabaseUrl: url, supabaseKey: key });
}

export const supabase = createClient();
