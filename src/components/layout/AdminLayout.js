import DashboardSidebar from "@/organisms/common/DashboardSidebar";
import AdminHeader from "src/components/organisms/admin/AdminHeader";

function AdminLayout({ children, role }) {
  return (
    <>
      <div className="lg:flex gap-5 h-screen">
        <div>
          <AdminHeader />
          <DashboardSidebar role={role} />
        </div>
        <div className="w-full flex justify-center mt-16 lg:mt-0">
          {children}
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
