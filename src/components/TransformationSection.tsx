import { Card } from "@/components/ui/card";
import { ArrowUpCircle, UserCheck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const TransformationSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const shifts = [
    {
      from: "Communication as 'Soft Skill'",
      to: "Core Leadership Competency",
      desc: "Before CTMRL, I thought communication was a 'soft skill.' Now I know it is a core leadership competency."
    },
    {
      from: "Pitching = Slides",
      to: "Diagnosis + Structure",
      desc: "Before CTMRL, I thought pitching was about slides. Now I know it is about diagnosis, structure, and narrative control."
    },
    {
      from: "Influence = Charisma",
      to: "Presence = Clarity + Prep",
      desc: "Before CTMRL, I thought influence was charisma. Now I know it is presence built from clarity + empathy + preparation."
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container px-6 relative z-10" ref={ref}>
        <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Student Transformation — <span className="text-primary">My Before/After Story</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Week 6 changed my understanding of careers entirely. The power laws, the 80/20 chart, the compounding of trust — I realised why some careers accelerate and others stagnate.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {shifts.map((shift, idx) => (
            <Card key={idx} className={`relative overflow-hidden border-border/50 bg-card/50 p-8 transition-all duration-700 hover:-translate-y-2 hover:shadow-lg ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: `${0.1 + idx * 0.1}s` }}>
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <ArrowUpCircle className="h-24 w-24 text-primary" />
              </div>

              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  <span>{shift.from}</span>
                  <ArrowUpCircle className="h-4 w-4 text-primary animate-bounce" />
                  <span className="text-primary">{shift.to}</span>
                </div>

                <p className="text-lg font-medium leading-relaxed text-foreground">
                  "{shift.desc}"
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.4s" }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-neon-blue/30 bg-neon-blue/10 px-6 py-3">
            <UserCheck className="h-5 w-5 text-neon-blue" />
            <span className="font-semibold text-neon-blue">Status: Upgrade Complete</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
