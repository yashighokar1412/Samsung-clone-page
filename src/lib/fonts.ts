import localFont from "next/font/local";

export const samsungOne = localFont({
  src: [
    {
      path: "../../public/fonts/SamsungOneLatinWeb-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/SamsungOneLatinWeb-700.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-samsung-one",
  display: "swap",
});

export const samsungSharp = localFont({
  src: [
    {
      path: "../../public/fonts/SamsungSharpSansBd.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-samsung-sharp",
  display: "swap",
});
