import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Leaf, Zap } from "lucide-react";

const principles = [
  {
    icon: User,
    title: "Human Nature",
    color: "bg-[hsl(145,47%,21%)]",
    iconColor: "text-white",
    points: [
      "Consciousness arising in form",
      "Limitations as gateways to depth",
      "Potentiality beyond conditioning",
      "The observer and the observed as one",
    ],
    description:
      "Human consciousness is not separate from nature—it is nature becoming aware of itself. Our limitations are not obstacles but invitations to depth.",
  },
  {
    icon: Leaf,
    title: "Nature",
    color: "bg-[hsl(355,45%,58%)]",
    iconColor: "text-white",
    points: [
      "Creation: the eternal birth of form",
      "Preservation: the dance of balance",
      "Destruction: the return to source",
      "The cycle that knows no exception",
    ],
    description:
      "Nature operates through three universal laws—creation, preservation, destruction. This cycle is not cruel; it is the rhythm of existence renewing itself.",
  },
  {
    icon: Zap,
    title: "Reality",
    color: "bg-[hsl(236,35%,28%)]",
    iconColor: "text-white",
    points: [
      "What Is vs. what mind wants",
      "Beyond fragmentation and division",
      "The ground of all appearances",
      "Wholeness recognizing itself",
    ],
    description:
      "Reality is not what the mind constructs. It is the undivided whole that contains all opposites, all experiences, all moments as one seamless movement.",
  },
];

export function CorePrinciplesSection() {
  return (
    <section
      id="principles"
      className="py-20 sm:py-28 lg:py-32 bg-background"
      data-testid="section-principles"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            data-testid="text-principles-title"
          >
            The Core Principles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three pillars of understanding that form the foundation of the HNR Movement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {principles.map((principle, index) => (
            <Card
              key={principle.title}
              className="group overflow-visible hover-elevate"
              data-testid={`card-principle-${index}`}
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-16 h-16 rounded-full ${principle.color} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <principle.icon className={`h-8 w-8 ${principle.iconColor}`} />
                </div>
                <CardTitle className="text-2xl font-bold" data-testid={`text-principle-title-${index}`}>
                  {principle.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p
                  className="text-muted-foreground mb-6 leading-relaxed"
                  data-testid={`text-principle-desc-${index}`}
                >
                  {principle.description}
                </p>
                <ul className="space-y-3">
                  {principle.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="flex items-start gap-3 text-sm text-foreground"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${principle.color} mt-2 flex-shrink-0`}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
