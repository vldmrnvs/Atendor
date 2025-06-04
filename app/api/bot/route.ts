import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { text } = await request.json();
  return NextResponse.json({ message: `You said: ${text}` });
}
