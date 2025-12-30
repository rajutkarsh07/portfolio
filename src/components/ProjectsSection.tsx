import { Github, ExternalLink, ArrowRight, Star, GitFork, Folder } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const majorProjects = [
  {
    title: "CodeNova",
    description:
      "Social media platform exclusively designed for programmers, where users receive personalized problem recommendations based on their skill ratings and rankings.",
    tech: ["React", "Express", "Node", "MongoDB", "Socket.io", "Chart.js"],
    image: "http://res.cloudinary.com/df4t1zu7e/image/upload/v1694023728/mawat7wvt0c3bwdacqel.jpg",
    github: "https://github.com/rajutkarsh07/CodeNova",
    live: "#",
  },
  {
    title: "Fiverr Clone",
    description:
      "Freelancing platform designed to connect talented freelancers with discerning clients seamlessly.",
    tech: ["React JS", "Node JS", "Express JS", "MongoDB", "React Query", "Firebase"],
    image: "https://firebasestorage.googleapis.com/v0/b/fiverr-clone-dfff6.appspot.com/o/fiverr-clone%2Fimages%2Ffiverr.png?alt=media&token=8c23436f-9a04-438d-a2ce-a9ddf13f9def",
    github: "https://github.com/rajutkarsh07/Fiverr-clone",
    live: "#",
  },
];

// Pinned repos from GitHub profile
const pinnedProjects = [
  {
    title: "Webiu",
    description: "Building and maintaining a website is an essential task for any business or organization. This project aims to ease the workflow of getting a website up and running.",
    language: "JavaScript",
    github: "https://github.com/rajutkarsh07/Webiu",
    stars: 0,
    forks: 0,
    isForked: true,
    forkedFrom: "c2siorg/Webiu",
  },
  {
    title: "FlagRush",
    description: "A website where users can practice their bug-finding skills and capture flags from intentionally vulnerable pages.",
    language: "JavaScript",
    github: "https://github.com/rajutkarsh07/FlagRush",
    stars: 0,
    forks: 4,
    isForked: false,
  },
  {
    title: "stdlib",
    description: "Standard library for JavaScript and Node.js. A comprehensive library for numerical computing.",
    language: "JavaScript",
    github: "https://github.com/rajutkarsh07/stdlib",
    stars: 0,
    forks: 0,
    isForked: true,
    forkedFrom: "stdlib-js/stdlib",
  },
  {
    title: "portfolio-updated",
    description: "My personal portfolio website showcasing my projects, skills, and experience as a developer.",
    language: "SCSS",
    github: "https://github.com/rajutkarsh07/portfolio-updated",
    stars: 4,
    forks: 4,
    isForked: false,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20 stagger-children">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Major <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A selection of projects I've worked on. Each one taught me something new.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-24">
          {majorProjects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-card border border-border rounded-3xl overflow-hidden card-hover"
            >
              {/* Project Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover overlay with buttons */}
                <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="lg" variant="secondary" asChild className="gap-2 bg-background/90 hover:bg-background">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                      Code
                    </a>
                  </Button>
                  <Button size="lg" asChild className="gap-2">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <span className="text-primary text-sm font-semibold tracking-wide uppercase mb-3 block">
                  Featured Project
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1.5 text-sm font-medium bg-secondary text-secondary-foreground rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pinned Projects from GitHub */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Github className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold">Pinned on GitHub</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {pinnedProjects.map((project) => (
              <a
                key={project.title}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card border border-border rounded-2xl p-6 card-hover flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-secondary">
                      <Folder className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      {project.isForked && (
                        <p className="text-xs text-muted-foreground">
                          Forked from {project.forkedFrom}
                        </p>
                      )}
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <span className={`w-3 h-3 rounded-full ${
                        project.language === 'JavaScript' ? 'bg-yellow-400' :
                        project.language === 'TypeScript' ? 'bg-blue-500' :
                        project.language === 'SCSS' ? 'bg-pink-500' :
                        'bg-muted-foreground'
                      }`} />
                      {project.language}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    {project.stars > 0 && (
                      <span className="flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        {project.stars}
                      </span>
                    )}
                    {project.forks > 0 && (
                      <span className="flex items-center gap-1">
                        <GitFork className="h-4 w-4" />
                        {project.forks}
                      </span>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* View All Projects Link */}
        <div className="text-center">
          <Button variant="outline" size="lg" asChild className="gap-2">
            <Link to="/projects">
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
