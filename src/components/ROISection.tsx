import { Card } from "@/components/ui/card";
import { TrendingUp, Brain, Target, Heart } from "lucide-react";

const ROISection = () => {
  const tangibleROI = [
    { icon: Brain, label: "Frameworks Applied", value: "8-step proposal model, CRUST, MAYA, waterfall visualization" },
    { icon: Target, label: "Career Acceleration", value: "Interview-ready stories, leadership presence, strategic thinking" },
    { icon: TrendingUp, label: "B2B Mechanics", value: "Power law understanding, log-scale revenue, buying center navigation" }
  ];

  const intangibleROI = [
    "Self-belief and confidence",
    "Personal intentionality",
    "Ability to 'direct your energy'",
    "Being memorable in high-stakes rooms",
    "Emotional intelligence in business contexts"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="text-amber">ROI</span> for Future Students
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Tangible skills and intangible transformations that compound over your career
          </p>
        </div>
        
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {tangibleROI.map((item, idx) => (
            <Card key={idx} className="border-border/50 p-6 transition-all duration-300 hover:border-amber/50 hover:shadow-lg">
              <item.icon className="mb-4 h-10 w-10 text-amber" />
              <h3 className="mb-3 text-xl font-semibold">{item.label}</h3>
              <p className="text-sm text-muted-foreground">{item.value}</p>
            </Card>
          ))}
        </div>
        
        <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5 p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold">
                <TrendingUp className="h-6 w-6 text-amber" />
                Tangible ROI
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber" />
                  <span>Skills gained across 4 competitive games</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber" />
                  <span>Industry-grade storytelling frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber" />
                  <span>Portfolio of pivotal experiences for interviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber" />
                  <span>Mentor-style personal feedback</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold">
                <Heart className="h-6 w-6 text-primary" />
                Intangible ROI
              </h3>
              <ul className="space-y-3">
                {intangibleROI.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg font-medium">
              The compounding effect of these skills and mindsets creates 
              <span className="text-primary font-bold"> exponential career value</span>.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ROISection;
