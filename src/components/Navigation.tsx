import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Value", href: "#value" },
    { label: "Frameworks", href: "#frameworks" },
    { label: "Games", href: "#games" },
    { label: "Transformation", href: "#transformation" },
    { label: "ROI", href: "#roi" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-secondary/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-neon-blue to-primary" />
          <span className="font-mono text-xl font-bold text-secondary-foreground">CTMRL</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-medium text-secondary-foreground transition-colors hover:text-neon-blue"
            >
              {item.label}
            </button>
          ))}
          <Button 
            className="bg-neon-blue text-secondary hover:bg-neon-blue/90"
            onClick={() => scrollToSection("#closing")}
          >
            Enroll Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-secondary-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-border/50 bg-secondary/95 backdrop-blur-md md:hidden">
          <div className="container px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-secondary-foreground hover:text-neon-blue transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button 
              className="w-full bg-neon-blue text-secondary hover:bg-neon-blue/90"
              onClick={() => scrollToSection("#closing")}
            >
              Enroll Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
