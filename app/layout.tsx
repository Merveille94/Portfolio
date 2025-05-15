import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navigation/Navbar";
import FooterWrapper from "@/app/components/Generals/FooterWrapper";
import React from "react";

export const metadata: Metadata = {
    title: "Emanuele Merveille .G",
    description: "Website of Emanuele Merveille Guehi",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en, fr, de">
        <head>
            {/* Standard Meta */}
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            {/* Open Graph Meta */}
            <meta property="og:title" content="Emanuele Merveille .G" />
            <meta property="og:description" content="Website of Emanuele Merveille Guehi" />
            <meta property="og:image" content="/icon.png" />
            <meta property="og:url" content="https://emanueleguehi.com" />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />

            {/* Optional: Favicon */}
            <link rel="icon" href="/icon.png" />
            <title>Emanuele Merveille .G</title>
        </head>
        <body>
        <Navbar />
        {children}
        <FooterWrapper />
        </body>
        </html>
    );
}
