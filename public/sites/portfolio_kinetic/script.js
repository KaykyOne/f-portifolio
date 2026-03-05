const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const valueCounters = document.querySelectorAll(".value[data-count]");

function setActiveFilter(button) {
  filterButtons.forEach((btn) => {
    btn.classList.remove("is-active");
  });
  button.classList.add("is-active");
}

function applyFilter(filter) {
  projectCards.forEach((card) => {
    const categories = card.dataset.category ? card.dataset.category.split(" ") : [];
    const shouldShow = filter === "all" || categories.includes(filter);

    card.classList.toggle("is-hidden", !shouldShow);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter || "all";
    setActiveFilter(button);
    applyFilter(filter);
  });
});

function animateCounter(el) {
  const target = Number(el.dataset.count || 0);
  const duration = 1100;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(target * eased);
    el.textContent = String(current);

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        if (el instanceof HTMLElement && !el.dataset.animated) {
          el.dataset.animated = "true";
          animateCounter(el);
        }
      }
    });
  },
  { threshold: 0.65 }
);

valueCounters.forEach((counter) => {
  observer.observe(counter);
});
