const slides = document.querySelectorAll(".slide");
const areaPontos = document.querySelector(".slide-pontos");
let indiceAtual = 0;
let timer;

slides.forEach((_, i) => {
  const ponto = document.createElement("button");
  ponto.type = "button";
  ponto.className = "ponto";
  ponto.setAttribute("aria-label", "Ir para a imagem " + (i + 1));
  ponto.addEventListener("click", () => {
    mostrarSlide(i);
    reiniciarTimer();
  });
  areaPontos.appendChild(ponto);
});
const pontos = document.querySelectorAll(".ponto");

function mostrarSlide(i) {
  indiceAtual = (i + slides.length) % slides.length;
  slides.forEach((s, n) => s.classList.toggle("ativo", n === indiceAtual));
  pontos.forEach((p, n) => p.classList.toggle("ativo", n === indiceAtual));
}

function reiniciarTimer() {
  clearInterval(timer);
  timer = setInterval(() => mostrarSlide(indiceAtual + 1), 5000);
}

document.querySelector(".proximo").addEventListener("click", () => {
  mostrarSlide(indiceAtual + 1);
  reiniciarTimer();
});
document.querySelector(".anterior").addEventListener("click", () => {
  mostrarSlide(indiceAtual - 1);
  reiniciarTimer();
});

mostrarSlide(0);
reiniciarTimer();