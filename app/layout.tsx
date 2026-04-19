import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emirates Yield — AI Property Deal Analyzer for Dubai Real Estate",
  description:
    "Find high-ROI Dubai properties before everyone else. AI-powered deal analyzer scanning 1,000+ listings daily. 8.4% avg yield. Start your 7-day free trial.",
  keywords: ["Dubai real estate", "property investment", "ROI analyzer", "rental yield", "AI property deals"],
  openGraph: {
    title: "Emirates Yield — AI Property Deal Analyzer",
    description: "Find high-ROI Dubai properties before everyone else.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
