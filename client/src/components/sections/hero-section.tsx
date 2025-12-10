import { Button } from "@/components/ui/button";
import { ChevronDown, Youtube, Users } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-[hsl(145,47%,21%)] via-[hsl(236,35%,28%)] to-[hsl(252,32%,42%)] bg-[length:400%_400%] animate-gradient-shift"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-black/30"
        aria-hidden="true"
      />
      
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p
          className="text-white/70 text-sm sm:text-base font-medium tracking-widest uppercase mb-6 animate-float"
          data-testid="text-invocation"
        >
          Awaken to What Is
        </p>
        
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance"
          data-testid="text-hero-title"
        >
          Human-Nature-Reality
          <span className="block mt-2 bg-gradient-to-r from-white via-amber-200 to-white bg-clip-text text-transparent">
            Movement
          </span>
        </h1>
        
        <p
          className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light mb-4"
          data-testid="text-hero-subtitle"
        >
          A Mirror of Urgency into What It Is
        </p>
        
        <p
          className="font-serif italic text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10"
          data-testid="text-hero-quote"
        >
          "The truth is not something to be grasped, but something to be lived."
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-white text-[hsl(145,47%,21%)] border-white font-semibold px-8 backdrop-blur-sm"
            asChild
            data-testid="button-youtube"
          >
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <Youtube className="mr-2 h-5 w-5" />
              YouTube Channel
            </a>
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="border-white/50 text-white bg-white/10 backdrop-blur-sm font-semibold px-8"
            asChild
            data-testid="button-join"
          >
            <a href="#about">
              <Users className="mr-2 h-5 w-5" />
              Join the Movement
            </a>
          </Button>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
        aria-label="Scroll to about section"
        data-testid="link-scroll-down"
      >
        <ChevronDown className="h-8 w-8 animate-scroll-indicator" />
      </a>
    </section>
  );
}
