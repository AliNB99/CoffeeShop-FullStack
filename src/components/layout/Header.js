"use client";

import DesktopHeader from "@/organisms/header/DesktopHeader";
import MobileHeader from "@/organisms/header/MobileHeader";
import { usePathname } from "next/navigation";

async function Header({ role }) {
  // To not display the header in the admin sections and the login and registration form
  const pathName = usePathname();
  if (
    pathName
      .split("/")
      .find((i) => i === "admin" || i === "signin" || i === "signup")
  )
    return;

  return (
    <>
      <DesktopHeader role={role} />
      <MobileHeader role={role} />
    </>
  );
}

export default Header;
