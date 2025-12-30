import { personal, about, skills, codingProfiles } from "@/data";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Type for skill with icon
interface SkillWithIcon {
  name: string;
  category: string;
  icon: string;
}

export function AboutSection() {
  return (
    <TooltipProvider delayDuration={0}>
      <section id="about" className="py-32 bg-secondary/30 relative">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Know <span className="text-primary">More</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-elevated">
                <img
                  src={personal.aboutImage}
                  alt={personal.name}
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-2xl -z-10" />
            </div>

            {/* Content */}
            <div className="space-y-8">
              <p className="text-muted-foreground leading-relaxed text-lg">
                {about.intro} A{" "}
                {personal.roles.map((role, index) => (
                  <span key={role}>
                    <span className="text-primary font-medium">{role}</span>
                    {index < personal.roles.length - 1 && (index === personal.roles.length - 2 ? " and " : ", ")}
                  </span>
                ))}{" "}
                with a passion for crafting beautiful, responsive websites that make a difference.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {about.longBio}
              </p>

              {/* Skills - Logo Grid */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Technologies & Tools</h3>
                <div className="flex flex-wrap gap-3">
                  {(skills.simple as SkillWithIcon[]).map((skill) => (
                    <Tooltip key={skill.name}>
                      <TooltipTrigger asChild>
                        <div className="group p-3 bg-background border border-border rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer hover:scale-105">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-6 h-6 object-contain transition-transform duration-300 group-hover:scale-110"
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

              {/* Coding Profiles */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Coding Profiles</h3>
                <div className="grid grid-cols-2 gap-4">
                  {codingProfiles.slice(0, 2).map((profile) => (
                    <a
                      key={profile.name}
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-5 bg-background border border-border rounded-xl hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
                    >
                      <p className="font-medium group-hover:text-primary transition-colors">{profile.name}</p>
                      <p className="text-sm text-muted-foreground">@{profile.username}</p>
                      <p className="text-primary font-semibold mt-2">{profile.rating}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
}
