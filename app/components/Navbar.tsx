'use client';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-background px-6 py-4 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-heading text-xl font-luckiest">
            THE 10K SQUAD
          </Link>
        </div>
        
        <div className="flex items-center text-sm space-x-8 items-left w-[60%]">
          <Link href="/" className="text-white hover:text-purple-700">
            Home
          </Link>
          <Link href="/collection" className="text-white hover:text-purple-700">
            Collection
          </Link>
          <Link href="/about" className="text-white hover:text-purple-700">
            About
          </Link>
          <Link href="/team" className="text-white hover:text-purple-700">
            Team
          </Link>
        </div>
        <button className="text-xs bg-purple-900 text-white px-5 py-2 rounded-full hover:bg-purple-800 hover-glow gradient-button" disabled={true}>
          Connect wallet
        </button>
      </div>
    </nav>
  );
};

export default Navbar;