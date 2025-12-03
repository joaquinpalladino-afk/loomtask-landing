"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, ArrowDown } from "lucide-react";

export const DemoSection = () => {
  // Variantes para la animación de la tarjeta que se arrastra
  const cardVariants = {
    initial: { x: 0, y: 0, scale: 1, boxShadow: "0px 4px 6px rgba(0,0,0,0.05)" },
    dragging: {
      x: 280, // Mueve la tarjeta a la derecha (simulando drag)
      y: 40, // Mueve la tarjeta hacia abajo
      scale: 1.05, // Aumenta ligeramente el tamaño
      boxShadow: "0px 20px 25px -5px rgba(0,0,0,0.1), 0px 10px 10px -5px rgba(0,0,0,0.04)", // Sombra más pronunciada
      zIndex: 10,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity, // Repite la animación indefinidamente
        repeatType: "reverse" as const, // Va y vuelve
        repeatDelay: 0.5, // Pausa antes de repetir
      },
    },
  };

  // Variantes para el hueco donde "cae" la tarjeta
  const dropZoneVariants = {
    initial: { borderColor: "#E5E7EB", backgroundColor: "#FFFFFF" }, // Gris claro, fondo blanco
    active: {
      borderColor: "#3B82F6", // Borde azul al "recibir"
      backgroundColor: "#EFF6FF", // Fondo azul claro
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse" as const,
        repeatDelay: 0.5,
      },
    },
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
        
        {/* TEXTO EXPLICATIVO (Izquierda) */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan font-medium text-sm mb-6"
          >
            <Sparkles className="w-4 h-4" /> Flujo de Trabajo Visual
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight"
          >
            De la <span className="text-brand-purple">Idea</span> al{" "}
            <span className="text-brand-blue">Calendario</span> en segundos.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
          >
            Olvídate de copiar y pegar entre aplicaciones. Simplemente arrastra tus ideas desde el banco de borradores y suéltalas en el día que quieras publicar. Loomtask se encarga del resto.
          </motion.p>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.3 }}
             className="flex items-center justify-center lg:justify-start gap-2 text-brand-blue font-semibold"
          >
            <ArrowDown className="w-5 h-5 animate-bounce" />
            Mira cómo funciona
          </motion.div>
        </div>

        {/* DEMO VISUAL INTERACTIVA (Derecha) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 relative w-full max-w-xl"
        >
          {/* Contenedor "Pantalla" */}
          <div className="relative bg-gray-50 rounded-2xl border border-gray-200 p-6 lg:p-10 shadow-xl overflow-hidden">
            {/* Fondo de cuadrícula sutil */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>

            <div className="flex gap-8 relative z-10">
              
              {/* COLUMNA 1: BANCO DE IDEAS */}
              <div className="w-1/3 flex flex-col gap-4">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Ideas / Borradores</h3>
                {/* Tarjeta Estática 1 */}
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm opacity-60">
                  <div className="w-8 h-2 bg-gray-200 rounded-full mb-3"></div>
                  <div className="w-full h-3 bg-gray-200 rounded-full mb-2"></div>
                  <div className="w-2/3 h-3 bg-gray-200 rounded-full"></div>
                </div>
                 {/* Tarjeta que se anima (La protagonista) */}
                <motion.div
                  variants={cardVariants}
                  initial="initial"
                  animate="dragging"
                  className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm relative cursor-grab"
                >
                   {/* Decoración de la tarjeta */}
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-pink-100 text-pink-700 mb-2">Instagram Reel</span>
                  <p className="font-medium text-gray-800 text-sm leading-snug">
                    Tutorial: Transiciones Rápidas
                  </p>
                  <div className="absolute top-2 right-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-grip-vertical"><circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/></svg>
                  </div>
                </motion.div>
                 {/* Tarjeta Estática 2 */}
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm opacity-60">
                  <div className="w-8 h-2 bg-gray-200 rounded-full mb-3"></div>
                  <div className="w-3/4 h-3 bg-gray-200 rounded-full"></div>
                </div>
              </div>

              {/* COLUMNA 2: CALENDARIO (Destino) */}
              <div className="flex-1 flex flex-col gap-4 relative">
                 <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2 text-right">Calendario (Esta Semana)</h3>
                 {/* Días del calendario */}
                <div className="grid grid-cols-3 gap-3 h-full">
                    {/* Día 1 (Lleno) */}
                    <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center justify-center opacity-70">
                        <span className="text-gray-400 font-bold mb-2">Lun 15</span>
                        <div className="w-full h-10 bg-gray-100 rounded-md"></div>
                    </div>
                    {/* Día 2 (Zona de caída - Animada) */}
                    <motion.div
                        variants={dropZoneVariants}
                        initial="initial"
                        animate="active"
                        className="p-3 rounded-xl border-2 border-dashed flex flex-col items-center justify-center relative z-0"
                    >
                        <span className="text-gray-500 font-bold mb-2">Mar 16</span>
                         {/* Placeholder visual de dónde caerá */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1, transition: { delay: 0.8, duration: 0.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 1.5 } }}
                            className="w-full h-full border-2 border-brand-blue/30 bg-brand-blue/10 rounded-lg flex items-center justify-center"
                        >
                            <span className="text-brand-blue text-xs font-semibold">Soltar aquí</span>
                        </motion.div>
                    </motion.div>
                    {/* Día 3 (Vacío) */}
                    <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center justify-center opacity-70">
                         <span className="text-gray-400 font-bold">Mié 17</span>
                    </div>
                     {/* Fila de abajo (Decorativa) */}
                    <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm opacity-50"></div>
                    <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm opacity-50"></div>
                    <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm opacity-50"></div>
                </div>
              </div>
            </div>

             {/* Elemento decorativo flotante */}
             <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-purple/20 rounded-full blur-2xl z-0"></div>
             <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-cyan/20 rounded-full blur-2xl z-0"></div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;