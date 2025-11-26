import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-secondary py-12">
      <div className="container px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-neon-blue to-primary" />
            <span className="font-mono text-lg font-bold text-secondary-foreground">CTMRL</span>
          </div>
          
          <div className="flex flex-col items-center gap-2 text-center md:flex-row md:gap-4">
            <p className="text-sm text-muted-foreground">
              Career Time Machine for Revenue Leadership
            </p>
            <span className="hidden text-muted-foreground md:inline">•</span>
            <p className="text-sm text-muted-foreground">
              Taught by Prof. Gaurav Rastogi
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Zap className="h-4 w-4 text-neon-blue" />
            <span>Built with passion & purpose</span>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © 2025 CTMRL. All rights reserved. | This page is a student project showcasing course learnings.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
