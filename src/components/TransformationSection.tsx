import { Card } from "@/components/ui/card";
import { ArrowUpCircle, UserCheck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const TransformationSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const shifts = [
    {
      from: "Pitching Features",
      to: "Solving Problems",
      desc: "I stopped talking about what my product does and started talking about what my client needs."
    },
    {
      from: "Fearing Objections",
      to: "Inviting Scrutiny",
      desc: "I realized that an objection isn't a 'no'; it's a request for more information. I learned to lean into the friction."
    },
    {
      from: "Anxious Presenter",
      to: "Confident Advisor",
      desc: "My internal monologue switched from 'I hope they like me' to 'I know I can help them'."
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container px-6 relative z-10" ref={ref}>
        <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            The <span className="text-primary">Version 2.0</span> Upgrade
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            I walked in analyzing data. I walked out analyzing people. The shift wasn't subtle—it was a complete system reboot.
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
