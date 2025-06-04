import Link from 'next/link';
import { mockUsers } from '@/lib/mock/users';

export default function AdminUsers() {
  return (
    <main className="container mx-auto max-w-xl space-y-6 p-4">
      <h1 className="text-2xl font-bold">Usuarios</h1>
      <ul className="space-y-2">
        {mockUsers.map((u) => (
          <li key={u.id} className="card bg-base-100 shadow">
            <div className="card-body flex-row items-center justify-between p-4">
              <span>{u.name}</span>
              <span className="text-sm text-gray-500">{u.email}</span>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
