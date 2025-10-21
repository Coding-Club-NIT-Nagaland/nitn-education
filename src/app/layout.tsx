import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import { MainNav } from "@/components/layout/main-nav";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Education Channel by Clubs",
    template: "%s | Education Channel",
  },
  description: "A collaborative platform where college clubs publish, organize and share educational content, roadmaps, and resources. Join thousands of students learning together.",
  keywords: ["education", "learning", "college clubs", "student resources", "roadmaps", "tutorials", "courses"],
  authors: [{ name: "Education Channel Team" }],
  creator: "Education Channel",
  publisher: "Education Channel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://educationchannel.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://educationchannel.com",
    title: "Education Channel by Clubs",
    description: "Collaborative learning platform powered by student clubs. Discover curated content, roadmaps, and resources.",
    siteName: "Education Channel",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Education Channel - Learn Together",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Education Channel by Clubs",
    description: "Collaborative learning platform powered by student clubs. Discover curated content, roadmaps, and resources.",
    images: ["/og-image.png"],
    creator: "@educationchannel",
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
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background font-sans`}
      >
        <Providers>
          <div className="relative flex min-h-screen flex-col bg-background">
            <MainNav />
            <main className="flex-1 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20 dark:from-blue-900/5 dark:via-transparent dark:to-purple-900/5 pointer-events-none" />
              <div className="relative z-10">
                {children}
              </div>
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
