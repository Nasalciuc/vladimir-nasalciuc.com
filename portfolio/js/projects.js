class ProjectsManager {
  constructor(data) {
    this.data = data;
    this.projects = data.projects || [];
    this.currentFilter = 'all';
    
    this.init();
  }
  
  init() {
    this.renderProjects();
    this.initFilters();
    this.initModal();
  }
  
  renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    
    grid.innerHTML = this.projects.map(project => this.createProjectCard(project)).join('');
    
    // Add animation delay for staggered effect
    const cards = grid.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
      card.classList.add('fade-in');
    });
  }
  
  createProjectCard(project) {
    const technologies = project.technologies || [];
    const category = project.category || 'other';
    const icon = this.getProjectIcon(category);
    
    return `
      <div class="project-card" data-category="${category}" data-project-id="${project.id || ''}">
        <div class="project-image">
          ${icon}
        </div>
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          
          ${project.achievements ? `
            <div class="project-stats">
              ${project.achievements.slice(0, 3).map(achievement => {
                const match = achievement.match(/(\d+(?:\.\d+)?[%+]?)/);
                const value = match ? match[1] : '✓';
                const label = achievement.replace(/(\d+(?:\.\d+)?[%+]?)\s*/, '').substring(0, 15);
                return `
                  <div class="stat">
                    <div class="stat-value">${value}</div>
                    <div class="stat-label">${label}</div>
                  </div>
                `;
              }).join('')}
            </div>
          ` : ''}
          
          <div class="project-tech">
            ${technologies.slice(0, 5).map(tech => 
              `<span class="tech-badge">${tech}</span>`
            ).join('')}
            ${technologies.length > 5 ? `<span class="tech-badge">+${technologies.length - 5} more</span>` : ''}
          </div>
          
          <div class="project-links">
            ${project.demoUrl ? 
              `<a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="project-link primary">
                <span>🚀</span> Live Demo
              </a>` : 
              `<button class="project-link primary" onclick="projectsManager.openModal('${project.id || project.title}')">
                <span>📖</span> View Details
              </button>`
            }
            ${project.githubUrl ? 
              `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link secondary">
                <span>📁</span> GitHub
              </a>` : ''
            }
          </div>
        </div>
      </div>
    `;
  }
  
  getProjectIcon(category) {
    const icons = {
      'ai-ml': '🤖',
      'web-dev': '🌐',
      'data-science': '📊',
      'automation': '⚙️',
      'mobile': '📱',
      'api': '🔗',
      'other': '💡'
    };
    return icons[category] || icons.other;
  }
  
  initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active filter
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Filter projects
        const filter = btn.dataset.filter;
        this.filterProjects(filter);
      });
    });
  }
  
  filterProjects(filter) {
    this.currentFilter = filter;
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach((card, index) => {
      const category = card.dataset.category;
      const shouldShow = filter === 'all' || category === filter;
      
      if (shouldShow) {
        setTimeout(() => {
          card.classList.remove('hidden');
        }, index * 50);
      } else {
        card.classList.add('hidden');
      }
    });
  }
  
  initModal() {
    const modal = document.getElementById('projectModal');
    const closeBtn = modal.querySelector('.close');
    
    // Close modal when clicking X
    closeBtn.addEventListener('click', () => {
      this.closeModal();
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        this.closeModal();
      }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.style.display === 'block') {
        this.closeModal();
      }
    });
  }
  
  openModal(projectId) {
    const project = this.projects.find(p => (p.id || p.title) === projectId);
    if (!project) return;
    
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    
    modalTitle.textContent = project.title;
    modalContent.innerHTML = this.createModalContent(project);
    
    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('show'), 10);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
  }
  
  closeModal() {
    const modal = document.getElementById('projectModal');
    
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }, 300);
  }
  
  createModalContent(project) {
    const technologies = project.technologies || [];
    const achievements = project.achievements || [];
    
    return `
      <div class="project-image" style="height: 250px; margin-bottom: 30px;">
        ${this.getProjectIcon(project.category || 'other')}
      </div>
      
      <div style="margin-bottom: 25px;">
        <h3 style="color: #2c3e50; margin-bottom: 15px;">Project Overview</h3>
        <p style="line-height: 1.7; color: #555;">${project.longDescription || project.description}</p>
      </div>
      
      ${achievements.length > 0 ? `
        <div style="margin-bottom: 25px;">
          <h3 style="color: #2c3e50; margin-bottom: 15px;">Key Achievements</h3>
          <ul style="list-style: none; padding: 0;">
            ${achievements.map(achievement => `
              <li style="margin-bottom: 10px; padding-left: 25px; position: relative;">
                <span style="position: absolute; left: 0; color: #3498db;">✓</span>
                ${achievement}
              </li>
            `).join('')}
          </ul>
        </div>
      ` : ''}
      
      <div style="margin-bottom: 25px;">
        <h3 style="color: #2c3e50; margin-bottom: 15px;">Technologies Used</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          ${technologies.map(tech => `
            <span style="background: #f8f9fa; color: #495057; padding: 6px 12px; border-radius: 15px; font-size: 0.9rem; border: 1px solid #e9ecef;">${tech}</span>
          `).join('')}
        </div>
      </div>
      
      ${project.challenges ? `
        <div style="margin-bottom: 25px;">
          <h3 style="color: #2c3e50; margin-bottom: 15px;">Technical Challenges</h3>
          <p style="line-height: 1.7; color: #555;">${project.challenges}</p>
        </div>
      ` : ''}
      
      ${project.learnings ? `
        <div style="margin-bottom: 25px;">
          <h3 style="color: #2c3e50; margin-bottom: 15px;">Key Learnings</h3>
          <p style="line-height: 1.7; color: #555;">${project.learnings}</p>
        </div>
      ` : ''}
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef;">
        <div style="display: flex; gap: 15px; flex-wrap: wrap;">
          ${project.demoUrl ? `
            <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" 
               style="display: inline-flex; align-items: center; gap: 8px; background: #3498db; color: white; padding: 12px 20px; text-decoration: none; border-radius: 8px; font-weight: 500;">
              <span>🚀</span> Live Demo
            </a>
          ` : ''}
          ${project.githubUrl ? `
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer"
               style="display: inline-flex; align-items: center; gap: 8px; background: #f8f9fa; color: #495057; padding: 12px 20px; text-decoration: none; border-radius: 8px; font-weight: 500; border: 1px solid #dee2e6;">
              <span>📁</span> View Code
            </a>
          ` : ''}
          ${project.caseStudyUrl ? `
            <a href="${project.caseStudyUrl}" target="_blank" rel="noopener noreferrer"
               style="display: inline-flex; align-items: center; gap: 8px; background: #28a745; color: white; padding: 12px 20px; text-decoration: none; border-radius: 8px; font-weight: 500;">
              <span>📋</span> Case Study
            </a>
          ` : ''}
        </div>
      </div>
    `;
  }
}

// Global variable to access from HTML onclick handlers
let projectsManager;

// Initialize when data is ready
document.addEventListener('DOMContentLoaded', async () => {
  // Wait for portfolio data to load
  while (!window.portfolio || !window.portfolio.data) {
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  projectsManager = new ProjectsManager(window.portfolio.data);
});

// CSS Animation keyframes
const style = document.createElement('style');
style.textContent = `
  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s ease forwards;
  }
  
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);