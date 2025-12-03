"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileSpreadsheet, Layers, AlertOctagon, X } from "lucide-react";

const problems = [
  {
    icon: <Layers className="w-8 h-8 text-orange-500" />,
    bg: "bg-orange-50",
    title: "Notion es demasiado complejo",
    description:
      "Pasas más tiempo configurando bases de datos, relaciones y plantillas 'aesthetic' que grabando tus videos. Necesitas rapidez, no un título de ingeniería.",
  },
  {
    icon: <FileSpreadsheet className="w-8 h-8 text-green-600" />,
    bg: "bg-green-50",
    title: "Excel mata tu creatividad",
    description:
      "Las filas y columnas infinitas son para contadores, no para creadores. No puedes visualizar tu feed, ni arrastrar ideas, ni sentir el 'flow' de tu contenido.",
  },
  {
    icon: <AlertOctagon className="w-8 h-8 text-red-500" />,
    bg: "bg-red-50",
    title: "El caos mental te frena",
    description:
      "Ideas en las notas del iPhone, guiones en WhatsApp y fechas en tu cabeza. El resultado: se te olvida postear y el algoritmo te castiga.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const ProblemSection = () => {
  return (
    <section className="py-24 bg-[#F9FAFB] relative overflow-hidden">
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER DE LA SECCIÓN */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Crear contenido ya es difícil. <br />
            <span className="text-gray-400">Tu herramienta no debería serlo más.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            La mayoría de las herramientas actuales fueron diseñadas para gestionar proyectos de software, no para viralizar videos en TikTok.
          </motion.p>
        </div>

        {/* GRID DE PROBLEMAS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {problems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`p-3 rounded-xl ${item.bg} group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                {/* Icono de "X" sutil para denotar que esto es "malo" */}
                <div className="text-gray-300 group-hover:text-red-400 transition-colors">
                    <X className="w-5 h-5" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              
              <p className="text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ProblemSection;