// Elementos
const form_control = document.querySelector("#form-control");
const peso = document.querySelector("#peso");
const altura = document.querySelector("#altura");
const operacao = document.querySelector(".operacao");
const container = document.querySelector(".container");
const submit = document.querySelector("button");

// Função
function criarResultado() {
    const pesoValor = +peso.value;
    const alturaValor = +altura.value;
    const imc = pesoValor / (alturaValor * alturaValor);

    if (!pesoValor || !alturaValor) {
        submit.innerText = "Insira um valor...";
    } else {
        submit.innerText = "Calcular" ;
        const resultado = ` <div id="resultado">
                <div class="linha">SEU IMC: ${imc}</div>
            </div> `;

        const parser = new DOMParser();

        const html = parser.parseFromString(resultado, "text/html");
        const linha = html.querySelector("#resultado");
        container.classList.add("active");
        operacao.appendChild(linha);

    }
}

// Evento
submit.addEventListener("click", () => {
    criarResultado();
});

altura.addEventListener("keydown", (e)=>{
    if(e.code === "Enter"){
        criarResultado();
    }
})

altura.addEventListener("keyup", ()=>{
    if(!altura.value || !peso.value){
        container.classList.remove("active");
        operacao.innerHTML = "";
        submit.innerText = "Calcular" ;
    }
})

