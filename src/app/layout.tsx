import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import { samsungOne, samsungSharp } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Samsung US | Mobile | TV | Home Electronics | Home Appliances",
  description: "Discover the latest in electronic & smart appliance technology with Samsung. Find the next big thing from smartphones & tablets to laptops & tvs & more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${samsungOne.variable} ${samsungSharp.variable}`}>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
