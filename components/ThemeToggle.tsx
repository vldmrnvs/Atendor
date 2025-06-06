"use client";
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') setTheme('dark');
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <label className="swap swap-rotate cursor-pointer">
      <input
        type="checkbox"
        checked={theme === 'dark'}
        onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
      <Sun className="swap-off h-5 w-5" />
      <Moon className="swap-on h-5 w-5" />
    </label>
  );
}
