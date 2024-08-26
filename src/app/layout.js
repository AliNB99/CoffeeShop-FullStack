import AuthInitializerReduxProvider from "@/providers/AuthInitializerReduxProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import ShowContextProvider from "@/context/ShowContextProvider";
import NextThemeProvider from "@/providers/NextThemeProvider";
import NextAuthProvider from "@/utils/NextAuthProvider";
import ReduxProvider from "@/redux/ReduxProvider";
// fonts
import { Dana, Morabba } from "@/utils/fonts";
// for change darkMode
import { Toaster } from "react-hot-toast";
// components
import Layout from "@/layout/Layout";
// main styles
import "@/styles/globals.css";
// swiper global style
import "swiper/css";

export const metadata = {
  title: "Golden Coffee | کافه گلد",
  description: "خرید و فروش قهوه و لوازم ساخت قهوه",
  icons: { icon: "/images/fav-icon.png" },
};

const toastOptions = {
  className: "",
  style: {
    fontSize: "14px",
    fontWeight: "bold",
  },
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
                  <AuthInitializerReduxProvider>
                    <Layout>{children}</Layout>
                    <Toaster toastOptions={toastOptions} />
                    <ReactQueryDevtools />
                  </AuthInitializerReduxProvider>
                </ReactQueryProvider>
              </ReduxProvider>
            </ShowContextProvider>
          </NextAuthProvider>
        </NextThemeProvider>
      </body>
    </html>
  );
}
