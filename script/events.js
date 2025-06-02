// Toggle sidebar visibility
function w3_open() {
  const sidebar = document.getElementById("mySidebar");
  if (sidebar.style.display === 'block') {
    sidebar.style.display = 'none';
  } else {
    sidebar.style.display = 'block';
  }
}

// Close sidebar
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

// Smooth scroll to top on footer button click
document.addEventListener('DOMContentLoaded', () => {
  const toTopBtn = document.querySelector('footer a.w3-button');
  if (toTopBtn) {
    toTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
