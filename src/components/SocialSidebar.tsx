import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/rajutkarsh07", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/utkarsh-raj-a73612202/", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/utkarsh_raj_07", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/utkarshhh__", label: "Instagram" },
  { icon: Mail, href: "mailto:contact@utkarshraj.dev", label: "Email" },
];

export function SocialSidebar() {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
      {socialLinks.map((link, index) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg border border-border bg-background/80 backdrop-blur-sm text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all duration-200 hover:-translate-y-0.5"
          style={{ animationDelay: `${index * 100}ms` }}
          aria-label={link.label}
        >
          <link.icon className="h-4 w-4" />
        </a>
      ))}
      <div className="w-px h-20 bg-border mx-auto mt-2" />
    </div>
  );
}
