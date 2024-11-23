"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export function HeroSection() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hola, me interesa conocer más sobre AgroConecta"
    );
    window.open(`https://wa.me/+5491136260707?text=${message}`, "_blank");
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1535379453347-1ffd615e2e08?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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
          Conectamos el talento con la tierra argentina
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
            <svg
              className="mr-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.106 1.514 5.84L0 24l6.293-1.66A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.29 17.29c-.26.73-1.52 1.34-2.1 1.42-.56.08-1.24.11-2-.13-.46-.15-1.06-.35-1.82-.68-3.2-1.39-5.28-4.82-5.45-5.05-.17-.23-1.3-1.73-1.3-3.3 0-1.56.82-2.33 1.12-2.65.3-.32.66-.4.88-.4.22 0 .44.01.63.01.2 0 .47-.07.73.56.26.63.87 2.17.95 2.33.08.16.13.35.03.56-.1.21-.15.34-.3.52-.15.18-.3.4-.43.54-.15.15-.3.31-.13.6.17.3.75 1.23 1.6 2 .98.87 1.8 1.14 2.1 1.27.3.13.47.11.65-.07.18-.18.75-.87.95-1.17.2-.3.4-.25.65-.15.26.1 1.64.77 1.92.91.28.14.47.21.54.33.07.12.07.75-.19 1.46z" />
            </svg>
            ¡Contactanos!
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