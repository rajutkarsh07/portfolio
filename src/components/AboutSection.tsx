const skills = [
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Redux", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Figma", category: "Design" },
  { name: "Git", category: "Tools" },
  { name: "Docker", category: "DevOps" },
];

const codingProfiles = [
  { name: "Codeforces", username: "utkarsh_raj_13", rating: "1609 (Expert)" },
  { name: "LeetCode", username: "utkarsh_raj_13", rating: "1800+" },
];

export function AboutSection() {
  return (
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
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-cedc2.appspot.com/o/utkarshimg.png?alt=media&token=a46b9e8b-c74d-4b2d-b010-d7a4dee585cc"
                alt="Utkarsh Raj"
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
              Hi, I'm <span className="text-foreground font-medium">Utkarsh Raj</span> from Indian
              Institute of Information Technology, Design and Manufacturing, Jabalpur. A{" "}
              <span className="text-primary font-medium">Full Stack Web Developer</span>,{" "}
              <span className="text-primary font-medium">UI/UX Designer</span> and{" "}
              <span className="text-primary font-medium">Competitive Programmer</span> with a passion
              for crafting beautiful, responsive websites that make a difference.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With years of experience and a love for all things tech, I'm always looking for new and
              innovative ways to improve my skills and create cutting-edge designs. I understand that
              the key to a successful website is not just how it looks, but also how it functions.
            </p>

            {/* Skills */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Technologies & Tools</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium hover:border-primary/50 hover:bg-primary/5 transition-colors duration-200 cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Coding Profiles */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Coding Profiles</h3>
              <div className="grid grid-cols-2 gap-4">
                {codingProfiles.map((profile) => (
                  <div
                    key={profile.name}
                    className="p-5 bg-background border border-border rounded-xl hover:border-primary/30 transition-colors"
                  >
                    <p className="font-medium">{profile.name}</p>
                    <p className="text-sm text-muted-foreground">{profile.username}</p>
                    <p className="text-primary font-semibold mt-2">{profile.rating}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
