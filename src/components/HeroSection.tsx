import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroDashboard})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/80 to-secondary" />
      
      <div className="container relative z-10 px-6 py-20 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon-blue bg-card/50 px-4 py-2 backdrop-blur-sm">
          <Zap className="h-4 w-4 text-neon-blue" />
          <span className="text-sm font-mono text-neon-blue">6-Week Transformation Program</span>
        </div>
        
        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl">
          <span className="text-secondary-foreground">Step Into the</span>
          <br />
          <span className="text-neon-blue glow-neon-blue">Career Time Machine</span>
          <br />
          <span className="text-secondary-foreground">for Revenue Leadership</span>
        </h1>
        
        <p className="mx-auto mb-12 max-w-3xl text-lg text-muted-foreground md:text-xl">
          A six-week, gamified, adrenaline-heavy simulation that turns students into confident, 
          high-velocity revenue leaders — using real deals, real stories, real industry playbooks, 
          and personal transformation.
        </p>
        
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button 
            size="lg" 
            className="group bg-neon-blue text-secondary hover:bg-neon-blue/90 hover:glow-neon-blue transition-all duration-300"
            onClick={() => document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Experience the Course
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="border-amber text-amber hover:bg-amber hover:text-secondary transition-all duration-300"
            onClick={() => document.getElementById('value')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Why This Course Works
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 text-left">
          {[
            { number: "4", label: "High-Stakes Games", color: "text-neon-blue" },
            { number: "6", label: "Weeks of Transformation", color: "text-amber" },
            { number: "∞", label: "Career Impact", color: "text-primary" }
          ].map((stat, idx) => (
            <div key={idx} className="rounded-lg border border-border/50 bg-card/30 p-6 backdrop-blur-sm">
              <div className={`mb-2 font-mono text-4xl font-bold ${stat.color}`}>{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
