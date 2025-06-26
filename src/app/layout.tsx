"use client";
import Navbar from "@/components/HomeNavbar";
import "./globals.css";
import { usePathname } from "next/navigation";
import { ToastProvider } from "@/components/common/ToastContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isLogin = pathname.includes("/login");
  return (
    <html lang="en">
      <body className="  h-screen">
        <ToastProvider>
          {!isLogin && <Navbar />}
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
