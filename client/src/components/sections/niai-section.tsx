import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TreeDeciduous, Cpu, ArrowLeftRight } from "lucide-react";

const niPoints = [
  "Emergent from billions of years of evolution",
  "Integrated with the body, emotions, and environment",
  "Connected to the web of life",
  "Capable of wisdom, not just knowledge",
];

const aiPoints = [
  "Emergent from human intelligence and data",
  "Reflects human biases, limitations, and brilliance",
  "Can accelerate awakening or suffering",
  "A mirror, not the master",
];

export function NIAISection() {
  return (
    <section
      id="intelligence"
      className="py-20 sm:py-28 lg:py-32 bg-warm-cream dark:bg-background"
      data-testid="section-niai"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            data-testid="text-niai-title"
          >
            NI & AI: Two Intelligences
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Understanding the relationship between Natural Intelligence and Artificial Intelligence 
            is crucial for navigating our present moment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <Card
            className="border-2 border-[hsl(145,47%,21%)]/20 dark:border-primary/20 overflow-visible"
            data-testid="card-ni"
          >
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-14 h-14 rounded-full bg-[hsl(145,47%,21%)] dark:bg-primary flex items-center justify-center">
                  <TreeDeciduous className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">
                  Natural Intelligence
                </CardTitle>
              </div>
              <p className="text-sm font-medium text-[hsl(145,47%,21%)] dark:text-primary">
                NI — The Intelligence of Life
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Natural Intelligence is not merely the brain—it is the intelligence that moves through 
                all living systems. It is the wisdom that knows when to grow, when to rest, when to 
                transform. It has no manual, yet it builds galaxies.
              </p>
              <ul className="space-y-3">
                {niPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground">
                    <span className="w-2 h-2 rounded-full bg-[hsl(145,47%,21%)] dark:bg-primary mt-2 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-[hsl(145,47%,21%)]/10 dark:bg-primary/10 rounded-lg">
                <p className="font-serif italic text-foreground text-sm">
                  "NI is not something you have—it is what you are."
                </p>
              </div>
            </CardContent>
          </Card>

          <Card
            className="border-2 border-[hsl(236,35%,28%)]/20 dark:border-muted/40 overflow-visible"
            data-testid="card-ai"
          >
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-14 h-14 rounded-full bg-[hsl(236,35%,28%)] flex items-center justify-center">
                  <Cpu className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">
                  Artificial Intelligence
                </CardTitle>
              </div>
              <p className="text-sm font-medium text-[hsl(236,35%,28%)] dark:text-muted-foreground">
                AI — The Mirror We Built
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Artificial Intelligence is humanity's creation—a mirror that reflects our 
                collective intelligence, biases, and aspirations. It is a tool of immense power, 
                but it is not the source of Truth. It can amplify wisdom or magnify confusion.
              </p>
              <ul className="space-y-3">
                {aiPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground">
                    <span className="w-2 h-2 rounded-full bg-[hsl(236,35%,28%)] dark:bg-muted mt-2 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-[hsl(236,35%,28%)]/10 dark:bg-muted/20 rounded-lg">
                <p className="font-serif italic text-foreground text-sm">
                  "AI shows us who we are—do we dare to look?"
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border shadow-sm max-w-2xl">
            <ArrowLeftRight className="h-10 w-10 text-[hsl(252,32%,62%)] flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">The Relationship</h3>
              <p className="text-sm text-muted-foreground">
                NI and AI are not enemies. AI emerges from NI. The question is: will we use AI to 
                awaken to our true nature, or to further escape from it?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
