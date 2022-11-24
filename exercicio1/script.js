// # Exercício 1

// No primeiro exercício vamos praticar a criação de arrays. Crie 3 arrays diferentes:

// - O primeiro deve possuir apenas **números**, e estes números não devem seguir nenhuma ordem específica;
console.log("a)")
const num = [1,2,3,4,5];
console.table(num);

// - O segundo array deve possuir apenas **strings**;
console.log("b)");
const letr = ["bananinha","maça","pera","uva"];
console.table(letr);

// - O terceiro array deve possuir **números**, **strings** e **booleanos**.
const varios = ["bananinha",23,true,1,false,"manga"];
console.table(varios);
console.log(varios.includes(48)); //.include(elemento) me mostra se tenho ele dentro da minha arrys

// Imprima cada um dos arrays acima, utilizando `console.log()`
console.log(num);
console.log(letr);
console.log(varios);