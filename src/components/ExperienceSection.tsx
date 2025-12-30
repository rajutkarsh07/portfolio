import { GraduationCap, Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const education = {
  institution: "Indian Institute of Information Technology, Design and Manufacturing, Jabalpur",
  degree: "B.Tech in Computer Science and Engineering",
  duration: "Dec 2021 - June 2025",
  location: "Jabalpur, India",
};

const experiences = [
  {
    company: "Palo Alto Networks",
    role: "Software Engineer Intern",
    duration: "Mar 2025 - Present",
    location: "Remote",
    logo: "https://images.ctfassets.net/ajuyecyagjo7/4A23Wo3eqKrcd0HEN3uFNe/e811019b19915946e917e64be946b504/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2Nra2Q1NzV4bjAwMmJ1OGI0NWI0cTM4YTctcGFudy1sb2dvLTJ1cC0wMS5wbmciLCJlZGl.webp",
    current: true,
    url: "https://www.paloaltonetworks.com/",
  },
  {
    company: "Oxyzo",
    role: "Software Developer Intern",
    duration: "Dec 2024 - Feb 2025",
    location: "Gurugram, India",
    logo: "https://play-lh.googleusercontent.com/Qln4yru4U2TQWalgWZ-6YW4OXebWPzLr121AWKjYq629TmPaloazDyRE7H_D0vzoX_0=w240-h480-rw",
    current: false,
    url: "https://www.oxyzo.in/",
  },
  {
    company: "Google Summer of Code 2024",
    role: "Open Source Contributor @C2SI",
    duration: "May 2024 - Aug 2024",
    location: "Remote",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/GSoC-icon.svg/768px-GSoC-icon.svg.png",
    current: false,
    url: "https://summerofcode.withgoogle.com/",
  },
  {
    company: "Deepvue.tech",
    role: "Frontend Developer Intern",
    duration: "May 2024 - July 2024",
    location: "Remote",
    logo: "https://firebasestorage.googleapis.com/v0/b/portfolio-cedc2.appspot.com/o/deepvue.png?alt=media&token=554954e0-d115-4635-b868-0e32b8ec2d3b",
    current: false,
    url: "https://deepvue.tech/",
  },
  {
    company: "The Linux Foundation",
    role: "LFX Mentee'23 @Hyperledger",
    duration: "Oct 2023 - Dec 2023",
    location: "Remote",
    logo: "https://pbs.twimg.com/profile_images/1546569468473745411/e-ZDBesX_400x400.jpg",
    current: false,
    url: "https://www.linuxfoundation.org/",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Background
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Education & <span className="text-primary">Experience</span>
          </h2>
        </div>

        {/* Education Card */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-primary/10">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold">Education</h3>
          </div>
          
          <div className="bg-card border border-border rounded-2xl p-8 shadow-card card-hover">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">{education.degree}</h4>
                  <p className="text-muted-foreground text-lg mb-3">{education.institution}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {education.duration}
                    </span>
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {education.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-primary/10">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold">Work Experience</h3>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-transparent" />

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={exp.company}
                  className="relative pl-24 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-5 top-10 z-10">
                    <div
                      className={`w-7 h-7 rounded-full border-4 border-background ${
                        exp.current 
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
                    className="block bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card card-hover group/card"
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
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-bold text-lg group-hover/card:text-primary transition-colors">
                                {exp.company}
                              </h4>
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
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="h-4 w-4" />
                            {exp.duration}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
