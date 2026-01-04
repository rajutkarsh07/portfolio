import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Coffee } from "lucide-react";
import { personal, contact } from "@/data";

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
            <span>Currently at {personal.currentCompany}</span>
            <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          {/* Profile Image */}
          <div className="relative mb-8">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-background shadow-elevated">
              <img
                src={personal.profileImage}
                alt={personal.name}
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
            {personal.firstName} <span className="text-primary">{personal.lastName}</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mb-6">
            {personal.tagline}
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
            {personal.bio}
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
              <a href={contact.buyMeCoffee} target="_blank" rel="noopener noreferrer">
                <Coffee className="h-4 w-4" />
                Buy me a coffee
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
