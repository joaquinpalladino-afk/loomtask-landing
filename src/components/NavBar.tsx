"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Music2, Menu, X } from "lucide-react"; // Music2 se suele usar para TikTok

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Variantes para la animación de entrada
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* LOGO + BRAND */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                {/* Asegúrate de que image_6.png esté en tu carpeta public/ */}
                <Image
                  src="/logotipo.jpg"
                  alt="Loomtask Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">
                loomtask
              </span>
            </Link>
          </div>

          {/* DESKTOP MENU (Right) */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Social Icons */}
            <div className="flex items-center space-x-4 border-r border-gray-200 pr-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-500 hover:text-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-500 hover:text-black transition-colors"
                aria-label="TikTok"
              >
                {/* Usamos Music2 como proxy visual para TikTok si no tienes el icono SVG específico */}
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-5 h-5"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#2DD4BF] via-[#3B82F6] to-[#A855F7] text-white font-medium py-2 px-5 rounded-full shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-shadow text-sm"
              onClick={() => {
                // Scroll suave al formulario de waitlist
                document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Unirse a la Waitlist
            </motion.button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <div className="flex items-center justify-center space-x-6 py-4">
                <a href="#" className="flex items-center text-gray-600 gap-2">
                  <Instagram size={20} /> <span>Instagram</span>
                </a>
                <a href="#" className="flex items-center text-gray-600 gap-2">
                   <svg 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="w-5 h-5"
                    >
                      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                    </svg>
                   <span>TikTok</span>
                </a>
              </div>
              <button 
                onClick={() => {
                   setIsOpen(false);
                   document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full bg-gradient-to-r from-[#2DD4BF] via-[#3B82F6] to-[#A855F7] text-white font-bold py-3 px-4 rounded-xl shadow-md"
              >
                Unirse a la Waitlist
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;