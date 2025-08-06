import { Card } from "@/components/ui/card";
import IconBox from "@/components/atoms/IconBox";
import CTAButton from "@/components/atoms/CTAButton";
import { cn } from "@/lib/utils";
import { LucideIcon, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features?: string[];
  ctaText?: string;
  ctaLink?: string;
  className?: string;
}

const ServiceCard = ({
  title,
  description,
  icon,
  features = [],
  ctaText = "Ver más",
  ctaLink = "#",
  className
}: ServiceCardProps) => {
  return (
    <Card className={cn(
      "p-6 bg-card-elevated border-border/20 hover-lift transition-smooth",
      "group relative overflow-hidden",
      className
    )}>
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-4">
          <IconBox icon={icon} variant="primary" size="lg" />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-display font-semibold text-card-foreground mb-2">
              {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          {/* Features list */}
          {features.length > 0 && (
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
          )}

          {/* CTA */}
          <div className="pt-2">
            <CTAButton 
              variant="outline" 
              size="sm" 
              icon={ArrowRight}
              href={ctaLink}
              className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
            >
              {ctaText}
            </CTAButton>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;