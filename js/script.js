// Smooth scroll
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Scroll reveal
const revealElements = document.querySelectorAll(".reveal, .reveal-left");
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 }
);
revealElements.forEach(el => observer.observe(el));

const navEl = document.querySelector("nav");
const darkSections = document.querySelectorAll(".formacao, footer");

function checkNavOverlap() {
  const navRect = navEl.getBoundingClientRect();
  let overDark = false;
  darkSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (navRect.bottom > rect.top && navRect.top < rect.bottom) {
      overDark = true;
    }
  });
  navEl.classList.toggle("nav-dark", overDark);
}

window.addEventListener("scroll", checkNavOverlap);
checkNavOverlap();

// Nav ativa ao scroll
const sections = document.querySelectorAll("section, footer");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const top = section.offsetTop - 150;
    if (window.scrollY >= top) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("ativo");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("ativo");
    }
  });
});
