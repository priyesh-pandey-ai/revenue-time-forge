import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Swords, Target, Dice5, Mic2 } from "lucide-react";
import gameBoard from "@/assets/game-board.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

// Game card component for reuse
const GameCard = ({ game }: { game: typeof games[0] }) => (
  <Card className="h-full border-border/50 bg-card p-8 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.3)] hover-glow flex flex-col">
    <div className="mb-6 flex items-start gap-4">
      <div className={`p-3 rounded-xl bg-background border border-border/50 ${game.color} shadow-sm`}>
        <game.icon className="h-8 w-8" />
      </div>
      <div>
        <div className="mb-1 text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground">
          {game.phase}
        </div>
        <h3 className="text-2xl font-bold text-foreground">{game.title}</h3>
        <p className="text-sm font-medium text-muted-foreground">{game.subtitle}</p>
      </div>
    </div>

    <p className="mb-8 text-base leading-relaxed text-foreground/90 flex-grow">
      {game.description}
    </p>

    <div className="rounded-lg border border-border/50 bg-muted/30 p-5">
      <h4 className="mb-3 font-semibold text-sm text-foreground uppercase tracking-wide">Key Takeaways</h4>
      <ul className="space-y-2">
        {game.learnings.map((learning, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${game.color.replace('text-', 'bg-')}`} />
            <span>{learning}</span>
          </li>
        ))}
      </ul>
    </div>
  </Card>
);

const games = [
  {
    id: "game1",
    icon: Target,
    title: "Arena 1: The Product Bet",
    subtitle: "Differentiation & Messaging",
    description: "We were given a commodity (cement) and told to make it premium. It wasn't about features; it was about finding the one story that a buyer would pay extra for.",
    learnings: [
      "Learning that 'better' is subjective, but 'different' is profitable.",
      "The pain of seeing your 'perfect' pitch fall flat because you missed the client's actual problem.",
      "Realizing that if you can't explain it simply, you can't sell it."
    ],
    color: "text-primary",
    phase: "Differentiation"
  },
  {
    id: "game2",
    icon: Swords,
    title: "Arena 2: The Power Map",
    subtitle: "Stakeholder Management",
    description: "A detective game where we had to figure out who actually held the keys to the budget. Spoiler: It's rarely the person doing the talking.",
    learnings: [
      "Distinguishing between the 'Cheerleader' (who loves you but can't buy) and the 'Skeptic' (who signs the check).",
      "Navigating office politics without getting caught in the crossfire.",
      "The art of asking questions that reveal the hidden org chart."
    ],
    color: "text-neon-blue",
    phase: "Discovery"
  },
  {
    id: "game3",
    icon: Dice5,
    title: "Arena 3: The Boardroom",
    subtitle: "Business Case & Negotiation",
    description: "We rolled the dice—literally—to simulate market shifts. Then we had to convince a skeptical board that our deal was still worth saving.",
    learnings: [
      "Building a business case that survives when the market crashes.",
      "Handling objections not with defense, but with data.",
      "Learning that 'No' is just the start of the real negotiation."
    ],
    color: "text-amber",
    phase: "Negotiation"
  },
  {
    id: "game4",
    icon: Mic2,
    title: "Arena 4: The Spotlight",
    subtitle: "The Final Pitch",
    description: "The 'Beauty Parade'. Bright lights, harsh judges, and 12 minutes to win it all. This was the culmination of every lesson, delivered under maximum pressure.",
    learnings: [
      "Commanding the room with silence as much as with words.",
      "The importance of choreography: knowing exactly when to hand off to your teammate.",
      "Feeling the difference between a 'presentation' and a 'performance'."
    ],
    color: "text-destructive",
    phase: "Closing"
  }
];

const GamesSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const autoplayPlugin = useRef(Autoplay({ delay: 6000, stopOnInteraction: true }));

  return (
    <section id="games" className="relative py-24 bg-secondary overflow-hidden">
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
        <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            The Revenue <span className="text-gradient animate-glow">Dojo</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Four distinct arenas. Zero safety nets. This is where we practiced until the movements became instinct.
          </p>
        </div>

        <div className={`transition-all duration-700 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: "0.2s" }}>
          {/* Carousel for screen view */}
          <Carousel
            opts={{ loop: true }}
            plugins={[autoplayPlugin.current]}
            className="w-full print:hidden"
            onMouseEnter={() => autoplayPlugin.current.stop()}
            onMouseLeave={() => autoplayPlugin.current.play()}
          >
            <CarouselContent>
              {games.map((game) => (
                <CarouselItem key={game.id} className="md:basis-1/2 lg:basis-1/2 xl:basis-1/2 pl-6">
                  <GameCard game={game} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 hover-glow" />
              <CarouselNext className="static translate-y-0 hover-glow" />
            </div>
          </Carousel>

          {/* Grid layout for print view - shows all games in a 2-column grid optimized for A4/Letter paper */}
          <div className="hidden print:grid print:grid-cols-2 print:gap-6">
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg font-medium text-foreground">
              "We started as individuals. We finished as a revenue engine."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
