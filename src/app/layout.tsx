import type { Metadata } from "next";
import "./globals.css";
import { ToastProvider } from "@/components/Toast";

export const metadata: Metadata = {
  title: "Levitas X1 | Antigravity Module - Gravity Is Obsolete",
  description: "The world's first consumer-grade quantum flux pinning device. 250kg lift capacity. 50-year nuclear diamond battery. The post-gravity era begins now.",
  keywords: ["antigravity", "levitation", "quantum", "technology", "future", "innovation"],
  openGraph: {
    title: "Levitas X1 | Antigravity Module",
    description: "The world's first consumer-grade quantum flux pinning device.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Orbitron:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ToastProvider>
          {/* Skip to main content link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--neon-cyan)] focus:text-[var(--bg-primary)] focus:rounded focus:font-semibold focus:outline-none"
          >
            Skip to main content
          </a>
          <div className="grid-overlay" aria-hidden="true" />
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
