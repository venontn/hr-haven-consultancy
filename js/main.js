(function () {
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");
  const navLinks = document.querySelectorAll(".main-nav a, .footer-links a");
  const yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      navToggle.setAttribute("aria-label", expanded ? "Open menu" : "Close menu");
      mainNav.classList.toggle("open", !expanded);
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (mainNav) mainNav.classList.remove("open");
      if (navToggle) {
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open menu");
      }
    });
  });

  const sections = document.querySelectorAll("section[id]");
  const headerLinks = document.querySelectorAll(".main-nav a");

  function setActiveNav() {
    let current = "home";
    const scrollY = window.scrollY + 120;

    sections.forEach((section) => {
      if (section.offsetTop <= scrollY) {
        current = section.id;
      }
    });

    headerLinks.forEach((link) => {
      const href = link.getAttribute("href");
      link.classList.toggle("active", href === `#${current}`);
    });
  }

  window.addEventListener("scroll", setActiveNav, { passive: true });
  setActiveNav();

  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name")?.value?.trim() || "";
      const email = document.getElementById("email")?.value?.trim() || "";
      const message = document.getElementById("message")?.value?.trim() || "";
      const subject = encodeURIComponent(`Website enquiry from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
      );
      window.location.href = `mailto:hrhavenconsultancy58@gmail.com?subject=${subject}&body=${body}`;
    });
  }
})();
