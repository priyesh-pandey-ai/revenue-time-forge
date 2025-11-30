import { Card } from "@/components/ui/card";
import { Award, TrendingUp, Users, AlertCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const CaseStudySection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const teamResults = [
    {
      rank: "1st Place",
      team: "Team 1",
      icon: Award,
      strengths: "Focused heavily on reliability, AI prediction, and digital ordering. Emphasized partnership and ESG benefits. Overall best execution.",
      color: "text-amber"
    },
    {
      rank: "2nd Place", 
      team: "Team Swaha",
      icon: TrendingUp,
      strengths: "Strong story gamble (good hook) and timeline presentation. Structured four promises and addressed individuals. Excellent Q&A responses.",
      color: "text-primary"
    },
    {
      rank: "Strong Performance",
      team: "Team Bahubali",
      icon: Users,
      strengths: "Solid choreography and Q&A handling. Memorable tagline: 'Bahubali delivers cement'. Good content execution.",
      color: "text-neon-blue"
    }
  ];

  const commonIssues = [
    "Rushing through presentations because slides were too dense — audience can't read and listen simultaneously",
    "Failing to greet and interact with clients before the official presentation",
    "Starting with company intro instead of addressing the client's current 'cement nightmare'",
    "Unpracticed, ad-lib responses to questions leading to defensive behavior",
    "Criticizing competitors instead of framing own strengths positively"
  ];

  const industryInsights = [
    { challenge: "Delays", impact: "Missed timelines causing $120 crore losses and idle labor costs" },
    { challenge: "Pricing", impact: "Opaque pricing structures and hidden costs eroding trust" },
    { challenge: "Logistics", impact: "No real-time tracking causing delivery uncertainty" },
    { challenge: "Accountability", impact: "Difficulty assigning blame between vendors and developers" },
    { challenge: "Inventory", impact: "Excess cement stock tying up critical working capital" }
  ];

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-amber/10 blur-[150px] animate-pulse" />
      <div className="container px-6 relative z-10" ref={ref}>
        <div className={`mb-12 text-center transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Real <span className="text-amber">Case Study</span> Analysis
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Cement service pitches: Applying frameworks in high-stakes presentations
          </p>
        </div>
        
        <div className={`mb-12 transition-all duration-700 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: "0.1s" }}>
          <h3 className="mb-6 text-2xl font-bold text-center">Industry Challenges Addressed</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {industryInsights.map((insight, idx) => (
              <Card key={idx} className="border-border/50 p-6 hover-glow">
                <h4 className="mb-2 font-semibold text-amber text-lg">{insight.challenge}</h4>
                <p className="text-sm text-muted-foreground">{insight.impact}</p>
              </Card>
            ))}
          </div>
        </div>
        
        <div className={`mb-12 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.2s" }}>
          <h3 className="mb-6 text-2xl font-bold text-center">Team Performance Rankings</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {teamResults.map((result, idx) => (
              <Card key={idx} className="border-border/50 p-6 hover-glow">
                <result.icon className={`mb-4 h-12 w-12 ${result.color} animate-float`} />
                <div className="mb-2 text-sm font-semibold text-muted-foreground">{result.rank}</div>
                <h4 className="mb-3 text-xl font-bold">{result.team}</h4>
                <p className="text-sm text-muted-foreground">{result.strengths}</p>
              </Card>
            ))}
          </div>
        </div>
        
        <Card className={`border-destructive/30 bg-card p-8 transition-all duration-700 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: "0.3s" }}>
          <div className="mb-6 flex items-center gap-3">
            <AlertCircle className="h-8 w-8 text-destructive" />
            <h3 className="text-2xl font-bold">Common Pitfalls to Avoid</h3>
          </div>
          <ul className="space-y-3">
            {commonIssues.map((issue, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-destructive" />
                <span>{issue}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-8 rounded-lg border border-amber/20 bg-amber/5 p-4 text-center">
            <p className="font-semibold">
              "The key is to move beyond intellectually sophisticated arguments and genuinely connect with people to solve their human problems."
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CaseStudySection;
