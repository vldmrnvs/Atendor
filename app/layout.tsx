import '../styles/globals.css';
import type { ReactNode } from 'react';
import { GeistSans } from 'geist/font/sans';
import Header from '@/components/Header';
import ThemeProvider from '@/components/ThemeProvider';

export const metadata = {
  title: 'Atendor',
  description: 'Personal AI assistants for everyone',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
