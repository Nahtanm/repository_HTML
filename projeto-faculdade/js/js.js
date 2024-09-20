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