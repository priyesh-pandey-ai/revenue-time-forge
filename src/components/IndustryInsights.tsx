import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const IndustryInsights = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const insights = [
    {
      quote: "Hunting and farming teams require different mindsets.",
      source: "Week 5 Guest Faculty"
    },
    {
      quote: "Co-evolution with big clients creates exponential revenue.",
      source: "Infosys Case Study"
    },
    {
      quote: "Cost-saving business cases are often more powerful than revenue-generating ones.",
      source: "Industry Expert Panel"
    },
    {
      quote: "Real deals require storytelling, not feature-dumping.",
      source: "Indium Technologies"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-neon-blue/10 blur-[150px] animate-pulse" />
      <div className="container px-6 relative z-10" ref={ref}>
        <div className={`mb-12 text-center transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="text-amber">Industry Expert</span> Insights
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Real-world wisdom from guest faculty that validated classroom concepts
          </p>
        </div>
        
        <div className={`grid gap-6 md:grid-cols-2 transition-all duration-700 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: "0.1s" }}>
          {insights.map((insight, idx) => (
            <Card key={idx} className="border-border/50 p-8 hover-glow">
              <Quote className="mb-4 h-10 w-10 text-amber animate-float" />
              <blockquote className="mb-4 text-lg font-medium leading-relaxed">
                "{insight.quote}"
              </blockquote>
              <p className="text-sm text-muted-foreground">— {insight.source}</p>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground italic">
            These insights from industry leaders validated and enriched the frameworks learned in class, 
            bridging theory with real-world revenue leadership practice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustryInsights;
