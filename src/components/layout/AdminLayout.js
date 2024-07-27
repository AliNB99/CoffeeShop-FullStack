import DashboardSidebar from "@/organisms/common/DashboardSidebar";
import AdminHeader from "src/components/organisms/admin/AdminHeader";

function AdminLayout({ children, user }) {
  return (
    <div className="lg:flex h-screen">
      <div>
        <AdminHeader />
        <DashboardSidebar user={user} />
      </div>
      <div className="w-full flex justify-center mt-16 lg:mt-0">{children}</div>
    </div>
  );
}

export default AdminLayout;
