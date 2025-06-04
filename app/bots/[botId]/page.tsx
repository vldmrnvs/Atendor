import Link from 'next/link';
import { mockBots } from '@/lib/mock/bots';
import { notFound } from 'next/navigation';

export default function BotDetail({ params }: { params: { botId: string } }) {
  const bot = mockBots.find((b) => b.id === params.botId);
  if (!bot) return notFound();
  return (
    <main className="container mx-auto max-w-xl space-y-6 p-4">
      <h1 className="text-3xl font-bold">{bot.name}</h1>
      <p className="text-gray-600">{bot.purpose}</p>
      <div className="flex gap-4">
        <Link href={`/train/${bot.id}`} className="btn btn-primary">
          Entrenar Bot
        </Link>
        <Link href={`/chat/${bot.id}`} className="btn btn-secondary">
          Probar Chat
        </Link>
      </div>
    </main>
  );
}
