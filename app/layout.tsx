import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import KeyboardShortcut from "@/components/shared/keyboard-shortcut";
import { personSchema, websiteSchema } from "@/lib/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://shakurshirajul.com'),
  title: {
    default: 'Shakur Shirajul - Full Stack Developer & Software Engineer',
    template: '%s | Shakur Shirajul'
  },
  description: 'Shakur Shirajul is a Full Stack Developer and Software Engineer specializing in React, Next.js, TypeScript, and modern web development. View my portfolio, projects, and blog.',
  keywords: ['Shakur Shirajul', 'Full Stack Developer', 'Software Engineer', 'React Developer', 'Next.js', 'TypeScript', 'Web Development', 'Portfolio', 'Bangladesh Developer','IIUC', 'Chittagong Developer', 'Shirajul Islam Shakur', 'Shakur Shirajul Portfolio', 'Shakur Shirajul Blog'],
  authors: [{ name: 'Shakur Shirajul', url: 'https://shakurshirajul.com' }],
  creator: 'Shakur Shirajul',
  publisher: 'Shakur Shirajul',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shakurshirajul.com',
    title: 'Shakur Shirajul - Full Stack Developer & Software Engineer',
    description: 'Full Stack Developer specializing in React, Next.js, and TypeScript. Explore my portfolio, projects, and technical blog.',
    siteName: 'Shakur Shirajul Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Shakur Shirajul - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shakur Shirajul - Full Stack Developer & Software Engineer',
    description: 'Full Stack Developer specializing in React, Next.js, and TypeScript.',
    images: ['/og-image.png'],
    creator: '@shakurshirajul',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="max-w-7xl mx-auto px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-5 lg:px-8">
            <Navbar />
            {children}
          </main>
          <Footer />
          <KeyboardShortcut/>
        </ThemeProvider>
      </body>
    </html>
  );
}
