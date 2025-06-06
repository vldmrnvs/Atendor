"use client";
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  Home,
  Bot,
  MessageCircle,
  Menu,
  X,
  User,
} from 'lucide-react';
import ThemeToggle from '../ThemeToggle';

const navItems = [
  { href: '/dashboard', label: 'Start', icon: Home },
  { href: '/dashboard/bots', label: 'My Bots', icon: Bot },
  { href: '/dashboard/feedback', label: 'Feedback', icon: MessageCircle },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative sm:w-64">
      <button
        className="btn btn-ghost sm:hidden"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <X /> : <Menu />}
      </button>
      <aside
        className={`fixed inset-y-0 left-0 z-20 flex w-64 flex-col bg-base-100 p-4 shadow transition-transform sm:static sm:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'}`}
      >
        <nav className="space-y-2">
          {navItems.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-2 rounded px-2 py-2 transition hover:bg-base-200 ${pathname === href ? 'bg-base-200 font-semibold' : ''}`}
              onClick={() => setOpen(false)}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto space-y-2 pt-4">
          <ThemeToggle />
          <div className="dropdown w-full">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-sm w-full justify-between"
            >
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Account</span>
              </div>
              <svg
                className="h-3 w-3 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.516 7.548L10 12.032l4.484-4.484 1.06 1.06L10 14.152 4.456 8.608z" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] w-full rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                <Link href="/dashboard/account">My Account</Link>
              </li>
              <li>
                <Link href="/dashboard/settings">Settings</Link>
              </li>
              <li>
                <button className="w-full text-left">Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
}
