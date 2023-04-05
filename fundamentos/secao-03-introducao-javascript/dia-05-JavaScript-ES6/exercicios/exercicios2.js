// Parte II – Desafio técnico

// 1 – Crie uma função que ligue e desligue o motor de um carro

// function ignicaoMotor (string) {
//     if (string === 'ligado') {
//         return 'O motor está ligado';
//     } else if (string === 'desligado') {
//         return 'O motor está desligado';
//     } else {
//         return 'Não é assim que usa a chave da ignição'
//     }
// }
// console.log(ignicaoMotor('ligado'));

// OU a função abaixo:

// const ignicaoMotor = (string) => string === 'ligado' ? 'O motor está ligado' : 'O motor está desligado';
// console.log(ignicaoMotor(''));

// 2 – Crie uma função que calcule a área de um círculo

// function areaDoCirculo (numero) {
//     let areaCirculo = (numero*numero)*3.14
//     return areaCirculo;
// }
// console.log(areaDoCirculo(5));

// OU a função abaixo:

// const areaDoCirculo = (numero) => areaCirculo = (numero*numero)*3.14159;
// console.log(areaDoCirculo(10));

// 3 – Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase
// Exemplo:

// longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

// De olho na dica 👀: Nesse exercício, será necessário utilizar os conhecimentos sobre 

//array, método split e loop for/of.

// Bônus (opcional): Tente fazer o mesmo exercício utilizando o método array.sort().

function maiorPalavra (frase) {
    const palavras = frase.split(' '); // quebra a frase em palavras
    let maior = ''; // inicializa a maior palavra como uma string vazia

    for (let index = 0; index < palavras.length; index+= 1) {
        const palavra = palavras[index];
        if (palavra.length > maior.length) { // verifica se a palavra atual é maior que a maior palavra
          maior = palavra;
        }
      }

      return maior;
    };

console.log(maiorPalavra('Fui na barbearia e sem querer cortei meu bigode'));