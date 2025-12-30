import { ArrowLeft, Code, Database, Globe, Terminal, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { skills, codingProfiles, stats, about, personal } from "@/data";

const iconMap: Record<string, React.ElementType> = {
  "Frontend": Globe,
  "Backend": Database,
  "Tools & Others": Terminal,
};

export default function About() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Background grid - same as home */}
      <div className="fixed inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-overlay pointer-events-none" />

      <Navbar />

      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="mb-16">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            <div className="stagger-children">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                About Me
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Get to <span className="text-primary">Know Me</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                I'm a passionate developer who loves building beautiful and functional web applications.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            {/* About Text */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Hello! I'm {personal.name}</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {about.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-2xl p-6 text-center card-hover">
                <div className="text-4xl font-bold text-primary mb-2">{stats.yearsOfExperience}</div>
                <div className="text-muted-foreground">Years of Experience</div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 text-center card-hover">
                <div className="text-4xl font-bold text-primary mb-2">{stats.projectsCompleted}</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 text-center card-hover">
                <div className="text-4xl font-bold text-primary mb-2">{stats.leetCodeRating}</div>
                <div className="text-muted-foreground">LeetCode Rating</div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 text-center card-hover">
                <div className="text-4xl font-bold text-primary mb-2">{stats.problemsSolved}</div>
                <div className="text-muted-foreground">Problems Solved</div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-24">
            <h2 className="text-2xl font-bold mb-12 text-center">Skills & Technologies</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(skills.categories).map(([category, skillList]) => {
                const Icon = iconMap[category] || Code;
                return (
                  <div key={category} className="bg-card border border-border rounded-2xl p-8 card-hover">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold">{category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 text-sm bg-secondary text-secondary-foreground rounded-full border border-border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Coding Profiles */}
          <div>
            <h2 className="text-2xl font-bold mb-12 text-center">Coding Profiles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {codingProfiles.map((profile) => (
                <a
                  key={profile.name}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card border border-border rounded-2xl p-8 text-center card-hover group"
                >
                  <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {profile.name}
                  </h3>
                  <p className="text-2xl font-bold text-primary">{profile.rating}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
