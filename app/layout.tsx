import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export const metadata: Metadata = {
  title: "The 10k Squad",
  description: "Powered by the 10k squad and Manymore",
};

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <html>
        <body className="relative font-poppins h-full">
          {/* <div 
            className="absolute top-0 left-0 right-0 h-[100%] z-50"
            style={{
              backgroundImage: 'url("/particles_new.webp")'
            }}
          /> */}
          <Hero />
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
