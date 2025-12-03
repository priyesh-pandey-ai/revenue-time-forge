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
    title: "Cement-as-a-Service",
    subtitle: "The Week I Failed",
    description: "I played the revenue leader, and the deal didn't go the way I wanted. But the moment that changed me came from being the observer next round. Watching my classmates, I understood: Tone changes trust. Phrasing changes power. Preparation changes destiny.",
    learnings: [
      "Tone changes trust.",
      "Phrasing changes power.",
      "Preparation changes destiny."
    ],
    color: "text-primary",
    phase: "Simulation"
  },
  {
    id: "game2",
    icon: Swords,
    title: "Broker Hain Ya Party??",
    subtitle: "The Harsh Truth",
    description: "By Week 3, this game forced me to accept a harsh truth: I was building rapport wrong. I couldn't follow FORD properly. I missed cues. I jumped too quickly into business. That failure became a turning point.",
    learnings: [
      "I was building rapport wrong.",
      "I couldn't follow FORD properly.",
      "I jumped too quickly into business."
    ],
    color: "text-neon-blue",
    phase: "Rapport"
  },
  {
    id: "game3",
    icon: Dice5,
    title: "Snakes & Ladders",
    subtitle: "Leadership Mirror",
    description: "A game disguised as a leadership mirror. Every dice throw represented speed of execution — not luck. Prof had secretly wired the game to teach us that in business, speed creates opportunity, and clarity accelerates movement.",
    learnings: [
      "Speed creates opportunity.",
      "Clarity accelerates movement.",
      "Every dice throw represented speed of execution — not luck."
    ],
    color: "text-amber",
    phase: "Execution"
  },
  {
    id: "game4",
    icon: Mic2,
    title: "The Beauty Parade",
    subtitle: "Pressure Cooker",
    description: "These weren't games. These were simulations of pressure, teaching us how to think while the clock is running. The culmination of every lesson, delivered under maximum pressure.",
    learnings: [
      "Thinking while the clock is running.",
      "Simulations of pressure.",
      "From presentation to performance."
    ],
    color: "text-destructive",
    phase: "Pressure"
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
            Gamified Learning — <span className="text-gradient animate-glow">Told Through Failure</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Told Through the Week I Failed, Recovered, and Evolved
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
