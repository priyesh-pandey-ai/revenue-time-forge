import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const TransformationSection = () => {
  const transformations = [
    "I can now read clients with clarity and empathy",
    "My objection handling improved: distinguish honest vs loaded",
    "Pitching feels natural, structured, and purposeful",
    "I know how to move the room from rapport → business → close",
    "I think in B2B engines: product → market → messaging → leads → deals → deeds",
    "I understand power law, log-scale revenue, and asymmetric impact",
    "I now know how to shape my own reality — one-third work, one-third love, one-third delusion",
    "I have twenty pivotal experiences crafted for interviews",
    "My confidence, storytelling skills, and strategic thinking have skyrocketed"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container px-6">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Personal Journey</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            My <span className="text-primary">Personal</span> Transformation
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Real growth, measurable change, lasting impact
          </p>
        </div>
        
        <div className="mx-auto max-w-4xl">
          <Card className="border-primary/30 bg-card p-8 md:p-12">
            <div className="space-y-6">
              {transformations.map((transformation, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 font-mono text-sm font-bold text-primary">
                    {idx + 1}
                  </div>
                  <p className="pt-1 text-lg leading-relaxed">{transformation}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 rounded-lg border border-neon-blue/20 bg-neon-blue/5 p-6 text-center">
              <p className="text-xl font-semibold">
                From uncertain to unstoppable — that's the CTMRL difference.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
