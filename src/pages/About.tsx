import { ArrowLeft, Code, Database, Globe, Terminal, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { skills, codingProfiles, stats, about, personal } from "@/data";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const iconMap: Record<string, React.ElementType> = {
  "Frontend": Globe,
  "Backend": Database,
  "Tools & Others": Terminal,
};

// Type for skill with icon
interface SkillWithIcon {
  name: string;
  icon: string;
}

export default function About() {
  return (
    <TooltipProvider delayDuration={0}>
      <div className="min-h-screen bg-background relative">
        {/* Background grid - same as home */}
        <div className="fixed inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="fixed inset-0 bg-gradient-overlay pointer-events-none" />

        <Navbar />

        <main className="pt-24 pb-16 relative z-10">
          <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
            {/* Header */}
            <div className="mb-20">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
              >
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>

              <div className="stagger-children">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  About Me
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Get to <span className="text-primary">Know Me</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                  I'm a passionate developer who loves building beautiful and functional web applications.
                </p>
              </div>
            </div>

            {/* Main Content - Two Column Layout */}
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 mb-24 items-start">
              {/* About Text - Takes more space */}
              <div className="lg:col-span-3 space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    Hello! I'm <span className="text-primary">{personal.name}</span>
                  </h2>
                  <div className="space-y-5 text-muted-foreground leading-relaxed text-base lg:text-lg">
                    {about.paragraphs.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Fun Fact Card */}
                {personal.funFact && (
                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-6">
                    <p className="text-sm font-medium text-primary mb-2">Fun Fact</p>
                    <p className="text-foreground">{personal.funFact}</p>
                  </div>
                )}
              </div>

              {/* Stats - Compact on right */}
              <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-2xl p-6 text-center card-hover">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">{stats.yearsOfExperience}</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 text-center card-hover">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">{stats.projectsCompleted}</div>
                  <div className="text-sm text-muted-foreground">Projects Built</div>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 text-center card-hover">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">{stats.leetCodeRating}</div>
                  <div className="text-sm text-muted-foreground">LeetCode Rating</div>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 text-center card-hover">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">{stats.problemsSolved}</div>
                  <div className="text-sm text-muted-foreground">Problems Solved</div>
                </div>
              </div>
            </div>

            {/* Skills Section - Logo Grid */}
            <div className="mb-24">
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Tech Stack
                </span>
                <h2 className="text-2xl md:text-3xl font-bold">Skills & Technologies</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {Object.entries(skills.categories).map(([category, skillList]) => {
                  const Icon = iconMap[category] || Code;
                  return (
                    <div key={category} className="bg-card border border-border rounded-2xl p-8 card-hover">
                      <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 rounded-xl bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold">{category}</h3>
                      </div>

                      {/* Logo Grid with Tooltips */}
                      <div className="grid grid-cols-3 gap-4">
                        {(skillList as SkillWithIcon[]).map((skill) => (
                          <Tooltip key={skill.name}>
                            <TooltipTrigger asChild>
                              <div className="group flex items-center justify-center p-4 bg-secondary/50 border border-border rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg">
                                <img
                                  src={skill.icon}
                                  alt={skill.name}
                                  className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110"
                                />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent
                              side="top"
                              className="bg-foreground text-background px-3 py-1.5 text-sm font-medium rounded-lg"
                            >
                              {skill.name}
                            </TooltipContent>
                          </Tooltip>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Coding Profiles */}
            <div>
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Competitive Programming
                </span>
                <h2 className="text-2xl md:text-3xl font-bold">Coding Profiles</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {codingProfiles.map((profile) => (
                  <a
                    key={profile.name}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card border border-border rounded-2xl p-8 text-center card-hover group relative overflow-hidden"
                  >
                    {/* Hover gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-500" />

                    <div className="relative z-10">
                      <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <Sparkles className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {profile.name}
                      </h3>
                      <p className="text-3xl font-bold text-primary">{profile.rating}</p>
                      <p className="text-sm text-muted-foreground mt-2">@{profile.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </TooltipProvider>
  );
}
