import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Lightbulb, Presentation, Target } from "lucide-react";
import crapFramework from "@/assets/crap-framework.jpg";

const FrameworksSection = () => {
  const frameworks = [
    {
      id: "crust",
      icon: BookOpen,
      title: "CRUST Storytelling",
      subtitle: "Structure Stories That Stick",
      description: "A proven framework for assembling stories that are contextualized, focused, and memorable.",
      elements: [
        { letter: "C", name: "Context", detail: "Establish where, when, who, and what is happening" },
        { letter: "R", name: "Remove", detail: "Eliminate noise to stay on point (VIP to remove noise)" },
        { letter: "U", name: "Unusual", detail: "Incorporate unusual details to make the story believable and memorable" },
        { letter: "S", name: "Show", detail: "Show, don't just tell; bring proof and evidence" },
        { letter: "T", name: "Twists", detail: "Connect ideas using 'therefore' or 'but' to maintain logical flow" }
      ],
      color: "text-primary"
    },
    {
      id: "hook",
      icon: Target,
      title: "Hook-Look-Cook-Book",
      subtitle: "The 4-Step Engagement Model",
      description: "Capturing audience interest and driving commitment in high-stakes environments where 93% may not initially care about your product.",
      elements: [
        { letter: "1", name: "Hook", detail: "Grab 100% of the audience's interest immediately with a universal problem" },
        { letter: "2", name: "Look", detail: "Direct attention to pain points through careful discovery; get agreement on the problem" },
        { letter: "3", name: "Cook", detail: "Demonstrate solution's value by explicitly mapping solutions to agreed-upon problems" },
        { letter: "4", name: "Book", detail: "Secure commitment (follow-up, email) — never leave without next steps" }
      ],
      color: "text-neon-blue"
    },
    {
      id: "ethos",
      icon: Presentation,
      title: "Ethos, Pathos, Logos",
      subtitle: "Cicero's Impact Framework",
      description: "Understanding the relative impact of different communication elements, developed during the Roman Republic.",
      elements: [
        { letter: "7%", name: "Logos", detail: "Logic and Content — logic is a very small part of overall delivery" },
        { letter: "38%", name: "Pathos", detail: "Emotion and Tone — includes voice tone, emotional content, excitement or boredom" },
        { letter: "55%", name: "Ethos", detail: "Credibility and Presentation — how you present yourself; body language, posture, self-belief" }
      ],
      color: "text-amber"
    },
    {
      id: "rusty",
      icon: Lightbulb,
      title: "Rusty's 7 Steps™",
      subtitle: "Presentation Review Checklist",
      description: "A comprehensive framework for ensuring every presentation is tight, clear, and professionally crafted.",
      elements: [
        { letter: "1", name: "Storyline", detail: "Slide titles should tell a story by themselves in Slide Sorter view" },
        { letter: "2", name: "Essential Sections", detail: "Include core sections: Understanding, Why Us, Deliverables, Risks, Pricing, Timelines" },
        { letter: "3", name: "Traceability", detail: "Clarify every term, deliverable, and jargon — assume nothing, clarify everything" },
        { letter: "4", name: "Clarity", detail: "Use simpler, bullshit-free words when presented a choice" },
        { letter: "5", name: "Relevance", detail: "Remove fillers; every slide must help tell a tight story" },
        { letter: "6", name: "Homework", detail: "Include ALL that can be found beforehand — no generic content" },
        { letter: "7", name: "Aesthetics", detail: "Visual flow, language, fonts, alignment — flaws signal lack of preparation" }
      ],
      color: "text-destructive"
    }
  ];

  return (
    <section id="frameworks" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Practical <span className="text-primary">Frameworks</span> You'll Master
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Industry-grade storytelling and presentation frameworks used by top revenue leaders
          </p>
        </div>
        
        <Tabs defaultValue="crust" className="w-full">
          <TabsList className="mb-8 grid w-full grid-cols-2 gap-4 bg-transparent lg:grid-cols-4">
            {frameworks.map((framework) => (
              <TabsTrigger 
                key={framework.id} 
                value={framework.id}
                className="data-[state=active]:bg-card data-[state=active]:text-card-foreground"
              >
                <framework.icon className="mr-2 h-4 w-4" />
                {framework.title.split(' ')[0]}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {frameworks.map((framework) => (
            <TabsContent key={framework.id} value={framework.id}>
              <Card className="border-border/50 bg-card p-8 md:p-12">
                <div className="mb-6">
                  <framework.icon className={`mb-4 h-12 w-12 ${framework.color}`} />
                  <h3 className="mb-2 text-3xl font-bold">{framework.title}</h3>
                  <p className="text-lg text-muted-foreground">{framework.subtitle}</p>
                </div>
                
                <p className="mb-8 text-lg leading-relaxed">{framework.description}</p>
                
                <div className="space-y-4">
                  {framework.elements.map((element, idx) => (
                    <div key={idx} className="flex gap-4 rounded-lg border border-border/50 bg-muted/30 p-4">
                      <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-background font-mono text-lg font-bold ${framework.color}`}>
                        {element.letter}
                      </div>
                      <div>
                        <h4 className="mb-1 font-semibold">{element.name}</h4>
                        <p className="text-sm text-muted-foreground">{element.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
        
        <Card className="mt-12 border-neon-blue/30 bg-secondary p-8">
          <h3 className="mb-6 text-2xl font-bold text-center">The CRAP Visual Design Framework</h3>
          <div className="mb-6">
            <img src={crapFramework} alt="CRAP Framework - Contrast, Repetition, Alignment, Proximity" className="mx-auto rounded-lg shadow-lg" />
          </div>
          <p className="text-center text-muted-foreground">
            Master visual design principles that control audience behavior and attention
          </p>
        </Card>
      </div>
    </section>
  );
};

export default FrameworksSection;
