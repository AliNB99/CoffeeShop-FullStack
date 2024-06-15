"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

function DarkModeToggle({ className, label }) {
  const { theme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient && theme === "dark" ? (
    <button onClick={() => setTheme("light")}>
      <SunIcon className={className} />
      {label && <span>تم روشن</span>}
    </button>
  ) : (
    <button onClick={() => setTheme("dark")}>
      <MoonIcon className={className} />
      {label && <span>تم تیره</span>}
    </button>
  );
}

export default DarkModeToggle;
