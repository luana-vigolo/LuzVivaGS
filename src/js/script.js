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


const formulario = document.querySelector("#formulario");
const mensagem = document.querySelector("#mensagem");
const listaOcorrencias = document.querySelector("#lista-ocorrencias");

let ocorrencias = [];

formulario.addEventListener("submit", function(event) {


    event.preventDefault();

    const nome = document.querySelector("#nome").value.trim();
    const local = document.querySelector("#local").value.trim();
    const tipo = document.querySelector("#tipo").value;
    const descricao = document.querySelector("#descricao").value.trim();

    if (nome === "" || local === "" || tipo === "" || descricao === "") {
        mensagem.textContent = "Por favor, preencha todos os campos.";
        mensagem.style.color = "#ff5555";
        return;
    }

    const ocorrencia = {
        nome: nome,
        local: local,
        tipo: tipo,
        descricao: descricao
    };

    ocorrencias.push(ocorrencia);

    const novoCadastro = document.createElement("div");
    novoCadastro.className = "ocorrencia";

    const titulo = document.createElement("h3");
    titulo.textContent = ocorrencia.tipo;

    const textoNome = document.createElement("p");
    textoNome.textContent = "Responsável: " + ocorrencia.nome;

    const textoLocal = document.createElement("p");
    textoLocal.textContent = "Local: " + ocorrencia.local;

    const textoDescricao = document.createElement("p");
    textoDescricao.textContent = "Descrição: " + ocorrencia.descricao;

    novoCadastro.appendChild(titulo);
    novoCadastro.appendChild(textoNome);
    novoCadastro.appendChild(textoLocal);
    novoCadastro.appendChild(textoDescricao);

    listaOcorrencias.appendChild(novoCadastro);

    mensagem.textContent = "Ocorrência cadastrada com sucesso!";
    mensagem.style.color = "#4ade80";

    formulario.reset();
});
