"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, ArrowRight } from "lucide-react";

export const FounderSection = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Círculos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-gray-100 relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* IMAGEN / VIDEO DEL FUNDADOR (Izquierda) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/3 flex-shrink-0"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white">
                {/* IMPORTANTE: Reemplaza '/founder_photo.jpg' con tu foto real 
                   o usa un componente <video> si prefieres poner tu reel de presentación.
                */}
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    {/* Placeholder si no hay foto aún */}
                    <span className="text-gray-400 font-medium">Tu Foto Aquí</span>
                </div>
                {
                <Image
                  src="/perfil.jpeg"
                  alt="Tu Nombre - Founder de Loomtask"
                  fill
                  className="object-cover"
                />
                 }
                
                {/* Badge flotante "Creator" */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border border-gray-100">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Founder & Dev</p>
                    <p className="font-bold text-gray-900">@joaquin.palladino</p>
                </div>
              </div>
            </motion.div>

            {/* TEXTO / HISTORIA (Derecha) */}
            <div className="flex-1 space-y-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider mb-6">
                   🚧 Build in Public
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Estoy construyendo la herramienta que <span className="text-brand-purple">yo necesitaba</span>.
                </h2>
                
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Hola, soy <span className="font-bold text-gray-900">Joaquin Palladino</span> 👋.
                  </p>
                  <p>
                    Como creador de contenido y desarrollador, estaba harto de usar herramientas pensadas para empresas aburridas. Notion es lento. Excel es feo. Y mi calendario editorial era un desastre.
                  </p>
                  <p>
                    Decidí dejar de quejarme y empezar a programar. <strong>Loomtask</strong> es mi respuesta al caos creativo.
                  </p>
                  <p>
                    No tengo un equipo gigante ni inversores presionando. Estoy construyendo esto en público, compartiendo cada victoria y cada bug en mis redes.
                  </p>
                </div>
              </motion.div>

              {/* BOTONES SOCIALES */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <a 
                  href="https://tiktok.com/@tu_usuario" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-black text-white rounded-xl font-bold shadow-lg shadow-gray-900/20 hover:-translate-y-1 transition-transform"
                >
                   {/* Icono TikTok SVG manual porque Lucide no lo tiene oficial */}
                   <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                   </svg>
                   Seguir el proceso en TikTok
                </a>
                
                <a 
                  href="https://instagram.com/joaquin.palladino" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-white text-gray-900 border border-gray-200 rounded-xl font-bold shadow-sm hover:border-pink-500 hover:text-pink-600 transition-colors"
                >
                   <Instagram className="w-5 h-5" />
                   Instagram
                </a>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;