import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "default" | "light" | "symbol";
}

const Logo = ({ className, variant = "default" }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 text-primary-foreground"
            fill="currentColor"
          >
            <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
            <path d="M12 6l6 3v6c0 3.32-2.42 5.84-6 6.5-3.58-.66-6-3.18-6-6.5V9l6-3z" fill="rgba(255,255,255,0.2)"/>
          </svg>
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse-primary"></div>
      </div>
      {variant !== "symbol" && (
        <div className="flex flex-col">
          <span className={cn(
            "font-display font-bold text-xl tracking-tight",
            variant === "light" ? "text-foreground" : "text-gradient"
          )}>
            SolucTI
          </span>
          
        </div>
      )}
    </div>
  );
};

export default Logo;