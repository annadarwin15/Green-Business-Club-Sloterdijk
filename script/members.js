// members.js

// Highlight the current page in navbar
document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.w3-bar .w3-button');

  navLinks.forEach(link => {
    // Simple check for current page URL match
    if (link.getAttribute('href') === currentPath.split('/').pop()) {
      link.classList.add('w3-red');  // highlight current page with w3-red
    }
  });
});

// Sidebar toggle functions (same as in gbc.js assumed)
function w3_open() {
  const sidebar = document.getElementById("mySidebar");
  if (sidebar.style.display === 'block') {
    sidebar.style.display = 'none';
  } else {
    sidebar.style.display = 'block';
  }
}

function w3_close() {
  document.getElementById("mySidebar").style.display = 'none';
}
