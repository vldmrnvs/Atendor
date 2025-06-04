import Link from 'next/link';
import { mockBots } from '@/lib/mock/bots';
import { mockUsers } from '@/lib/mock/users';

export default function Admin() {
  return (
    <main className="container mx-auto max-w-2xl space-y-6 p-4">
      <h1 className="text-3xl font-bold">Admin</h1>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title">Usuarios</div>
          <div className="stat-value">{mockUsers.length}</div>
        </div>
        <div className="stat">
          <div className="stat-title">Bots</div>
          <div className="stat-value">{mockBots.length}</div>
        </div>
      </div>
      <div className="flex gap-4">
        <Link href="/admin/users" className="btn">Gestionar usuarios</Link>
        <Link href="/admin/bots" className="btn">Gestionar bots</Link>
      </div>
    </main>
  );
}
