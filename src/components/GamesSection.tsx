import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Gamepad2, Users, TrendingUp, Presentation } from "lucide-react";
import gameBoard from "@/assets/game-board.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const GamesSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const autoplayPlugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  
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
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            The Four <span className="text-gradient animate-glow">CTMRL</span> Games
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Gamified learning that transforms students into high-velocity revenue leaders
          </p>
        </div>
        
        <div className={`transition-all duration-700 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: "0.2s" }}>
          <Carousel
            opts={{ loop: true }}
            plugins={[autoplayPlugin.current]}
            className="w-full"
            onMouseEnter={() => autoplayPlugin.current.stop()}
            onMouseLeave={() => autoplayPlugin.current.play()}
          >
            <CarouselContent>
              {games.map((game, idx) => (
                <CarouselItem key={game.id}>
                  <Card className="border-border/50 bg-card p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.3)] hover-glow">
                    <div className="mb-6 flex items-center gap-4">
                      <game.icon className={`h-16 w-16 ${game.color} animate-float`} />
                      <div>
                        <div className="mb-2 text-sm font-mono font-semibold text-muted-foreground">
                          Game {idx + 1} of 4
                        </div>
                        <h3 className="text-3xl font-bold text-foreground">{game.title}</h3>
                        <p className="text-lg text-muted-foreground">{game.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="mb-6 text-lg leading-relaxed text-foreground">{game.description}</p>
                    
                    <div className="mb-6 rounded-lg border border-border/50 bg-muted/30 p-6 hover-glow">
                      <h4 className="mb-4 font-semibold text-lg text-foreground">Key Learnings:</h4>
                      <ul className="space-y-3">
                        {game.learnings.map((learning, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className={`mt-1.5 h-2 w-2 flex-shrink-0 rounded-full ${game.color.replace('text-', 'bg-')} animate-pulse`} />
                            <span className="text-base text-foreground">{learning}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className={`rounded-lg border ${game.color.replace('text-', 'border-')}/40 bg-gradient-to-r from-background/50 to-${game.color.replace('text-', 'bg-')}/5 p-5`}>
                      <p className="font-mono text-sm font-semibold text-foreground">{game.mapping}</p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hover-glow" />
            <CarouselNext className="hover-glow" />
          </Carousel>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground italic">
              Auto-scrolls every 5 seconds • Hover to pause • Click arrows to navigate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
