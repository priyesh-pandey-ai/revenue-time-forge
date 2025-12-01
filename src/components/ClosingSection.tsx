import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ClosingSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const storyPoints = [
    { phase: "Context", description: "I walked into CTMRL unsure if I could ever captain a revenue engine. I had analysis, but not the time-machine instincts." },
    { phase: "Remove", description: "Week 1 ripped out the story that sales = pushy. Professor Rastogi removed fluff and replaced it with CRUST, MAYA, and real B2B telemetry." },
    { phase: "Unusual", description: "Where else do you play four games that mirror a revenue time machine — Cement-as-a-Service, Broker/Party/Influencer, Snakes & Ladders, and You've Got Talent?" },
    { phase: "Show", description: "Now I can read rooms, build waterfall cases, choreograph pitches, and reframe objections while the class chants 'Connect → Convince → Convert'." },
    { phase: "Twist", description: "The twist is realizing revenue leadership is about shaping time itself — accelerating deals, slowing churn, and bending careers forward." }
  ];

  return (
    <section id="closing" className="relative py-20 bg-gradient-to-b from-muted/30 to-secondary overflow-hidden">
      {/* Glowing background elements */}
      <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[150px] animate-pulse" />
      <div className="absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-neon-blue/20 blur-[150px] animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="container relative px-6" ref={ref}>
        <Card className={`mx-auto max-w-4xl border-neon-blue/30 bg-card p-8 md:p-12 shadow-[0_0_100px_rgba(56,189,248,0.2)] transition-all duration-700 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <div className="mb-8 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary">Limited Seats Available</span>
            </div>
            
            <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              Your Time Machine <span className="text-gradient animate-glow">Starts Here</span>
            </h2>
            <p className="text-lg text-muted-foreground">My transformation through the CRUST framework</p>
          </div>
          
          <div className="space-y-6">
            {storyPoints.map((point, idx) => (
              <div 
                key={idx} 
                className={`group rounded-lg border border-border/50 bg-muted/30 p-6 transition-all duration-500 hover:border-primary/50 hover:bg-muted/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] hover-scale ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 font-mono text-sm font-bold text-primary transition-all group-hover:scale-110 group-hover:bg-primary/30">
                    {idx + 1}
                  </div>
                  <h3 className="font-semibold text-foreground">{point.phase}</h3>
                </div>
                <p className="text-muted-foreground">{point.description}</p>
              </div>
            ))}
          </div>
          
          <div className={`mt-12 text-center transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.8s" }}>
            <div className="mb-6 rounded-lg border border-amber/30 bg-gradient-to-r from-amber/5 via-amber/10 to-amber/5 p-6 shadow-[0_0_30px_rgba(251,191,36,0.15)]">
              <p className="text-xl font-bold text-foreground">
                "CTMRL is the time machine that lets you visit your future CRO self, take notes, and come back prepared."
              </p>
            </div>
            
            <Button 
              size="lg" 
              variant="secondary"
              className="group relative shadow-[0_0_40px_rgba(56,189,248,0.4)] hover:shadow-[0_0_60px_rgba(56,189,248,0.6)] transition-all duration-300 hover-scale text-lg font-bold"
            >
              <span className="relative z-10 flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                Step Into the Time Machine — Become a Revenue Leader
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ClosingSection;
