import DashboardHeader from "src/components/organisms/admin/DashboardHeader";
import DashboardSidebar from "@/organisms/common/DashboardSidebar";
import TicketSidebar from "@/organisms/admin/TicketSidebar";

function DashboardLayout({ children, user }) {
  return (
    <div className="lg:flex h-screen">
      <div>
        <DashboardHeader />
        <DashboardSidebar user={user} />
        <TicketSidebar />
      </div>
      <div className="w-full flex justify-center mt-16 lg:mt-0">{children}</div>
    </div>
  );
}

export default DashboardLayout;
