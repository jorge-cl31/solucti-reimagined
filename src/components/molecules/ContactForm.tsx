import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import CTAButton from "@/components/atoms/CTAButton";
import { Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Te contactaremos pronto para ayudarte con tu proyecto.",
    });
  };

  if (isSubmitted) {
    return (
      <Card className={cn(
        "p-8 bg-card-elevated border-border/20 text-center",
        className
      )}>
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-success" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-display font-semibold text-foreground mb-2">
              ¡Gracias por contactarnos!
            </h3>
            <p className="text-muted-foreground">
              Hemos recibido tu mensaje y te responderemos en las próximas 24 horas.
            </p>
          </div>
          <CTAButton 
            variant="outline" 
            onClick={() => setIsSubmitted(false)}
          >
            Enviar otro mensaje
          </CTAButton>
        </div>
      </Card>
    );
  }

  return (
    <Card className={cn(
      "p-8 bg-card-elevated border-border/20",
      className
    )}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-display font-semibold text-foreground">
            Solicita una Consulta
          </h3>
          <p className="text-muted-foreground">
            Cuéntanos sobre tu proyecto y te ayudaremos a encontrar la mejor solución.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground font-medium">
              Nombre completo
            </Label>
            <Input
              id="name"
              placeholder="Tu nombre"
              required
              className="bg-surface border-border/40 focus:border-primary"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground font-medium">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              required
              className="bg-surface border-border/40 focus:border-primary"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-foreground font-medium">
            Teléfono
          </Label>
          <Input
            id="phone"
            placeholder="+56 9 xxxx xxxx"
            className="bg-surface border-border/40 focus:border-primary"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-foreground font-medium">
            Describe tu proyecto
          </Label>
          <Textarea
            id="message"
            placeholder="Cuéntanos qué tipo de solución de conectividad necesitas..."
            rows={4}
            required
            className="bg-surface border-border/40 focus:border-primary resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-14 px-8 text-lg bg-gradient-primary hover:opacity-90 text-primary-foreground border-0 shadow-glow rounded-full font-display font-semibold transition-smooth hover-lift focus-ring flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          <span>{isSubmitting ? "Enviando..." : "Enviar Mensaje"}</span>
        </button>
      </form>
    </Card>
  );
};

export default ContactForm;