function setupDarkModeToggle() {
    let darkmode = localStorage.getItem('darkmode');
    const themeSwitch = document.getElementById('theme-switch');
  
    const enableDarkmode = () => {
      document.body.classList.add('darkmode');
      localStorage.setItem('darkmode', 'active');
    };
  
    const disableDarkmode = () => {
      document.body.classList.remove('darkmode');
      localStorage.setItem('darkmode', null);
    };
  
    themeSwitch.addEventListener("click", () => {
      darkmode = localStorage.getItem('darkmode');
      darkmode !== "active" ? enableDarkmode() : disableDarkmode();
    });
  
    if (darkmode === "active") enableDarkmode();
  }
  
  // ✅ Call it immediately (or later if you want to wait for the DOM)
  document.addEventListener('DOMContentLoaded', setupDarkModeToggle);
  