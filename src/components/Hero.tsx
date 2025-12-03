"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulación de llamada a API (luego conectaremos Resend aquí)
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Fondo con degradado radial sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-purple/10 rounded-full blur-[100px] opacity-30" />
        <div className="absolute top-20 right-0 w-[600px] h-[400px] bg-brand-cyan/10 rounded-full blur-[80px] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* 1. BADGE "BUILD IN PUBLIC" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm mb-8 hover:border-brand-blue/30 transition-colors cursor-default"
        >
          <span className="flex h-2 w-2 rounded-full bg-brand-purple">
            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-brand-purple opacity-75"></span>
          </span>
          <span className="text-sm font-medium text-gray-600">
            🚀 Construyendo en público v1.0
          </span>
        </motion.div>

        {/* 2. TITULO PRINCIPAL (H1) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 max-w-4xl"
        >
          El calendario de contenidos que{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] via-[#3B82F6] to-[#A855F7]">
            TikTok e Instagram merecen.
          </span>
        </motion.h1>

        {/* 3. SUBTITULO (H2) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed"
        >
          Deja de pelear con Notion y hojas de cálculo. Loomtask es el espacio
          visual diseñado exclusivamente para creadores de video vertical.
        </motion.p>

        {/* 4. FORMULARIO DE WAITLIST */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full max-w-md mb-12"
          id="waitlist-form"
        >
          {status === "success" ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center justify-center gap-3 text-green-800"
            >
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span className="font-medium">¡Estás dentro! Te avisaremos pronto.</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-5 py-3.5 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#2DD4BF] via-[#3B82F6] to-[#A855F7] text-white font-bold shadow-lg shadow-brand-blue/25 hover:shadow-brand-blue/40 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {status === "loading" ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Entrar a la Waitlist <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
          <p className="mt-4 text-sm text-gray-400">
            Únete a +400 creadores esperando el lanzamiento.
          </p>
        </motion.div>

        {/* 5. IMAGEN DEL PRODUCTO (MOCKUP) */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          className="relative w-full max-w-5xl mx-auto perspective-1000"
        >
          <div className="relative rounded-2xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-3xl lg:p-4">
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-white border border-gray-200">
              {/* Asegúrate de renombrar tu captura a dashboard_mockup.png */}
              <Image
                src="/dashboard_mockup.png"
                alt="Loomtask Dashboard Interface"
                width={1920}
                height={1080}
                className="w-full h-auto object-cover"
                priority
              />
              
              {/* Efecto de brillo sobre la imagen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none" />
            </div>
          </div>

          {/* Elementos flotantes decorativos (opcionales) */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 hidden lg:block"
          >
             <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                   <span className="text-white text-xs font-bold">TikTok</span>
                </div>
                <div>
                   <p className="text-sm font-bold text-gray-800">Video Viral 🚀</p>
                   <p className="text-xs text-green-500">+1.2M Vistas</p>
                </div>
             </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;