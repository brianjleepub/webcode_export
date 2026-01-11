// Diablo 4 Build Planner - Main Application Logic

class BuildPlanner {
  constructor() {
    this.currentClass = null;
    this.currentBuild = {
      id: null,
      name: 'New Build',
      class: null,
      skills: {},
      gear: {},
      stats: {
        strength: 10,
        dexterity: 10,
        intelligence: 10,
        willpower: 10,
        life: 100,
        armor: 0,
        damage: 10
      },
      paragonPoints: 0
    };
    this.skillPointsSpent = 0;
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.loadFromUrlOrDefault();
    this.renderClassSelection();
  }

  setupEventListeners() {
    // Save build button
    document.getElementById('saveBtn')?.addEventListener('click', () => this.saveBuild());

    // Load build button
    document.getElementById('loadBtn')?.addEventListener('click', () => this.showLoadDialog());

    // Export build button
    document.getElementById('exportBtn')?.addEventListener('click', () => this.exportBuild());

    // Share build button
    document.getElementById('shareBtn')?.addEventListener('click', () => this.shareBuild());

    // New build button
    document.getElementById('newBtn')?.addEventListener('click', () => this.newBuild());

    // Reset build button
    document.getElementById('resetBtn')?.addEventListener('click', () => this.resetBuild());
  }

  loadFromUrlOrDefault() {
    const urlBuild = StorageManager.loadFromUrl();
    if (urlBuild) {
      this.currentBuild = urlBuild;
      this.currentClass = urlBuild.class;
      this.calculateSkillPoints();
      if (this.currentClass) {
        this.renderBuildPlanner();
      }
    }
  }

  renderClassSelection() {
    const container = document.getElementById('classSelection');
    if (!container) return;

    container.innerHTML = '<h2>Select Your Class</h2>';

    const classGrid = document.createElement('div');
    classGrid.className = 'class-grid';

    Object.values(CLASSES).forEach(classData => {
      const classCard = document.createElement('div');
      classCard.className = 'class-card';
      classCard.style.borderColor = classData.color;
      classCard.innerHTML = `
        <h3 style="color: ${classData.color}">${classData.name}</h3>
        <p>${classData.description}</p>
        <p class="primary-stat">Primary: ${classData.primaryStat}</p>
      `;
      classCard.addEventListener('click', () => this.selectClass(classData.id));
      classGrid.appendChild(classCard);
    });

    container.appendChild(classGrid);
  }

  selectClass(classId) {
    this.currentClass = classId;
    this.currentBuild.class = classId;
    this.currentBuild.name = `${CLASSES[classId].name} Build`;

    // Hide class selection and show build planner
    const classSelection = document.getElementById('classSelection');
    const buildPlanner = document.getElementById('buildPlanner');

    if (classSelection) classSelection.style.display = 'none';
    if (buildPlanner) buildPlanner.style.display = 'block';

    this.renderBuildPlanner();
  }

  renderBuildPlanner() {
    if (!this.currentClass) return;

    this.renderHeader();
    this.renderGearSlots();
    this.renderSkillTree();
    this.renderStats();
  }

  renderHeader() {
    const header = document.getElementById('buildHeader');
    if (!header) return;

    const classData = CLASSES[this.currentClass];
    header.innerHTML = `
      <div class="build-header-content">
        <div class="build-title">
          <input type="text" id="buildName" value="${this.currentBuild.name}"
                 class="build-name-input" placeholder="Build Name">
          <span class="class-badge" style="background: ${classData.color}">${classData.name}</span>
        </div>
        <div class="skill-points">
          <span class="points-spent">${this.skillPointsSpent}</span> /
          <span class="points-total">${MAX_SKILL_POINTS}</span> Skill Points
        </div>
      </div>
    `;

    document.getElementById('buildName')?.addEventListener('input', (e) => {
      this.currentBuild.name = e.target.value;
    });
  }

  renderGearSlots() {
    const container = document.getElementById('gearSlots');
    if (!container) return;

    container.innerHTML = '<h3>Equipment</h3>';

    const gearGrid = document.createElement('div');
    gearGrid.className = 'gear-grid';

    GEAR_SLOTS.forEach(slot => {
      const slotDiv = document.createElement('div');
      slotDiv.className = 'gear-slot';
      slotDiv.dataset.slot = slot.id;

      const currentGear = this.currentBuild.gear[slot.id];

      slotDiv.innerHTML = `
        <div class="gear-slot-icon">${slot.icon}</div>
        <div class="gear-slot-name">${slot.name}</div>
        <div class="gear-slot-item">${currentGear || 'Empty'}</div>
      `;

      slotDiv.addEventListener('click', () => this.openGearDialog(slot.id));
      gearGrid.appendChild(slotDiv);
    });

    container.appendChild(gearGrid);
  }

