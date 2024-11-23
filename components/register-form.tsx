"use client";

import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/src/firebase/config.js';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useAuth } from "@/src/hooks/useAuth";
import { useState, memo } from "react";
import { Button } from "@/components/ui/button";
import { toast } from 'sonner';
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
import { ChevronDown } from "lucide-react";

const formSchema = z.object({
  role: z.string().min(1, "Por favor seleccione un rol"),
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres").max(100),
  email: z.string().email("Ingrese un email válido").max(100),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres").max(50),
  phone: z.string().min(8, "Ingrese un número de teléfono válido").max(20),
  location: z.string().min(2, "La ubicación es requerida").max(100),
  specialty: z.string().min(2, "Por favor especifique su especialidad o necesidad").max(200),
  comments: z.string().max(500).optional(),
});

// Memoize InputTitle para evitar re-renders innecesarios
const InputTitle = memo(({ title }: { title: string }) => (
  <h3 className="text-sm font-medium text-gray-700 mb-2">{title}</h3>
));
InputTitle.displayName = 'InputTitle';

// Memoize InputField component
const InputField = memo(({ name, label, placeholder, type = "text", register, error }: { 
  name: string, 
  label: string, 
  placeholder: string, 
  type?: string,
  register: any,
  error?: string
}) => (
  <div className="space-y-2">
    <InputTitle title={label} />
    <FormItem>
      <FormControl>
        <Input 
          {...register(name)}
          type={type} 
          placeholder={placeholder} 
          className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus-visible:ring-blue-500 focus-visible:ring-1 focus-visible:border-blue-500 transition-colors" 
          autoComplete={type === "password" ? "new-password" : "off"}
          spellCheck={false}
        />
      </FormControl>
      {error && <FormMessage className="text-xs mt-1 text-red-500">{error}</FormMessage>}
    </FormItem>
  </div>
));
InputField.displayName = 'InputField';

// Memoize TextAreaField component
const TextAreaField = memo(({ name, label, placeholder, register, error }: { 
  name: string, 
  label: string, 
  placeholder: string,
  register: any,
  error?: string
}) => (
  <div className="space-y-2">
    <InputTitle title={label} />
    <FormItem>
      <FormControl>
        <textarea 
          {...register(name)}
          className="flex min-h-[100px] w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors resize-y"
          placeholder={placeholder} 
          maxLength={500}
        />
      </FormControl>
      {error && <FormMessage className="text-xs mt-1 text-red-500">{error}</FormMessage>}
    </FormItem>
  </div>
));
TextAreaField.displayName = 'TextAreaField';

export function RegisterForm() {
  const { signup } = useAuth() as { signup: (email: string, password: string) => Promise<any> };
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: "",
      name: "",
      email: "",
      password: "",
      phone: "",
      location: "",
      specialty: "",
      comments: "",
    },
    mode: "onBlur", // Cambiado de "onChange" a "onBlur"
  });

  const { register, formState: { errors } } = form;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (loading) return;
    
    try {
      setError('');
      setLoading(true);
      
      const userCredential = await signup(values.email, values.password);
      
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        role: values.role,
        name: values.name,
        phone: values.phone,
        location: values.location,
        specialty: values.specialty,
        email: values.email,
        comments: values.comments,
        createdAt: new Date().toISOString()
      });
      
      toast.success('¡Registro exitoso!', {
        description: 'Tu cuenta ha sido creada correctamente.'
      });
      
      form.reset();
    } catch (error: any) {
      let errorMessage = 'Error al crear la cuenta. Por favor, intente nuevamente.';
      
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'Este email ya está registrado';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Email inválido';
      } else if (error.code === 'auth/weak-password') {
        errorMessage = 'La contraseña es demasiado débil';
      }
      
      toast.error('Error', {
        description: errorMessage
      });
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2">¿Consultas?</h2>
          <p className="text-gray-600 text-base">
            Envianos un mensaje y te responderemos a la brevedad.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white shadow-sm border border-gray-100 rounded-xl p-6 md:p-8"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <InputTitle title="Seleccione su rol" />
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger 
                              className="bg-gray-50 border-gray-200 text-gray-900 focus:ring-blue-500 focus:ring-1 focus:border-blue-500"
                            >
                              <SelectValue 
                                placeholder="Seleccione su rol" 
                                className="text-gray-500"
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="worker" className="cursor-pointer hover:bg-gray-50">
                              Trabajador
                            </SelectItem>
                            <SelectItem value="employer" className="cursor-pointer hover:bg-gray-50">
                              Empleador
                            </SelectItem>
                            <SelectItem value="contractor" className="cursor-pointer hover:bg-gray-50">
                              Contratista
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-xs mt-1" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField 
                    name="name" 
                    label="Nombre Completo" 
                    placeholder="Martin Fierro" 
                    register={register}
                    error={errors.name?.message}
                  />
                  <InputField 
                    name="phone" 
                    label="Teléfono" 
                    placeholder="+54 9 11 1234-5678" 
                    register={register}
                    error={errors.phone?.message}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField 
                    name="email" 
                    label="Email" 
                    placeholder="ejemplo@email.com" 
                    type="email"
                    register={register}
                    error={errors.email?.message}
                  />
                  <InputField 
                    name="password" 
                    label="Contraseña" 
                    placeholder="********" 
                    type="password"
                    register={register}
                    error={errors.password?.message}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField 
                    name="location" 
                    label="Ubicación" 
                    placeholder="Provincia, Localidad"
                    register={register}
                    error={errors.location?.message}
                  />
                  <InputField 
                    name="specialty" 
                    label="Especialidad/Necesidad" 
                    placeholder="Ej: Operador de cosechadora"
                    register={register}
                    error={errors.specialty?.message}
                  />
                </div>

                <TextAreaField 
                  name="comments" 
                  label="Comentarios o Preguntas" 
                  placeholder="Escribe aquí tus comentarios o preguntas adicionales..."
                  register={register}
                  error={errors.comments?.message}
                />
              </div>

              <Button
                type="submit"
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-spin">⏳</span> 
                    Registrando...
                  </span>
                ) : (
                  'Enviar'
                )}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}