import Link from 'next/link';
import { mockBots } from '@/lib/mock/bots';
import { mockUsers } from '@/lib/mock/users';
import DashboardSidebar from '@/components/DashboardSidebar';

export default function Dashboard() {
  const user = mockUsers[0];
  return (
    <main className="container mx-auto flex gap-4 p-4">
      <DashboardSidebar />
      <div className="flex-1 space-y-8">
        <h1 className="text-3xl font-bold">Hola, {user.name}</h1>

        <section>
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Tus Bots</h2>
            <Link href="/bots/new" className="btn btn-sm btn-primary">
              Crear nuevo bot
            </Link>
          </div>
          <ul className="space-y-2">
            {mockBots.map((bot) => (
              <li key={bot.id} className="card bg-base-100 shadow">
                <div className="card-body flex-row items-center justify-between p-4">
                  <span>{bot.name}</span>
                  <Link href={`/bots/${bot.id}`} className="link-hover link">
                    Ver
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-xl font-semibold">Última interacción</h2>
          <div className="rounded bg-base-200 p-4">
            <p className="text-sm text-gray-600">
              Tu bot respondió: &quot;¡Hola! ¿En qué puedo ayudarte?&quot;
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
