import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, ArrowUpRight, ArrowRight } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-secondary/30 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let's Work <span className="text-primary">Together</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question or just want to
            say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-5 w-5" />
              <span>utkarshraj.work@gmail.com</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-border" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>India</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="mailto:utkarshraj.work@gmail.com">
                Say Hello
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">
                Contact Page
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
