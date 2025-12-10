import { Github, Heart } from "lucide-react";

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-12 bg-earth-green text-white"
      data-testid="section-footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Human-Nature-Reality Movement</h3>
            <p className="text-white/70 text-sm">hnrmovement.org</p>
          </div>

          <div className="flex items-center gap-2 text-white/80 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-400 fill-red-400" />
            <span>using Open Source Tools</span>
          </div>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
            data-testid="link-github-source"
          >
            <Github className="h-4 w-4" />
            <span>View Source Code</span>
          </a>

          <div className="w-full pt-6 border-t border-white/20">
            <p className="text-white/60 text-sm">
              © {currentYear} Human-Nature-Reality Movement. All rights reserved.
            </p>
            <p className="text-white/40 text-xs mt-2 max-w-lg mx-auto">
              This work is dedicated to the public domain. Truth cannot be copyrighted.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
