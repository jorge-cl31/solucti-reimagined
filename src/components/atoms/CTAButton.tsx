import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  className?: string;
  onClick?: () => void;
  href?: string;
}

const CTAButton = ({ 
  children, 
  variant = "primary", 
  size = "md", 
  icon: Icon,
  iconPosition = "right",
  className,
  onClick,
  href
}: CTAButtonProps) => {
  const variantClasses = {
    primary: "bg-gradient-primary hover:opacity-90 text-primary-foreground border-0 shadow-glow",
    secondary: "bg-surface-variant hover:bg-surface text-secondary-foreground",
    accent: "bg-gradient-accent hover:opacity-90 text-accent-foreground border-0",
    outline: "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
  };

  const sizeClasses = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg"
  };

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="w-5 h-5" />}
      <span className="font-medium">{children}</span>
      {Icon && iconPosition === "right" && <Icon className="w-5 h-5" />}
    </>
  );

  const buttonClasses = cn(
    "rounded-xl font-display font-semibold transition-smooth hover-lift focus-ring",
    "flex items-center gap-2",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {content}
      </a>
    );
  }

  return (
    <Button onClick={onClick} className={buttonClasses}>
      {content}
    </Button>
  );
};

export default CTAButton;