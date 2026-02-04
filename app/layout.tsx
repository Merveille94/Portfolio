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

const MAINTENANCE_MODE = true; // change this to false for online revival

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
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

            <script type="application/ld+json">
                {`
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Emanuele Merveille Guehi",
  "url": "https://emanueleguehi.com",
  "sameAs": [
    "https://github.com/Merveille94",
    "https://linkedin.com/in/emanuelemerveille"
  ],
  "image": "https://emanueleguehi.com/bg-h.jpg",
  "jobTitle": "Physicist, Radiation security advisor and Web Developer",
  "description": "Passionate about energy systems, physics, and software development.",
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "Kwame Nkrumah University Of science and Technology, Ghana"
  }
}
`}
            </script>


            {/* Optional: Favicon */}
            <link rel="icon" href="/favicon.ico" />
            <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/icon.png" />
            <link rel="apple-touch-icon" href="/icon.png" />

            <title>Emanuele Merveille .G</title>
        </head>



        <body>
        {!MAINTENANCE_MODE && <Navbar />}
        {children}
        {!MAINTENANCE_MODE && <FooterWrapper />}
        </body>

        {/*<body>*/}
        {/*<Navbar />*/}
        {/*{children}*/}
        {/*<FooterWrapper />*/}
        {/*</body>*/}
        </html>
    );
}
