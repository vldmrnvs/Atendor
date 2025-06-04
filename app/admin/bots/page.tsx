import Link from 'next/link';
import { mockBots } from '@/lib/mock/bots';

export default function AdminBots() {
  return (
    <main className="container mx-auto max-w-xl space-y-6 p-4">
      <h1 className="text-2xl font-bold">Bots</h1>
      <ul className="space-y-2">
        {mockBots.map((b) => (
          <li key={b.id} className="card bg-base-100 shadow">
            <div className="card-body flex-row items-center justify-between p-4">
              <span>{b.name}</span>
              <span className="text-sm text-gray-500">{b.purpose}</span>
            </div>
          </li>
        ))}
      </ul>
      <Link href="/admin" className="link">
        Volver
      </Link>
    </main>
  );
}
