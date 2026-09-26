// ==========================================
// Portfolio Interactive Scripts
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Set current copyright year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Mobile Menu Toggle
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = hamburger.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    // Close menu when clicking any nav link
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = hamburger.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }

  // 3. Active Link Highlight on Scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navItem = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (navItem) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navItem.classList.add('active');
        } else {
          navItem.classList.remove('active');
        }
      }
    });
  });

  // 4. Contact Form Submission Simulation
  const contactForm = document.getElementById('contactForm');
  const successMsg = document.getElementById('formSuccessMessage');

  if (contactForm && successMsg) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameVal = document.getElementById('name').value;

      // Show success feedback
      successMsg.innerHTML = `<i class="fa-solid fa-circle-check"></i> Thank you <strong>${nameVal}</strong>! Your message has been sent successfully. I will get back to you shortly.`;
      successMsg.classList.add('show');

      // Clear the form
      contactForm.reset();

      // Hide message after 5 seconds
      setTimeout(() => {
        successMsg.classList.remove('show');
      }, 5000);
    });
  }
});
