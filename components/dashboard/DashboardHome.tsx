"use client";
import { useState } from 'react';
import { mockUsers } from '@/lib/mock/users';
import { mockActivity } from '@/lib/mock/activity';

export default function DashboardHome() {
  const user = mockUsers[0];
  const [filter, setFilter] = useState<'all' | 'active' | 'inactive'>('all');

  const filtered = mockActivity.filter((a) => {
    if (filter === 'active') return a.active;
    if (filter === 'inactive') return !a.active;
    return true;
  });

  return (
    <div className="space-y-6 p-4">
      <h1 className="text-2xl font-bold">Hello, {user.name}</h1>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h3 className="text-sm text-gray-500">Active Bots</h3>
            <p className="text-2xl font-bold">6</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h3 className="text-sm text-gray-500">Usage</h3>
            <p className="text-2xl font-bold">+15%</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h3 className="text-sm text-gray-500">Memory</h3>
            <progress
              className="progress progress-primary w-full"
              value={70}
              max="100"
            />
          </div>
        </div>
      </div>
      <section>
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Última Actividad</h2>
          <select
            className="select select-bordered select-sm w-32"
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
          >
            <option value="all">Todos</option>
            <option value="active">Activos</option>
            <option value="inactive">Inactivos</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Bot</th>
                <th>Evento</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr key={item.id}>
                  <td>{item.botName}</td>
                  <td>{item.event}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
