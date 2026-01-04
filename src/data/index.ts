// Central data export file
import portfolioData from './portfolio.json';
import type { PortfolioData } from './types';

// Export the data with proper typing
export const data = portfolioData as PortfolioData;

// Export individual sections for convenience
export const personal = data.personal;
export const contact = data.contact;
export const socials = data.socials;
export const education = data.education;
export const experiences = data.experiences;
export const skills = data.skills;
export const codingProfiles = data.codingProfiles;
export const stats = data.stats;
export const projects = data.projects;
export const about = data.about;
export const navigation = data.navigation;

// Re-export types
export * from './types';
