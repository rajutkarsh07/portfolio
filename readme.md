# Utkarsh Raj - Portfolio

A modern, responsive personal portfolio website showcasing my projects, skills, and experience as a Full Stack Web Developer. Built with modern web technologies to ensure high performance and an excellent user experience.

## ✨ Features

-   **Modern UI/UX**: Clean, dark-themed design with glassmorphism effects and smooth transitions.
-   **Dynamic Projects**: Automatically fetches and displays "Pinned" repositories from GitHub using the GitHub GraphQL API.
-   **Interactive Elements**: 
    -   Scroll-based animations.
    -   Hover effects on project cards and social links.
-   **Fully Responsive**: optimized for all device sizes from mobile calls to large desktop screens.
-   **Portfolio Data**: Centralized JSON-based configuration for easy updates to bio, skills, experience, and projects.

## 🛠️ Tech Stack

-   **Frontend**: React, TypeScript, Vite
-   **Styling**: Tailwind CSS
-   **Icons**: Lucide React, Devicon
-   **State/Data**: React Query (TanStack Query) — *used for efficient data fetching*
-   **Routing**: React Router DOM

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

-   Node.js (v18 or higher recommended)
-   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/rajutkarsh07/portfolio-updated.git
    cd portfolio-updated
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Environment Setup**
    This project uses the GitHub GraphQL API to fetch your pinned projects. You need a GitHub Personal Access Token (PAT) with `read:user` and `public_repo` permissions.

    Create a `.env` file in the root directory:
    ```bash
    touch .env
    ```

    Add your token to the `.env` file:
    ```env
    VITE_GITHUB_TOKEN=your_github_pat_here
    ```

    > **Note:** Without this token, the "Pinned Projects" section will fail to load live data and may fall back to hardcoded placeholders or show an error.

4.  **Run the development server**
    ```bash
    npm run dev
    ```

    The site will be available at `http://localhost:8080` (or whatever port Vite assigns).

## 📁 Project Structure

```
src/
├── assets/         # Static assets like images
├── components/     # Reusable UI components (Hero, Navbar, Footer, etc.)
├── data/           # Centralized data files (portfolio.json)
├── hooks/          # Custom React hooks (useGitHubRepos)
├── pages/          # Page components (Home, About, Projects, Contact)
├── App.tsx         # Main application component with Routing
└── main.tsx        # Entry point
```

## 📝 Configuration

Most of the content (Bio, Experience, Skills, Social Links) is managed in `src/data/portfolio.json`. You can update this file to instantly reflect changes across the website without modifying the React components.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
