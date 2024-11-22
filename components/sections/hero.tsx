"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export function HeroSection() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hola, me interesa conocer más sobre AgroConecta"
    );
    window.open(`https://wa.me/+5491112345678?text=${message}`, "_blank");
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Conectamos el Talento del Campo Argentino
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/90 mb-8"
        >
          La forma más rápida de encontrar trabajo agrícola o contratar personal calificado
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="bg-[#4A8C3B] hover:bg-[#2E5B1E] text-white px-8 py-6 text-lg"
            onClick={handleWhatsAppClick}
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Conectar por WhatsApp
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full p-1">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-2 h-2 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}