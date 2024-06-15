// main styles
import "./globals.css";
// components
import Layout from "@/layout/Layout";
// fonts
import { Dana, Morabba } from "@/utils/fonts";
// for change darkMode
import { Toaster } from "react-hot-toast";
import NextAuthProvider from "@/utils/NextAuthProvider";
import NextThemeProvider from "@/providers/ThemeProvider";
import ShowContextProvider from "@/context/ShowContextProvider";

export const metadata = {
  title: "Golden Coffee",
  description: "خرید و فروش قهوه و لوازم ساخت قهوه",
  icons: { icon: "./images/fav-icon.png" },
};

export default async function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${Dana.variable} ${Morabba.variable}`}>
        <NextThemeProvider>
          <NextAuthProvider>
            <ShowContextProvider>
              <Layout>{children}</Layout>
              <Toaster />
            </ShowContextProvider>
          </NextAuthProvider>
        </NextThemeProvider>
      </body>
    </html>
  );
}
