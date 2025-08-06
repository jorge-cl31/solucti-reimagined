import FeatureHighlight from "@/components/molecules/FeatureHighlight";
import { 
  Zap, 
  Shield, 
  Clock, 
  Award, 
  TrendingUp, 
  Headphones,
  CheckCircle2,
  Star
} from "lucide-react";
import servicesIllustration from "@/assets/services-illustration.jpg";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Tecnología Certificada",
      description: "Equipos Wilson Pro y sistemas certificados que cumplen con todas las normativas internacionales de telecomunicaciones.",
      icon: Award,
      metric: { value: "100%", label: "Certificado" }
    },
    {
      title: "Instalación Rápida",
      description: "Nuestros técnicos certificados realizan instalaciones profesionales en tiempo récord sin interrumpir tus actividades.",
      icon: Clock,
      metric: { value: "24h", label: "Instalación" }
    },
    {
      title: "Cobertura Garantizada",
      description: "Garantizamos la mejora significativa de la señal o devolvemos tu dinero. Compromiso total con resultados.",
      icon: CheckCircle2,
      metric: { value: "99%", label: "Efectividad" }
    },
    {
      title: "Soporte Técnico",
      description: "Equipo de soporte especializado disponible 24/7 para resolver cualquier consulta o problema técnico.",
      icon: Headphones,
      metric: { value: "24/7", label: "Disponibilidad" }
    }
  ];

  const features = [
    {
      title: "Mejora Inmediata",
      description: "Incremento notable de la señal desde el primer día de instalación",
      icon: TrendingUp
    },
    {
      title: "Tecnología Segura",
      description: "Sistemas que no interfieren con otros dispositivos electrónicos",
      icon: Shield
    },
    {
      title: "Eficiencia Energética",
      description: "Bajo consumo eléctrico con máximo rendimiento de amplificación",
      icon: Zap
    },
    {
      title: "Calidad Premium",
      description: "Productos de la más alta calidad con garantía extendida",
      icon: Star
    }
  ];

  return (
    <section id="beneficios" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
            <span className="text-sm font-medium text-accent">¿Por qué Solucti?</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            La Diferencia que nos
            <span className="text-gradient block">Distingue</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Más de 15 años de experiencia nos respaldan como líderes en soluciones 
            de conectividad en Chile y Latinoamérica.
          </p>
        </div>

        {/* Main Benefits Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Benefits */}
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <FeatureHighlight 
                  {...benefit} 
                  variant="horizontal"
                />
              </div>
            ))}
          </div>

          {/* Right - Illustration */}
          <div className="relative animate-fade-in">
            <div className="relative">
              <img 
                src={servicesIllustration}
                alt="Ilustración de servicios tecnológicos"
                className="w-full h-auto rounded-3xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent rounded-3xl" />
              
              {/* Floating stats */}
              <div className="absolute top-6 right-6 bg-card-elevated/90 backdrop-blur-sm p-4 rounded-2xl border border-border/20 animate-float">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">500+</div>
                  <div className="text-sm text-muted-foreground">Proyectos</div>
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 bg-card-elevated/90 backdrop-blur-sm p-4 rounded-2xl border border-border/20 animate-float" style={{ animationDelay: "1s" }}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">99%</div>
                  <div className="text-sm text-muted-foreground">Satisfacción</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <FeatureHighlight 
                {...feature} 
                variant="minimal"
              />
            </div>
          ))}
        </div>

        {/* Bottom testimonial */}
        <div className="mt-20 text-center animate-fade-in">
          <div className="bg-gradient-surface p-8 lg:p-12 rounded-3xl border border-border/20 max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-primary fill-current" />
                ))}
              </div>
            </div>
            <blockquote className="text-xl lg:text-2xl font-medium text-foreground mb-6 leading-relaxed">
              "La instalación del amplificador Wilson Pro en nuestro edificio corporativo 
              mejoró la conectividad en un 300%. El equipo de Solucti es altamente profesional."
            </blockquote>
            <div className="flex justify-center items-center gap-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-semibold">JM</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Juan Morales</div>
                <div className="text-sm text-muted-foreground">Gerente IT, Empresas ABC</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;