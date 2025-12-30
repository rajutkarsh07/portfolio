import { Github, ExternalLink, ArrowLeft, Star, GitFork, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const projects = [
  {
    title: "CodeNova",
    description:
      "Social media platform exclusively designed for programmers, where users receive personalized problem recommendations based on their skill ratings and rankings. Users can also engage in stimulating discussions like Stack Overflow.",
    tech: ["React", "Express", "Node", "MongoDB", "Socket.io", "Chart.js"],
    image: "http://res.cloudinary.com/df4t1zu7e/image/upload/v1694023728/mawat7wvt0c3bwdacqel.jpg",
    github: "https://github.com/rajutkarsh07/CodeNova",
    live: "#",
    featured: true,
  },
  {
    title: "Fiverr Clone",
    description:
      "Freelancing platform designed to connect talented freelancers with discerning clients seamlessly. Freelancers can showcase their unique skills and expertise by posting captivating gigs.",
    tech: ["React JS", "Node JS", "Express JS", "MongoDB", "React Query", "Firebase"],
    image: "https://firebasestorage.googleapis.com/v0/b/fiverr-clone-dfff6.appspot.com/o/fiverr-clone%2Fimages%2Ffiverr.png?alt=media&token=8c23436f-9a04-438d-a2ce-a9ddf13f9def",
    github: "https://github.com/rajutkarsh07/Fiverr-clone",
    live: "#",
    featured: true,
  },
  {
    title: "FlagRush",
    description:
      "A website where users can practice their bug-finding skills and capture flags from intentionally vulnerable pages. Features community discussions and a leaderboard for top performers.",
    tech: ["React JS", "Node JS", "Express JS", "MongoDB", "Burpsuite"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800",
    github: "https://github.com/rajutkarsh07/FlagRush",
    live: "#",
    featured: false,
  },
];

// Pinned repos from GitHub profile
const pinnedProjects = [
  {
    title: "Webiu",
    description: "Building and maintaining a website is an essential task for any business or organization. This project aims to ease the workflow of getting a website up and running by developing a generalized web component library.",
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
    title: "CodeNova",
    description: "Social media platform for programmers with personalized problem recommendations based on skill ratings.",
    language: "JavaScript",
    github: "https://github.com/rajutkarsh07/CodeNova",
    stars: 0,
    forks: 0,
    isForked: false,
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
  {
    title: "Fiverr-clone",
    description: "Freelancing platform to connect freelancers with clients. Features gig posting and discovery.",
    language: "JavaScript",
    github: "https://github.com/rajutkarsh07/Fiverr-clone",
    stars: 0,
    forks: 0,
    isForked: false,
  },
];

export default function Projects() {
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
                Portfolio
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Major <span className="text-primary">Projects</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                A curated selection of projects I've worked on. Each one represents a unique challenge and learning experience.
              </p>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-32 mb-32">
            {projects.filter(p => p.featured).map((project, index) => (
              <div
                key={project.title}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <div className="relative group">
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/20 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />
                  <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <span className="text-primary text-sm font-semibold tracking-wide uppercase mb-3 block">
                      Featured Project
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h2>
                  </div>
                  
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {project.description}
                    </p>
                  </div>
                  
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
                  
                  <div className="flex gap-4 pt-2">
                    <Button variant="outline" size="lg" asChild className="gap-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                        View Code
                      </a>
                    </Button>
                    <Button size="lg" asChild className="gap-2">
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pinned Projects from GitHub */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-12">
              <Github className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Pinned on GitHub</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>
      </main>

      <Footer />
    </div>
  );
}
