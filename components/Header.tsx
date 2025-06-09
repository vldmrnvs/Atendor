"use client";
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';

export default function Header() {
  const pathname = usePathname();
  const [loggedIn] = useState(false);
  return (
    <header className="border-b bg-base-100">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-bold">
            <AnimatedShinyText className="text-2xl">Atendor</AnimatedShinyText>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/" className="link-hover link">
            Home
          </Link>
          <Link href="/dashboard" className="link-hover link">
            Dashboard
          </Link>
          {loggedIn ? (
            <button className="btn btn-sm">Logout</button>
          ) : (
            <>
              <Link href="/login" className="link-hover link">
                Login
              </Link>
              <Link href="/signup" className="link-hover link">
                Registrarse
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
