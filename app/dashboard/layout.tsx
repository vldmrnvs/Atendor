import type { ReactNode } from 'react';
import DashboardSidebar from '@/components/DashboardSidebar';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
}
