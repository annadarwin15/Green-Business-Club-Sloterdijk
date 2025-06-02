// about.js

// Sidebar toggle logic
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

// Scroll-triggered animation
function isElementInView(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

function checkScroll() {
  const items = document.querySelectorAll('.animate-item');
  items.forEach(item => {
    if (isElementInView(item)) {
      item.classList.add('in-view');
    }
  });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);
