// # Exercício 3

// Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;
const cor = ["rosa","preto","cinza","azul" ];
const corCop = cor.slice();
console.table(cor);
console.table(corCop);

// - Adicione um item `number` ao início do primeiro array. Utilize `console.log()` para exibir o original e a cópia;
cor.unshift(1);
console.log("original");
console.table(cor);
console.log("copia");
console.table(corCop);

// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
corCop.pop();
console.table(corCop);

// - Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
corCop.splice(1,1);
console.log("copia");

console.table(corCop);
console.log("original");
console.table(cor);
