
// Mobile menu functionality
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');
const overlayBg = document.querySelector('.overlay-bg');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
  overlayBg.classList.toggle('active');
  document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
});

overlayBg.addEventListener('click', () => {
  hamburgerMenu.classList.remove('active');
  navMenu.classList.remove('active');
  overlayBg.classList.remove('active');
  document.body.style.overflow = 'auto';
});

// Close menu when a navigation link is clicked
const navLinks = document.querySelectorAll('.nav-menu li a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburgerMenu.classList.remove('active');
    navMenu.classList.remove('active');
    overlayBg.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
})