import type { ReactNode } from 'react';
import Header from '@/components/dashboard/Header';
import Sidebar from '@/components/dashboard/Sidebar';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