  renderSkillTree() {
    const container = document.getElementById('skillTree');
    if (!container) return;

    container.innerHTML = '<h3>Skill Tree</h3>';

    const skills = SKILLS[this.currentClass];
    if (!skills) return;

    Object.keys(skills).forEach(category => {
      const categoryDiv = document.createElement('div');
      categoryDiv.className = 'skill-category';

      const categoryHeader = document.createElement('h4');
      categoryHeader.textContent = SKILL_CATEGORIES[category]?.name || category;
      categoryHeader.className = 'skill-category-header';
      categoryDiv.appendChild(categoryHeader);

      const skillsGrid = document.createElement('div');
      skillsGrid.className = 'skills-grid';

      skills[category].forEach(skill => {
        const currentPoints = this.currentBuild.skills[skill.id] || 0;
        const maxPoints = skill.maxRank;

        const skillDiv = document.createElement('div');
        skillDiv.className = 'skill-item';
        if (currentPoints > 0) skillDiv.classList.add('skilled');

        skillDiv.innerHTML = `
          <div class="skill-name">${skill.name}</div>
          <div class="skill-points">
            <button class="skill-btn skill-minus" data-skill="${skill.id}">−</button>
            <span class="skill-current">${currentPoints}</span> / ${maxPoints}
            <button class="skill-btn skill-plus" data-skill="${skill.id}">+</button>
          </div>
          <div class="skill-description">${skill.description}</div>
        `;

        // Add event listeners for skill buttons
        const minusBtn = skillDiv.querySelector('.skill-minus');
        const plusBtn = skillDiv.querySelector('.skill-plus');

        minusBtn?.addEventListener('click', (e) => {
          e.stopPropagation();
          this.adjustSkillPoints(skill.id, -1, maxPoints);
        });

        plusBtn?.addEventListener('click', (e) => {
          e.stopPropagation();
          this.adjustSkillPoints(skill.id, 1, maxPoints);
        });

        skillsGrid.appendChild(skillDiv);
      });

      categoryDiv.appendChild(skillsGrid);
      container.appendChild(categoryDiv);
    });
  }

  adjustSkillPoints(skillId, delta, maxPoints) {
    const currentPoints = this.currentBuild.skills[skillId] || 0;
    const newPoints = Math.max(0, Math.min(maxPoints, currentPoints + delta));

    // Check if we have enough skill points
    if (delta > 0 && this.skillPointsSpent >= MAX_SKILL_POINTS) {
      this.showNotification('Maximum skill points reached!', 'warning');
      return;
    }

    if (newPoints !== currentPoints) {
      if (newPoints === 0) {
        delete this.currentBuild.skills[skillId];
      } else {
        this.currentBuild.skills[skillId] = newPoints;
      }

      this.calculateSkillPoints();
      this.renderSkillTree();
      this.renderHeader();
    }
  }

  calculateSkillPoints() {
    this.skillPointsSpent = Object.values(this.currentBuild.skills)
      .reduce((sum, points) => sum + points, 0);
  }

  renderStats() {
    const container = document.getElementById('stats');
    if (!container) return;

    container.innerHTML = '<h3>Character Stats</h3>';

    const statsGrid = document.createElement('div');
    statsGrid.className = 'stats-grid';

    STATS.forEach(stat => {
      const value = this.currentBuild.stats[stat.id] || 0;

      const statDiv = document.createElement('div');
      statDiv.className = 'stat-item';
      statDiv.innerHTML = `
        <span class="stat-icon">${stat.icon}</span>
        <span class="stat-name">${stat.name}</span>
        <span class="stat-value">${value}</span>
      `;

      statsGrid.appendChild(statDiv);
    });

    container.appendChild(statsGrid);
  }

