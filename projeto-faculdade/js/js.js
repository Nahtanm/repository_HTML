// Slide
// Elementos Destaques
const image = document.querySelector("#imagem-jogo");
const mudarImage = document.querySelectorAll("#imagem-mudar li");

mudarImage.forEach((btn) =>{
    btn.addEventListener("click", (e) =>{

        mudarImage.forEach((bt)=>{
            bt.querySelector(".fa-circle-dot").classList.remove("selected");
        });
       
        const id = btn.getAttribute("id");
        console.log(id)
        btn.querySelector(".fa-circle-dot").classList.add("selected");

        image.setAttribute("src", `img/${id}.jpeg`)
    });
});

// Carrossel
// Elementos 
const listJogos = ["img/jogo-1.jpeg","img/jogo-2.jpeg","img/jogo-3.jpeg"];
let bannerAtual = 0;

function trocarJogo(){
    bannerAtual = (bannerAtual + 1) % listJogos.length;
    document.querySelector("#imagem-jogo").src = listJogos[bannerAtual];
}
setInterval(trocarJogo, 3000);

