import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import CTAButton from "@/components/atoms/CTAButton";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "Router Industrial 4G/5G",
      description: "Router de alta performance para conexiones industriales con doble SIM y backup automático.",
      image: "/api/placeholder/400/300",
      features: ["Doble SIM", "Backup automático", "Certificación IP67", "Gestión remota"],
      price: "Desde $450.000"
    },
    {
      id: 2,
      name: "Antena Sectorial Alta Ganancia",
      description: "Antena direccional de 18dBi para maximizar cobertura en zonas rurales y montañosas.",
      image: "/api/placeholder/400/300",
      features: ["18dBi ganancia", "Resistente a clima", "Montaje universal", "Frecuencias múltiples"],
      price: "Desde $180.000"
    },
    {
      id: 3,
      name: "Kit Repetidor de Señal",
      description: "Sistema completo para amplificar señal móvil en edificios y oficinas hasta 500m².",
      image: "/api/placeholder/400/300",
      features: ["Cobertura 500m²", "Auto-ajuste", "Múltiples operadores", "Fácil instalación"],
      price: "Desde $320.000"
    },
    {
      id: 4,
      name: "Módem USB 4G Empresarial",
      description: "Módem USB de alta velocidad para backup de internet y conectividad móvil empresarial.",
      image: "/api/placeholder/400/300",
      features: ["Velocidad 150Mbps", "Compatible dual-band", "Software gestión", "Antena externa"],
      price: "Desde $85.000"
    },
    {
      id: 5,
      name: "Gateway IoT Multiprotocolo",
      description: "Gateway industrial para conectar dispositivos IoT con múltiples protocolos de comunicación.",
      image: "/api/placeholder/400/300",
      features: ["LoRaWAN", "Zigbee", "WiFi", "Ethernet", "Gestión cloud"],
      price: "Desde $280.000"
    },
    {
      id: 6,
      name: "Amplificador de Señal Móvil",
      description: "Amplificador de última generación para mejorar señal 3G/4G/5G en interiores.",
      image: "/api/placeholder/400/300",
      features: ["Triple banda", "Ganancia 70dB", "Control automático", "Certificado SUBTEL"],
      price: "Desde $520.000"
    }
  ];

  return (
    <section id="productos" className="py-20 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Nuestros Productos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Equipos de conectividad de última generación para soluciones empresariales e industriales
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-elegant transition-all duration-300 overflow-hidden bg-card/50 backdrop-blur-sm border-border/20">
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground line-clamp-2">
                  {product.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Características:</h4>
                  <div className="flex flex-wrap gap-1">
                    {product.features.map((feature, index) => (
                      <span
                        key={index}
                        className="inline-block px-2 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border/20">
                  <div className="text-lg font-bold text-primary">
                    {product.price}
                  </div>
                  <CTAButton variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                    Cotizar
                  </CTAButton>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-card/30 backdrop-blur-sm border border-border/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              ¿Necesitas una solución personalizada?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nuestro equipo técnico puede diseñar e implementar la solución perfecta para tus necesidades específicas
            </p>
            <CTAButton variant="primary" size="lg">
              Solicitar Consultoría Técnica
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;