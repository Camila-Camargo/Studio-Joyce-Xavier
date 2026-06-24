const feedbacks = document.querySelectorAll(".feedback");
let atual = 0;

setInterval(() => {
  feedbacks[atual].classList.remove("ativo");

  atual = (atual + 1) % feedbacks.length;

  feedbacks[atual].classList.add("ativo");
}, 3000);

const slide = document.querySelector(".slide-servicos");
const grupos = document.querySelectorAll(".grupo-servico");

const btnAnterior = document.getElementById("anterior");
const btnProximo = document.getElementById("proximo");

let indiceAtual = 0;

function atualizarCarrossel() {
    slide.style.transform = `translateX(-${indiceAtual * 100}%)`;
}

btnProximo.addEventListener("click", () => {
    if (indiceAtual < grupos.length - 1) {
        indiceAtual++;
    } else {
        indiceAtual = 0;
    }

    atualizarCarrossel();
});

btnAnterior.addEventListener("click", () => {
    if (indiceAtual > 0) {
        indiceAtual--;
    } else {
        indiceAtual = grupos.length - 1;
    }

    atualizarCarrossel();
});

function mostrarMensagem() {
    const toast = document.getElementById("toast");

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}