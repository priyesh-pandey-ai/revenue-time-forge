import { Card } from "@/components/ui/card";
import { Quote, Microscope, Target } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const IndustryInsights = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const insights = [
    {
      title: "The Reality Check",
      desc: "Guest speakers didn't come to lecture. They came to audit. They dissected our pitches with the same rigor they use for million-dollar deals.",
      icon: Microscope
    },
    {
      title: "War Room Stories",
      desc: "We heard the unvarnished truth about sales—the failures, the 'almosts', and the grit required to close, straight from the people in the arena.",
      icon: Quote
    },
    {
      title: "Live Fire Exercises",
      desc: "They didn't just watch; they participated. Trying to sell to a real industry veteran is very different from selling to a classmate.",
      icon: Target
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-neon-blue/10 blur-[150px] animate-pulse" />
      <div className="container px-6 relative z-10" ref={ref}>
        <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Frontline <span className="text-amber">Intelligence</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            No textbooks. No theories. Just direct downloads from the people who carry the quota.
          </p>
        </div>

        <div className={`grid gap-8 md:grid-cols-3 transition-all duration-700 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: "0.1s" }}>
          {insights.map((insight, idx) => (
            <Card key={idx} className="border-border/50 p-8 hover-glow group bg-card/50 backdrop-blur-sm">
              <div className="mb-6 p-3 rounded-full bg-secondary w-fit group-hover:bg-primary/20 transition-colors">
                <insight.icon className="h-8 w-8 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="mb-3 text-xl font-bold">{insight.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{insight.desc}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-secondary/50 to-background border border-border/50">
            <p className="text-xl font-medium leading-relaxed italic text-foreground/90">
              "The biggest takeaway wasn't a framework. It was realizing that sales isn't about slick tricks; it's about deep empathy, rigorous preparation, and the courage to ask the hard questions."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryInsights;
