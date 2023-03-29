
// Percorra o array imprimindo todos os valores contidos nele com a função console.log().

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index <numbers.length; index += 1) {
    console.log('Numero do array ' + numbers[index]);
}
// Some todos os valores contidos no array e imprima o resultado.
let soma = 0;

for (let index2 = 0; index2 < numbers.length; index2 += 1) {
    soma =+ numbers[index2];
}
console.log(soma);

// Calcule e imprima a média aritmética dos valores contidos no array. 

let media = 0;
let soma2 = 0;

for (let index3 = 0; index3 < numbers.length; index3 += 1) {
    soma2 += numbers[index3];
}
media = soma2 / numbers.length;

console.log('Média da soma: ' + media);

// Com base no código que acabou de gerar, faça com que: caso o valor final seja maior que 20, imprima a mensagem “Valor maior que 20”; e, caso não seja maior que 20, imprima a mensagem “Valor menor ou igual a 20”.

if (media > 20) {
    console.log('Valor maior que 20!')
} else {
    console.log('Valor menor ou igual a 20!')
};

// Utilizando for, descubra o maior valor contido no array e imprima-o.

let maiorNumero = numbers[0];
for (let index4 = 0; index4 <= numbers.length; index4 += 1) {
    if (numbers[index4] > maiorNumero) {
        maiorNumero = numbers[index4];
    }
}
console.log('Este é o maior número do array: ' + maiorNumero);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”. 
// [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

let valorImpar = 0;

for (index5 = 0; index5 < numbers.length; index5 += 1) {
    if (numbers[index5] %2 !== 0) {
        valorImpar += 1;
    }
}

if (valorImpar === 0) {
    console.log('nenhum valor ímpar encontrado');
} else {
    console.log('Quantidade de valores ímpar: ' + valorImpar);
}

// Utilizando for, descubra o menor valor contido no array e imprima-o.

let menorNumero = numbers[0];
for (let index6 = 0; index6 <= numbers.length; index6 += 1) {
    if (numbers[index6] < menorNumero) {
        menorNumero = numbers[index6];
    }
}
console.log('Este é o menor número do array: ' + menorNumero);

// Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.

let numbers2 = [];

for (index7 = 1; index7 <= 25; index7 += 1) {
    numbers2.push(index7);
}
console.log('Numeros de 1 a 25 ' + numbers2);

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

for (index8 = 0; index8 < numbers2.length; index8 += 1) {
let divisaoDoArray = numbers2[index8] / 2;

console.log(divisaoDoArray);
}

