"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Lightbulb, BarChart3, Smartphone, Check } from "lucide-react";

const features = [
  {
    id: 1,
    badge: "Organización Flexible",
    title: "Un Kanban para tu cerebro creativo",
    description: "Tus ideas no surgen en orden. Captúralas en el 'Banco de Ideas', muévelas a 'Guion' y arrástralas al calendario cuando estén listas. Nunca más pierdas una idea brillante en las notas del celular.",
    icon: <Lightbulb className="w-6 h-6 text-yellow-500" />,
    image: "/ideas_mockup.png", // Asegúrate de tener esta captura
    align: "left", // Imagen a la izquierda
    color: "bg-yellow-500",
  },
  {
    id: 2,
    badge: "Calendario estructurado",
    title: "Visualiza tu estrategia de publicación de un vistazo",
    description: "Deja de usar el calendario del celular. Visualiza tus tareas y contenido del mes en una sola pantalla. Identifica que tenes que hacer en cada momento.",
    icon: <BarChart3 className="w-6 h-6 text-brand-blue" />,
    image: "/analytics_mockup.png", // Asegúrate de tener esta captura
    align: "right", // Imagen a la derecha
    color: "bg-brand-blue",
  },
  {
    id: 3,
    badge: "Multi-Plataforma",
    title: "Diseñado para Video Vertical",
    description: "Loomtask habla tu idioma: Reels, Shorts y TikToks. Planifica hashtags, tiempos de publicación y estados específicos para cada red social.",
    icon: <Smartphone className="w-6 h-6 text-brand-purple" />,
    image: "/post_videos.png", // Reusamos la del calendario o toma una del Modal
    align: "left",
    color: "bg-brand-purple",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.7 }}
            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
              feature.align === "right" ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGEN (MOCKUP) */}
            <div className="flex-1 w-full relative group">
              {/* Elemento decorativo detrás de la imagen */}
              <div 
                className={`absolute inset-0 rounded-3xl opacity-20 blur-3xl transform scale-90 group-hover:scale-100 transition-transform duration-700 ${
                    index === 0 ? "bg-yellow-300" : index === 1 ? "bg-brand-blue" : "bg-brand-purple"
                }`} 
              />
              
              <div className="relative rounded-2xl border border-gray-100 bg-gray-50/50 p-2 shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                 {/* Barra de ventana falsa estilo navegador */}
                 <div className="h-6 bg-white border-b border-gray-100 flex items-center px-4 gap-1.5 mb-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
                 </div>
                 
                 {/* La imagen real */}
                 <div className="relative rounded-lg overflow-hidden bg-white">
                    <Image
                        src={feature.image}
                        alt={feature.title}
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover"
                    />
                 </div>
              </div>
            </div>

            {/* TEXTO */}
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                {/* Badge e Icono */}
                <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-lg bg-gray-50 border border-gray-100 shadow-sm`}>
                        {feature.icon}
                    </div>
                    <span className={`text-sm font-bold uppercase tracking-wider ${
                         index === 0 ? "text-yellow-600" : index === 1 ? "text-brand-blue" : "text-brand-purple"
                    }`}>
                        {feature.badge}
                    </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Lista de beneficios pequeña (Checklist) */}
              <ul className="space-y-3">
                {[1, 2, 3].map((_, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 min-w-[20px]">
                            <Check className="w-5 h-5 text-green-500" />
                        </div>
                        <span className="text-gray-600 font-medium text-sm">
                            {index === 0 && i === 0 && "Arrastra y suelta sin fricción"}
                            {index === 0 && i === 1 && "Estados personalizables"}
                            {index === 0 && i === 2 && "Vista de lista y tablero"}
                            
                            {index === 1 && i === 0 && "Cronograma del mes y la semana"}
                            {index === 1 && i === 1 && "Recordatorios inteligentes"}
                            {index === 1 && i === 2 && "Orden y claridad en el calendario"}

                            {index === 2 && i === 0 && "Subida de archivos multimedia"}
                            {index === 2 && i === 1 && "Generación de captions con IA"}
                            {index === 2 && i === 2 && "Vista previa del feed"}
                        </span>
                    </li>
                ))}
              </ul>
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default FeaturesSection;