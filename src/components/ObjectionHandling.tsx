import { Card } from "@/components/ui/card";
import { AlertCircle, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ObjectionHandling = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const objections = [
    {
      objection: "This course seems too intense.",
      response: "Intensity = transformation. Revenue leadership is intense by nature; the course simulates the exact environment you will face in real deals. If you want results that matter, you need training that challenges you."
    },
    {
      objection: "I don't have a sales background.",
      response: "Perfect — this course teaches persuasion from first principles, not sales tactics. Anyone who wants to lead, influence, or drive business outcomes can apply these frameworks. The students who benefit most often come from diverse backgrounds."
    }
  ];

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-neon-blue/10 blur-[150px] animate-pulse" />
      <div className="container px-6 relative z-10" ref={ref}>
        <div className={`mb-12 text-center transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Common <span className="text-neon-blue">Questions</span> Answered
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Reframing concerns with honest, practical responses
          </p>
        </div>
        
        <div className={`mx-auto max-w-4xl space-y-6 transition-all duration-700 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: "0.1s" }}>
          {objections.map((item, idx) => (
            <Card key={idx} className="border-border/50 overflow-hidden hover-glow">
              <div className="bg-destructive/10 border-l-4 border-destructive p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-6 w-6 flex-shrink-0 text-destructive" />
                  <div>
                    <h3 className="text-lg font-semibold">Objection {idx + 1}</h3>
                    <p className="mt-1 text-muted-foreground">"{item.objection}"</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-neon-blue" />
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-neon-blue">Response</h3>
                    <p className="leading-relaxed">{item.response}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground italic">
            Using reframing and redirecting tactics learned in the course to address real concerns
          </p>
        </div>
      </div>
    </section>
  );
};

export default ObjectionHandling;
