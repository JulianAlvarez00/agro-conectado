"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Tractor, Sun, Wheat } from "lucide-react";

const jobs = [
  {
    icon: Tractor,
    title: "Operador de Maquinaria",
    description: "Manejo de tractores y equipos agrícolas modernos",
  },
  {
    icon: Sun,
    title: "Trabajador de Campo",
    description: "Tareas generales de siembra y mantenimiento",
  },
  {
    icon: Wheat,
    title: "Especialista en Cosecha",
    description: "Coordinación y ejecución de procesos de cosecha",
  },
];

const benefits = [
  "Acceso a ofertas laborales verificadas",
  "Conexión directa con empleadores",
  "Oportunidades de trabajo todo el año",
  "Capacitación y desarrollo profesional",
];

export function WorkerSection() {
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
            Para Trabajadores del Campo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encuentra oportunidades laborales que se ajusten a tu experiencia y habilidades
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {jobs.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <job.icon className="w-12 h-12 text-[#4A8C3B] mb-4" />
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <p className="text-gray-600">{job.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="bg-[#F5F7F5] rounded-lg p-8">
          <h3 className="text-2xl font-bold text-[#2E5B1E] mb-6 text-center">
            Beneficios para Trabajadores
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle2 className="w-6 h-6 text-[#4A8C3B]" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}