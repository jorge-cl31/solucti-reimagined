import CTAButton from "@/components/atoms/CTAButton";
import { ArrowRight, Play, Signal, Shield, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const stats = [
    { icon: Signal, value: "15+", label: "Años de experiencia" },
    { icon: Shield, value: "500+", label: "Proyectos exitosos" },
    { icon: Zap, value: "99%", label: "Satisfacción del cliente" }
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Tecnología de amplificación de señal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-primary-variant/20 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Main content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface/50 backdrop-blur-sm rounded-full border border-border/20">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                Especialistas en Conectividad
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                Amplifica tu
                <span className="text-gradient block">Conectividad</span>
                al Máximo
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Soluciones profesionales de amplificación de señal celular para hogares, 
                oficinas y edificios. Tecnología Wilson Pro y sistemas avanzados de conectividad.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <CTAButton 
                variant="primary" 
                size="lg" 
                icon={ArrowRight}
                href="#servicios"
              >
                Ver Soluciones
              </CTAButton>
              <CTAButton 
                variant="outline" 
                size="lg" 
                icon={Play}
                href="#contacto"
              >
                Solicitar Demo
              </CTAButton>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/20">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center animate-scale-in"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <stat.icon className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Visual element */}
          <div className="relative lg:block hidden">
            <div className="relative">
              {/* Main device illustration */}
              <div className="relative z-10 bg-gradient-surface p-8 rounded-3xl border border-border/20 shadow-xl animate-float">
                <div className="space-y-4">
                  <div className="w-full h-4 bg-primary/20 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-primary rounded-full w-4/5 animate-pulse"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="aspect-square bg-surface-variant rounded-xl flex items-center justify-center">
                        <Signal className="w-8 h-8 text-primary" />
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">Cobertura Optimizada</div>
                    <div className="text-2xl font-bold text-gradient">100%</div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-accent rounded-2xl shadow-glow opacity-80 animate-pulse-primary" />
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-primary rounded-xl shadow-glow opacity-60" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;