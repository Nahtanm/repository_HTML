// Elementos 
const nome = document.querySelector("#nome");
const enviar = document.querySelector("#enviar");
const boy = document.querySelector("body");

const mais = document.querySelector("#mais");
const menos = document.querySelector("#menos");
const numero = document.querySelector("#numero");


const qtd = document.querySelector("#qtd");
const out_total = document.querySelector("#total");
const btn = document.querySelector("button");

enviar.addEventListener("click", (e) => {
    e.preventDefault();

    const nomeValue = nome.value;

    const template = `<p>Seu nome é ${nomeValue}</p>`;

    const parser = new DOMParser();
    const html = parser.parseFromString(template, "text/html");
    const p = html.querySelector("p");
    boy.appendChild(p);

});


btn.addEventListener("click", () => {
    const preco = document.querySelector("#preco").textContent;
    const quantidade = +qtd.value;
    const pre = preco.replace(",", ".");
    const preco_1 = parseFloat(pre);

    let total = quantidade * preco_1;

    out_total.textContent = total.toFixed(2);

});

let banners = ["img/jogo-1.jpeg", "img/jogo-2.jpeg"];
let bannerAtual = 0;

// function trocarBanner() {
//     if (banners[bannerAtual] != null) {
//         document.querySelector(".banner-destaque img").src = banners[bannerAtual];
//         bannerAtual += 1;
//     } else {
//         bannerAtual = 0; 
//     }
// }

function trocarBanner(){
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector("img").src = banners[bannerAtual];
}

const para_frente = document.querySelector("#para-frente");

para_frente.addEventListener("click", ()=>{
    
    bannerAtual =+ 1;
    document.querySelector("img").src = banners[bannerAtual];
    return bannerAtual;
})

const para_tras = document.querySelector("#para-tras");

para_tras.addEventListener("click", ()=>{
    bannerAtual -= 1;
    document.querySelector("img").src = banners[bannerAtual];
})
// setInterval(trocarBanner, 2000);

const imagem = document.querySelector("img");

// imagem.addEventListener("mouseover", ()=>{
//     document.querySelector("img").src = banners[1];
// })