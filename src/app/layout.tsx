import type { Metadata, Viewport } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const scriptFont = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theyoungfoundershow.com"),
  title: "The Young Founder Show | Hosted by Maher Dhami",
  description: "Real Stories. Real Lessons. A Brighter Tomorrow. A podcast documenting the real journey of a young founder building products, learning from mistakes, and sharing raw startup lessons.",
  keywords: [
    "The Young Founder Show",
    "Maher Dhami",
    "Podcast",
    "Startups",
    "DevLy",
    "CODIEPAG",
    "Young Founders",
    "Student Entrepreneurs",
    "Tech Podcast",
    "Building in Public",
    "Artificial Intelligence"
  ],
  authors: [{ name: "Maher Dhami" }],
  openGraph: {
    title: "The Young Founder Show | Hosted by Maher Dhami",
    description: "Real Stories. Real Lessons. A Brighter Tomorrow. The authentic podcast for young builders and entrepreneurs.",
    url: "https://theyoungfoundershow.com",
    siteName: "The Young Founder Show",
    images: [
      {
        url: "/images/show_badge.jpg",
        width: 1080,
        height: 1080,
        alt: "The Young Founder Show Podcast Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Young Founder Show | Maher Dhami",
    description: "Real Stories. Real Lessons. A Brighter Tomorrow.",
    creator: "@maherdhami",
    images: ["/images/show_badge.jpg"],
  },
  icons: {
    icon: "/images/show_badge.jpg",
    apple: "/images/show_badge.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: "#03100D",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${scriptFont.variable} dark scroll-smooth`}>
      <body className="bg-[#03100D] text-[#FFFFFF] font-sans min-h-screen selection:bg-[#2BF4C3]/30 selection:text-[#2BF4C3] antialiased">
        {children}
      </body>
    </html>
  );
}
