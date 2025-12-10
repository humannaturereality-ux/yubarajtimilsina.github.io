import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Youtube, 
  Github, 
  Cpu, 
  Flower2,
  ExternalLink,
  BookOpen,
  Code,
  Brain,
  LucideIcon
} from "lucide-react";

interface ResourceLink {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  linkText: string;
  color: string;
}

interface ResourceRoadmap {
  icon: LucideIcon;
  title: string;
  description: string;
  stages: { icon: LucideIcon; label: string }[];
}

interface ResourcePractices {
  icon: LucideIcon;
  title: string;
  description: string;
  practices: string[];
}

const linkResources: ResourceLink[] = [
  {
    icon: Youtube,
    title: "Video Teachings",
    description: "Explore philosophical discussions, guided reflections, and deep dives into HNR + GAN + NI + AI concepts.",
    link: "https://youtube.com",
    linkText: "Watch on YouTube",
    color: "bg-red-500",
  },
  {
    icon: Github,
    title: "Open Source Learning",
    description: "Access the full source code, contribute to the movement, and build upon the foundation.",
    link: "https://github.com",
    linkText: "View Repository",
    color: "bg-gray-800 dark:bg-gray-700",
  },
];

const roadmapResource: ResourceRoadmap = {
  icon: Cpu,
  title: "AI Learning Roadmap",
  description: "A structured path to understand AI—technically and philosophically—through the lens of NI.",
  stages: [
    { icon: BookOpen, label: "Foundations" },
    { icon: Code, label: "Technical Skills" },
    { icon: Brain, label: "Integration" },
  ],
};

const practicesResource: ResourcePractices = {
  icon: Flower2,
  title: "Awareness Practices",
  description: "Meditation and self-inquiry practices evolving from the HNR + GAN + NI + AI philosophy.",
  practices: ["Silent Observation", "Nature Immersion", "Mirror Meditation", "Question Inquiry"],
};

export function StudentCornerSection() {
  const RoadmapIcon = roadmapResource.icon;
  const PracticesIcon = practicesResource.icon;

  return (
    <section
      id="resources"
      className="py-20 sm:py-28 lg:py-32 bg-background"
      data-testid="section-resources"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            data-testid="text-resources-title"
          >
            Student Corner
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Resources for those who wish to explore deeper. No prerequisites, no hierarchy—just open doors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {linkResources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <Card
                key={resource.title}
                className="hover-elevate overflow-visible"
                data-testid={`card-resource-${index}`}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg ${resource.color} flex items-center justify-center`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{resource.description}</p>
                  <Button variant="outline" asChild data-testid={`button-resource-${index}`}>
                    <a href={resource.link} target="_blank" rel="noopener noreferrer">
                      {resource.linkText}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}

          <Card
            className="hover-elevate overflow-visible"
            data-testid="card-resource-2"
          >
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[hsl(252,32%,62%)] flex items-center justify-center">
                  <RoadmapIcon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{roadmapResource.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">{roadmapResource.description}</p>
              <div className="flex flex-wrap items-center gap-4">
                {roadmapResource.stages.map((stage, idx) => {
                  const StageIcon = stage.icon;
                  return (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[hsl(252,32%,62%)]/10 flex items-center justify-center">
                        <StageIcon className="h-4 w-4 text-[hsl(252,32%,62%)]" />
                      </div>
                      <span className="text-sm text-foreground">{stage.label}</span>
                      {idx < roadmapResource.stages.length - 1 && (
                        <span className="text-muted-foreground mx-1">→</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card
            className="hover-elevate overflow-visible"
            data-testid="card-resource-3"
          >
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[hsl(145,47%,21%)] flex items-center justify-center">
                  <PracticesIcon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{practicesResource.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">{practicesResource.description}</p>
              <div className="flex flex-wrap gap-2">
                {practicesResource.practices.map((practice, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 text-sm bg-[hsl(145,47%,21%)]/10 dark:bg-primary/10 text-foreground rounded-full"
                  >
                    {practice}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
