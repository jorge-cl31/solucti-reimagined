import ContactForm from "@/components/molecules/ContactForm";
import { Card } from "@/components/ui/card";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Send
} from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Ubicación",
      details: ["Santiago, Chile", "Cobertura Nacional"],
      link: "#"
    },
    {
      icon: Phone,
      title: "Teléfono",
      details: ["+56 9 8188 8929", "Lunes a Viernes"],
      link: "tel:+56981888929"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@solucti.cl", "Respuesta en 24h"],
      link: "mailto:info@solucti.cl"
    },
    {
      icon: Clock,
      title: "Horarios",
      details: ["9:00 - 18:00", "Lun - Vie"],
      link: "#"
    }
  ];

  const quickActions = [
    {
      title: "Consulta Técnica",
      description: "Habla con nuestros expertos",
      icon: MessageCircle,
      action: "Chatear ahora",
      link: "#",
      variant: "primary" as const
    },
    {
      title: "Solicitar Cotización",
      description: "Obtén un presupuesto detallado",
      icon: Send,
      action: "Cotizar proyecto",
      link: "#contacto",
      variant: "accent" as const
    }
  ];

  return (
    <section id="contacto" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-sm font-medium text-primary">Hablemos</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            ¿Listo para Mejorar tu
            <span className="text-gradient block">Conectividad?</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Nuestros expertos están listos para ayudarte a encontrar la solución 
            perfecta para tu proyecto de conectividad.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <ContactForm />
          </div>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            {/* Contact Information */}
            <Card className="p-6 bg-card-elevated border-border/20">
              <h3 className="text-xl font-display font-semibold text-foreground mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-surface/50 transition-smooth group"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{info.title}</div>
                      {info.details.map((detail, idx) => (
                        <div key={idx} className="text-sm text-muted-foreground">
                          {detail}
                        </div>
                      ))}
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <div className="space-y-4">
              {quickActions.map((action, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-card-elevated border-border/20 hover:border-primary/20 transition-smooth hover-lift group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      action.variant === 'primary' 
                        ? 'bg-gradient-primary text-primary-foreground' 
                        : 'bg-gradient-accent text-accent-foreground'
                    }`}>
                      <action.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-display font-semibold text-foreground mb-1">
                        {action.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {action.description}
                      </p>
                      <a 
                        href={action.link}
                        className={`inline-flex items-center gap-2 text-sm font-medium transition-smooth ${
                          action.variant === 'primary' 
                            ? 'text-primary hover:text-primary/80' 
                            : 'text-accent hover:text-accent/80'
                        }`}
                      >
                        {action.action}
                        <action.icon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Emergency Contact */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <div className="text-center">
                <h4 className="font-display font-semibold text-foreground mb-2">
                  ¿Necesitas Soporte Urgente?
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Para emergencias técnicas, contáctanos directamente
                </p>
                <a 
                  href="tel:+56981888929"
                  className="inline-flex items-center justify-center gap-2 w-full h-11 bg-gradient-primary hover:opacity-90 text-primary-foreground rounded-xl font-medium transition-smooth hover-lift"
                >
                  <Phone className="w-4 h-4" />
                  Llamar Ahora
                </a>
              </div>
            </Card>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-16 animate-fade-in">
          <Card className="p-8 bg-card-elevated border-border/20 text-center">
            <div className="max-w-2xl mx-auto">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                Servicio en Todo Chile
              </h3>
              <p className="text-muted-foreground mb-6">
                Realizamos instalaciones desde Arica hasta Punta Arenas. 
                Contamos con técnicos certificados en las principales ciudades del país.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="p-3 bg-surface/50 rounded-lg">
                  <div className="font-medium text-foreground">Santiago</div>
                  <div className="text-muted-foreground">Base principal</div>
                </div>
                <div className="p-3 bg-surface/50 rounded-lg">
                  <div className="font-medium text-foreground">Valparaíso</div>
                  <div className="text-muted-foreground">Oficina regional</div>
                </div>
                <div className="p-3 bg-surface/50 rounded-lg">
                  <div className="font-medium text-foreground">Concepción</div>
                  <div className="text-muted-foreground">Centro sur</div>
                </div>
                <div className="p-3 bg-surface/50 rounded-lg">
                  <div className="font-medium text-foreground">La Serena</div>
                  <div className="text-muted-foreground">Centro norte</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;