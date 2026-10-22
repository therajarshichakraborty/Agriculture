import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/src/components/layout/ThemeProvider";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import Dock from "@/src/components/navbar";
import CommandPalette from "@/src/components/command-palette";
import { TooltipProvider } from "@/src/components/ui/tooltip";
import { portfolio } from "@/src/config/portfolio";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const title = `${portfolio.name} — ${portfolio.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(portfolio.website),
  title: { default: title, template: `%s | ${portfolio.name}` },
  description: portfolio.bio,
  keywords: [
    "Rajarshi Chakraborty",
    "Full-Stack Developer",
    "AI Engineer",
    "TypeScript",
    "Next.js",
    "Software Engineer Kolkata",
    "Portfolio"
  ],
  authors: [{ name: portfolio.name, url: portfolio.website }],
  creator: portfolio.name,
  openGraph: {
    title,
    description: portfolio.shortBio,
    url: portfolio.website,
    siteName: `${portfolio.name} Portfolio`,
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: portfolio.shortBio,
    creator: portfolio.twitterHandle
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcfcfd" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0f" }
  ]
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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <div className="relative flex min-h-screen flex-col overflow-x-clip">
              <Navbar />
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
