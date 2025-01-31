"use client"

import Link from 'next/link';
import Image from 'next/image';
import FAQ from './FAQ';

const Footer = () => {
  return (
    <footer className="relative bg-transparent py-16 text-white">
      <div 
        className="absolute inset-0 bg-cover bg-top z-0"
        style={{
          backgroundImage: 'url("/footer_bg_large.webp")',
          opacity: '1'
        }}
      />
      
      <FAQ />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <Image 
              src="/logo_10k.webp" 
              alt="10K Squad" 
              width={256}
              height={256}
              className="w-auto"
            />
          </div>
          
          <div className="flex space-x-6 mb-6">
            <Link href="https://discord.gg/10ksquad" className="text-pink-400 hover:text-pink-300">
              <Image src="/discord.svg" alt="Discord" width={24} height={24} />
            </Link>
            <Link href="https://twitter.com/10ksquad" className="text-pink-400 hover:text-pink-300">
              <Image src="/twitter.svg" alt="Twitter" width={24} height={24} />
            </Link>
          </div>
          
          <div className="text-center text-sm text-pink-400">
            <p>© 2025 The 10K Squad. All rights reserved.</p>
            <div className="mt-2 flex justify-center space-x-4">
              <Link href="/privacy" className="hover:text-pink-300">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-pink-300">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
