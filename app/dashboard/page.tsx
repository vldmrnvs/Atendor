import HeaderDashboard from '@/components/HeaderDashboard';
import ActivityTable from '@/components/ActivityTable';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <HeaderDashboard />
      <ActivityTable />
    </div>
  );
}
