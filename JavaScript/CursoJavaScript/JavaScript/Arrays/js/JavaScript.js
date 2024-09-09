// Arrays
// const array = [1,2,3,4,5];

// console.log(array);
// console.log(typeof array);

// const lista = ["Nahtanm",2.33,3,true,5];

// console.log(lista);

// Mais sobre arrays
// const letras = ["a","b","c"];

// console.log(letras[0]);

// // Propriedades
// const numbers = [4, 3, 2];

// console.log(numbers.length);

// // Métodos

// const numbers_2 = [1, 2, 3];

// const numbers_3 = numbers.concat(numbers_2);

// console.log(numbers_3)

// const text = "Algum texto";

// console.log(text.toUpperCase());

// // Objetos
// const person = {
//     name: "Nahtanm",
//     age: 23,
//     job: "Programador",
// };

// console.log(person.name);
// console.log(person.age);
// console.log(person.job);

// // Criando e deletando propriedades
// const car = {
//     dono: person.name,
//     engine: 2.0,
//     brand: "vw",
//     model: "tiguan",
//     km: 20000
// };

// console.log(car);

// // Criando
// car.doors = 4;
// // Deletando
// delete car.km;

// console.log(car);

// // Copia de objetos
// const obj = {
//     a: "Teste",
//     b: true
// };

// console.log(obj instanceof Object);

// const obj2 = {
//     c: []
// }

// Object.assign(obj2, obj);

// console.log(obj2);

// console.log(Object.keys(obj));
// console.log(Object.keys(obj2));

// console.log(Object.entries(car));

// // Mutação

// const a = {
//     a: "nahtanm"
// };

// const b = a;

// console.log(a);
// console.log(b);

// a.age = 23;

// console.log(a);
// console.log(b);

// delete b.age;

// console.log(a);
// console.log(b);

// Loops em arrays
// const users = ["Nahtanm", "jon", "Mota"];

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }

// Push pop

// const users = ["Nahtanm", "jon", "Mota", "Ramesias"];

// console.log(users);

// users.push("Manel");

// console.log(users);

// users.pop();

// console.log(users);

// // Shift e unshift

// const letras = ["a", "b", "c"];

// const letra = letras.shift();

// console.log(letras);
// console.log(letra);

// letras.unshift("a", "add", "ada");

// console.log(letras);

// indexOf e lastIndexOf
// const letras = ["a", "b", "c", "a"];

// console.log(letras.indexOf("a"));
// console.log(letras.lastIndexOf("a"));

// Slice
// const num = [1,2,3,4,5,6,7];
// const num1 = num.slice(2,6);

// console.log(num);
// console.log(num1);

// console.log(num.slice(2));

// forEach
// const numeros = ["nahtanm", "jon", "mota", "jadson"];

// numeros.forEach((numero) => {
//     console.log(numero);
// });

// const post = [
//     {title: "GUstavo", category: "Guanabara"},
//     {title: "jon", category: "vlogs"},
//     {title: "mo", category: "toca"}
// ];

// post.forEach((num) =>{
//     console.log(num.title, num.category);
// });

// include , reverse
// const arrays = [1,2,3,4,5,6,7,8];

// console.log(arrays.includes(2));

// console.log(arrays.reverse());

// // Métodos de String: trim
// const string = "  nahtanm \n ";

// console.log(string);
// // Limpando a string
// console.log(string.trim());

// // padStart
// const string = "1";

// const newString = string.padStart(4, "0");

// console.log(string);
// console.log(newString);

// // Split
// const split = "o rato roeu a roupa do rei de roma";
// const newSplit = split.split(" ");
// console.log(newSplit);
// console.log(split);

// // Join
// const frase = newSplit.join(", ");
// console.log(frase);

// // repeat
// const palavra = "Testando";

// console.log(palavra.repeat(3));

// // Rest operator
// const rest = (...args) => {
//     let total = 0;

//     for (let i = 0; i < args.length; i++) {
//         total += args[i];
//     }
//     return total;

// };

// console.log(rest(9, 2, 3, 4));

// //  For of
// const rest2 = (... args) =>{
//     let total = 0;

//     for(num of args){
//         total += num;
//     }
//     return total;
// };

// console.log(rest2(1,2,3,4,5,4,3,2,1));

// Destructuring 
// const userDetails = {
//     name: "Nahtanm",
//     sobrenome: "Santos",
//     job: "Programador"
// };

// const {name, sobrenome, job} = userDetails;
// console.log(name, sobrenome, job);

// // Renomear variaveis
// const {name: primeiroNome} = userDetails;

// // Destructuring em arrays
// const myList = ["Avião", "submarino", "Carro"];

// const [ve, vei, veiculo] = myList;

// console.log(myList);

// Json
// const myJson = '{"name": "Nahtanm", "age": 23 , "skills " : ["java", "html"]}';

// console.log(myJson);

// // Json para objeto e objeto para Json

// const myObject = JSON.parse(myJson);

// console.log(myObject);

// const myNewJson = JSON.stringify(myJson);

// console.log(myNewJson);