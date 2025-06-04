import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-admin';

export async function POST(req: Request) {
  const { botId, text } = await req.json();

  if (!botId || !text) {
    return NextResponse.json({ error: 'Missing botId or text' }, { status: 400 });
  }

  const { error } = await supabaseAdmin
    .from('training_data')
    .insert({ bot_id: botId, text });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

