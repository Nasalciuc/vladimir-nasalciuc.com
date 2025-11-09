/**
 * SIDEBAR COMPONENT JAVASCRIPT
 * Handles sidebar functionality and dynamic content loading
 */

class Sidebar {
  constructor(data) {
    this.data = data;
    this.init();
  }

  init() {
    this.renderSidebar();
    this.setupPhotoFallback();
    this.updateActiveNavigation();
  }

  renderSidebar() {
    const sidebarContainer = document.querySelector('.sidebar');
    if (!sidebarContainer || !this.data) return;

    const contact = this.data.contact || {};
    const techStack = this.data.techStack || {};

    sidebarContainer.innerHTML = `
      ${this.renderProfileSection(contact)}
      ${this.renderContactInfo(contact)}
      ${this.renderNavigation()}
      ${this.renderTechStack(techStack)}
    `;
  }

  renderProfileSection(contact) {
    return `
      <div class="profile-section">
        <div class="photo-placeholder">
          <img src="./images/vladimir-photo.jpg" 
               alt="${contact.name || 'Vladimir Nasalciuc'}" 
               class="profile-photo" 
               loading="eager"
               onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
          <div class="profile-initials" style="display: none;">VN</div>
        </div>
        <div class="name">${contact.name || 'VLADIMIR NASALCIUC'}</div>
        <div class="title">${contact.title || 'AI Developer & ML Specialist'}</div>
      </div>
    `;
  }

  renderContactInfo(contact) {
    const contactItems = [
      { icon: '📧', text: contact.email, link: `mailto:${contact.email}` },
      { icon: '📱', text: contact.phone, link: `tel:${contact.phone}` },
      { icon: '📍', text: contact.location },
      { icon: '🔗', text: 'github.com/Nasalciuc', link: contact.github },
      { icon: '💼', text: 'LinkedIn Profile', link: contact.linkedin }
    ].filter(item => item.text);

    return `
      <div class="contact-info">
        ${contactItems.map(item => `
          <div class="contact-item">
            <span class="contact-icon">${item.icon}</span>
            ${item.link ? 
              `<a href="${item.link}" target="_blank" class="link">${item.text}</a>` : 
              `<span>${item.text}</span>`
            }
          </div>
        `).join('')}
      </div>
    `;
  }

  renderNavigation() {
    const navigationItems = [
      { name: 'Home', href: './', icon: '🏠' },
      { name: 'About', href: './about.html', icon: '👨‍💻' },
      { name: 'Projects', href: './projects.html', icon: '🚀' },
      { name: 'Articles', href: './articles.html', icon: '📝' }
    ];

    return `
      <div class="navigation">
        <h3 class="section-title">Navigation</h3>
        <ul class="nav-list">
          ${navigationItems.map(item => `
            <li class="nav-item">
              <a href="${item.href}" class="nav-link" data-page="${item.name.toLowerCase()}">
                <span class="nav-icon">${item.icon}</span>
                ${item.name}
              </a>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }

  renderTechStack(techStack) {
    const categories = [
      {
        title: 'AI & Machine Learning',
        content: techStack.ai_ml || 'LangChain, LangGraph, scikit-learn, XGBoost, PyTorch'
      },
      {
        title: 'Development & Infrastructure',
        content: techStack.development || 'Python, JavaScript, TypeScript, FastAPI, Docker'
      },
      {
        title: 'Data Science & Research',
        content: techStack.data_science || 'pandas, NumPy, Plotly, Statistical Analysis'
      },
      {
        title: 'Domain Expertise',
        content: techStack.domain || 'Conversational AI, Business Intelligence'
      }
    ];

    return `
      <div class="tech-stack">
        <h3 class="section-title">Core Technologies</h3>
        ${categories.map(category => `
          <div class="tech-category">
            <h4>${category.title}</h4>
            <div class="tech-list">${category.content}</div>
          </div>
        `).join('')}
      </div>
    `;
  }

