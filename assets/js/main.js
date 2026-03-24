document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile Menu Toggle ---
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  const hamburgerIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
  const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;

  function openMenu() {
    navLinks.classList.add('active');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    mobileMenuBtn.innerHTML = closeIcon;
  }

  function closeMenu() {
    navLinks.classList.remove('active');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    mobileMenuBtn.innerHTML = hamburgerIcon;
  }

  if (mobileMenuBtn && navLinks) {
    // Toggle on hamburger click
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.contains('active') ? closeMenu() : openMenu();
    });

    // Close when any nav link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => closeMenu());
    });

    // Close when tapping outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        closeMenu();
      }
    });
  }

  // --- RTL Toggle ---
  const rtlToggle = document.getElementById('rtl-toggle');
  
  // Check local storage
  const isRTL = localStorage.getItem('rtl') === 'true';
  
  if (isRTL) {
    document.documentElement.setAttribute('dir', 'rtl');
    updateRTLIcon(true);
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    updateRTLIcon(false);
  }

  if (rtlToggle) {
    rtlToggle.addEventListener('click', () => {
      const currentDir = document.documentElement.getAttribute('dir');
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      
      document.documentElement.setAttribute('dir', newDir);
      localStorage.setItem('rtl', newDir === 'rtl' ? 'true' : 'false');
      updateRTLIcon(newDir === 'rtl');
    });
  }

  function updateRTLIcon(rtl) {
    if (!rtlToggle) return;
    rtlToggle.innerHTML = '<span style="font-size: 0.75rem; font-weight: 700;">RTL</span>';
  }

  // --- Dark Mode Toggle ---
  const themeToggle = document.getElementById('theme-toggle');

  // Check local storage or system preference
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
    if (theme === 'dark') {
      themeToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>';
    } else {
      themeToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    }
  }
});
