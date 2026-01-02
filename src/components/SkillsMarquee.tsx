import { useRef, useEffect, useState } from "react";
import { skills } from "@/data";
import { SkillWithIcon } from "@/data/types";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface SkillRowProps {
    skills: SkillWithIcon[];
    direction: "left" | "right";
    scrollVelocity: number;
}

const SkillRow = ({ skills, direction, scrollVelocity }: SkillRowProps) => {
    const rowRef = useRef<HTMLDivElement>(null);
    const [offset, setOffset] = useState(0);

    // Duplicate skills to create seamless loop
    const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

    useEffect(() => {
        // Calculate movement based on scroll velocity and direction
        const movementSpeed = direction === "left" ? -1 : 1;
        setOffset((prev) => {
            const newOffset = prev + scrollVelocity * movementSpeed * 0.5;
            // Reset offset when it exceeds the width of one set of skills
            const resetPoint = skills.length * 100; // Approximate width per skill item
            if (Math.abs(newOffset) > resetPoint) {
                return 0;
            }
            return newOffset;
        });
    }, [scrollVelocity, direction, skills.length]);

    return (
        <div className="skills-row-container">
            {/* Scrolling Container */}
            <div className="skills-marquee-wrapper">
                <div className="skills-marquee-fade-left" />
                <div className="skills-marquee-fade-right" />

                <div
                    ref={rowRef}
                    className="skills-marquee-track"
                    style={{
                        transform: `translateX(${offset}px)`,
                    }}
                >
                    {duplicatedSkills.map((skill, index) => (
                        <Tooltip key={`${skill.name}-${index}`}>
                            <TooltipTrigger asChild>
                                <div className="skill-item">
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        className="skill-item-icon"
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
        </div>
    );
};

export const SkillsMarquee = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollVelocity, setScrollVelocity] = useState(0);
    const lastScrollY = useRef(0);
    const animationFrame = useRef<number>();
    const velocityDecay = useRef<number>();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const velocity = currentScrollY - lastScrollY.current;
            lastScrollY.current = currentScrollY;

            // Clamp velocity for smoother animation
            const clampedVelocity = Math.max(-50, Math.min(50, velocity));
            setScrollVelocity(clampedVelocity);

            // Clear any existing decay timeout
            if (velocityDecay.current) {
                clearTimeout(velocityDecay.current);
            }

            // Gradually decay velocity when scrolling stops
            velocityDecay.current = window.setTimeout(() => {
                const decayAnimation = () => {
                    setScrollVelocity((prev) => {
                        const newVelocity = prev * 0.95;
                        if (Math.abs(newVelocity) < 0.1) {
                            return 0;
                        }
                        animationFrame.current = requestAnimationFrame(decayAnimation);
                        return newVelocity;
                    });
                };
                decayAnimation();
            }, 50);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (animationFrame.current) {
                cancelAnimationFrame(animationFrame.current);
            }
            if (velocityDecay.current) {
                clearTimeout(velocityDecay.current);
            }
        };
    }, []);

    // Get skills categories
    const categories = Object.entries(skills.categories);

    // Direction pattern: left, right, left
    const directions: ("left" | "right")[] = ["left", "right", "left"];

    return (
        <div ref={containerRef} className="skills-marquee-section-fullscreen">
            <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    Tech Stack
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Skills & Technologies</h2>
            </div>

            <div className="skills-rows-fullscreen">
                {categories.map(([category, skillList], index) => (
                    <SkillRow
                        key={category}
                        skills={skillList}
                        direction={directions[index]}
                        scrollVelocity={scrollVelocity}
                    />
                ))}
            </div>
        </div>
    );
};
