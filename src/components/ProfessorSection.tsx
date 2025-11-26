import { Card } from "@/components/ui/card";
import { Sparkles, Target, Lightbulb, Users } from "lucide-react";

const ProfessorSection = () => {
  const approaches = [
    {
      icon: Sparkles,
      title: "High-Energy Sessions",
      description: "Fast-paced, story-packed sessions that mirror real revenue leadership intensity"
    },
    {
      icon: Target,
      title: "Brutally Honest Feedback",
      description: "Supportive yet direct feedback that accelerates personal growth"
    },
    {
      icon: Lightbulb,
      title: "Gamified Learning",
      description: "Real revenue leadership simulation through competitive, high-stakes contests"
    },
    {
      icon: Users,
      title: "Practical Tools",
      description: "CEO and CRO-level frameworks, industry visuals, and teardown sessions"
    }
  ];

  const almanac = [
    "Shape your own reality",
    "Embrace disruption as opportunity",
    "Lead with intentionality",
    "Master the art of storytelling",
    "Build asymmetric advantages"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            The <span className="text-neon-blue">Professor's</span> Pedagogy
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Prof. Gaurav Rastogi's unique, unforgettable teaching style
          </p>
        </div>
        
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          {approaches.map((approach, idx) => (
            <Card key={idx} className="border-border/50 p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
              <approach.icon className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-semibold">{approach.title}</h3>
              <p className="text-muted-foreground">{approach.description}</p>
            </Card>
          ))}
        </div>
        
        <Card className="border-neon-blue/30 bg-secondary p-8 text-secondary-foreground">
          <h3 className="mb-6 text-center text-2xl font-bold">The Almanac: 5 Ways to Thrive in a World of Disruption</h3>
          <div className="grid gap-4 md:grid-cols-5">
            {almanac.map((principle, idx) => (
              <div key={idx} className="rounded-lg border border-neon-blue/20 bg-card/10 p-4 text-center backdrop-blur-sm">
                <div className="mb-2 font-mono text-2xl font-bold text-neon-blue">{idx + 1}</div>
                <p className="text-sm">{principle}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <blockquote className="text-lg italic">
              "Revenue leadership is not taught in books — it is trained in the arena."
            </blockquote>
            <p className="mt-2 text-sm text-amber">— Prof. Gaurav Rastogi</p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProfessorSection;
