import { Card } from "@/components/ui/card";
import { Quote, Microscope, Target } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const IndustryInsights = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const insights = [
    {
      title: "The Client's Perspective",
      desc: "In Week 2, Srikanth Iyengar said something simple: \"Do what is right for the client.\" That single line reframed selling for me. Selling wasn't performance. It was integrity plus diagnosis.",
      icon: Microscope
    },
    {
      title: "Top-Tier Validation",
      desc: "In Week 5, Sukumar's session felt like the corporate world saying: \"Everything you're learning here? This is exactly how we do it at the top.\"",
      icon: Quote
    },
    {
      title: "Real Wisdom",
      desc: "Real leaders entered our classroom every week — people with scars, wins, failures, and wisdom textbooks will never have.",
      icon: Target
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-neon-blue/10 blur-[150px] animate-pulse" />
      <div className="container px-6 relative z-10" ref={ref}>
        <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Industry Experts — <span className="text-amber">How My World Expanded</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Real leaders entered our classroom every week — people with scars, wins, failures, and wisdom textbooks will never have.
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
              "Do what is right for the client." — Srikanth Iyengar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryInsights;
