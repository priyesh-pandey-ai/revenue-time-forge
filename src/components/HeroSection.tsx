import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, Trophy, Sparkles } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const HeroSection = () => {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.2);

  const stats = [
    { icon: Trophy, value: "4", label: "High-Stakes Games", color: "text-neon-blue" },
    { icon: Zap, value: "6", label: "Weeks of Transformation", color: "text-amber" },
    { icon: Users, value: "∞", label: "Career Impact", color: "text-primary" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
      
      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 h-64 w-64 rounded-full bg-primary/20 blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 right-20 h-64 w-64 rounded-full bg-neon-blue/20 blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroDashboard})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container relative z-10 px-6 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon-blue/30 bg-neon-blue/10 px-4 py-2 backdrop-blur-sm animate-fade-in">
            <Sparkles className="h-4 w-4 text-neon-blue animate-pulse" />
            <span className="text-sm font-semibold text-neon-blue">Transform Your Career in 6 Weeks</span>
          </div>
          
          <h1 className="mb-6 text-5xl font-bold leading-tight text-secondary-foreground md:text-7xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Step Into the <span className="text-neon-blue glow-neon-blue">Career Time Machine</span> for Revenue Leadership
          </h1>
          
          <p className="mb-8 text-lg text-muted-foreground md:text-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            A six-week, gamified, adrenaline-heavy simulation that turns students into confident, 
            high-velocity revenue leaders — using real deals, real stories, real industry playbooks, 
            and personal transformation.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button 
              size="lg" 
              className="group relative bg-neon-blue text-secondary hover:bg-neon-blue/90 shadow-[0_0_30px_rgba(56,189,248,0.3)] hover:shadow-[0_0_50px_rgba(56,189,248,0.5)] transition-all duration-300"
              onClick={() => document.getElementById('closing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 flex items-center">
                Experience the Course
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 rounded-md bg-gradient-to-r from-neon-blue to-primary opacity-0 group-hover:opacity-100 blur transition-opacity" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-neon-blue/50 text-secondary-foreground hover:bg-neon-blue/10 hover:border-neon-blue transition-all duration-300 hover-scale"
              onClick={() => document.getElementById('value')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Why This Works
            </Button>
          </div>
        </div>
        
        <div 
          ref={statsRef}
          className="mt-16 grid gap-8 md:grid-cols-3"
        >
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`group rounded-lg border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-500 hover:border-neon-blue/50 hover:bg-card/80 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] hover-scale ${
                statsVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.5 + idx * 0.1}s` }}
            >
              <stat.icon className={`mx-auto mb-4 h-10 w-10 ${stat.color} transition-transform group-hover:scale-110`} />
              <div className="mb-2 text-3xl font-bold text-secondary-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
