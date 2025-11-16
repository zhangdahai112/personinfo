import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./global.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import { UserProvider } from "@/contexts/UserContext";
import { PaymentProvider } from "@/contexts/PaymentContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "诸葛查查 - 专业个人遗产查询服务",
  description: "基于中国法律框架的专业个人遗产第三方查询服务平台，AI智能搜索，法律保障，隐私安全。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <UserProvider>
          <UserProvider>
          <PaymentProvider>
            <ClientBody>{children}</ClientBody>
          </PaymentProvider>
        </UserProvider>
        </UserProvider>
      </body>
    </html>
  );
}
