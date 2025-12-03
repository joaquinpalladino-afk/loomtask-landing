"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Twitter, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          {/* COLUMNA 1: MARCA */}
          <div className="col-span-1 md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-8 h-8">
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
            <p className="text-gray-500 text-sm leading-relaxed">
              El calendario de contenidos diseñado para creadores que odian las hojas de cálculo.
            </p>
            <div className="flex gap-4 pt-2">
                <a href="#" className="text-gray-400 hover:text-pink-600 transition-colors">
                    <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-black transition-colors">
                    {/* TikTok Icon proxy */}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Twitter className="w-5 h-5" />
                </a>
            </div>
          </div>

          {/* COLUMNA 2: PRODUCTO */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Producto</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-brand-blue transition-colors">Features</Link></li>
              <li><Link href="#" className="hover:text-brand-blue transition-colors">Roadmap</Link></li>
              <li><Link href="#" className="hover:text-brand-blue transition-colors">Precios (Pronto)</Link></li>
              <li><Link href="#" className="hover:text-brand-blue transition-colors">Changelog</Link></li>
            </ul>
          </div>

          {/* COLUMNA 3: RECURSOS */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Recursos</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-brand-blue transition-colors">Blog de Creadores</Link></li>
              <li><Link href="#" className="hover:text-brand-blue transition-colors">Guía de TikTok</Link></li>
              <li><Link href="#" className="hover:text-brand-blue transition-colors">Comunidad</Link></li>
              <li><a href="mailto:hola@loomtask.com" className="hover:text-brand-blue transition-colors flex items-center gap-2"><Mail className="w-4 h-4" /> Contacto</a></li>
            </ul>
          </div>

          {/* COLUMNA 4: LEGAL */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-brand-blue transition-colors">Privacidad</Link></li>
              <li><Link href="#" className="hover:text-brand-blue transition-colors">Términos</Link></li>
              <li><Link href="#" className="hover:text-brand-blue transition-colors">Cookies</Link></li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Loomtask. Todos los derechos reservados.
          </p>
          
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span>por <a href="https://twitter.com/tu_usuario" className="font-bold text-gray-900 hover:underline">Tu Nombre</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;