"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import useIsClient from "src/hooks/useIsClient";

function DarkModeToggle({ className, label }) {
  const { theme, setTheme } = useTheme();
  const isClient = useIsClient();

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
