import CTAButton from "@/components/atoms/CTAButton";
import { ArrowRight, Play, Signal, Shield, Zap, Wifi, Smartphone, Radio } from "lucide-react";

const HeroSection = () => {
  const stats = [
    { icon: Signal, value: "15+", label: "Años de experiencia" },
    { icon: Shield, value: "500+", label: "Proyectos exitosos" },
    { icon: Zap, value: "99%", label: "Satisfacción del cliente" }
  ];

  const signalMetrics = [
    { icon: Wifi, label: "WiFi", strength: 85, color: "text-primary" },
    { icon: Smartphone, label: "4G/5G", strength: 92, color: "text-success" },
    { icon: Radio, label: "Radio", strength: 78, color: "text-accent" },
    { icon: Signal, label: "General", strength: 88, color: "text-primary" }
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23218fff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
        }} />
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
                href="#/servicios" // Cambia /servicios por #/servicios para HashRouter
                className="rounded-full"
              >
                Ver Soluciones
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

          {/* Right column - Signal Monitor Dashboard */}
          <div className="relative lg:block hidden">
            <div className="relative">
              {/* Panel de Monitoreo de Señal */}
              <div className="relative z-10 bg-card p-6 rounded-3xl border border-border/20 shadow-lg animate-float">
                <div className="space-y-6">
                  {/* Header del panel */}
                  <div className="text-center border-b border-border/10 pb-4">
                    <h3 className="text-lg font-semibold text-foreground">Optimizamos tu Cobertura</h3>
                    <p className="text-sm text-muted-foreground">Cotiza nuestros servicios</p>
                  </div>

                  {/* Métricas de señal */}
                  <div className="space-y-4">
                    {signalMetrics.map((metric, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center">
                          <metric.icon className={`w-5 h-5 ${metric.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-foreground">{metric.label}</span>
                            <span className="text-xs text-muted-foreground">{metric.strength}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className="bg-primary rounded-full h-2 transition-all duration-1000" 
                              style={{ width: `${metric.strength}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Status general */}
                  <div className="bg-success/10 border border-success/20 rounded-xl p-4 text-center">
                    <div className="text-success text-2xl font-bold">Contáctanos</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Mejoramos tu cobertura 300%
                    </div>
                  </div>
                </div>
              </div>

              {/* Indicadores flotantes */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 backdrop-blur-sm rounded-2xl border border-primary/20 flex items-center justify-center animate-pulse-primary">
                <Signal className="w-8 h-8 text-primary" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-success/10 backdrop-blur-sm rounded-xl border border-success/20 flex items-center justify-center" style={{ animationDelay: "1s" }}>
                <Zap className="w-6 h-6 text-success" />
              </div>
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
