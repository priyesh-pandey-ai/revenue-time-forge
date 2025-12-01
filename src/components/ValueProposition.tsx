import { Card } from "@/components/ui/card";
import { BrainCircuit, Activity, MessageSquare, ShieldCheck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ValueProposition = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const reflexes = [
    {
      title: "Revenue Reflexes",
      text: "Developing the instinct to read a room's temperature before a single word is spoken.",
      icon: Activity
    },
    {
      title: "The 'Unsaid' Radar",
      text: "Hearing what isn't being said—the hesitation, the power play, the hidden objection.",
      icon: BrainCircuit
    },
    {
      title: "The Safe 'Yes'",
      text: "Structuring pitches so that agreeing with you feels like the safest option in the room.",
      icon: ShieldCheck
    },
    {
      title: "Narrative Control",
      text: "Holding the frame when the pressure mounts and the questions get loaded.",
      icon: MessageSquare
    }
  ];

  return (
    <section id="value" className="relative py-24 bg-background overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-5" />

      <div className="container relative px-6" ref={ref}>
        <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl tracking-tight">
            Theory gives you a map. <br />
            <span className="text-primary glow-primary">CTMRL puts you in the driver's seat.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed">
            Most courses teach you the <em>concepts</em> of sales. This course builds the <strong>muscle memory</strong> required to lead.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12 items-start">
          <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.2s" }}>
            <div className="relative pl-8 border-l-2 border-primary/30">
              <h3 className="text-2xl font-bold text-foreground mb-4">The Student Problem</h3>
              <p className="text-lg text-muted-foreground">
                We spend years mastering finance, strategy, and operations. But when it comes to the most critical business function—convincing another human to trust you with their money—we're often flying blind.
              </p>
            </div>
            <div className="relative pl-8 border-l-2 border-neon-blue/30">
              <h3 className="text-2xl font-bold text-foreground mb-4">The CTMRL Solution</h3>
              <p className="text-lg text-muted-foreground">
                CTMRL bridges that gap not with lectures, but with <strong>simulations</strong>. It forces you to find your voice when your heart is racing and the stakes feel real.
              </p>
            </div>
          </div>

          <div className={`grid gap-4 transition-all duration-700 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: "0.4s" }}>
            {reflexes.map((item, idx) => (
              <Card key={idx} className="group border-border/40 bg-card/50 p-6 hover:bg-card hover:border-primary/30 transition-all duration-300">
                <div className="flex gap-4 items-start">
                  <div className="mt-1 p-2 rounded-lg bg-primary/10 text-primary group-hover:text-neon-blue group-hover:bg-neon-blue/10 transition-colors">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
