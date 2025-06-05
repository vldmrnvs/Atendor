"use client";
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { href: '/dashboard/bots', label: 'My Bots' },
  { href: '/dashboard/bots/new', label: 'Create Bot' },
  { href: '/dashboard/settings', label: 'Settings' },
  { href: '/dashboard/account', label: 'My Account' },
  { href: '/dashboard/feedback', label: 'Feedback' },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative sm:w-56">
      <button
        className="btn btn-ghost sm:hidden"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <X /> : <Menu />}
      </button>
      <motion.aside
        className={`fixed inset-y-0 left-0 z-20 flex w-56 flex-col bg-base-100 p-4 shadow transition-transform sm:static sm:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'}`}
      >
            <nav className="space-y-2">
              {navItems.map((item) => (
                <motion.div whileHover={{ scale: 1.05 }} key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded px-2 py-2 transition hover:bg-base-200 ${pathname === item.href ? 'bg-base-200' : ''}`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto space-y-2 pt-4">
              <ThemeToggle />
              <button className="btn btn-ghost btn-sm w-full">Logout</button>
            </div>
      </motion.aside>
    </div>
  );
}
