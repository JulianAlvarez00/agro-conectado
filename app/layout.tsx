import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AgroConecta | Conectamos el Talento del Campo Argentino",
  description: "La forma más rápida de encontrar trabajo agrícola o contratar personal calificado en Argentina. Conectamos trabajadores y empleadores del sector agrícola.",
  keywords: "trabajo agrícola, empleo rural, agricultura argentina, cosecha, personal agrícola",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head />
      <body className={cn(inter.className)}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}