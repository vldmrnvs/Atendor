"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { href: '/dashboard', label: 'My Bots' },
  { href: '/bots/new', label: 'Create Bot' },
  { href: '/dashboard/settings', label: 'Settings' },
  { href: '/help', label: 'Help / Feedback' },
];

export default function DashboardSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative sm:w-56">
      <button
        className="btn btn-ghost sm:hidden"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <X /> : <Menu />}
      </button>
      <AnimatePresence>
        {(open || typeof window === 'undefined') && (
          <motion.aside
            initial={{ x: -260 }}
            animate={{ x: 0 }}
            exit={{ x: -260 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="fixed inset-y-0 left-0 z-20 w-56 bg-base-100 p-4 shadow sm:static sm:translate-x-0"
          >
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded px-2 py-2 transition hover:bg-base-200"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}
