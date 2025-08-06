import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface IconBoxProps {
  icon: LucideIcon;
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const IconBox = ({ 
  icon: Icon, 
  variant = "primary", 
  size = "md", 
  className 
}: IconBoxProps) => {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-12 h-12", 
    lg: "w-16 h-16"
  };

  const iconSizes = {
    sm: "w-5 h-5",
    md: "w-6 h-6",
    lg: "w-8 h-8"
  };

  const variantClasses = {
    primary: "bg-gradient-primary text-primary-foreground shadow-glow",
    secondary: "bg-surface-variant text-secondary-foreground",
    accent: "bg-gradient-accent text-accent-foreground"
  };

  return (
    <div className={cn(
      "rounded-xl flex items-center justify-center transition-smooth hover:scale-105",
      sizeClasses[size],
      variantClasses[variant],
      className
    )}>
      <Icon className={iconSizes[size]} />
    </div>
  );
};

export default IconBox;