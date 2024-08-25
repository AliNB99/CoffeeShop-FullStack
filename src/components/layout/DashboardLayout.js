import DashboardHeader from "src/components/organisms/admin/DashboardHeader";
import DashboardSidebar from "@/organisms/common/DashboardSidebar";

function DashboardLayout({ children, user }) {
  return (
    <div className="lg:flex h-screen">
      <div>
        <DashboardHeader />
        <DashboardSidebar user={user} />
      </div>
      <div className="w-full flex justify-center mt-16 lg:mt-0">{children}</div>
    </div>
  );
}

export default DashboardLayout;
