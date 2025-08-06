import { cn } from "@/lib/utils";
import IconBox from "@/components/atoms/IconBox";
import { LucideIcon } from "lucide-react";

interface FeatureHighlightProps {
  title: string;
  description: string;
  icon: LucideIcon;
  metric?: {
    value: string;
    label: string;
  };
  variant?: "default" | "horizontal" | "minimal";
  className?: string;
}

const FeatureHighlight = ({
  title,
  description,
  icon,
  metric,
  variant = "default",
  className
}: FeatureHighlightProps) => {
  if (variant === "horizontal") {
    return (
      <div className={cn(
        "flex items-start gap-4 p-6 rounded-2xl bg-surface/50 backdrop-blur-sm border border-border/20",
        "hover:bg-surface/80 transition-smooth",
        className
      )}>
        <IconBox icon={icon} variant="primary" size="md" />
        <div className="flex-1">
          <h3 className="font-display font-semibold text-lg text-foreground mb-2">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
          {metric && (
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-2xl font-bold text-primary">{metric.value}</span>
              <span className="text-sm text-muted-foreground">{metric.label}</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (variant === "minimal") {
    return (
      <div className={cn("text-center space-y-3", className)}>
        <div className="flex justify-center">
          <IconBox icon={icon} variant="secondary" size="md" />
        </div>
        <h3 className="font-display font-semibold text-foreground">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      </div>
    );
  }

  return (
    <div className={cn(
      "text-center space-y-4 p-6 rounded-2xl",
      "bg-gradient-to-b from-surface/50 to-surface-variant/30",
      "border border-border/20 hover:border-primary/20",
      "transition-smooth hover-lift",
      className
    )}>
      <div className="flex justify-center">
        <IconBox icon={icon} variant="primary" size="lg" />
      </div>
      <div className="space-y-2">
        <h3 className="font-display font-semibold text-xl text-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
      {metric && (
        <div className="pt-2 border-t border-border/20">
          <div className="text-3xl font-bold text-gradient">{metric.value}</div>
          <div className="text-sm text-muted-foreground">{metric.label}</div>
        </div>
      )}
    </div>
  );
};

export default FeatureHighlight;