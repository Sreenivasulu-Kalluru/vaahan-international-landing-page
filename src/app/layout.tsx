import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vaahan | Future of Mobility",
  description: "A modern mobility and automotive technology ecosystem focused on SDV, Automotive Software, Embedded Systems, Smart Mobility, and EV Technologies.",
  keywords: ["Software Defined Vehicles", "Automotive Software", "Embedded Systems", "EV Ecosystem", "Smart Mobility", "Autonomous Driving", "OTA Updates"],
  authors: [{ name: "Vaahan Mobility" }],
  creator: "Vaahan Mobility",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vaahanmobility.com",
    title: "Vaahan | Engineering the Next Generation",
    description: "Pioneering the future of mobility with cutting-edge Software Defined Vehicles, Embedded Systems, and EV ecosystem technologies.",
    siteName: "Vaahan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaahan | Future of Mobility",
    description: "Pioneering the future of mobility with cutting-edge Software Defined Vehicles, Embedded Systems, and EV ecosystem technologies.",
    creator: "@vaahanmobility",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
