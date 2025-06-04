import type { Bot } from '@/types/bot';

export default function BotCard({ bot }: { bot: Bot }) {
  return (
    <div className="p-4 border rounded space-y-1">
      <h2 className="text-lg font-semibold">{bot.name}</h2>
      {bot.personality && <p className="text-sm">{bot.personality}</p>}
      {bot.purpose && <p className="text-sm text-gray-600">{bot.purpose}</p>}
    </div>
  );
}
