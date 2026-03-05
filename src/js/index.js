const bolha = document.getElementById("bolha");
const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");
const menuClose = document.getElementById("menuClose");
const menuOverlay = document.getElementById("menuOverlay");

const isMobile = () => window.innerWidth < 768;

const openMenu = () => {
  if (!sidebar || !menuOverlay) return;

  sidebar.classList.remove("-translate-x-full");
  menuOverlay.classList.remove("opacity-0", "pointer-events-none");
  document.body.classList.add("overflow-hidden");
};

const closeMenu = () => {
  if (!sidebar || !menuOverlay) return;

  sidebar.classList.add("-translate-x-full");
  menuOverlay.classList.add("opacity-0", "pointer-events-none");
  document.body.classList.remove("overflow-hidden");
};

const syncMenuByViewport = () => {
  if (!sidebar || !menuOverlay) return;

  if (isMobile()) {
    sidebar.classList.add("-translate-x-full");
    menuOverlay.classList.add("opacity-0", "pointer-events-none");
  } else {
    sidebar.classList.remove("-translate-x-full");
    menuOverlay.classList.add("opacity-0", "pointer-events-none");
    document.body.classList.remove("overflow-hidden");
  }
};

if (menuToggle) menuToggle.addEventListener("click", openMenu);
if (menuClose) menuClose.addEventListener("click", closeMenu);
if (menuOverlay) menuOverlay.addEventListener("click", closeMenu);

document.querySelectorAll("#sidebar a").forEach((link) => {
  link.addEventListener("click", () => {
    if (isMobile()) closeMenu();
  });
});

window.addEventListener("resize", syncMenuByViewport);
syncMenuByViewport();

document.addEventListener("mousemove", (e) => {
  if (!bolha || isMobile()) return;

  const rect = bolha.getBoundingClientRect();

  const x = e.clientX - rect.width / 2;
  const y = e.clientY - rect.height / 2;

  bolha.style.transform = `translate(${x}px, ${y}px)`;
});

const sobre = document.getElementById("sobre");
const experiencia = document.getElementById("experiencia");
const projetos = document.getElementById("projetos");

const sections = [sobre, experiencia, projetos];

let anterior = null;

const setActiveNav = (sectionId) => {
  if (!sectionId) return;

  if (anterior && anterior.id !== sectionId) {
    const navAnterior = document.getElementById(`nav${anterior.id}`);
    if (navAnterior) {
      navAnterior.classList.add("normal");
      navAnterior.classList.remove("selecionado");
    }
  }

  const currentSection = document.getElementById(sectionId);
  const navAtual = document.getElementById(`nav${sectionId}`);
  if (navAtual) {
    navAtual.classList.add("selecionado");
    navAtual.classList.remove("normal");
  }

  if (currentSection) anterior = currentSection;
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setActiveNav(entry.target.id);
    }
  });
}, {
  threshold: 0.5 // 50% do elemento precisa estar visível
});

sections.forEach(section => observer.observe(section));

document.querySelectorAll("#sidebar a[href^='#']").forEach((link) => {
  link.addEventListener("click", () => {
    const targetId = link.getAttribute("href")?.replace("#", "");
    setActiveNav(targetId);
  });
});

sections.forEach((section) => {
  if (!section) return;
  section.addEventListener("click", () => setActiveNav(section.id));
});


