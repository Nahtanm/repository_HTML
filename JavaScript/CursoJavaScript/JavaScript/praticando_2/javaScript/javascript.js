// estilizando com javascript
const header = document.querySelector("header");
const navBar = header.querySelector("nav");
const ul = header.querySelector("ul");
const li = ul.getElementsByTagName("li");

header.style.position = "relative";
navBar.style.position = "absolute";
navBar.style.left = "50%";
navBar.style.bottom = "10%";
ul.style.display = "flex";

for(const lii of li){
    lii.style.marginLeft = "50px";
    lii.style.listStyle = "none";
}

header.style.borderBottom = "1px solid #909090";


