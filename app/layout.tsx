import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/src/components/layout/ThemeProvider";
import { Footer } from "@/src/components/layout/Footer";
import Dock from "@/src/components/navbar";
import CommandPalette from "@/src/components/command-palette";
import { TooltipProvider } from "@/src/components/ui/tooltip";
import { portfolio } from "@/src/config/portfolio";
import { JsonLd } from "@/src/components/seo/JsonLd";
import {
  KEYWORDS,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  graph,
  person,
  website
} from "@/src/lib/seo";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: `%s | ${portfolio.name}` },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: KEYWORDS,
  authors: [{ name: portfolio.name, url: SITE_URL }],
  creator: portfolio.name,
  publisher: portfolio.name,
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "profile",
    firstName: "Rajarshi",
    lastName: "Chakraborty",
    username: "therajarshichakraborty",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${portfolio.name}, Full-Stack & AI Engineer`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: portfolio.twitterHandle,
    site: portfolio.twitterHandle,
    images: ["/opengraph-image"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  // Search Console ownership token carried over from the previous portfolio.
  verification: { google: "4rKUkgp1GvjwtPFpZWzwQwBiyVWY5DF-fuk5YwmEw0o" },
  formatDetection: { telephone: false, address: false, email: false },
  appleWebApp: { title: portfolio.name, statusBarStyle: "default" }
};

export const viewport: Viewport = {
  themeColor: "#fdfdfe",
  colorScheme: "light"
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <JsonLd data={graph(website, person)} />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <TooltipProvider>
            <div className="relative flex min-h-screen flex-col overflow-x-clip">
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Dock />
            <CommandPalette />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
