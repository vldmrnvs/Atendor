import type { ReactNode } from 'react';
import Sidebar from '@/components/Sidebar';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="ml-[260px] flex-1 overflow-y-auto px-6 py-6">{children}</main>
    </div>
  );
}
