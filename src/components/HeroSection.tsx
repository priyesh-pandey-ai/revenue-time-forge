import { Button } from "@/components/ui/button";
import { FileText, Zap, Users, Trophy, Sparkles } from "lucide-react";
import groupPhoto from "@/assets/group-photo.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { usePdfExport } from "@/hooks/use-pdf-export";
const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.2);
  const { exportToPdf, isExporting } = usePdfExport();
  const stats = [
    { icon: Trophy, value: "4", label: "High-Stakes Games", color: "text-neon-blue" },
    { icon: Zap, value: "6", label: "Weeks of Transformation", color: "text-amber" },
    { icon: Users, value: "∞", label: "Career Impact", color: "text-primary" }
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background z-10" />
        <img
          src={groupPhoto}
          alt="CTMRL Class Cohort"
          className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000"
        />
      </div>

      <div className="container relative z-20 px-6" ref={ref}>
        <div className={`grid gap-12 lg:grid-cols-2 items-center transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>

          {/* Left Column: Text Content */}
          <div className="text-left">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-neon-blue/30 bg-neon-blue/5 px-6 py-2 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-neon-blue animate-pulse" />
              <span className="text-sm font-bold text-neon-blue tracking-widest uppercase">Career Time Machine for Revenue Leadership</span>
            </div>

            <h1 className="mb-8 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              THE 6-WEEK REVENUE ACCELERATOR THAT <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-primary to-amber animate-glow">
                REWIRED MY DNA
              </span>
            </h1>

            <p className="mb-10 text-lg text-muted-foreground md:text-xl leading-relaxed font-light">
              From a hesitant student to a revenue leader in 42 days. <br />
              A no-filter retrospective on the most intense, adrenaline-fueled course at IIMA.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                className="group text-lg px-10 py-7 bg-primary hover:bg-primary/90 shadow-[0_0_40px_rgba(139,92,246,0.4)] hover:shadow-[0_0_60px_rgba(139,92,246,0.6)] transition-all duration-300 rounded-full"
                onClick={exportToPdf}
                disabled={isExporting}
              >
                {isExporting ? "Generating PDF..." : "View as a Document"}
                <FileText className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4 border-t border-white/10 pt-8">
              {[
                { label: "Intensity", value: "11/10" },
                { label: "Real Stakes", value: "100%" },
                { label: "Sleep Lost", value: "Worth It" },
                { label: "Transformation", value: "Permanent" },
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col space-y-1">
                  <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Video Embed */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-[0_0_50px_rgba(56,189,248,0.2)] border border-neon-blue/30 group">
            <div className="absolute inset-0 bg-neon-blue/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10" />
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/7Hf4IqrlExs"
              title="CTMRL Course Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        <p className="mx-auto mt-20 max-w-5xl text-center text-base text-muted-foreground md:text-lg animate-fade-in" style={{ animationDelay: "0.5s" }}>
          6 weeks. 4 contests. A time machine + revenue engine hybrid that hurls you through every part of B2B leadership —
          selling, pitching, analysing, influencing, and winning with professor-grade pressure and personalized coaching.
        </p>

        <div
          ref={statsRef}
          className="mt-16 grid gap-8 md:grid-cols-3"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`group rounded-lg border border-border/50 bg-card p-6 backdrop-blur-sm transition-all duration-500 hover:border-neon-blue/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] hover-scale ${statsVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
              style={{ animationDelay: `${0.5 + idx * 0.1}s` }}
            >
              <stat.icon className={`mx-auto mb-4 h-12 w-12 ${stat.color} transition-transform group-hover:scale-110 animate-float`} />
              <div className="mb-2 text-4xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
