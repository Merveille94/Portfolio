import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navigation/Navbar";
import Footer from "@/app/components/Generals/Footer";

export const metadata: Metadata = {
  title: "Emanuele Merveille .G",
  description: "Website of Emanuele Merveille Guehi",
    icons: "/icon.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Navbar />
      {children}
      <Footer />
      </body>
    </html>
  );
}
