import type { Metadata } from "next";
import { Manrope, Inter, JetBrains_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Farmora — Sell Smarter. Earn Better.",
  description:
    "Agricultural Market Intelligence & Market Linkage Platform. Connecting farmers, FPOs, and buyers across Maharashtra for price transparency, market discovery, and net realization.",
  keywords: [
    "Farmora",
    "Agriculture",
    "Mandi Prices",
    "Maharashtra Agriculture",
    "Market Intelligence",
    "FPO",
    "Farmer Market Linkage",
    "Agricultural Pricing",
  ],
  authors: [{ name: "Farmora Team" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-background text-foreground selection:bg-brand-primary/10 selection:text-brand-primary">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
