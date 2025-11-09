# Vladimir Nasalciuc - Personal Portfolio Website

A modern, professional portfolio website built with Astro 4.0, showcasing AI/ML projects, research articles, and professional experience.

## 🌟 Features

### 📱 Multi-Page Architecture
- **Homepage**: Professional introduction with CV-style layout
- **About**: Comprehensive professional story, education, and achievements  
- **Projects**: 8 detailed AI/ML projects with filtering and individual pages
- **Articles**: Technical articles and research papers with search functionality
- **Contact**: Interactive contact form with social links and FAQ

### 🎨 Design & UX
- **CV-Inspired Layout**: Blue sidebar navigation with white main content
- **Responsive Design**: Mobile-friendly across all devices
- **Interactive Elements**: Filtering, search, forms, and dynamic content
- **Professional Styling**: Clean, modern aesthetic matching CV design

### ⚡ Technical Features
- **Dynamic Routing**: Individual pages for projects and articles
- **Content Collections**: Structured data management with TypeScript
- **Static Site Generation**: Fast loading and SEO optimized
- **GitHub Actions**: Automated deployment to GitHub Pages

## 🚀 Technologies Used

### Core Framework
- **Astro 4.0** - Static Site Generator
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework (adapted to CV design)

### Content Management
- **Astro Content Collections** - Type-safe content management
- **Markdown** - Article and project content authoring
- **Frontmatter** - Structured metadata for content

### Deployment
- **GitHub Pages** - Free static site hosting
- **GitHub Actions** - Automated CI/CD pipeline
- **Node.js 20** - Runtime environment

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   └── Sidebar.astro
├── content/
│   ├── projects/
│   │   ├── tsunami-prediction.md
│   │   ├── real-estate-prediction.md
│   │   └── social-media-automation.md
│   └── articles/
│       └── config.ts
├── layouts/
│   ├── Layout.astro
│   └── CVLayout.astro
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── projects.astro
│   ├── articles.astro
│   ├── contact.astro
│   ├── projects/
│   │   └── [slug].astro
│   └── articles/
│       └── [slug].astro
└── styles/
    └── global.css
```

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- Git

### Installation
```bash
# Clone the repository
git clone https://github.com/vladimirnasalciuc/personal-site.git

# Navigate to project directory
cd personal-site

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run astro        # Run Astro CLI commands
```

### Development Server
The development server will be available at `http://localhost:4321` (or next available port).

## 📝 Content Management

### Adding New Projects
1. Create a new `.md` file in `src/content/projects/`
2. Add frontmatter with required fields:
   ```yaml
   ---
   title: "Project Title"
   description: "Project description"
   category: "Category Name"
   period: "2024 - Present"
   status: "Production"
   technologies: ["Tech1", "Tech2"]
   github: "https://github.com/username/repo"
   featured: true
   publishedDate: 2024-01-15
   ---
   ```
3. Write project content in Markdown below the frontmatter

### Adding New Articles
1. Create a new `.md` file in `src/content/articles/`
2. Add frontmatter with required fields:
   ```yaml
   ---
   title: "Article Title"
   description: "Article description"
   category: "Category Name"
   publishedDate: 2024-01-15
   tags: ["AI", "Machine Learning"]
   venue: "Publication Venue"
   ---
   ```
3. Write article content in Markdown below the frontmatter

## 🚀 Deployment

### Automatic Deployment
The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions.

### Manual Deployment
```bash
# Build the site
npm run build

# The built site will be in the `dist/` directory
# Upload the contents to your hosting provider
```

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: <1.2s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1
- **Time to Interactive**: <3s

## 🌐 Live Demo

Visit the live site: [https://nasalciuc.github.io](https://nasalciuc.github.io)

## 📧 Contact

**Vladimir Nasalciuc**
- Email: vladimir.nasalciuc@gmail.com
- LinkedIn: [linkedin.com/in/vladimir-nasalciuc](https://linkedin.com/in/vladimir-nasalciuc)
- GitHub: [github.com/vladimirnasalciuc](https://github.com/vladimirnasalciuc)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [GitHub Pages](https://pages.github.com/)
- Icons and emojis for visual enhancement

---

*Last updated: November 2025*