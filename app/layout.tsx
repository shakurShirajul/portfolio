import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Navbar from "@/components/shared/navbar";
import StructuredData from "@/components/shared/structured-data";
import dynamic from "next/dynamic";
import { Toaster } from "@/components/ui/sonner";

// Lazy load Footer and KeyboardShortcut
const Footer = dynamic(() => import("@/components/shared/footer"));
const KeyboardShortcut = dynamic(
  () => import("@/components/shared/keyboard-shortcut"),
);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shakurshirajul.com"),
  title: {
    default: "Shirajul Islam Shakur - Full Stack Developer & Software Engineer",
    template: "%s | Shirajul Islam Shakur",
  },
  description:
    "Shirajul Islam Shakur is a Full Stack Developer and Software Engineer specializing in React, Next.js, TypeScript, and modern web development. View my portfolio, projects, and blog.",
  keywords: [
    "Shirajul Islam Shakur",
    "Shakur Shirajul",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Web Development",
    "Portfolio",
    "Bangladesh Developer",
    "IIUC",
    "Chittagong Developer",
    "Shirajul Islam Shakur Portfolio",
    "Shirajul Islam Shakur Blog",
  ],
  authors: [
    { name: "Shirajul Islam Shakur", url: "https://shakurshirajul.com" },
  ],
  creator: "Shirajul Islam Shakur",
  publisher: "Shirajul Islam Shakur",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shakurshirajul.com",
    title: "Shirajul Islam Shakur - Full Stack Developer & Software Engineer",
    description:
      "Full Stack Developer specializing in React, Next.js, and TypeScript. Explore my portfolio, projects, and technical blog.",
    siteName: "Shirajul Islam Shakur Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shirajul Islam Shakur - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shirajul Islam Shakur - Full Stack Developer & Software Engineer",
    description:
      "Full Stack Developer specializing in React, Next.js, and TypeScript.",
    images: ["/og-image.png"],
    creator: "@shakurshirajul",
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
  verification: {
    google: "your-google-verification-code",
    // Add other verification codes as needed
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="canonical" href="https://shakurshirajul.com" />
        <meta name="google-site-verification" content="eJk6x7-QU9ciMLKNODSfn6NyYcwYoqaq5Fbs1mJ0PMg" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link
          rel="preconnect"
          href="https://res.cloudinary.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://images.unsplash.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="max-w-7xl mx-auto px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-5 lg:px-8">
            <Navbar />
            {children}
            <Toaster />
          </main>
          <Footer />
          <KeyboardShortcut />
        </ThemeProvider>
      </body>
    </html>
  );
}
