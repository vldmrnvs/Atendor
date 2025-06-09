"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, Bot, MessageCircle } from "lucide-react";
import Logo from '@/assets/atendor-logo.svg';

const nav = [
  { href: "/dashboard", label: "Start", icon: Home },
  { href: "/dashboard/bots", label: "My Bots", icon: Bot },
  { href: "/dashboard/feedback", label: "Feedback", icon: MessageCircle },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="fixed left-0 top-0 flex h-full w-[260px] min-w-[250px] flex-col border-r bg-white p-4">
      <Logo className="h-8 w-auto mx-auto my-4" />
      <div className="mb-6 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gray-300" />
        <div>
          <p className="font-medium">Vlad Novack</p>
          <span className="rounded bg-purple-100 px-2 py-0.5 text-xs text-purple-600">Premium</span>
        </div>
      </div>
      <nav className="space-y-1 text-sm">
        {nav.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-3 rounded-md px-3 py-2 hover:bg-purple-50 ${
              pathname === href ? 'bg-purple-100 text-purple-600' : ''
            }`}
          >
            <Icon className="h-4 w-4" /> {label}
          </Link>
        ))}
      </nav>
      <div className="mt-auto pt-4" />
    </aside>
  );
}
