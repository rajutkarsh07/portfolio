import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Coffee } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-0 gradient-overlay" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto stagger-children">
          {/* Announcement pill */}
          <Link
            to="/experience"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm text-muted-foreground hover:bg-secondary/80 transition-colors duration-200 mb-8 group"
          >
            <span className="text-primary">✨</span>
            <span>Currently at Palo Alto Networks</span>
            <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          {/* Profile Image */}
          <div className="relative mb-8">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-background shadow-elevated">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-cedc2.appspot.com/o/utkarsh.png?alt=media&token=7f7cb8a0-5141-4be7-a4c0-e3e8127be433"
                alt="Utkarsh Raj"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center border-4 border-background">
              <span className="text-xs">👋</span>
            </div>
          </div>

          {/* Main headline */}
          <p className="text-sm text-muted-foreground mb-2">My name is</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            Utkarsh <span className="text-primary">Raj</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mb-6">
            I build things for the web.
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
            I'm a <span className="text-foreground font-medium">Full Stack Web Developer</span> and{" "}
            <span className="text-foreground font-medium">UI/UX Designer</span> specialized in
            building exceptional websites.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" asChild>
              <Link to="/contact">
                Hire Me
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://buymeacoffee.com/utkarshraja" target="_blank" rel="noopener noreferrer">
                <Coffee className="h-4 w-4" />
                Buy me a coffee
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-float">
        <span className="text-xs">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  );
}
