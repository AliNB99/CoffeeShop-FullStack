"use client";

import DashboardSidebar from "@/organisms/common/DashboardSidebar";
import { ThemeProvider, createTheme } from "@mui/material";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import AdminHeader from "src/components/organisms/admin/AdminHeader";
import { faIR } from "@mui/material/locale";

const lightTheme = createTheme(
  {
    palette: {
      mode: "light",
    },
    typography: {
      fontFamily: "",
    },
  },
  faIR
);

const darkTheme = createTheme(
  {
    palette: {
      mode: "dark",
    },
    typography: {
      fontFamily: "",
    },
  },
  faIR
);

function AdminLayout({ children, role }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
  }, []);

  if (!mounted) return null;

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div className="lg:flex h-screen">
        <div>
          <AdminHeader />
          <DashboardSidebar role={role} />
        </div>
        <div className="w-full flex justify-center mt-16 lg:mt-0">
          {children}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default AdminLayout;
