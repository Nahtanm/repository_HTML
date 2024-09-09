// // setTimeout

// console.log("Ainda não executou");

// setTimeout(function () {
//     console.log("Dentro setTimeout");
// }, 2000);

// console.log("Ainda não executou 2");

// // setInterval

// console.log("Ainda não executou");

// // setInterval(function(){
// //     console.log("execuntando");
// // }, 3000);

// console.log("Ainda não executou 2");

// // Promises
// const promessa = Promise.resolve(5 + 5);

// console.log("Algum código");

// promessa
//     .then((value) => {
//         console.log(`A soma é ${value}`);
//         return value;
//     })
//     .then((value) => value - 1)
//     .then((value) => console.log(`Agora é ${value}.`));

// console.log("Algum código");

// // Falha na promise
// const numero = Promise.resolve(4 * "asda");

// numero.then((valor) => {
//     if (Number.isNaN(valor)) {
//         throw new Error("Valor inválido");
//     }
// }).catch((err) => console.log(err));

// Rejeitando Promises
// function checkNumber(n) {
//     return new Promise((resolve, reject) => {
//         if (n > 10) {
//             resolve("Número maior que 10")
//         } else {
//             reject(new Error("Número baixo"))
//         }
//     });
// }

// const a = checkNumber(20);
// const b = checkNumber(6);

// console.log(a, b);

// a.then((n) => console.log(n)).catch((err) => console.log(err));
// b.then((n) => console.log(n)).catch((err) => console.log(err));

// // Resolvendo varia promises
// const p1 = new Promise((resolve) => {
//     setInterval(function () {
//         resolve(10)
//     }, 3000);
// });

// const p2 = Promise.resolve(10 + 10);

// const p3 = new Promise((resolve, reject) => {
//     if (30 > 10) {
//         resolve(30);
//     } else {
//         reject("Error");
//     }
// });

// Promise.all([p1,p2,p3]).then((values) => console.log(values));

// // Async functions
// async function soma(a,b) {
//     return a + b;
// }

// soma(2,5).then((value) => {
//     console.log(value);
// });

// // Await
// function resolveDepaly(){
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve("Resolveu a Promise");
//         }, 2000);
//     })
// };

// async function chamada() {
//     console.log("Chamando a promise");
//     const result = await resolveDepaly();
//     console.log("Chegou:", result);
// }

// chamada();

// Generators
function* generator(){
    yield 1;
    yield 2;
}

const num = generator();

console.log(num.next().value);
console.log(num.next().value);