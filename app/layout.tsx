import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Muhammad Chand | Portfolio",
  description: "Muhammad Chand — Full Stack Web Developer specializing in React, Next.js, Node.js and modern web technologies. Available for freelance and full-time opportunities.",
  keywords: ["Muhammad Chand", "Web Developer", "Full Stack Developer", "React Developer", "Next.js", "Node.js", "Pakistan", "Freelance Developer", "Portfolio"],
  authors: [{ name: "Muhammad Chand", url: "https://chand-portfolio-zeta.vercel.app" }],
  creator: "Muhammad Chand",
  metadataBase: new URL("https://chand-portfolio-zeta.vercel.app"),
  openGraph: {
    type: "website",
    url: "https://chand-portfolio-zeta.vercel.app",
    title: "Muhammad Chand | Portfolio",
    description: "Full Stack Developer specializing in React, Next.js & Node.js. Check out my projects and get in touch.",
    siteName: "Muhammad Chand Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Muhammad Chand — Full Stack Web Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Chand | Portfolio",
    description: "Full Stack Developer specializing in React, Next.js & Node.js.",
    images: ["/og-image.png"],
    creator: "@MuhammadChand410",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
