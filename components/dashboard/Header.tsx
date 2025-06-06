"use client";
import Link from 'next/link';
import { Bell } from 'lucide-react';

export default function Header() {
  return (
    <header className="border-b bg-base-100">
      <div className="flex items-center gap-4 p-4">
        <Link href="/dashboard" className="text-xl font-bold">
          Atendor
        </Link>
        <div className="flex flex-1 justify-center">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <button className="btn btn-ghost btn-circle">
          <Bell className="h-5 w-5" />
        </button>
        <Link href="/dashboard/bots/new" className="btn btn-primary">
          Nuevo Bot
        </Link>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-8 rounded-full bg-base-300" />
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] mt-3 w-40 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <Link href="/dashboard/account">Perfil</Link>
            </li>
            <li>
              <Link href="/dashboard/settings">Ajustes</Link>
            </li>
            <li>
              <button className="w-full text-left">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
