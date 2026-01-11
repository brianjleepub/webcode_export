// Local Storage Management for Build Planner

const StorageManager = {
  STORAGE_KEY: 'd4_builds',

  // Save a build to local storage
  saveBuild(buildData) {
    try {
      const builds = this.getAllBuilds();
      const buildId = buildData.id || this.generateId();
      buildData.id = buildId;
      buildData.lastModified = new Date().toISOString();

      builds[buildId] = buildData;
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(builds));
      return buildId;
    } catch (error) {
      console.error('Error saving build:', error);
      return null;
    }
  },

  // Get all builds from local storage
  getAllBuilds() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : {};
    } catch (error) {
      console.error('Error loading builds:', error);
      return {};
    }
  },

  // Get a specific build by ID
  getBuild(buildId) {
    const builds = this.getAllBuilds();
    return builds[buildId] || null;
  },

  // Delete a build
  deleteBuild(buildId) {
    try {
      const builds = this.getAllBuilds();
      delete builds[buildId];
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(builds));
      return true;
    } catch (error) {
      console.error('Error deleting build:', error);
      return false;
    }
  },

  // Generate a unique ID
  generateId() {
    return 'build_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  },

  // Export build to JSON string
  exportBuild(buildData) {
    return JSON.stringify(buildData, null, 2);
  },

  // Import build from JSON string
  importBuild(jsonString) {
    try {
      const buildData = JSON.parse(jsonString);
      return this.saveBuild(buildData);
    } catch (error) {
      console.error('Error importing build:', error);
      return null;
    }
  },

  // Generate shareable URL
  generateShareUrl(buildData) {
    const encoded = btoa(JSON.stringify(buildData));
    return `${window.location.origin}${window.location.pathname}?build=${encoded}`;
  },

  // Load build from URL parameter
  loadFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const buildParam = urlParams.get('build');

    if (buildParam) {
      try {
        const buildData = JSON.parse(atob(buildParam));
        return buildData;
      } catch (error) {
        console.error('Error loading build from URL:', error);
        return null;
      }
    }
    return null;
  }
};
