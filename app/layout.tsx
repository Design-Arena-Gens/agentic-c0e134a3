import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evo - AI Consulting Agency | Transform Your Business with AI",
  description: "Leading AI consulting agency specializing in AI Agents, Automations, AI Content, and AI Web Development. Get your free consultation today.",
  keywords: ["AI consulting", "AI agents", "automation", "AI content", "AI web development"],
  authors: [{ name: "Evo" }],
  openGraph: {
    title: "Evo - AI Consulting Agency",
    description: "Transform your business with cutting-edge AI solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
