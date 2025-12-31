import { personal, about, skills, codingProfiles } from "@/data";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useCodingProfiles } from "@/hooks/useCodingRatings";
import { Loader2 } from "lucide-react";

// Type for skill with icon
interface SkillWithIcon {
  name: string;
  category: string;
  icon: string;
}

export function AboutSection() {
  // Fetch real-time data from APIs
  const profiles = useCodingProfiles({
    codeforces: 'utkarsh_raj_13',
    leetcode: 'utkarsh_raj_13',
    github: 'rajutkarsh07',
  });

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

              {/* Coding Profiles - Premium Compact Design */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Coding Profiles</h3>
                <div className="space-y-3">
                  {/* Codeforces */}
                  <a
                    href={codingProfiles.find(p => p.name === 'Codeforces')?.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block relative overflow-hidden rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center gap-4 p-4">
                      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-yellow-500/20 to-red-500/20 flex items-center justify-center">
                        <img
                          src={codingProfiles.find(p => p.name === 'Codeforces')?.logo}
                          alt="Codeforces"
                          className="h-6 w-6 object-contain"
                        />
                      </div>
                      <div className="flex-1 flex flex-wrap items-center gap-3">
                        <span className="font-semibold group-hover:text-primary transition-colors">{profiles.codeforces.username}</span>
                        {profiles.codeforces.loading ? (
                          <Loader2 className="h-4 w-4 text-primary animate-spin" />
                        ) : !profiles.codeforces.error && (
                          <>
                            <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-secondary/50">
                              <span className="text-xs text-muted-foreground">Rating:</span>
                              <span className="text-sm font-bold text-primary">{profiles.codeforces.rating}</span>
                            </div>
                            <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-secondary/50">
                              <span className="text-xs text-muted-foreground">Max:</span>
                              <span className="text-sm font-bold">{profiles.codeforces.maxRating}</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </a>

                  {/* LeetCode */}
                  <a
                    href={codingProfiles.find(p => p.name === 'LeetCode')?.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block relative overflow-hidden rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center gap-4 p-4">
                      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center">
                        <img
                          src={codingProfiles.find(p => p.name === 'LeetCode')?.logo}
                          alt="LeetCode"
                          className="h-6 w-6 object-contain"
                        />
                      </div>
                      <div className="flex-1 flex flex-wrap items-center gap-2">
                        <span className="font-semibold group-hover:text-primary transition-colors">{profiles.leetcode.username}</span>
                        {profiles.leetcode.loading ? (
                          <Loader2 className="h-4 w-4 text-primary animate-spin" />
                        ) : !profiles.leetcode.error && (
                          <>
                            <div className="px-2 py-1 rounded-lg bg-primary/10">
                              <span className="text-sm font-bold text-primary">{profiles.leetcode.totalSolved}</span>
                              <span className="text-xs text-muted-foreground ml-1">Solved</span>
                            </div>
                            <span className="text-xs px-2 py-1 rounded-lg bg-green-500/10 text-green-500 font-medium">E:{profiles.leetcode.easySolved}</span>
                            <span className="text-xs px-2 py-1 rounded-lg bg-amber-500/10 text-amber-500 font-medium">M:{profiles.leetcode.mediumSolved}</span>
                            <span className="text-xs px-2 py-1 rounded-lg bg-red-500/10 text-red-500 font-medium">H:{profiles.leetcode.hardSolved}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
}
