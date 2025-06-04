import { NextResponse } from 'next/server';
import { saveMemory } from '@/lib/memory';

export async function POST(req: Request) {
  const { botId, messages } = await req.json();

  if (!botId || !messages) {
    return NextResponse.json({ error: 'Missing botId or messages' }, { status: 400 });
  }

  // Save conversation to memory helper (implementation pending)
  await saveMemory();

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Missing OPENAI_API_KEY' }, { status: 500 });
  }

  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages,
      }),
    });

    const data = await res.json();
    const text = data.choices?.[0]?.message?.content || '';

    return NextResponse.json({ message: text });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
