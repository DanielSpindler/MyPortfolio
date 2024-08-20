import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { GoogleTagManager,GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: {
    default: "Daniel",
    template: "%s | Portfolio",
  },
  description: "A growing developer",
  openGraph: {
    title: "Portfolio Daniel",
    description:
      "Just a portfolio",
    url: "https://daniel-spindler.de",
    siteName: "daniel-spindler.de",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Daniel's",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

const navigation = [
  {name:"Home", href: '/'},
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
    <body
        className={`bg-black relative ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
    >
    <nav className="h-20 mx-auto animate-fade-in top-0 left-0 right-0">
      <ul className="flex items-center justify-center gap-12 md:gap-24 lg:gap-36 h-full">
        {navigation.map((item) => (
            <Link
                key={item.href}
                href={item.href}
                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
        ))}
      </ul>
    </nav>
    <main>
      {children}
    </main>
    <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID!}/>
    <GoogleTagManager gtmId={process.env.GOOGLE_TAG_MANAGER!}/>
    </body>
    </html>
  );
}
