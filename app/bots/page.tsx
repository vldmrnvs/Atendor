import Link from 'next/link';
import { mockBots } from '@/lib/mock/bots';

export default function Bots() {
  return (
    <main className="container mx-auto max-w-2xl space-y-6 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Mis Bots</h1>
        <Link href="/bots/new" className="btn btn-primary btn-sm">
          Nuevo Bot
        </Link>
      </div>
      <ul className="space-y-2">
        {mockBots.map((bot) => (
          <li key={bot.id} className="card bg-base-100 shadow">
            <div className="card-body flex-row items-center justify-between p-4">
              <span>{bot.name}</span>
              <Link href={`/bots/${bot.id}`} className="link-hover link">
                Ver detalles
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
