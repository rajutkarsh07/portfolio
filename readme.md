# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Animations:** Tailwind CSS Animate
- **Data Fetching:** TanStack Query (React Query)
- **Theme:** next-themes (Dark/Light mode)

## ✨ Features

### SEO Optimized
- **Meta Tags:** Dynamic titles, descriptions, and keywords for each page
- **Open Graph:** Rich social media previews for Facebook, LinkedIn, etc.
- **Twitter Cards:** Optimized Twitter sharing with large image cards
- **Structured Data:** JSON-LD schemas for Person, Website, and Projects
- **Sitemap:** Auto-generated XML sitemap for search engines
- **Robots.txt:** Optimized crawler directives
- **Canonical URLs:** Prevent duplicate content issues
- **Semantic HTML:** Proper heading hierarchy and HTML5 elements

### Performance
- **Next.js App Router:** Server-side rendering and static generation
- **Image Optimization:** Automatic image optimization
- **Code Splitting:** Optimized bundle sizes
- **Fast Page Loads:** Lighthouse score optimized

### User Experience
- **Dark/Light Mode:** System-aware theme switching
- **Responsive Design:** Mobile-first, works on all devices
- **Smooth Animations:** Tailwind CSS animations
- **Interactive Components:** Dynamic data fetching from GitHub API
- **Accessibility:** ARIA labels and keyboard navigation

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/rajutkarsh07/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

4. Add your environment variables to `.env`:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GITHUB_TOKEN=your_github_personal_access_token
```

## 🔑 Environment Variables

### Site URL (Required for SEO)

Set your production domain URL:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

This is used for:
- Generating canonical URLs
- Creating sitemap.xml
- Open Graph tags
- Structured data

### GitHub Token Setup

To fetch your GitHub repositories dynamically, you need a GitHub Personal Access Token:

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name (e.g., "Portfolio Website")
4. Select scopes: `public_repo` (or `repo` for private repos)
5. Generate and copy the token
6. Add it to your `.env` file as `NEXT_PUBLIC_GITHUB_TOKEN`

## 🏃‍♂️ Running the Project

### Development Mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets (images, fonts, etc.)
├── src/
│   ├── app/            # Next.js app directory
│   │   ├── layout.tsx  # Root layout
│   │   ├── page.tsx    # Home page
│   │   ├── about/      # About page
│   │   ├── projects/   # Projects page
│   │   ├── experience/ # Experience page
│   │   └── contact/    # Contact page
│   ├── components/     # React components
│   │   ├── ui/        # UI components (shadcn/ui)
│   │   └── ...        # Feature components
│   ├── data/          # Data files and types
│   │   ├── portfolio.json
│   │   ├── types.ts
│   │   └── index.ts
│   ├── hooks/         # Custom React hooks
│   └── lib/           # Utility functions
├── .env               # Environment variables (not committed)
├── .env.example       # Example environment variables
├── next.config.mjs    # Next.js configuration
├── tailwind.config.ts # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```

## 🎨 Customization

### Update Portfolio Data

Edit `src/data/portfolio.json` to customize:
- Personal information
- Projects
- Skills
- Experience
- Education
- Social links
- Contact information

### Update Styling

- Global styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Theme colors: CSS variables in `globals.css`

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Add environment variables in Netlify dashboard

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- AWS Amplify
- Railway
- Render
- etc.

## 🔍 SEO Configuration

This portfolio is fully optimized for search engines. See detailed documentation:

- **[SEO.md](./SEO.md)** - Complete SEO implementation guide
- **[SEO_QUICK_GUIDE.md](./SEO_QUICK_GUIDE.md)** - Quick reference for updates

### Quick Setup

1. Set your site URL in `.env`:
   ```env
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   ```

2. After deployment, submit your sitemap to search engines:
   - Google Search Console: `https://your-domain.com/sitemap.xml`
   - Bing Webmaster Tools: `https://your-domain.com/sitemap.xml`

3. Add search engine verification codes in `src/lib/seo.ts`

### SEO Features Included

✅ Dynamic meta tags for all pages  
✅ Open Graph tags for social sharing  
✅ Twitter Card metadata  
✅ JSON-LD structured data (Person, Website, Projects)  
✅ Auto-generated sitemap.xml  
✅ Optimized robots.txt  
✅ Canonical URLs  
✅ Semantic HTML structure  

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Utkarsh Raj**
- GitHub: [@rajutkarsh07](https://github.com/rajutkarsh07)
- LinkedIn: [utkarshraj1306](https://www.linkedin.com/in/utkarshraj1306/)

## ⭐ Show your support

Give a ⭐️ if you like this project!
