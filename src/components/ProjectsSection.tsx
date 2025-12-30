import { Github, ExternalLink, ArrowRight, Star, GitFork, Folder } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { projects } from "@/data";

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
          {projects.major.filter(p => p.featured).map((project) => (
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
            {projects.pinned.slice(0, 4).map((project) => (
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
                      <span className={`w-3 h-3 rounded-full ${project.language === 'JavaScript' ? 'bg-yellow-400' :
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
