"use client";

import { Github, Linkedin, Twitter, Instagram, Mail, Gamepad2 } from "lucide-react";
import { socials, contact } from "@/data";
import { usePathname } from "next/navigation";

// Map icon names to actual icon components
const iconComponents: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Gamepad2,
  Mail,
};

export function SocialSidebar() {
  const pathname = usePathname();

  // Hide on contact page
  if (pathname === "/contact") {
    return null;
  }

  // Create social links array with icon components
  const socialLinks = [
    ...socials.map(social => ({
      icon: iconComponents[social.icon] || Github,
      href: social.url,
      label: social.name,
    })),
    { icon: Mail, href: `mailto:${contact.email}`, label: "Email" },
  ];

  return (
    <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-4">
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
