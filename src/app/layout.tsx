import type { Metadata } from "next";
import { Geist, Geist_Mono, Michroma } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const michroma = Michroma({
  variable: "--font-michroma",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://firstmedcareems.com'),
  title: "First Med Care EMS - Professional Medical Transportation",
  description: "Professional medical transportation services for emergency and non-emergency needs. Available 24/7 across the region.",
  keywords: "medical transport, ambulance, emergency medical services, EMS, medical transportation, First Med Care",
  authors: [{ name: "First Med Care EMS" }],
  creator: "First Med Care EMS",
  publisher: "First Med Care EMS",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://firstmedcareems.com",
    siteName: "First Med Care EMS",
    title: "First Med Care EMS - Professional Medical Transportation",
    description: "Professional medical transportation services for emergency and non-emergency needs. Available 24/7 across the region.",
    images: [
      {
        url: "/A3BDBCB4-1A57-42CF-BA51-B0801CD9A26A-removebg-preview.png",
        width: 1200,
        height: 630,
        alt: "First Med Care EMS Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "First Med Care EMS - Professional Medical Transportation",
    description: "Professional medical transportation services for emergency and non-emergency needs. Available 24/7 across the region.",
    images: ["/A3BDBCB4-1A57-42CF-BA51-B0801CD9A26A-removebg-preview.png"],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${michroma.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
