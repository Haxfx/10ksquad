import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "The 10k Squad",
  description: "Generated by Manymore",
};

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <html>
        <body className="font-poppins">
        <div className="min-h-screen">
          <Navbar />
          {children}
        </div>
        <Footer />
        </body>
      </html>
    </>
  )
}

export default Layout
