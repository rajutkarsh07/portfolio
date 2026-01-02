// Type definitions for portfolio data

export interface Personal {
    name: string;
    firstName: string;
    lastName: string;
    title: string;
    tagline: string;
    roles: string[];
    bio: string;
    currentCompany: string;
    profileImage: string;
    aboutImage: string;
    funFact: string;
}

export interface Contact {
    email: string;
    emailSecondary: string;
    location: string;
    locationDescription: string;
    openToRelocate: boolean;
    buyMeCoffee: string;
}

export interface Social {
    name: string;
    username: string;
    url: string;
    icon: string;
}

export interface Education {
    institution: string;
    degree: string;
    duration: string;
    location: string;
    description: string;
}

export interface Experience {
    company: string;
    role: string;
    duration: string;
    location: string;
    logo: string;
    current: boolean;
    url: string;
    description: string[];
}

export interface Skill {
    name: string;
    category: string;
}

export interface SkillWithIcon {
    name: string;
    icon: string;
}

export interface Skills {
    categories: Record<string, SkillWithIcon[]>;
    simple: (Skill & { icon?: string })[];
}

export interface CodingProfile {
    name: string;
    username: string;
    url: string;
    logo?: string;
}

export interface Stats {
    yearsOfExperience: string;
    projectsCompleted: string;
    leetCodeRating: string;
    problemsSolved: string;
}

export interface MajorProject {
    title: string;
    description: string;
    tech: string[];
    image: string;
    github: string;
    live: string;
    featured: boolean;
}

export interface PinnedProject {
    title: string;
    description: string;
    language: string;
    github: string;
    stars: number;
    forks: number;
    isForked: boolean;
    forkedFrom?: string;
}

export interface Projects {
    major: MajorProject[];
    pinned: PinnedProject[];
}

export interface About {
    intro: string;
    shortBio: string;
    longBio: string;
    paragraphs: string[];
}

export interface NavItem {
    label: string;
    href: string;
}

export interface PortfolioData {
    personal: Personal;
    contact: Contact;
    socials: Social[];
    education: Education;
    experiences: Experience[];
    skills: Skills;
    codingProfiles: CodingProfile[];
    stats: Stats;
    projects: Projects;
    about: About;
    navigation: NavItem[];
}
