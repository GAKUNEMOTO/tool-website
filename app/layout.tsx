import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "./components/footer";
import Header from "./components/header";
import { cn } from "@/lib/utils";
import Sidebar from "./components/sidebar";
import { AppConfig } from "@/app.config";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: AppConfig.title,
  description: AppConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={cn(inter.className, 'h-dvh flex flex-col')} suppressHydrationWarning>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header/>
            <main className="flex flex-1">
             <Sidebar/>
              <div className="flex-1 bg-muted/30">{children}</div>
            </main>
            <Footer/>
          </ThemeProvider>
          </body>
    </html>
  );
}
