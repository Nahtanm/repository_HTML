//  movendo-se pelo dom
console.log(document.body);

console.log(document.childNodes);

console.log(document.childNodes[1].childNodes);

console.log(document.childNodes[1].childNodes[1].textContent);

// Selecionando elementos por tag
const listItens = document.getElementsByTagName("li");

console.log(listItens);

// Selecionando elementos por id
const intemId = document.getElementById("title");

console.log(intemId);

// Selecionando elemento por classes
const elemtentoClasse = document.getElementsByClassName("product");

console.log(elemtentoClasse);

// Endontrando elementos por css
const product = document.querySelectorAll(".product");

console.log(product);

const mainContainer = document.querySelector("#main-container");

console.log(mainContainer);

// Alterando o html - insertBefore
const p = document.createElement("p"); // Criando um novo elemento.

console.log(p);

const header = intemId.parentElement; // Buscando element pai de outro elemento.

header.insertBefore(p, intemId);// Inserindo um elemento antes do elemento filho.

// Alterando o html - appendChild
const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

li.textContent = "Contato";

navLinks.appendChild(li);


// Alterando o html - replaceChild
const h2 = document.createElement("h2");

h2.textContent = "Meu novo titulo";

header.replaceChild(h2, intemId);

// createTectNode
const myText = document.createTextNode("Um texto novo");

console.log(myText);

const h3 = document.createElement("h3");

h3.appendChild(myText);

console.log(h3);

mainContainer.appendChild(h3);

// Trabalhando com atributos
const firstLink = navLinks.querySelector("a");

firstLink.textContent = "Google";

console.log(firstLink);

firstLink.setAttribute("href","https://www.google.com");

console.log(firstLink.getAttribute("href"));

// Altura e largura dos elementos
const footer = document.querySelector("footer");

console.log(footer.offsetWidth);
console.log(footer.offsetHeight);

console.log(footer.clientHeight);
console.log(footer.clientWidth);

// Posição do elemento
const product1 = product[0];

console.log(product1.getBoundingClientRect());

// CSS com JS
mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "#919191";
mainContainer.style.paddingBottom = "20px";
mainContainer.style.border = "20px solid #000";

// HTMLCollection
for(const li of listItens){
    li.style.backgroundColor = "black";
}