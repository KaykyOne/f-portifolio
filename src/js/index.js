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
// const tecnologias = document.getElementById("tecnologias");

const sections = [sobre, experiencia, projetos];

let anterior = null;

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (anterior && anterior !== entry.target) {
        const navAnterior = document.getElementById(`nav${anterior.id}`);
      
        navAnterior.classList.add("normal");
        navAnterior.classList.remove("selecionado");
      }
      anterior = entry.target;
      const nav = document.getElementById(`nav${entry.target.id}`);
      nav.classList.add("selecionado");
      nav.classList.remove("normal");
    }
  });
}, {
  threshold: 0.5 // 50% do elemento precisa estar visível
});

sections.forEach(section => observer.observe(section));


