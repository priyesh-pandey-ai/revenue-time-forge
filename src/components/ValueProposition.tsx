import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ValueProposition = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const values = [
    "The real psychology of B2B buying — stated, unstated, and unstateable needs",
    "A deep understanding of the buying center (Broker, Party, Influencer mapping)",
    "Skill in navigating objections, stalls, and loaded questions",
    "Laser-sharp pitch structuring using the 8-step proposal model",
    "Hands-on practice building business cases using waterfall visuals",
    "The ability to read room energy, build rapport, and transition to business naturally",
    "The 80/20 log-scale understanding of how B2B companies really grow",
    "Actual revenue-leadership simulation through 4 high-stakes contests",
    "A portfolio of practical storytelling tools (CRUST, MAYA, Zig Ziglar, reframing, etc.)",
    "A personal transformation in confidence, articulation, and presence"
  ];

  return (
    <section id="value" className="relative py-20 bg-background overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-10" />
      
      <div className="container relative px-6" ref={ref}>
        <div className={`mb-12 text-center transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            What <span className="text-primary glow-primary">CTMRL</span> Delivers
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            This is not a theory class; it is a career accelerator.
          </p>
        </div>
        
        <Card className={`border-primary/20 bg-card p-8 md:p-12 shadow-[0_0_50px_rgba(139,92,246,0.1)] transition-all duration-700 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: "0.2s" }}>
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value, idx) => (
              <div 
                key={idx} 
                className={`group flex gap-4 transition-all duration-500 hover:translate-x-2 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${0.3 + idx * 0.05}s` }}
              >
                <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-primary transition-all group-hover:scale-110 group-hover:text-neon-blue" />
                <p className="text-card-foreground">{value}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 rounded-lg border border-amber/30 bg-gradient-to-r from-amber/5 via-amber/10 to-amber/5 p-6 text-center shadow-[0_0_30px_rgba(251,191,36,0.1)]">
            <p className="text-lg font-semibold text-foreground">
              Revenue leadership is not taught in books — it is trained in the arena.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ValueProposition;
