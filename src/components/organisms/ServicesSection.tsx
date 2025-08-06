import ServiceCard from "@/components/molecules/ServiceCard";
import { 
  Home, 
  Building, 
  Smartphone, 
  Router, 
  Antenna,
  Settings
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Amplificadores para Hogares",
      description: "Soluciones residenciales que mejoran la señal celular en toda tu casa, eliminando zonas muertas y optimizando la conectividad.",
      icon: Home,
      features: [
        "Cobertura hasta 300m²",
        "Compatible con todas las operadoras",
        "Fácil instalación",
        "Garantía 2 años"
      ],
      ctaText: "Ver productos",
      ctaLink: "#productos-hogar"
    },
    {
      title: "Sistemas para Edificios",
      description: "Amplificadores empresariales de alta potencia para edificios comerciales, oficinas y complejos residenciales.",
      icon: Building,
      features: [
        "Cobertura hasta 10,000m²",
        "Sistemas multi-banda",
        "Instalación profesional",
        "Monitoreo remoto"
      ],
      ctaText: "Cotizar proyecto",
      ctaLink: "#contacto"
    },
    {
      title: "Amplificadores Móviles",
      description: "Soluciones portátiles para vehículos, caravanas y aplicaciones móviles que requieren conectividad constante.",
      icon: Smartphone,
      features: [
        "Alimentación 12V",
        "Resistente a vibraciones",
        "Instalación vehicular",
        "Antenas magnéticas"
      ],
      ctaText: "Ver modelos",
      ctaLink: "#productos-movil"
    },
    {
      title: "Antenas Especializadas",
      description: "Antenas de alta ganancia y accesorios profesionales para optimizar la recepción y transmisión de señales.",
      icon: Antenna,
      features: [
        "Ganancia hasta 15dBi",
        "Resistentes a la intemperie",
        "Múltiples frecuencias",
        "Cables de baja pérdida"
      ],
      ctaText: "Explorar antenas",
      ctaLink: "#antenas"
    },
    {
      title: "Equipos de Red",
      description: "Routers, switches y equipos de networking para crear infraestructuras de comunicación robustas.",
      icon: Router,
      features: [
        "WiFi 6 y superior",
        "Gestión centralizada",
        "Seguridad empresarial",
        "Escalabilidad modular"
      ],
      ctaText: "Ver catálogo",
      ctaLink: "#networking"
    },
    {
      title: "Instalación y Soporte",
      description: "Servicios profesionales de instalación, configuración y mantenimiento con soporte técnico especializado.",
      icon: Settings,
      features: [
        "Técnicos certificados",
        "Soporte 24/7",
        "Mantenimiento preventivo",
        "Garantía de servicio"
      ],
      ctaText: "Contactar soporte",
      ctaLink: "#contacto"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-sm font-medium text-primary">Nuestros Servicios</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Soluciones Completas de
            <span className="text-gradient block">Conectividad</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Desde amplificadores residenciales hasta sistemas empresariales complejos, 
            tenemos la solución perfecta para cada necesidad de conectividad.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-surface p-8 rounded-3xl border border-border/20">
            <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-muted-foreground mb-6">
              Desarrollamos soluciones personalizadas para proyectos específicos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 h-11 px-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-medium transition-smooth hover-lift"
              >
                Consulta Personalizada
              </a>
              <a 
                href="tel:+56988888929"
                className="inline-flex items-center justify-center gap-2 h-11 px-6 bg-background hover:bg-surface-variant text-foreground rounded-xl font-medium transition-smooth hover-lift border-2 border-border"
              >
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;