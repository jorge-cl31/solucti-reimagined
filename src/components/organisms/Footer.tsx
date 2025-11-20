import Logo from "@/components/atoms/Logo";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Servicios", href: "#beneficios" },
    { name: "Clientes", href: "#clientes" },
    { name: "Contacto", href: "#contacto" }
  ];

  const services = [
    { name: "Amplificadores Hogar", href: "#hogar" },
    { name: "Sistemas Edificios", href: "#edificios" },
    { name: "Amplificadores Móviles", href: "#moviles" },
    { name: "Antenas Especializadas", href: "#antenas" },
    { name: "Instalación y Soporte", href: "#soporte" }
  ];

  const products = [
    { name: "Wilson Pro", href: "#wilson-pro" },
    { name: "WeBoost", href: "#weboost" },
    { name: "STI Sistemas", href: "#sti" },
    { name: "Antenas Wilson", href: "#antenas-wilson" },
    { name: "Accesorios", href: "#accesorios" }
  ];

  const socialMedia = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-surface border-t border-border/20">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2 space-y-6">
            <Logo variant="light" />
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Líderes en amplificación de señal celular en Chile. Más de 15 años 
              conectando personas y empresas con tecnología de vanguardia.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">+56 9 8188 8929</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">info@solucti.cl</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Santiago, Chile</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Lun - Vie, 9:00 - 18:00</span>
              </div>
            </div>

            {/* Social media */}
            
          </div>

          {/* Navigation links */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">
              Navegación
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">
              Servicios
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href}
                    className="text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">
              Productos
            </h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.name}>
                  <a 
                    href={product.href}
                    className="text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/20 bg-surface-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
              <span>©Solucti. Todos los derechos reservados.</span>
              
            </div>
            
            {/* Scroll to top button */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-primary hover:bg-primary/80 rounded-lg flex items-center justify-center transition-smooth hover-lift"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-5 h-5 text-primary-foreground" />
            </button>
          </div>
        </div>
      </div>

      {/* Certifications and badges */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-card-elevated border border-border/20 rounded-2xl px-6 py-3 shadow-lg">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-primary-foreground">W</span>
              </div>
              <span className="text-muted-foreground">Wilson Dealer Autorizado</span>
            </div>
            <div className="w-px h-4 bg-border/20" />
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-accent rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-accent-foreground">C</span>
              </div>
              <span className="text-muted-foreground">Certificación ISO 9001</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;