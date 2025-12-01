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
            The <span className="text-gradient animate-glow">Career Compounder</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            This isn't just about getting a grade. It's about acquiring a toolkit that pays dividends for the rest of your career.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className={`p-8 border-border/50 bg-card hover-glow transition-all duration-700 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: "0.1s" }}>
            <div className="mb-6 p-4 rounded-full bg-primary/10 w-fit">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Immediate Impact</h3>
            <p className="text-muted-foreground leading-relaxed">
              Walk into your summer internship or final placement with the ability to understand the business model, not just the job description.
            </p>
          </Card>

          <Card className={`p-8 border-border/50 bg-card hover-glow transition-all duration-700 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: "0.2s" }}>
            <div className="mb-6 p-4 rounded-full bg-neon-blue/10 w-fit">
              <Briefcase className="h-8 w-8 text-neon-blue" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Career Velocity</h3>
            <p className="text-muted-foreground leading-relaxed">
              Revenue leaders get promoted faster. Why? Because they are the ones who bring the resources into the building.
            </p>
          </Card>

          <Card className={`p-8 border-border/50 bg-card hover-glow transition-all duration-700 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: "0.3s" }}>
            <div className="mb-6 p-4 rounded-full bg-amber/10 w-fit">
              <Award className="h-8 w-8 text-amber" />
            </div>
            <h3 className="text-2xl font-bold mb-4">The "X" Factor</h3>
            <p className="text-muted-foreground leading-relaxed">
              Develop the "Gravitas" that makes people listen when you speak. It's an intangible asset with very tangible returns.
            </p>
          </Card>
        </div>

        <div className={`mt-16 text-center transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.4s" }}>
          <p className="text-2xl font-bold text-foreground">
            ROI = <span className="text-primary">Limitless</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ROISection;
