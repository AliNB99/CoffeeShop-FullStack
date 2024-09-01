"use client";

import DashboardHeader from "src/components/organisms/admin/DashboardHeader";
import DashboardSidebar from "@/organisms/common/DashboardSidebar";
import SidebarCart from "@/molecules/header/mobile/SidebarCart";
import TicketSidebar from "@/organisms/admin/TicketSidebar";
import { showContext } from "@/context/ShowContextProvider";
import { useContext } from "react";

function DashboardLayout({ children, user }) {
  const { showElement, onShowElement } = useContext(showContext);
  return (
    <div className="lg:flex h-screen">
      <div>
        <DashboardHeader user={user} />
        <DashboardSidebar user={user} />
        <TicketSidebar />
        <SidebarCart showElement={showElement} onShowElement={onShowElement} />
      </div>
      <div className="w-full flex justify-center mt-16 lg:mt-0">{children}</div>
    </div>
  );
}

export default DashboardLayout;
