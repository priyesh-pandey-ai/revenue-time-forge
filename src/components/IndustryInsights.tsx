import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const IndustryInsights = () => {
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
    <section className="py-20 bg-background">
      <div className="container px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="text-amber">Industry Expert</span> Insights
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Real-world wisdom from guest faculty that validated classroom concepts
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {insights.map((insight, idx) => (
            <Card key={idx} className="border-border/50 p-8 transition-all duration-300 hover:border-amber/50 hover:shadow-lg">
              <Quote className="mb-4 h-8 w-8 text-amber" />
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
