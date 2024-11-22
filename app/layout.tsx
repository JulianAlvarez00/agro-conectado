import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AgroConecta | Conectamos el Talento del Campo Argentino",
  description: "La forma más rápida de encontrar trabajo agrícola o contratar personal calificado en Argentina. Conectamos trabajadores y empleadores del sector agrícola.",
  keywords: "trabajo agrícola, empleo rural, agricultura argentina, cosecha, personal agrícola",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2E5B1E" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}