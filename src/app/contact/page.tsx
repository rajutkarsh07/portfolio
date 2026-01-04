import { ArrowLeft, Mail, MapPin, Send, MessageCircle, ArrowUpRight, Github, Linkedin, Twitter, Instagram, Gamepad2, Coffee } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { socials, contact, personal } from "@/data";

// Map icon names to actual icon components
const iconComponents: Record<string, React.ComponentType<{ className?: string }>> = {
    Github,
    Linkedin,
    Twitter,
    Instagram,
    Gamepad2,
};

// Color mapping for social links
const socialColors: Record<string, string> = {
    GitHub: "hover:bg-[#333] hover:text-white",
    LinkedIn: "hover:bg-[#0077b5] hover:text-white",
    Twitter: "hover:bg-[#1da1f2] hover:text-white",
    Instagram: "hover:bg-gradient-to-br hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] hover:text-white",
    "Chess.com": "hover:bg-[#7fa650] hover:text-white",
};

const contactMethods = [
    {
        icon: Mail,
        title: "Email",
        value: contact.email,
        description: "Drop me an email anytime",
        link: `mailto:${contact.email}`,
        action: "Send Email",
    },
    {
        icon: Coffee,
        title: "Buy Me a Coffee",
        value: "Support my work",
        description: "If you like what I do",
        link: contact.buyMeCoffee,
        action: "Buy Coffee",
    },
];

export default function Contact() {
    return (
        <div className="min-h-screen bg-background relative flex flex-col">
            {/* Background grid - same as home */}
            <div className="fixed inset-0 bg-grid opacity-30 pointer-events-none" />
            <div className="fixed inset-0 bg-gradient-overlay pointer-events-none" />

            <Navbar />

            <main className="pt-24 pb-16 relative z-10 flex-1">
                <div className="container mx-auto px-6 lg:px-12">
                    {/* Header */}
                    <div className="mb-16">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to Home
                        </Link>

                        <div className="stagger-children">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                                Contact
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                Let's <span className="text-primary">Connect</span>
                            </h1>
                            <p className="text-muted-foreground text-lg max-w-2xl">
                                I'm always excited to discuss new opportunities, collaborate on interesting projects, or simply have a friendly chat about tech.
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
                        {/* Left Column - Contact Methods */}
                        <div className="lg:col-span-3 space-y-8">
                            {/* Main CTA Card */}
                            <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20 rounded-3xl p-8 md:p-12">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="p-4 rounded-2xl bg-primary/20">
                                        <MessageCircle className="h-8 w-8 text-primary" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-bold mb-2">Say Hello!</h2>
                                        <p className="text-muted-foreground">
                                            Whether you have a question or just want to connect, my inbox is always open.
                                        </p>
                                    </div>
                                </div>

                                <Button size="lg" asChild className="gap-2 w-full sm:w-auto">
                                    <a href={`mailto:${contact.email}`}>
                                        <Send className="h-5 w-5" />
                                        Send a Message
                                        <ArrowUpRight className="h-4 w-4" />
                                    </a>
                                </Button>
                            </div>

                            {/* Contact Methods Grid */}
                            <div className="grid sm:grid-cols-2 gap-6">
                                {contactMethods.map((method) => (
                                    <a
                                        key={method.title}
                                        href={method.link}
                                        target={method.link.startsWith('mailto') ? undefined : '_blank'}
                                        rel={method.link.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                                        className="group bg-card border border-border rounded-2xl p-6 card-hover"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                                <method.icon className="h-6 w-6 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                                                    {method.title}
                                                </h3>
                                                <p className="text-muted-foreground text-sm mb-3">{method.description}</p>
                                                <p className="text-sm font-medium">{method.value}</p>
                                            </div>
                                            <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Location Card */}
                            <div className="bg-card border border-border rounded-2xl p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-xl bg-primary/10">
                                        <MapPin className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">Location</h3>
                                        <p className="text-muted-foreground mb-2">{contact.locationDescription}</p>
                                        <p className="text-sm text-muted-foreground">
                                            {contact.openToRelocate ? "Open to relocate for the right opportunity" : ""}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Social Links */}
                        <div className="lg:col-span-2">
                            <div className="sticky top-24">
                                <div className="bg-card border border-border rounded-2xl p-8">
                                    <h3 className="font-bold text-xl mb-6">Follow Me</h3>
                                    <div className="space-y-4">
                                        {socials.map((social) => {
                                            const Icon = iconComponents[social.icon] || Github;
                                            const color = socialColors[social.name] || "";
                                            return (
                                                <a
                                                    key={social.name}
                                                    href={social.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`flex items-center gap-4 p-4 rounded-xl bg-secondary border border-transparent transition-all duration-300 ${color}`}
                                                >
                                                    <Icon className="h-6 w-6" />
                                                    <span className="font-medium">{social.name}</span>
                                                    <ArrowUpRight className="h-4 w-4 ml-auto" />
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Fun Fact Card */}
                                <div className="bg-gradient-to-br from-secondary to-secondary/50 border border-border rounded-2xl p-6 mt-6">
                                    <p className="text-sm text-muted-foreground mb-2">⚡ Fun Fact</p>
                                    <p className="font-medium">{personal.funFact}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
