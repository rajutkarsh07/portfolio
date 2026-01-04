import { ArrowLeft, GraduationCap, Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { education, experiences } from "@/data";

export default function Experience() {
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
                Experience
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                My <span className="text-primary">Journey</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                A timeline of my professional experience and educational background in software development.
              </p>
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Education</h2>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 card-hover">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{education.degree}</h3>
                  <p className="text-primary font-medium mb-3">{education.institution}</p>
                  <p className="text-muted-foreground mb-4">{education.description}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {education.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      {education.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Work Experience</h2>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-transparent hidden md:block" />

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div
                    key={exp.company}
                    className="relative md:pl-24 group"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-5 top-10 z-10 hidden md:block">
                      <div
                        className={`w-7 h-7 rounded-full border-4 border-background ${exp.current
                            ? "bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.5)]"
                            : "bg-muted-foreground/30"
                          } group-hover:scale-125 transition-transform duration-300`}
                      />
                    </div>

                    {/* Card */}
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-card border border-border rounded-2xl p-6 md:p-8 card-hover group/card"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                        {/* Company Logo */}
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-secondary flex-shrink-0 border border-border">
                          <img
                            src={exp.logo}
                            alt={exp.company}
                            className="w-full h-full object-contain p-2"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="font-bold text-xl group-hover/card:text-primary transition-colors">
                                  {exp.company}
                                </h3>
                                <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover/card:opacity-100 transition-opacity" />
                              </div>
                              <p className="text-muted-foreground font-medium">{exp.role}</p>
                            </div>

                            {exp.current && (
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                Current
                              </span>
                            )}
                          </div>

                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                            <span className="flex items-center gap-1.5">
                              <Calendar className="h-4 w-4" />
                              {exp.duration}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <MapPin className="h-4 w-4" />
                              {exp.location}
                            </span>
                          </div>

                          <ul className="space-y-2">
                            {exp.description.map((item, i) => (
                              <li key={i} className="text-muted-foreground flex items-start gap-2 text-sm">
                                <span className="text-primary mt-1">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
