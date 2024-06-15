"use client";

import { ThemeProvider } from "next-themes";

function NextThemeProvider({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}

export default NextThemeProvider;
