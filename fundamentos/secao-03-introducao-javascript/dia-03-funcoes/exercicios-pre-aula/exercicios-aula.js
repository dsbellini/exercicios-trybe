// Vamos criar um projeto que será capaz de ler/receber três valores 
// inteiros e testar se são positivos. Em seguida, verifica se formam 
// um triângulo e, caso isso seja possível, verifica qual é o tipo de triângulo, 
// além de calcular o seu perímetro. Ao final, 
// uma mensagem deverá ser impressa na saída do console. 

// Ufa... E aí, aceita o desafio?

// Dados iniciais do desafio
// Valores dos lados em cm
let lado1 = 9;
let lado2 = -7;
let lado3 = 8;

// 1. Crie uma função `checkIntegerPositive` que verifica se os valores 
//    dos lados são inteiros e positivos.
// - a condição é que todos os valores dos lados devem ser maiores que zero;
// - a função deve receber 3 parâmetros (l1, l2, l3);
// - dica: use o operador E (&&);
// - se a condição for satisfeita, a função deve retornar true;
// - se a condição não for satisfeita, a função deve retornar false. 

function checkIntegerPositive(l1, l2, l3) {

    if (l1 === Math.floor(l1) && l2 === Math.floor(l2) && l3 === Math.floor(l3)) {
        if (l1 > 0 && l2 > 0 && l3 > 0) {
            return true;
        }
    } else {
        return false;
    }
}

console.log(checkIntegerPositive(lado1, lado2, lado3));

// 2. Crie uma função `checkItsATriangle` que verifica se os valores dos 
//    lados formam um triângulo.
// - a condição é que o valor de um lado deve sempre ser menor 
//   que a soma dos valores dos outros dois lados, ou seja, 
//   l1 < l2 + l3 e l2 < l1 + l3 e l3 < l1 + l2.
// - a função deve receber 3 parâmetros (l1, l2, l3); 
// - dica: use o operador E (&&);
// - se a condição for satisfeita, a função deve retornar true;
// - se a condição não for satisfeita, a função deve retornar false.

function checkItsATriangle (l1, l2, l3) {
    if ((l1 < l2 + l3) && (l2 < l1 + l3) && (l3 < l1 + l2)) {
        return true;
    } else {
        return false;
    }
}

// console.log(checkItsATriangle(lado1, lado2, lado3));

// 3. Crie uma função `checkWitchTriangle` que verifica qual é o tipo do triângulo.
// - a função deve receber 3 parâmetros (l1, l2, l3); 
// - Retorna a string `escaleno`, se todos os lados tiverem valores diferentes;
// - Retorna a string `isósceles`, se dois lados tiverem valores iguais e um lado tiver valor diferente
// - Retorna a string `equilátero`, se todos os lados tiverem valores iguais.
// - dica: use o operador E (&&);

function checkWitchTriangle (l1, l2, l3) {
    if (l1 !== l2 && l2 !== l3 && l1 !== l3 ) {
        return 'escaleno';
    } else if (l1 === l2 && l2 !== l3) {

    }
    
    else if ((l1 === l2 || l2 === l3 || l1 === l3 )) {
        return 'equilátero';
    }
}