  openGearDialog(slotId) {
    const slot = GEAR_SLOTS.find(s => s.id === slotId);
    const currentItem = this.currentBuild.gear[slotId] || '';

    const itemName = prompt(`Enter ${slot.name}:`, currentItem);

    if (itemName !== null) {
      if (itemName.trim() === '') {
        delete this.currentBuild.gear[slotId];
      } else {
        this.currentBuild.gear[slotId] = itemName.trim();
      }
      this.renderGearSlots();
    }
  }

  saveBuild() {
    this.currentBuild.name = document.getElementById('buildName')?.value || this.currentBuild.name;

    const buildId = StorageManager.saveBuild(this.currentBuild);
    if (buildId) {
      this.currentBuild.id = buildId;
      this.showNotification('Build saved successfully!', 'success');
    } else {
      this.showNotification('Error saving build', 'error');
    }
  }

  showLoadDialog() {
    const builds = StorageManager.getAllBuilds();
    const buildList = Object.values(builds);

    if (buildList.length === 0) {
      this.showNotification('No saved builds found', 'info');
      return;
    }

    let dialogHtml = '<div class="load-dialog"><h3>Load Build</h3><div class="build-list">';

    buildList.forEach(build => {
      const date = new Date(build.lastModified).toLocaleDateString();
      const className = CLASSES[build.class]?.name || 'Unknown';

      dialogHtml += `
        <div class="build-list-item" data-build-id="${build.id}">
          <div class="build-info">
            <strong>${build.name}</strong>
            <span class="build-meta">${className} - ${date}</span>
          </div>
          <div class="build-actions">
            <button class="btn-load" data-build-id="${build.id}">Load</button>
            <button class="btn-delete" data-build-id="${build.id}">Delete</button>
          </div>
        </div>
      `;
    });

    dialogHtml += '</div><button class="btn-close">Close</button></div>';

    const overlay = document.createElement('div');
    overlay.className = 'dialog-overlay';
    overlay.innerHTML = dialogHtml;

    document.body.appendChild(overlay);

    // Event listeners for load/delete buttons
    overlay.querySelectorAll('.btn-load').forEach(btn => {
      btn.addEventListener('click', () => {
        const buildId = btn.dataset.buildId;
        this.loadBuild(buildId);
        document.body.removeChild(overlay);
      });
    });

    overlay.querySelectorAll('.btn-delete').forEach(btn => {
      btn.addEventListener('click', () => {
        const buildId = btn.dataset.buildId;
        if (confirm('Are you sure you want to delete this build?')) {
          StorageManager.deleteBuild(buildId);
          document.body.removeChild(overlay);
          this.showNotification('Build deleted', 'success');
        }
      });
    });

    overlay.querySelector('.btn-close')?.addEventListener('click', () => {
      document.body.removeChild(overlay);
    });

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        document.body.removeChild(overlay);
      }
    });
  }

  loadBuild(buildId) {
    const build = StorageManager.getBuild(buildId);
    if (build) {
      this.currentBuild = build;
      this.currentClass = build.class;
      this.calculateSkillPoints();
      this.renderBuildPlanner();

      // Show build planner if hidden
      const classSelection = document.getElementById('classSelection');
      const buildPlanner = document.getElementById('buildPlanner');
      if (classSelection) classSelection.style.display = 'none';
      if (buildPlanner) buildPlanner.style.display = 'block';

      this.showNotification('Build loaded successfully!', 'success');
    }
  }

  exportBuild() {
    const jsonData = StorageManager.exportBuild(this.currentBuild);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${this.currentBuild.name.replace(/\s/g, '_')}.json`;
    a.click();

    URL.revokeObjectURL(url);
    this.showNotification('Build exported!', 'success');
  }

  shareBuild() {
    const shareUrl = StorageManager.generateShareUrl(this.currentBuild);

    navigator.clipboard.writeText(shareUrl).then(() => {
      this.showNotification('Share link copied to clipboard!', 'success');
    }).catch(() => {
      // Fallback: show the URL in a prompt
      prompt('Share this URL:', shareUrl);
    });
  }

  newBuild() {
    if (confirm('Create a new build? Unsaved changes will be lost.')) {
      location.reload();
    }
  }

  resetBuild() {
    if (confirm('Reset all skills and gear? This cannot be undone.')) {
      this.currentBuild.skills = {};
      this.currentBuild.gear = {};
      this.skillPointsSpent = 0;
      this.renderBuildPlanner();
      this.showNotification('Build reset', 'info');
    }
  }

  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add('show');
    }, 10);

    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }
}

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.buildPlanner = new BuildPlanner();
});
