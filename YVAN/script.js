// Theme toggle (light/dark) - optional future addition
// const toggleThemeBtn = document.querySelector('.theme-toggle');
// toggleThemeBtn.addEventListener('click', () => {
//   document.body.classList.toggle('light-mode');
// });

// Highlight active section in nav on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');

  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// WhatsApp button effect (optional visual feedback)
const whatsappBtn = document.querySelector('.whatsapp-float');
whatsappBtn.addEventListener('mouseenter', () => {
  whatsappBtn.style.boxShadow = '0 0 15px #25d366';
});
whatsappBtn.addEventListener('mouseleave', () => {
  whatsappBtn.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
});
// Smooth scroll on nav link clicks
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});



  let scrollTimeout;
window.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    // Your section detection logic
  }, 100);
});


// Navigation toggle
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.querySelector("nav ul");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Theme toggle
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  // Update the icon
  toggleBtn.textContent = body.classList.contains("light-mode") ? "🌙" : "☀️";
});

// Smooth scroll & close nav on click (optional)
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });

    navMenu.classList.remove("show"); // Close menu after click
  });
});
