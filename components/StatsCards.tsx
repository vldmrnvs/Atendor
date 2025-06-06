"use client";

export default function StatsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <div className="rounded-xl bg-white p-4 shadow-sm dark:bg-zinc-800">
        <h3 className="text-sm text-gray-500">Active Bots</h3>
        <p className="text-2xl font-semibold">6</p>
      </div>
      <div className="rounded-xl bg-white p-4 shadow-sm dark:bg-zinc-800">
        <h3 className="text-sm text-gray-500">Usage</h3>
        <p className="text-2xl font-semibold">+15%</p>
      </div>
      <div className="rounded-xl bg-white p-4 shadow-sm dark:bg-zinc-800">
        <h3 className="text-sm text-gray-500">Memory</h3>
        <div className="mt-2 h-2 w-full overflow-hidden rounded bg-gray-200">
          <div className="h-full bg-purple-500" style={{ width: '70%' }} />
        </div>
      </div>
    </div>
  );
}
