import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
    return (
        <div className="relative">
            <Navbar />
            <main>
                <HeroSection />
                <ProjectsSection />
                <AboutSection />
                <ExperienceSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}
