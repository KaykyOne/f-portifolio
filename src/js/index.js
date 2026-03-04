const bolha = document.getElementById("bolha");

document.addEventListener("mousemove", (e) => {
  const rect = bolha.getBoundingClientRect();

  const x = e.clientX - rect.width / 2;
  const y = e.clientY - rect.height / 2;

  bolha.style.transform = `translate(${x}px, ${y}px)`;
});

const conteudo = document.getElementById("conteudo");

let scrollY = 0;
document.addEventListener("wheel", (event) => {
  if(scrollY + event.deltaY < 0) {
    scrollY = 0;
    return;
  }
  if(scrollY + event.deltaY > conteudo.scrollHeight - conteudo.clientHeight) {
    scrollY = conteudo.scrollHeight - conteudo.clientHeight;
    return;
  }
  scrollY += event.deltaY;
  conteudo.scrollTop = scrollY;
});

conteudo.addEventListener("scroll", () => {
  conteudo.scrollTop = scrollY;
});