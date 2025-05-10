import type { Metadata } from "next";
import type React from "react";
import "@/app/globals.css"; // Ensure this path is correct
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"; // Ensure this path is correct

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GENFITY - All In One Business Digitalization Solution, Professional & Affordable",
  description:
    "GENFITY offers the most complete business digitalization services with all-in-one packages that are professional, affordable, and innovative. Get creative ideas, the best designs, and the latest digital strategies to grow your business in the digital era. Entrust your business transformation to our expert team for optimal and highly competitive results.",
  keywords: [
    "business digitalization",
    "all in one package",
    "digital services",
    "professional",
    "affordable",
    "creative ideas",
    "best design",
    "digital market",
    "innovative concept",
    "branding",
    "business website",
    "e-commerce",
    "app development",
    "digital marketing",
    "digital transformation",
    "UI/UX",
    "business solutions",
    "GENFITY",
    "digital services",
    "web development",
    "SEO",
    "social media",
    "creative content",
    "digital strategy",
    "business support",
    "software development",
    "digital integration",
    "IT consulting",
    "cybersecurity"
  ],
  icons: {
    icon: "/web-icon.svg",
    shortcut: "/web-icon.svg",
    apple: "/web-icon.svg",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "GENFITY - All In One Business Digitalization Solution, Professional & Affordable",
    description:
      "GENFITY provides professional, innovative, and affordable business digitalization services with all-in-one packages and the best designs for today's digital market.",
    images: [
      {
        url: "https://www.be.genfity.com/logo-light.png",
        width: 1200,
        height: 630,
        alt: "GENFITY Business Digitalization",
      },
    ],
    url: "https://www.genfity.com",
    siteName: "GENFITY",    
    locale: "en-US",
    type: "website",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
