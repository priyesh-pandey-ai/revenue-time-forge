import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const ValueProposition = () => {
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
    <section id="value" className="py-20 bg-background">
      <div className="container px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            What <span className="text-primary">CTMRL</span> Delivers
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            This is not a theory class; it is a career accelerator.
          </p>
        </div>
        
        <Card className="border-primary/20 bg-card p-8 md:p-12">
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value, idx) => (
              <div key={idx} className="flex gap-4">
                <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                <p className="text-card-foreground">{value}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 rounded-lg border border-amber/20 bg-amber/5 p-6 text-center">
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
