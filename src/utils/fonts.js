import localFont from "next/font/local";

export const Dana = localFont({
  src: [
    {
      path: "../../public/fonts/Dana/woff2/DanaFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Dana/woff2/DanaFaNum-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Dana/woff2/DanaFaNum-DemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-dana",
});

export const Morabba = localFont({
  src: [
    {
      path: "../../public/fonts/Morabba/woff2/Morabba-Light.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Morabba/woff2/Morabba-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Morabba/woff2/Morabba-Bold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-morabba",
});
