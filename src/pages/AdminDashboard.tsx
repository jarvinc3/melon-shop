import { AdminSidebar } from "@/components/features/admin/AdminSidebar";
import { DashboardStats } from "@/components/features/admin/DashboardStats";
import { RecentOrders } from "@/components/features/admin/RecentOrders";
import { SalesChart } from "@/components/features/admin/SalesChart";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Dashboard</h1>
            <p className="text-slate-600 dark:text-slate-400">Welcome back! Here's what's happening with your store.</p>
          </div>

          <DashboardStats />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <SalesChart />
            <RecentOrders />
          </div>
        </main>
      </div>
    </div>
  )
}
