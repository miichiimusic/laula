import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { GeistSans } from "geist/font/sans"

export const metadata: Metadata = {
  title: "LAULA - AI Web Design",
  description: "Undo AI mistakes instantly — save progress and restore with one click.",
  openGraph: {
    title: "LAULA - AI Web Designl",
    description: "Undo AI mistakes instantly — save progress and restore with one click.",
    images: [
      {
        url: "/images/og-new.jpeg",
        width: 1200,
        height: 630,
        alt: "AI Version Control",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LAULA - AI Web Design",
    description: "Undo AI mistakes instantly — save progress and restore with one click.",
    images: ["/images/og-new.jpeg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@geist-ui/core@latest/dist/geist-ui.css" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
