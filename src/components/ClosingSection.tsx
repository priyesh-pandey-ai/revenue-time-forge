import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sparkles } from "lucide-react";

const ClosingSection = () => {
  const crustStory = [
    {
      phase: "Context",
      content: "Entered with uncertainty about my ability to lead revenue conversations"
    },
    {
      phase: "Remove",
      content: "Removed old narratives about sales being pushy or inauthentic"
    },
    {
      phase: "Unusual",
      content: "A course that teaches through games, adrenaline, and industry realism"
    },
    {
      phase: "Show",
      content: "How I changed — confidence, storytelling, presence, strategy, intentionality"
    },
    {
      phase: "Twist",
      content: "Revenue leadership is not about selling — it's about shaping reality"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container px-6">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber/20 bg-amber/10 px-4 py-2">
            <Sparkles className="h-4 w-4 text-amber" />
            <span className="text-sm font-semibold text-amber">The CRUST Framework in Action</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            My <span className="text-primary">Transformation</span> Story
          </h2>
        </div>
        
        <div className="mx-auto mb-12 max-w-4xl">
          <Card className="border-primary/30 bg-card p-8 md:p-12">
            <div className="space-y-6">
              {crustStory.map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      {item.phase[0]}
                    </div>
                    {idx < crustStory.length - 1 && (
                      <div className="w-0.5 flex-1 bg-primary/30 mt-2" style={{ minHeight: '40px' }} />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="mb-2 text-xl font-bold text-primary">{item.phase}</h3>
                    <p className="text-lg leading-relaxed text-muted-foreground">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        <div className="mx-auto max-w-3xl rounded-2xl border border-neon-blue/30 bg-secondary p-12 text-center text-secondary-foreground shadow-2xl">
          <h3 className="mb-6 text-3xl font-bold md:text-4xl">
            Your Six-Week Time Machine Starts Here
          </h3>
          <p className="mb-8 text-lg text-muted-foreground">
            If you want to think sharper, speak stronger, and lead revenue like a professional — 
            this is your moment.
          </p>
          <Button 
            size="lg"
            className="group bg-neon-blue text-secondary hover:bg-neon-blue/90 hover:glow-neon-blue text-lg px-8 py-6 transition-all duration-300"
          >
            Start Your Transformation
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <div className="mt-8 flex items-center justify-center gap-8 text-sm">
            <div>
              <div className="font-mono text-2xl font-bold text-neon-blue">6</div>
              <div className="text-muted-foreground">Weeks</div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <div className="font-mono text-2xl font-bold text-amber">4</div>
              <div className="text-muted-foreground">Games</div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <div className="font-mono text-2xl font-bold text-primary">∞</div>
              <div className="text-muted-foreground">Impact</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
