// Elmentos
const btnImage = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

// Eventos
btnImage.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        
        btnImage.forEach((bt) =>{
            bt.querySelector(".color").classList.remove("selected")
        });

        const button = e.target;
    
        const id = button.getAttribute("id");
       
        button.querySelector(".color").classList.add("selected");

        image.classList.add("changing");
        image.setAttribute("src",`img/iphone_${id}.jpg`);
        setTimeout(()=>{
            image.classList.remove("changing");
        },500);
    });
});