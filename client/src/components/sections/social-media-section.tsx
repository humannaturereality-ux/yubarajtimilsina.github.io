import { Button } from "@/components/ui/button";
import { 
  Youtube, 
  Github, 
  Facebook, 
  Instagram, 
  Mail,
  MessageCircle
} from "lucide-react";
import { SiTiktok } from "react-icons/si";

const socialLinks = [
  { icon: Youtube, href: "https://youtube.com", label: "YouTube", color: "hover:text-red-500" },
  { icon: Github, href: "https://github.com", label: "GitHub", color: "hover:text-gray-600 dark:hover:text-gray-300" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook", color: "hover:text-blue-600" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "hover:text-pink-500" },
  { icon: SiTiktok, href: "https://tiktok.com", label: "TikTok", color: "hover:text-foreground" },
  { icon: MessageCircle, href: "https://wa.me", label: "WhatsApp", color: "hover:text-green-500" },
  { icon: Mail, href: "mailto:contact@hnrmovement.org", label: "Email", color: "hover:text-primary" },
];

export function SocialMediaSection() {
  return (
    <section
      className="py-16 sm:py-20 bg-card border-y border-border"
      data-testid="section-social"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Connect With Us
          </h2>
          <p className="text-muted-foreground">
            Join the conversation across platforms
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {socialLinks.map((social) => (
            <Button
              key={social.label}
              variant="outline"
              size="icon"
              className={`h-12 w-12 rounded-full border-border ${social.color} transition-colors`}
              asChild
              data-testid={`button-social-${social.label.toLowerCase()}`}
            >
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
