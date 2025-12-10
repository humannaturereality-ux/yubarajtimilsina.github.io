import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { CorePrinciplesSection } from "@/components/sections/core-principles-section";
import { GANSection } from "@/components/sections/gan-section";
import { NIAISection } from "@/components/sections/niai-section";
import { UrgencyMirrorSection } from "@/components/sections/urgency-mirror-section";
import { StudentCornerSection } from "@/components/sections/student-corner-section";
import { SocialMediaSection } from "@/components/sections/social-media-section";
import { FooterSection } from "@/components/sections/footer-section";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <div className="min-h-screen" data-testid="page-home">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <CorePrinciplesSection />
        <GANSection />
        <NIAISection />
        <UrgencyMirrorSection />
        <StudentCornerSection />
        <SocialMediaSection />
      </main>
      <FooterSection />
    </div>
  );
}
