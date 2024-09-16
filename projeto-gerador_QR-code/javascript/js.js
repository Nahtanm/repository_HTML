// Elementos
const container = document.querySelector(".container");
const btn = document.querySelector("#qr-form button");
const inputQrForm = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img");

// Eventos
function geradorQr() {
    const inputQr = inputQrForm.value;

    btn.innerText = "Gerando QR code...";

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputQr}`;

    if (!inputQr) {
        btn.innerText = "Insira um valor";
    } else {
        qrCodeImg.addEventListener("load", () => {
            container.classList.add("active");
            btn.innerText = "Código criado!";
        });
    }
}

btn.addEventListener("click", () => {
    geradorQr();
});

inputQrForm.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        geradorQr();
    }
});

// limpar área do qr-code
inputQrForm.addEventListener("keyup", () => {
    if (!inputQrForm.value) {
        container.classList.remove("active");
        btn.innerText = "Gerar QR Code";
    }
});