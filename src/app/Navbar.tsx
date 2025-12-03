"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// --- Icon Components (inlined SVGs as Lucide React is not available) ---

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="currentColor"
        className={className}
    >
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.65 4.28 1.7.03 1.31-.01 2.61-.02 3.91-.19.01-.38.02-.57.02-1.55.01-3.1-.48-4.36-1.58-1.48-1.29-2.19-3.14-2.2-5.22zm-2.14 5.48c.18-1.42.79-2.83 1.83-3.89 1.05-1.07 2.59-1.64 4.14-1.71v3.91c-1.12.02-2.24.42-3.08 1.25-.83.82-1.25 1.94-1.28 3.07A4.28 4.28 0 0 1 12 13.19c.92.21 1.87.27 2.81.23.01 1.3.01 2.6 0 3.9-.38.01-.76.02-1.14.02-1.54-.01-3.09-.48-4.35-1.59-1.23-1.09-1.93-2.61-2-4.25-.03-.39-.05-.78-.05-1.18-.01-1.36.03-2.71.05-4.07z"/>
    </svg>
);

const MenuIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md animate-slideDown">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo */}
            <Link href="/" className="flex items-center gap-2">
                {/* NOTE: Using /file.svg as a placeholder for /logotipo.jpg */}
                <Image
                    src="/logotipo.jpg" 
                    alt="Loomtask Logo"
                    width={38}
                    height={38}
                />
                {/* NOTE: The project's default font is used as 'Inter' is not configured. */}
                <span className="font-bold text-xl text-[#111827]">
                    loomtask
                </span>
            </Link>

            {/* Right: Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
                <Link href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                    <InstagramIcon />
                </Link>
                <Link href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                    <TikTokIcon />
                </Link>
              <button className="bg-gradient-to-r from-[#2DD4BF] via-[#3B82F6] to-[#A855F7] text-white font-semibold px-5 py-2 rounded-full transition-transform hover:scale-105">
                Unirse a la Waitlist
              </button>
            </nav>

            {/* Right: Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#111827]">
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white pt-20">
          <nav className="flex flex-col items-center gap-8">
            <Link href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                <InstagramIcon className="w-8 h-8" />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                <TikTokIcon className="w-8 h-8" />
            </Link>
            <button className="bg-gradient-to-r from-[#2DD4BF] via-[#3B82F6] to-[#A855F7] text-white font-semibold px-6 py-3 rounded-full transition-transform hover:scale-105 mt-4">
                Unirse a la Waitlist
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
