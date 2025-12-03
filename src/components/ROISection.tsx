import { Card } from "@/components/ui/card";
import { TrendingUp, Briefcase, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ROISection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container px-6 relative z-10" ref={ref}>
        <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            ROI — <span className="text-gradient animate-glow">Skills I Use Daily Now</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Since CTMRL, I find myself asking before every conversation:
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className={`p-8 border-border/50 bg-card hover-glow transition-all duration-700 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: "0.1s" }}>
            <div className="mb-6 p-4 rounded-full bg-primary/10 w-fit">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">The Need</h3>
            <p className="text-muted-foreground leading-relaxed">
              "What is their stated, unstated, unstateable need?"
            </p>
          </Card>

          <Card className={`p-8 border-border/50 bg-card hover-glow transition-all duration-700 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: "0.2s" }}>
            <div className="mb-6 p-4 rounded-full bg-neon-blue/10 w-fit">
              <Briefcase className="h-8 w-8 text-neon-blue" />
            </div>
            <h3 className="text-2xl font-bold mb-4">The Focus</h3>
            <p className="text-muted-foreground leading-relaxed">
              "Where will their eye land first?" "Am I simplifying to the essence?"
            </p>
          </Card>

          <Card className={`p-8 border-border/50 bg-card hover-glow transition-all duration-700 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: "0.3s" }}>
            <div className="mb-6 p-4 rounded-full bg-amber/10 w-fit">
              <Award className="h-8 w-8 text-amber" />
            </div>
            <h3 className="text-2xl font-bold mb-4">The Hook</h3>
            <p className="text-muted-foreground leading-relaxed">
              "Does my story have a hook?"
            </p>
          </Card>
        </div>

        <div className={`mt-16 text-center transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.4s" }}>
          <p className="text-xl text-muted-foreground mb-4">
            These skills show up in: interviews, presentations, pitches, client calls, resume writing, elevator pitches, cold outreach, networking — everywhere.
          </p>
          <p className="text-2xl font-bold text-foreground">
            ROI isn't theoretical. <span className="text-primary">It's immediate, practical, and career-defining.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ROISection;
