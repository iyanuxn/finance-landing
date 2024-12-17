import type { Metadata } from "next";
// Import font
import { Open_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import { MyThemeContextProvider } from "@/contexts/theme-context";

// Define fonts
const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open_sans",
  display: "swap",
});
const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm_sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Iyanuxn's Next App",
  description: "The beginning of something spectacular",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Use fonts as classes */}
      <body
        className={`${open_sans.variable} ${dm_sans.variable} font-sans
      w-screen overflow-x-hidden scrollbar-thin containerAlt
      `}
      >
        <MyThemeContextProvider>{children}</MyThemeContextProvider>
      </body>
    </html>
  );
}
