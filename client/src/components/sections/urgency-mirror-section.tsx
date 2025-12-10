import { Card, CardContent } from "@/components/ui/card";
import { 
  AlertTriangle, 
  Leaf, 
  Brain, 
  Banknote, 
  Zap, 
  Radio 
} from "lucide-react";

const urgencyItems = [
  {
    icon: AlertTriangle,
    title: "Global Stress",
    description: "Unprecedented levels of anxiety, depression, and burnout across all societies.",
  },
  {
    icon: Leaf,
    title: "Ecological Imbalance",
    description: "Climate crisis, biodiversity loss, and the destruction of natural systems.",
  },
  {
    icon: Radio,
    title: "Over-Information",
    description: "Drowning in data while starving for wisdom. Noise without signal.",
  },
  {
    icon: Brain,
    title: "Psychological Fragmentation",
    description: "Identity confusion, attention crisis, and the loss of coherent meaning.",
  },
  {
    icon: Banknote,
    title: "Economic Dependency",
    description: "Systems that demand endless growth on a finite planet.",
  },
  {
    icon: Zap,
    title: "Technological Speed",
    description: "Change faster than adaptation. Progress without integration.",
  },
];

export function UrgencyMirrorSection() {
  return (
    <section
      id="urgency"
      className="py-20 sm:py-28 lg:py-32 bg-urgency-dark relative"
      data-testid="section-urgency"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            data-testid="text-urgency-title"
          >
            The Urgency Mirror
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
            This is not doom. This is seeing. The mirror shows What Is—not to create fear, 
            but to invite awakening.
          </p>
          <p className="text-urgency-amber text-xl font-semibold">
            What does the mirror reflect?
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {urgencyItems.map((item, index) => (
            <Card
              key={item.title}
              className="bg-white/5 border-white/10 backdrop-blur-sm hover-elevate overflow-visible"
              data-testid={`card-urgency-${index}`}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-[hsl(33,100%,58%)]/20 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-urgency-amber" />
                </div>
                <h3
                  className="text-lg font-semibold text-white mb-2"
                  data-testid={`text-urgency-item-title-${index}`}
                >
                  {item.title}
                </h3>
                <p
                  className="text-white/60 text-sm leading-relaxed"
                  data-testid={`text-urgency-item-desc-${index}`}
                >
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-[hsl(145,47%,21%)]/20 to-[hsl(236,35%,28%)]/20 border border-white/10">
            <p className="text-2xl sm:text-3xl font-bold text-white mb-4">
              The Call to Return
            </p>
            <p className="text-white/80 max-w-2xl mx-auto leading-relaxed">
              Return to <span className="text-urgency-amber font-semibold">Nature</span>. 
              Awaken to <span className="text-urgency-amber font-semibold">Intelligence</span>. 
              See <span className="text-urgency-amber font-semibold">Reality</span>.
            </p>
            <p className="mt-4 font-serif italic text-white/60">
              Not as an escape, but as a homecoming.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
