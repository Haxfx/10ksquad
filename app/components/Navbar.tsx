'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background px-6 py-4 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center z-20">
          <Link href="/" className="text-heading text-xl font-luckiest tracking-widest-2">
            THE 10K SQUAD
          </Link>
        </div>
        
        {/* Hamburger Menu Button */}
        <button 
          className="lg:hidden text-white z-20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center text-sm space-x-8 items-left w-[60%]">
          <Link href="/" className="text-white hover:text-heading hover:font-bold transition-all duration-300">
            Home
          </Link>
          <Link href="/collection" className="text-white hover:text-heading hover:font-bold transition-all duration-300">
            Collection
          </Link>
          <Link href="/about" className="text-white hover:text-heading hover:font-bold transition-all duration-300">
            About
          </Link>
          <Link href="/team" className="text-white hover:text-heading hover:font-bold transition-all duration-300">
            Team
          </Link>
        </div>

        {/* Desktop Connect Button */}
        <button 
          className="hidden lg:block text-xs bg-purple-900 text-white px-5 py-2 rounded-full hover:bg-purple-800 hover-glow gradient-button" 
          disabled={true}
        >
          Connect wallet
        </button>

        {/* Mobile Menu Overlay */}
        <div 
          className={`
            fixed top-[50px] left-0 right-0 bottom-0
            bg-background
            transform transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
            lg:hidden
          `}
        >
          <div className="flex flex-col space-y-6 p-6">
            <Link 
              href="/" 
              className="text-white hover:text-heading hover:font-bold transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/collection" 
              className="text-white hover:text-heading hover:font-bold transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Collection
            </Link>
            <Link 
              href="/about" 
              className="text-white hover:text-heading hover:font-bold transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/team" 
              className="text-white hover:text-heading hover:font-bold transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <button 
              className="text-xs bg-purple-900 text-white px-5 py-2 rounded-full hover:bg-purple-800 hover-glow gradient-button w-full" 
              disabled={true}
            >
              Connect wallet
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
