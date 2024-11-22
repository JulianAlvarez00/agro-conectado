"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";

const formSchema = z.object({
  role: z.string().min(1, "Por favor seleccione un rol"),
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  phone: z.string().min(10, "Ingrese un número de teléfono válido"),
  location: z.string().min(2, "La ubicación es requerida"),
  specialty: z.string().min(2, "Por favor especifique su especialidad o necesidad"),
});

export function RegisterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: "",
      name: "",
      phone: "",
      location: "",
      specialty: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Here you would typically send the data to your backend
    alert("Gracias por registrarte! Te contactaremos pronto.");
    form.reset();
  }

  return (
    <section className="py-20 bg-[#F5F7F5]">
      <div className="container mx-auto px-4 max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-[#2E5B1E] mb-4">Pre-registro</h2>
          <p className="text-gray-600">
            Complete el formulario y nos pondremos en contacto con usted
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rol</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione su rol" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="worker">Trabajador</SelectItem>
                        <SelectItem value="employer">Empleador</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre Completo</FormLabel>
                    <FormControl>
                      <Input placeholder="Juan Pérez" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Teléfono</FormLabel>
                    <FormControl>
                      <Input placeholder="+54 9 11 1234-5678" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ubicación</FormLabel>
                    <FormControl>
                      <Input placeholder="Provincia, Localidad" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="specialty"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Especialidad/Necesidad</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ej: Operador de cosechadora, Busco personal para siembra"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-[#4A8C3B] hover:bg-[#2E5B1E] text-white"
              >
                Enviar Pre-registro
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}