"use client";

import SidebarCart from "@/molecules/header/mobile/SidebarCart";
import SidebarItem from "@/molecules/header/mobile/SidebarItem";
import { showContext } from "@/context/ShowContextProvider";
import DesktopHeader from "@/organisms/header/DesktopHeader";
import MobileHeader from "@/organisms/header/MobileHeader";
import { usePathname } from "next/navigation";
import { useContext } from "react";

function Header({ role }) {
  // To not display the header in the admin sections and the login and registration form
  const { showElement, onShowElement } = useContext(showContext);
  const pathName = usePathname();
  if (
    pathName
      .split("/")
      .find(
        (i) =>
          i === "admin" || i === "signin" || i === "signup" || i === "dashboard"
      )
  )
    return;

  return (
    <>
      <DesktopHeader role={role} />
      <MobileHeader
        showElement={showElement}
        onShowElement={onShowElement}
        role={role}
      />
      {/* sidebar in homePage for mobile size */}
      <SidebarItem
        showElement={showElement}
        onShowElement={onShowElement}
        role={role}
      />
      <SidebarCart showElement={showElement} onShowElement={onShowElement} />
    </>
  );
}

export default Header;
