"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    type: "worker",
    name: "Juan Pérez",
    role: "Operador de Maquinaria",
    content: "Gracias a AgroConecta encontré trabajo estable en menos de una semana. El proceso fue muy simple y transparente.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
  {
    type: "employer",
    name: "María González",
    role: "Productora Agrícola",
    content: "La plataforma nos permitió encontrar personal calificado rápidamente durante la temporada de cosecha.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    type: "worker",
    name: "Carlos Rodríguez",
    role: "Especialista en Cosecha",
    content: "La variedad de oportunidades laborales me permite trabajar todo el año en diferentes regiones.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    type: "employer",
    name: "Laura Martínez",
    role: "Gerente de Campo",
    content: "El proceso de verificación nos da tranquilidad al momento de contratar nuevo personal.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E5B1E] mb-4">
            Historias de Éxito
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre cómo AgroConecta está transformando el trabajo agrícola en Argentina
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <Quote className="w-8 h-8 text-[#4A8C3B] mb-2" />
                    <p className="text-gray-600 mb-4">{testimonial.content}</p>
                    <div>
                      <p className="font-semibold text-[#2E5B1E]">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}