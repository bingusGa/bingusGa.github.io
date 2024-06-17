// Simple JavaScript code for potential functionalities (optional)

// Example: Smooth scrolling for navigation links (requires modification in HTML)
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const targetSection = document.querySelector(href);
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
