import { useState } from "react";
import Logo from "@/components/atoms/Logo";
import CTAButton from "@/components/atoms/CTAButton";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Beneficios", href: "#beneficios" },
    { name: "Clientes", href: "#clientes" },
    { name: "Contacto", href: "#contacto" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-smooth font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:+56988888929"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-smooth"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+56 9 8888 8929</span>
            </a>
            <CTAButton variant="primary" size="sm">
              Cotizar
            </CTAButton>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-surface transition-smooth"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
        )}>
          <nav className="flex flex-col space-y-2 pt-4 border-t border-border/20">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-surface rounded-lg transition-smooth"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <a 
                href="tel:+56988888929"
                className="flex items-center gap-2 px-3 py-2 text-muted-foreground hover:text-foreground rounded-lg"
              >
                <Phone className="w-4 h-4" />
                <span>+56 9 8888 8929</span>
              </a>
              <CTAButton variant="primary" size="md" className="w-full">
                Cotizar Proyecto
              </CTAButton>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;