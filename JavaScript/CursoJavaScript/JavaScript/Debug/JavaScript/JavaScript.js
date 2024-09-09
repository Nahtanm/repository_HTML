// Strict
"use strict";

//  Console.log

let a = 1;
let b = 2;

if (a == 1) {
    a = b + 2;
}

console.log(a);

// //Debugger
// let c =  1;
// let d = 3;

// if(c==1){
//     c = d + 2;
// }

// debugger;

// for(let i = 0; i < d;i++){
//     c = d + 2;
// }

// console.log("Executando")

// debugger;

// Tratamento de dados
function checkNumeber(num) {
    const result = Number(num); //Converte qualquer variavel para número.

    if (Number.isNaN(result)) {
        console.log("Não é um número");
        return;
    }
    console.log("Valor correto");
    return result;
}

// Exceptions
// let x = 10;

// if(x != 11){
//     throw new Error("O valor de x não pode ser diferente de 11");
// }

// Try catch
try {
    const value = checkNumeber("n");
    if (!value) {
        throw new Error("Erro");
    }
} catch (error) {
    console.log(error);
} finally {
    console.log("O código foi executado");
}

// Assertions
function checkArray(arr){
    if(arr.length === 0){
        throw new Error("Array vázia");
    }else{
        console.log(`O array tem ${arr.length} elementos.`);
    }
}

// checkArray([]);
checkArray([1,2,3,4,5,6,7,9]);