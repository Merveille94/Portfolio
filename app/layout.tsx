import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navigation/Navbar";
import FooterWrapper from "@/app/components/Generals/FooterWrapper";
import React from "react"; // NEW wrapper component

export const metadata: Metadata = {
    title: "Emanuele Merveille .G",
    description: "Website of Emanuele Merveille Guehi",
    icons: "/icon.png",
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
        <FooterWrapper /> {/* <-- Handles the conditional logic */}
        </body>
        </html>
    );
}
