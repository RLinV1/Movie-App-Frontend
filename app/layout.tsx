import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FooterReact } from "./components/Footer";
import { NavbarReact } from "./components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie App",
  description: "Rate Movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarReact />
        {children}
        <FooterReact />
      </body>
    </html>
  );
}
