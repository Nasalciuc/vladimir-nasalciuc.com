Vladimir Nasalciuc - Vanilla JavaScript Portfolio
Overview
Complete conversion of the Astro portfolio to vanilla JavaScript, HTML, and CSS. This maintains the exact same design and functionality while providing a lightweight, fast-loading static website.

Features
Responsive Design: Mobile-first approach with smooth animations
Dynamic Content: JSON-driven content loading
Modern JavaScript: ES6+ classes and modules
Performance Optimized: Minimal dependencies, fast loading
SEO Friendly: Proper meta tags and structured markup
Structure
portfolio/
├── index.html          # Homepage with CV layout
├── about.html           # About page with timeline
├── projects.html        # Projects showcase with filtering
├── articles.html        # Technical articles page
├── css/
│   ├── main.css        # Core styles and CV layout
│   ├── sidebar.css     # Navigation sidebar
│   └── mobile.css      # Mobile responsive styles
├── js/
│   ├── main.js         # Portfolio class and core functionality
│   ├── sidebar.js      # Sidebar navigation component
│   └── projects.js     # Projects filtering and modal
├── data/
│   └── portfolio.json  # All portfolio content and data
└── images/            # Portfolio images (placeholder)
Technologies Used
HTML5: Semantic markup with accessibility features
CSS3: Modern CSS with Grid, Flexbox, and custom properties
JavaScript ES6+: Classes, modules, async/await
JSON: Centralized data management
Responsive Design: Mobile-first CSS with media queries
Key Features
Homepage (index.html)
Professional CV layout
Dynamic content loading from JSON
Responsive design with mobile navigation
Smooth animations and interactions
About Page (about.html)
Professional timeline
Skills categorization
Statistics overview
Philosophy and approach sections
Projects Page (projects.html)
Project filtering by category
Detailed project modals
Technology badges
GitHub and demo links
Articles Page (articles.html)
Article search functionality
Category filtering
Featured article section
Technical writing showcase
Mobile Features
Hamburger menu navigation
Touch-friendly interactions
Optimized layouts for small screens
Fast loading on mobile networks
Browser Support
Chrome/Edge 80+
Firefox 75+
Safari 13+
Mobile browsers (iOS Safari, Chrome Mobile)
Performance
No external dependencies (except Google Fonts)
Optimized CSS and JavaScript
Lazy loading for images
Efficient DOM manipulation
Deployment
Ready for deployment to any static hosting service:

GitHub Pages
Netlify
Vercel
Firebase Hosting
Simply upload the portfolio/ folder contents to your hosting service.

Local Development
Open index.html in a modern web browser. For full functionality:

Use a local server (e.g., python -m http.server or Live Server extension)
Access via http://localhost:port/index.html
Customization
Content: Edit data/portfolio.json
Styling: Modify CSS files in css/ folder
Functionality: Update JavaScript files in js/ folder
Pages: Add new HTML files following existing patterns
Future Enhancements
Blog system integration
Contact form functionality
Advanced animations
PWA capabilities
Analytics integration
