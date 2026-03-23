document.addEventListener('DOMContentLoaded', () => {
  // Sidebar Toggle for Mobile
  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebarOverlay = document.getElementById('sidebarOverlay');

  if (sidebarToggle && sidebar && sidebarOverlay) {
      function toggleSidebar() {
          sidebar.classList.toggle('open');
          sidebarOverlay.classList.toggle('open');
      }

      sidebarToggle.addEventListener('click', toggleSidebar);
      sidebarOverlay.addEventListener('click', toggleSidebar);
  }

  // --- Theme Toggle functionality (Duplicated here in case main.js is not included or needs override for dashboard) ---
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.setAttribute('data-theme', 'dark');
      updateThemeIcon('dark');
  }

  if (themeToggle) {
      themeToggle.addEventListener('click', () => {
          const currentTheme = document.documentElement.getAttribute('data-theme');
          const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
          
          document.documentElement.setAttribute('data-theme', newTheme);
          localStorage.setItem('theme', newTheme);
          updateThemeIcon(newTheme);
      });
  }

  function updateThemeIcon(theme) {
      if (!themeToggle) return;
      
      const themeText = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
      
      if (theme === 'dark') {
          themeToggle.innerHTML = '<div style="display: flex; align-items: center;"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg></div><span>' + themeText + '</span>';
      } else {
          themeToggle.innerHTML = '<div style="display: flex; align-items: center;"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg></div><span>' + themeText + '</span>';
      }
  }

  // --- Tab Switching Logic & Skeleton Loaders ---
  const tabLinks = document.querySelectorAll('.sidebar-link');
  const tabContents = document.querySelectorAll('.tab-content');
  const pageTitle = document.getElementById('pageTitle');
  const skeletonLoader = document.getElementById('skeletonLoader');

  function switchTab(tabId) {
      // Hide all contents and active states
      tabContents.forEach(content => content.classList.remove('active'));
      tabLinks.forEach(link => link.classList.remove('active'));

      // Show Skeleton Loader
      skeletonLoader.style.display = 'block';

      // Simulate network request (500ms)
      setTimeout(() => {
          skeletonLoader.style.display = 'none';
          
          // Show requested content
          const selectedContent = document.getElementById(tabId);
          if (selectedContent) {
              selectedContent.classList.add('active');
          }

          // Update active link and title
          tabLinks.forEach(link => {
              if (link.dataset.tab === tabId) {
                  link.classList.add('active');
                  pageTitle.textContent = link.textContent.trim();
              }
          });

          // Close sidebar on mobile after clicking
          if (window.innerWidth <= 1024 && sidebar.classList.contains('open')) {
              toggleSidebar();
          }
      }, 400); // 400ms fake loading
  }

  // Add click events to links
  tabLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const tabId = link.dataset.tab;
          if (tabId && !link.classList.contains('active')) {
              switchTab(tabId);
          }
      });
  });

});
