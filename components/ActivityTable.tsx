"use client";
import { useState } from "react";
import { mockActivity } from "@/lib/mock/activity";

export default function ActivityTable() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const items = mockActivity.filter((item) => {
    if (filter === "active" && !item.active) return false;
    if (filter === "inactive" && item.active) return false;
    if (search && !item.botName.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <section className="space-y-2">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Última Actividad</h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search"
            className="rounded border px-2 py-1 text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="rounded border px-2 py-1 text-sm"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">Todos</option>
            <option value="active">Activos</option>
            <option value="inactive">Inactivos</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto rounded-xl border">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left">Bot</th>
              <th className="px-4 py-2 text-left">Event</th>
              <th className="px-4 py-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {items.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-2">{item.botName}</td>
                <td className="px-4 py-2">{item.event}</td>
                <td className="px-4 py-2">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
