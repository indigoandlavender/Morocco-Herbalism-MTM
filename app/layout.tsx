import type { Metadata, Viewport } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

const siteUrl = "https://nabat.slowmorocco.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f7" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0a09" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nabat — Moroccan Ethnobotanical Reference",
    template: "%s | Nabat",
  },
  description:
    "A reference guide to plants traditionally used in Morocco. Ethnobotanical information on regional herbs, their preparation, and cultural context. Not medical advice.",
  keywords: [
    "Moroccan plants",
    "ethnobotany Morocco",
    "Moroccan herbs",
    "traditional plants Morocco",
    "Amazigh plants",
    "Atlas mountains herbs",
    "Moroccan herbal knowledge",
  ],
  authors: [{ name: "Nabat", url: siteUrl }],
  creator: "Slow Morocco",
  publisher: "Slow Morocco",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Nabat",
    title: "Nabat — Moroccan Ethnobotanical Reference",
    description:
      "A reference guide to plants traditionally used in Morocco. Cultural information, not medical advice.",
  },
  twitter: {
    card: "summary",
    title: "Nabat — Moroccan Ethnobotanical Reference",
    description:
      "A reference guide to plants traditionally used in Morocco.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="py-6 border-b border-border">
            <div className="container">
              <div className="flex items-center justify-between">
                <a href="/" className="inline-block">
                  <span className="text-lg font-serif tracking-tight">Nabat</span>
                </a>
                <nav className="flex items-center gap-6 text-sm">
                  <a href="/plants" className="text-muted hover:text-foreground transition-colors">
                    Plants
                  </a>
                  <a href="/map" className="text-muted hover:text-foreground transition-colors">
                    Map
                  </a>
                  <a href="/sources" className="text-muted hover:text-foreground transition-colors">
                    Sources
                  </a>
                </nav>
              </div>
            </div>
          </header>
          <main className="flex-1 py-10 md:py-14">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
