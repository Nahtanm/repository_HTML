// Seleção de elementos
const multiForm = document.querySelector("#multi-form");
const numberInput = document.querySelector("#number");
const multiplicator = document.querySelector("#multi");
const multiTable = document.querySelector("#multi-opera");
const span = document.querySelector("#multi-table span");

// Funções
const creatTable = (number, multiplicatorNumber) => {
    multiTable.innerHTML = ""; // limpa o campo que irá exibir a tabuada.

    for (let i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i;

        const template = `<div class="row">
            <div id="operation">${number} x ${i} =</div>
            <div id="result">${result}</div>
        </div>`;

        const parser = new DOMParser(); //Propriedade para transformar String em HTML

        const html = parser.parseFromString(template,"text/html");//String para HTML

        const row = html.querySelector(".row"); //buscando o meu seletor

        multiTable.appendChild(row); //Inserindo dentro de uma tag pai.

    }
    span.innerHTML = number; //Adicionando o número ao HTML
};

// Eventos
multiForm.addEventListener("submit", (v) => {
    v.preventDefault();

    const numberMulti = +numberInput.value;

    const multiNumber = +multiplicator.value;

    if (!numberInput || !multiNumber) return;

    creatTable(numberMulti, multiNumber);
});
