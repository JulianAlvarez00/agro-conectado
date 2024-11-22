import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#2E5B1E] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AgroConecta</h3>
            <p className="text-white/80">
              Conectando el talento del campo argentino desde 2024
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-2">
              <a
                href="mailto:info@agroconecta.com"
                className="flex items-center space-x-2 text-white/80 hover:text-white"
              >
                <Mail className="w-4 h-4" />
                <span>info@agroconecta.com</span>
              </a>
              <a
                href="tel:+541112345678"
                className="flex items-center space-x-2 text-white/80 hover:text-white"
              >
                <Phone className="w-4 h-4" />
                <span>+54 11 1234-5678</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/80 hover:text-white">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white">
                  Política de Cookies
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociales</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} AgroConecta. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}