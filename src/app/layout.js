// main styles
import "./globals.css";
// components
import Layout from "@/layout/Layout";
// fonts
import { Dana, Morabba } from "@/utils/fonts";
// for change darkMode
import { Toaster } from "react-hot-toast";
import NextAuthProvider from "@/utils/NextAuthProvider";
import NextThemeProvider from "@/providers/NextThemeProvider";
import ShowContextProvider from "@/context/ShowContextProvider";
import ReduxProvider from "@/redux/ReduxProvider";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
              <ReduxProvider>
                <ReactQueryProvider>
                  <Layout>{children}</Layout>
                  <Toaster />
                  <ReactQueryDevtools />
                </ReactQueryProvider>
              </ReduxProvider>
            </ShowContextProvider>
          </NextAuthProvider>
        </NextThemeProvider>
      </body>
    </html>
  );
}
