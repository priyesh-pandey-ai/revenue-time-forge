import { Card } from "@/components/ui/card";
import { Sparkles, Clapperboard, Trophy } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import profPhoto from "@/assets/prof-rastogi.jpg";

const ProfessorSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-primary/10 blur-[150px] animate-pulse" />
      <div className="container px-6 relative z-10" ref={ref}>
        <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            The Director of <span className="text-neon-blue">Controlled Chaos</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Prof. Rastogi doesn't just teach a class. He orchestrates a reality show where you are the protagonist.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className={`relative transition-all duration-700 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-neon-blue/20 blur-2xl rounded-full opacity-50" />
            <img
              src={profPhoto}
              alt="Professor Gaurav Rastogi"
              className="relative rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-neon-blue/30 w-full max-w-md mx-auto hover:scale-[1.02] transition-transform duration-500 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-card border border-border p-4 rounded-lg shadow-xl hidden md:block animate-float">
              <p className="font-bold text-primary">"Find your song"</p>
              <p className="text-xs text-muted-foreground">The Director's Note</p>
            </div>
          </div>

          <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.2s" }}>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold leading-tight">
                He sets the stage, lights the fuse, and watches you <span className="text-amber">evolve</span>.
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The method is simple but terrifying: introduce a concept, then immediately throw you into a high-stakes simulation where you <em>will</em> fail if you rely on theory alone.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                It's not about memorizing frameworks. It's about that moment of panic when a "client" shuts you down, and you have to find the courage to pivot, connect, and recover.
              </p>
            </div>

            <div className="grid gap-4">
              <Card className="border-neon-blue/30 bg-secondary/50 p-5 flex items-start gap-4">
                <Clapperboard className="h-6 w-6 text-neon-blue mt-1" />
                <div>
                  <h4 className="font-bold text-foreground">The "Improv" Factor</h4>
                  <p className="text-sm text-muted-foreground">Every class is unscripted. You learn to think on your feet because the script <em>will</em> change.</p>
                </div>
              </Card>

              <Card className="border-amber/30 bg-secondary/50 p-5 flex items-start gap-4">
                <Trophy className="h-6 w-6 text-amber mt-1" />
                <div>
                  <h4 className="font-bold text-foreground">The Dhaba Dinner</h4>
                  <p className="text-sm text-muted-foreground">The ultimate prize. It's not just food; it's the edible proof that you survived the arena and came out on top.</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessorSection;
