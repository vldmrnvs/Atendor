import type { ReactNode } from 'react';
import Sidebar from '@/components/Sidebar';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="ml-60 flex-1 p-4 sm:p-6">{children}</main>
    </div>
  );
}
