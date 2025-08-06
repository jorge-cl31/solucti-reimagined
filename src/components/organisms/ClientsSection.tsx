import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Building2, Home, Truck, Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const ClientsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "María González",
      role: "Directora de Operaciones",
      company: "Hotel Plaza Centro",
      category: "Hotelería",
      icon: Building2,
      content: "Después de instalar los amplificadores Wilson Pro, nuestros huéspedes finalmente tienen señal perfecta en todas las habitaciones. La satisfacción del cliente aumentó significativamente.",
      rating: 5,
      project: "Amplificación completa para hotel de 8 pisos",
      result: "Mejora del 250% en la señal celular"
    },
    {
      name: "Roberto Silva",
      role: "Propietario",
      company: "Residencia Familiar",
      category: "Residencial",
      icon: Home,
      content: "Vivimos en una zona con poca cobertura y el amplificador de Solucti transformó completamente nuestra conectividad. Ahora trabajamos desde casa sin problemas.",
      rating: 5,
      project: "Sistema residencial para casa de 250m²",
      result: "Eliminación total de zonas muertas"
    },
    {
      name: "Carlos Mendoza",
      role: "Gerente de Flota",
      company: "Transportes del Sur",
      category: "Transporte",
      icon: Truck,
      content: "Los amplificadores móviles mantienen a nuestros conductores conectados en todas las rutas. La comunicación con la central mejoró drásticamente.",
      rating: 5,
      project: "Flota de 50 vehículos equipados",
      result: "Comunicación constante en 98% del territorio"
    },
    {
      name: "Ana Ruiz",
      role: "Administradora",
      company: "Edificio Corporativo Torre Norte",
      category: "Corporativo",
      icon: Building2,
      content: "La instalación fue impecable y los resultados inmediatos. Nuestros empleados ya no tienen problemas de conectividad en ningún piso del edificio.",
      rating: 5,
      project: "Sistema DAS para edificio de 20 pisos",
      result: "Cobertura 100% en 15,000m²"
    }
  ];

  const clients = [
    { name: "Empresa A", logo: "🏢" },
    { name: "Empresa B", logo: "🏭" },
    { name: "Empresa C", logo: "🏨" },
    { name: "Empresa D", logo: "🏪" },
    { name: "Empresa E", logo: "🏥" },
    { name: "Empresa F", logo: "🏢" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="clientes" className="py-20 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full mb-6">
            <span className="text-sm font-medium text-success">Casos de Éxito</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Clientes que Confían en
            <span className="text-gradient block">Nuestras Soluciones</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Más de 500 proyectos exitosos nos respaldan como el líder en 
            amplificación de señal en Chile.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="mx-4 p-8 lg:p-12 bg-card-elevated border-border/20">
                    <div className="grid lg:grid-cols-3 gap-8 items-center">
                      {/* Quote content */}
                      <div className="lg:col-span-2 space-y-6">
                        <div className="flex justify-center lg:justify-start">
                          <Quote className="w-12 h-12 text-primary/20" />
                        </div>
                        
                        <blockquote className="text-xl lg:text-2xl font-medium text-foreground leading-relaxed">
                          "{testimonial.content}"
                        </blockquote>

                        <div className="flex justify-center lg:justify-start">
                          <div className="flex gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 text-primary fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Client info */}
                      <div className="text-center lg:text-left space-y-6">
                        <div className="flex justify-center lg:justify-start">
                          <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                            <testimonial.icon className="w-8 h-8 text-primary-foreground" />
                          </div>
                        </div>

                        <div>
                          <h4 className="font-display font-semibold text-lg text-foreground">
                            {testimonial.name}
                          </h4>
                          <p className="text-muted-foreground">{testimonial.role}</p>
                          <p className="text-primary font-medium">{testimonial.company}</p>
                        </div>

                        <div className="space-y-3">
                          <div className="p-3 bg-surface/50 rounded-xl">
                            <div className="text-sm text-muted-foreground">Proyecto:</div>
                            <div className="font-medium text-foreground">{testimonial.project}</div>
                          </div>
                          <div className="p-3 bg-primary/10 rounded-xl">
                            <div className="text-sm text-primary">Resultado:</div>
                            <div className="font-medium text-foreground">{testimonial.result}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card-elevated border border-border/20 rounded-full flex items-center justify-center hover:bg-surface transition-smooth"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card-elevated border border-border/20 rounded-full flex items-center justify-center hover:bg-surface transition-smooth"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-smooth",
                  currentSlide === index ? "bg-primary" : "bg-muted"
                )}
              />
            ))}
          </div>
        </div>

        {/* Client logos */}
        <div className="animate-fade-in">
          <h3 className="text-center text-xl font-display font-semibold text-foreground mb-8">
            Empresas que confían en nosotros
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="flex items-center justify-center p-6 bg-card-elevated rounded-2xl border border-border/20 hover:border-primary/20 transition-smooth hover-lift"
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">{client.logo}</div>
                  <div className="text-sm text-muted-foreground">{client.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-surface p-8 rounded-3xl border border-border/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
              ¿Quieres ser nuestro próximo caso de éxito?
            </h3>
            <p className="text-muted-foreground mb-6">
              Únete a cientos de clientes satisfechos que han mejorado su conectividad
            </p>
            <a 
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 h-11 px-6 bg-gradient-primary hover:opacity-90 text-primary-foreground rounded-xl font-medium transition-smooth hover-lift"
            >
              Solicitar Cotización
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;