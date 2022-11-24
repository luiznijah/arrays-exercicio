// # Exercício 2

// Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:

// - Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
const quanArrys= [1,2,3,4,5,6];
console.log(quanArrys.length);

// - Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
console.log("Imprima o primeiro item")
console.log(quanArrys[0]);
console.log(quanArrys[1]);
console.log(quanArrys[2]);
console.log(quanArrys[3]);
console.log(quanArrys[4]);
console.log(quanArrys[5]);
console.log(quanArrys[6]); // o indice numero 6 da undefined pois não ha um valor defimido no item


// - Verifique se um item está incluído no primeiro array e depois no terceiro array e imprima o resultado destas verificações no console.log(). A primeira impressão deve retornar um booleano true e a segunda deve retornar um booleano false.
console.log("verificação de conteudo")
console.log("1 esta na arry ?",quanArrys.includes(1)) ;
console.log("7 esta na arry ?",quanArrys.includes(7)) ;



















//const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";