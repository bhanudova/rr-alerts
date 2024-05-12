import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderComponent from "./components/HeaderComponent";
import { ThemeProvider } from "@/components/ThemeProvider";
import FooterComponent from "./components/FooterComponent";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Job Updates",
  description: "Latest Job Updates",
};

export default function RootLayout({ children, }: Readonly<{children: React.ReactNode;}>) 
{
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <HeaderComponent />
          {children}
        </ThemeProvider>
        <FooterComponent/>
      </body>
    </html>
  );
}