  setupPhotoFallback() {
    const photo = document.querySelector('.profile-photo');
    const initials = document.querySelector('.profile-initials');

    if (photo && initials) {
      photo.addEventListener('error', () => {
        photo.style.display = 'none';
        initials.style.display = 'flex';
      });

      photo.addEventListener('load', () => {
        photo.style.display = 'block';
        initials.style.display = 'none';
      });
    }
  }

  updateActiveNavigation() {
    const currentPage = this.getCurrentPageName();
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      link.classList.remove('active');
      
      const linkPage = link.getAttribute('data-page');
      if (linkPage === currentPage) {
        link.classList.add('active');
      }
    });
  }

  getCurrentPageName() {
    const path = window.location.pathname;
    const filename = path.split('/').pop();

    if (!filename || filename === 'index.html') return 'home';
    if (filename === 'about.html') return 'about';
    if (filename === 'projects.html') return 'projects';
    if (filename === 'articles.html') return 'articles';

    return 'home';
  }

  // Method to highlight navigation based on scroll position (for single page)
  highlightNavigationOnScroll() {
    const sections = document.querySelectorAll('.content-section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

    if (sections.length === 0) return;

    window.addEventListener('scroll', () => {
      let current = '';
      const scrollPos = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });
  }

  // Method to add smooth hover effects
  addHoverEffects() {
    const navLinks = document.querySelectorAll('.nav-link');
    const contactLinks = document.querySelectorAll('.contact-item .link');

    [...navLinks, ...contactLinks].forEach(link => {
      link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(5px)';
      });

      link.addEventListener('mouseleave', function() {
        this.style.transform = '';
      });
    });
  }

  // Method to add keyboard navigation
  addKeyboardNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach((link, index) => {
      link.addEventListener('keydown', (e) => {
        let targetIndex;
        
        switch(e.key) {
          case 'ArrowDown':
            e.preventDefault();
            targetIndex = (index + 1) % navLinks.length;
            navLinks[targetIndex].focus();
            break;
          case 'ArrowUp':
            e.preventDefault();
            targetIndex = (index - 1 + navLinks.length) % navLinks.length;
            navLinks[targetIndex].focus();
            break;
          case 'Home':
            e.preventDefault();
            navLinks[0].focus();
            break;
          case 'End':
            e.preventDefault();
            navLinks[navLinks.length - 1].focus();
            break;
        }
      });
    });
  }

  // Method to update contact info dynamically
  updateContactInfo(newContactData) {
    this.data.contact = { ...this.data.contact, ...newContactData };
    this.renderSidebar();
    this.setupPhotoFallback();
    this.updateActiveNavigation();
  }

  // Method to update tech stack
  updateTechStack(newTechStack) {
    this.data.techStack = { ...this.data.techStack, ...newTechStack };
    const techStackElement = document.querySelector('.tech-stack');
    if (techStackElement) {
      techStackElement.innerHTML = this.renderTechStack(this.data.techStack);
    }
  }

  // Method to add notification badge to navigation items
  addNotificationBadge(pageName, count) {
    const navLink = document.querySelector(`[data-page="${pageName}"]`);
    if (!navLink) return;

    // Remove existing badge
    const existingBadge = navLink.querySelector('.notification-badge');
    if (existingBadge) {
      existingBadge.remove();
    }

    // Add new badge if count > 0
    if (count > 0) {
      const badge = document.createElement('span');
      badge.className = 'notification-badge';
      badge.textContent = count > 99 ? '99+' : count;
      badge.style.cssText = `
        background: #e74c3c;
        color: white;
        border-radius: 50%;
        font-size: 0.7rem;
        padding: 2px 6px;
        margin-left: 5px;
        min-width: 16px;
        text-align: center;
      `;
      navLink.appendChild(badge);
    }
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Sidebar;
} else {
  window.Sidebar = Sidebar;
}