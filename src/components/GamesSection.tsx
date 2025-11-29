import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Gamepad2, Users, TrendingUp, Presentation } from "lucide-react";
import gameBoard from "@/assets/game-board.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const GamesSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const games = [
    {
      id: "game1",
      icon: TrendingUp,
      title: "Game 1: Cement-as-a-Service",
      subtitle: "Product + Messaging Fit",
      description: "Students distributed 100 points across attributes, learning how B2B value propositions are built through strategic trade-offs.",
      learnings: [
        "Product–market–messaging alignment",
        "How differentiation emerges through strategic choices",
        "Building compelling B2B value propositions"
      ],
      mapping: "Maps to: Leads → Product-Market-Messaging Engine",
      color: "text-primary"
    },
    {
      id: "game2",
      icon: Users,
      title: "Game 2: Broker–Party–Influencer Mapping",
      subtitle: "Decoding the Buying Center",
      description: "Students identified the real buyer by analyzing documents, scheduling stakeholder meetings, and decoding organizational signals.",
      learnings: [
        "Reading the buying process (troughs & crests)",
        "Identifying pain vs power",
        "Navigating complex stakeholder dynamics"
      ],
      mapping: "Maps to: Lead Qualification + Buyer Center Decoding",
      color: "text-neon-blue"
    },
    {
      id: "game3",
      icon: Gamepad2,
      title: "Game 3: Snakes & Ladders",
      subtitle: "Revenue Leadership Edition",
      description: "Taught four core competencies through gamified business scenarios where dice rolls = business velocity.",
      learnings: [
        "Competitive SWOT analysis",
        "Business case building",
        "Objection handling mastery",
        "Client reference acquisition"
      ],
      mapping: "Maps to: Deals → Deeds",
      color: "text-amber"
    },
    {
      id: "game4",
      icon: Presentation,
      title: "Game 4: You've Got Talent",
      subtitle: "12-Minute Pitch + Q&A",
      description: "High-stakes beauty parade testing structured pitching, storytelling, team choreography, and business case presentation.",
      learnings: [
        "8-step proposal model execution",
        "CRUST + MAYA storytelling",
        "Energy, presence, and memorability",
        "Business case + commercial terms"
      ],
      mapping: "Maps to: Deals → Conversion → Client Win",
      color: "text-destructive"
    }
  ];

  return (
    <section id="games" className="relative py-20 bg-secondary overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${gameBoard})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Animated gradient overlays */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-neon-blue/10 blur-[150px] animate-pulse" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/10 blur-[150px] animate-pulse" style={{ animationDelay: "2s" }} />
      
      <div className="container relative z-10 px-6" ref={ref}>
        <div className={`mb-12 text-center transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="mb-4 text-4xl font-bold text-secondary-foreground md:text-5xl">
            The Four <span className="text-neon-blue glow-neon-blue">CTMRL</span> Games
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Gamified learning that transforms students into high-velocity revenue leaders
          </p>
        </div>
        
        <Tabs defaultValue="game1" className={`w-full transition-all duration-700 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: "0.2s" }}>
          <TabsList className="mb-8 grid w-full grid-cols-2 gap-4 bg-transparent lg:grid-cols-4">
            {games.map((game, idx) => (
              <TabsTrigger 
                key={game.id} 
                value={game.id}
                className="data-[state=active]:bg-card data-[state=active]:text-card-foreground data-[state=active]:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300 hover-scale"
              >
                <game.icon className="mr-2 h-4 w-4" />
                Game {idx + 1}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {games.map((game) => (
            <TabsContent key={game.id} value={game.id} className="animate-fade-in">
              <Card className="border-border/50 bg-card p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.3)] hover:shadow-[0_0_70px_rgba(139,92,246,0.2)] transition-all duration-500">
                <div className="mb-6">
                  <game.icon className={`mb-4 h-12 w-12 ${game.color} animate-fade-in`} />
                  <h3 className="mb-2 text-3xl font-bold">{game.title}</h3>
                  <p className="text-lg text-muted-foreground">{game.subtitle}</p>
                </div>
                
                <p className="mb-6 text-lg leading-relaxed">{game.description}</p>
                
                <div className="mb-6 rounded-lg border border-border/50 bg-muted/30 p-6">
                  <h4 className="mb-4 font-semibold">Key Learnings:</h4>
                  <ul className="space-y-2">
                    {game.learnings.map((learning, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className={`mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full ${game.color.replace('text-', 'bg-')}`} />
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`rounded-lg border ${game.color.replace('text-', 'border-')}/30 bg-background/50 p-4`}>
                  <p className="font-mono text-sm font-semibold">{game.mapping}</p>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default GamesSection;
