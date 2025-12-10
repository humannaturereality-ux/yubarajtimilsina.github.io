import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Flame, Circle } from "lucide-react";

const ganConcepts = [
  {
    icon: GraduationCap,
    title: "Guru",
    subtitle: "The Traditional Guide",
    description:
      "The archetype of the teacher—one who carries knowledge, tradition, and the transmission of wisdom across generations. The Guru represents accumulated human understanding.",
    qualities: ["Knowledge holder", "Tradition bearer", "Guide through darkness"],
  },
  {
    icon: Flame,
    title: "Antiguru",
    subtitle: "The Sacred Destroyer",
    description:
      "The force that questions all authority, including spiritual authority. The Antiguru breaks illusions, challenges 'spiritual correctness,' and refuses to let truth become dogma.",
    qualities: ["Illusion breaker", "Question everything", "No sacred cows"],
  },
  {
    icon: Circle,
    title: "Nonguru",
    subtitle: "Beyond Identity",
    description:
      "The recognition that Truth cannot be owned, transmitted, or taught by any fixed identity. There is no teacher, no student—only consciousness recognizing itself.",
    qualities: ["No teacher-taught", "Truth unowned", "Identity dissolved"],
  },
];

export function GANSection() {
  return (
    <section
      id="gan"
      className="py-20 sm:py-28 lg:py-32 bg-cosmic-indigo relative overflow-hidden"
      data-testid="section-gan"
    >
      <div
        className="absolute inset-0 opacity-5"
        aria-hidden="true"
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circles" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="20" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circles)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            data-testid="text-gan-title"
          >
            GAN: Guru – Antiguru – Nonguru
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Three archetypal functions in the play of consciousness. Not personalities to follow, 
            but forces to recognize within the universal dance of awakening.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {ganConcepts.map((concept, index) => (
            <Card
              key={concept.title}
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover-elevate overflow-visible"
              data-testid={`card-gan-${index}`}
            >
              <CardContent className="p-6 sm:p-8">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                  <concept.icon className="h-8 w-8 text-white" />
                </div>
                <h3
                  className="text-2xl font-bold mb-2"
                  data-testid={`text-gan-concept-title-${index}`}
                >
                  {concept.title}
                </h3>
                <p className="text-white/70 text-sm font-medium mb-4">
                  {concept.subtitle}
                </p>
                <p
                  className="text-white/80 leading-relaxed mb-6"
                  data-testid={`text-gan-concept-desc-${index}`}
                >
                  {concept.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {concept.qualities.map((quality, qIndex) => (
                    <span
                      key={qIndex}
                      className="px-3 py-1 text-xs font-medium bg-white/10 rounded-full text-white/90"
                    >
                      {quality}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-white/30" />
            <div className="bg-cosmic-purple/80 backdrop-blur-sm rounded-full px-8 py-4 relative z-10">
              <p className="text-white font-medium text-center">
                The Play of Consciousness
              </p>
              <p className="text-white/70 text-sm text-center mt-1">
                All three exist as one movement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
