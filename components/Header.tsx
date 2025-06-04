"use client";
import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import BackButton from './BackButton';
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { ShimmerButton } from '@/components/magicui/shimmer-button';

export default function Header() {
  const [loggedIn] = useState(false);
  return (
    <header className="border-b bg-base-100">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <BackButton className="hidden sm:inline-flex" />
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
              <Link href="/signup">
                <ShimmerButton className="px-6 py-3">Get started free</ShimmerButton>
              </Link>
            </>
          )}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
