import { Card, CardContent } from "@/components/ui/card";
import { Heart, Globe, Eye } from "lucide-react";

const aboutItems = [
  {
    icon: Heart,
    title: "What is Human Nature?",
    description:
      "Human nature is the intrinsic essence of what we are—beyond conditioning, beyond thought, beyond identity. It is consciousness experiencing itself through form, limited yet infinite in potential.",
  },
  {
    icon: Globe,
    title: "What is Reality?",
    description:
      "Reality is What Is—not what the mind interprets, desires, or fears. It is the unchanging ground beneath all change, the silence within all sound, the stillness within all movement.",
  },
  {
    icon: Eye,
    title: "The HNR Movement",
    description:
      "A call to awaken from the dream of separation. To see clearly that Human, Nature, and Reality are not three—they are one seamless movement of existence recognizing itself.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 lg:py-32 bg-warm-cream dark:bg-background"
      data-testid="section-about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            data-testid="text-about-title"
          >
            About the Movement
          </h2>
          <p
            className="font-serif italic text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            data-testid="text-about-quote"
          >
            "Human has its own nature. Nature has its own law. The universe is infinitely broader than the conditioned human brain can perceive."
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {aboutItems.map((item, index) => (
            <Card
              key={item.title}
              className="group border-0 shadow-none bg-card/50 dark:bg-card hover-elevate"
              data-testid={`card-about-${index}`}
            >
              <CardContent className="p-6 sm:p-8">
                <div className="w-14 h-14 rounded-full bg-earth-green/10 dark:bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon className="h-7 w-7 text-[hsl(145,47%,21%)] dark:text-primary" />
                </div>
                <h3
                  className="text-xl font-semibold text-foreground mb-4"
                  data-testid={`text-about-item-title-${index}`}
                >
                  {item.title}
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed"
                  data-testid={`text-about-item-desc-${index}`}
                >
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-foreground font-medium mb-2">
            Why does it matter NOW?
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            In an age of unprecedented technological acceleration, ecological crisis, and psychological fragmentation, the question of what we are and where we are has never been more urgent. The movement is not about belief—it is about seeing.
          </p>
        </div>
      </div>
    </section>
  );
}
