// Scroll-based section animation (fade-in)
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Remove if you want it to animate only once
      }
    });
  }, { threshold: 0.1 });

  // Add .invisible to sections and observe them
  document.querySelectorAll("section").forEach(section => {
    section.classList.add("invisible");
    observer.observe(section);
  });
});

// Future JS functionalities like navigation toggles, theme switching, or sliders can be added here
