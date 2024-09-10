// Adicionando eventos
const myButton = document.querySelector("#my-button");
// primeiro parâmetro evento, segundo parâmetro o irá acontecer depois
myButton.addEventListener("click", function () {
    console.log("Clicou papai");
});

// Removendo eventos
const btn_1 = document.querySelector("#btn");
const btn_2 = document.querySelector("#btn-remove");

function imprimirMensagem() {
    console.log("Click");
};
btn_1.addEventListener("click", imprimirMensagem);

btn_2.addEventListener("click", () => {
    console.log("Removido");
    btn_1.removeEventListener("click", imprimirMensagem);
});

// Argumento do evento
const myTitle = document.querySelector("#myTitle");

myTitle.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target);
});

// propagando eventos
const btn_container = document.querySelector("#btn-container");
const btn_div = document.querySelector("#div-btn");

btn_container.addEventListener("click", () => {
    console.log("Evento 1");
})

btn_div.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Evento 2");
})

// Removendo evento padrão
const a = document.querySelector("a");

a.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Num vai entrar nãooooo")
});

// eventos de tecla
// Quando aperta
// document.addEventListener("keydown", (e)=>{
//     console.log(`Apertou: ${e.key}`)
// });
// // quando solta
// document.addEventListener("keyup",(e)=>{
//     console.log(`Apertou: ${e.key}`)
// });

// Evento com mouse
const mouse = document.querySelector("#mouse");

mouse.addEventListener("mousedown", () => {
    console.log("clicannnnnnnn");
});

mouse.addEventListener("mouseup", () => {
    console.log("clicannn 1");
});

mouse.addEventListener("dblclick", () => {
    console.log("clicannnnnnnn 2");
});

// document.addEventListener("mousemove", (e) =>{
//     console.log(`No eixo ${e.x}`);
//     console.log(`No eixo ${e.y}`);
// });

// evento de scroll
// window.addEventListener("scroll", (e) =>{
//     if(window.scrollY > 30){
//         console.log(`Passamos 200px`);
//     }
// });

// Evento por foco
const my_focus = document.querySelector("#my-input");
my_focus.style.border = "1px solid #000";

// my_focus.addEventListener("focus",(e)=>{
//     my_focus.style.border = "1px solid #909090";
//     console.log("entrou no input");
// });

my_focus.addEventListener("blur", (e) => {
    my_focus.style.border = "1px solid #909090";
    console.log("Saiu do input");
});

// Evento de carregamento de página
window.addEventListener("load", console.log("a página carregou"));

window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
})

// Debounce
const debounce = (f, delay) => {
    let timeout;

    return (...arguments) => {
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            f.apply(arguments)
        }, delay);
    };
};

window.addEventListener("mousemove", debounce(() => {
    console.log("Executando a cada 1 segundo");
}, 1000));