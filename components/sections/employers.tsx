"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Shield, Users, Clock, CheckCircle2 } from "lucide-react";

const advantages = [
  {
    icon: Shield,
    title: "Personal Verificado",
    description: "Trabajadores con referencias y experiencia comprobada",
  },
  {
    icon: Users,
    title: "Amplia Base de Talentos",
    description: "Acceso a profesionales especializados en diferentes áreas",
  },
  {
    icon: Clock,
    title: "Proceso Ágil",
    description: "Contratación rápida y sin complicaciones",
  },
];

const profiles = [
  "Operadores de maquinaria agrícola",
  "Capataces y supervisores",
  "Trabajadores especializados en cosecha",
  "Personal de mantenimiento",
];

export function EmployerSection() {
  return (
    <section className="py-20 bg-[#F5F7F5]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E5B1E] mb-4">
            Para Empleadores
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encuentre el personal calificado que su operación agrícola necesita
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <advantage.icon className="w-12 h-12 text-[#4A8C3B] mb-4" />
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8">
          <h3 className="text-2xl font-bold text-[#2E5B1E] mb-6 text-center">
            Perfiles Disponibles
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {profiles.map((profile, index) => (
              <motion.div
                key={profile}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle2 className="w-6 h-6 text-[#4A8C3B]" />
                <span className="text-gray-700">{profile}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}