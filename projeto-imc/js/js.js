// Elementos
const form_control = document.querySelector("#form-control");
const peso = document.querySelector("#peso");
const altura = document.querySelector("#altura");
const operacao = document.querySelector(".operacao");
const container = document.querySelector(".container");
const submit = document.querySelector("button");
const um = document.querySelector("#um");
const dois = document.querySelector("#dois");
const tres = document.querySelector("#tres");
const quatro = document.querySelector("#quatro");
const cinco = document.querySelector("#cinco");
const tr = document.querySelector(".tabela tr");

// Função
function backColor() {
    um.style.backgroundColor = "#fff";
    dois.style.backgroundColor = "#fff";
    tres.style.backgroundColor = "#fff";
    quatro.style.backgroundColor = "#fff";
    cinco.style.backgroundColor = "#fff";
}

function linhaColor(imc) {
    if (imc < 18.5) {
        um.style.backgroundColor = "#C9F0FF";
    } else if (imc < 24.9) {
        dois.style.backgroundColor = "#C9F0FF";
    } else if (imc < 29.9) {
        tres.style.backgroundColor = "#C9F0FF";
    } else if (imc < 39.9) {
        quatro.style.backgroundColor = "#C9F0FF";
    } else {
        cinco.style.backgroundColor = "#C9F0FF";
    }
}

function criarResultado() {
    const pesoValor = +peso.value;
    const alturaValor = +altura.value;
    const imc = pesoValor / (alturaValor * alturaValor);

    if (!pesoValor || !alturaValor) {
        submit.innerText = "Insira um valor...";
    } else {

        submit.innerText = "Calcular";
        const resultado = ` <div id="resultado">
                <div class="linha">SEU IMC: ${imc.toFixed(2)}</div>
            </div> `;

        const parser = new DOMParser();

        backColor();
        linhaColor(imc);

        const html = parser.parseFromString(resultado, "text/html");
        const linha = html.querySelector("#resultado");
        container.classList.add("active");
        operacao.innerText = " ";

        operacao.appendChild(linha);
    }
}

// Evento
submit.addEventListener("click", () => {
    criarResultado();
});

altura.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        criarResultado();
    }
})

altura.addEventListener("keyup", () => {
    if (!altura.value || !peso.value) {
        container.classList.remove("active");
        backColor();
        operacao.innerHTML = "";
        submit.innerText = "Calcular";
    }
})

