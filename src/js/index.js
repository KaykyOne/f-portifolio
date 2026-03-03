const bolha = document.getElementById("bolha");
console.log(bolha);

document.addEventListener("mousemove", (e) => {
  const rect = bolha.getBoundingClientRect();

  const x = e.clientX - rect.width / 2;
  const y = e.clientY - rect.height / 2;

  bolha.style.transform = `translate(${x}px, ${y}px)`;
});