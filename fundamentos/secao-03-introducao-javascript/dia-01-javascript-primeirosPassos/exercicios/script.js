// 1 - Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas variáveis, a e b, definidas no começo com os valores que serão operados.

let alfa = 50;
let bravo = 20;

console.log(alfa + bravo);
console.log(alfa - bravo);
console.log(alfa * bravo);
console.log(alfa / bravo);
console.log('Exercício 1 acima')


// 2 - Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.[

let charlie = 80;
let delta = 90;

if (charlie > delta) {
    console.log('Charlie é o maior número');
} else if (charlie < delta) {
    console.log('Delta é o maior número');
}
console.log('Exercício 2 acima')


// 3 - Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.

let echo = 80;
let fox = 90;
let golf = 91;

if (echo > fox && echo > golf) {
    console.log('Echo é o maior número');
} else if (fox > echo && fox > golf) {
    console.log('Fox é o maior número');
} else if (golf > fox && golf > echo) {
    console.log('Golf é o maior número');
}
console.log('Exercício 3 acima')


// 4 - Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne: “positive”, se esse valor for positivo; “negative”, se esse valor for negativo, e “zero”, caso esse valor não seja nem positivo nem negativo.

let numero = -0;

if (numero >= 1) {
    console.log('positive');
} else if (numero < 0) {
    console.log('negative');
} else {
    console.log('zero');
}
console.log('Exercício 4 acima')


// 5 - 🚀 Utilize if/else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

let angulo1 = 60;
let angulo2 = 60;
let angulo3 = 60;
let trianguloInterno = 180;

if (angulo1, angulo2, angulo3 === 60) {
    console.log(true);
} else {
    console.log('Angulo incorreto')
}
// Gabarito abaixo:

// let degreeAngleA = 65;
// let degreeAngleB = 100;
// let degreeAngleC = 15;

// let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

// let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

// if(allAnglesArePositives){
//   if (sumOfAngles === 180) {
//     console.log(true);
//   } else {
//     console.log(false);
//   };
// } else {
//   console.log('Erro: ângulo inválido!');
// }

console.log('Exercício 5 acima')



// 6 - Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

let cavaloXadrez = 'nada';

switch (cavaloXadrez) {
    case 'horizontalmente':
        console.log('Se move horizontalmente');
        break;
    case 'verticalmente':
        console.log('Se move verticalmente');
        break;
    default:
        console.log('Movimento proibido');
}
console.log('Exercício 6 acima')

let chessPiece = 'bispo';

// Gabarito abaixo
// switch (chessPiece.toLowerCase()) {
//   case 'rei':
//     console.log('Rei-> Uma casa apenas para qualquer direção.');
//     break;
//   case 'bispo':
//     console.log('Bispo-> Diagonal.');
//     break;
//   case 'rainha':
//     console.log('Rainha-> Diagonal, horizontal e vertical.');
//     break;
//   case 'cavalo':
//     console.log('Cavalo -> "L" pode pular sobre as peças.');
//     break;
//   case 'torre':
//     console.log('Torre -> Horizontal e vertical.');
//     break;
//   case 'peão':
//     console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
//     break;
//   default:
//     console.log('Erro, peça inválida!');
// };


// 7 - Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga as seguintes regras:

// 8 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.

let numero1 = 1;
let numero2 = 3;
let numero3 = 12;

if (numero1, numero2, numero3 % 2 === 0) {
    console.log(true);
} else {
    console.log(false);
}
console.log('Exercício 8 acima')

// 9 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, o código deve retornar false.

let numero4 = 4;
let numero5 = 4;
let numero6 = 3;

if (numero4, numero5, numero6 % 2 !== 0) {
    console.log(true);
} else {
    console.log(false);
}
console.log('Exercício 9 acima')

// 10 - Utilize if/else para escrever um código que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, o código deve calcular o lucro (ou seja, o valor de venda menos o custo do produto) da empresa ao vender mil produtos.

let valorVenda = 50;
let custoProduto = 30;
let lucro;

if (lucro = valorVenda - custoProduto) {
    console.log(lucro * 1000)
}
console.log('Exercício 10 acima')

// 11 - Utilize if/else para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido.

let salarioBruto = 8000;
let salarioLiquido;
let salarioBase;
let valorIr;

let inssFaixa1 = 1556.94;
let inssFaixa2 = 2594.92;
let inssFaixa3 = 5189.82;

let impostoFaixa1 = 1903.99;
let deducaoFaixa1 = 142.80;

let impostoFaixa2 = 2826.66;
let deducaoFaixa2 = 354.80;

let impostoFaixa3 = 3751.06;
let deducaoFaixa3 = 636.13;

let impostoFaixa4 = 4664.69;
let deducaoFaixa4 = 869.36;

if (salarioBruto <= inssFaixa1) {
    salarioBase = salarioBruto - (salarioBruto * 8) / 100
    if (salarioBase <= impostoFaixa1) {
        salarioLiquido = salarioBase;
        console.log('Seu salário líquido é ' + salarioLiquido);
    }
} else if (salarioBruto <= inssFaixa2) {
    salarioBase = salarioBruto - (salarioBruto * 9) / 100
    if (salarioBase <= impostoFaixa2) {
        valorIr = (salarioBase * 7.5) / 100 - deducaoFaixa1;
        salarioLiquido = salarioBase - valorIr;
        console.log('Seu salário líquido é ' + salarioLiquido);
    }
} else if (salarioBruto <= inssFaixa3) {
    salarioBase = salarioBruto - (salarioBruto * 11) / 100
    if (salarioBase <= impostoFaixa3) {
        valorIr = (salarioBase * 22.5) / 100 - deducaoFaixa1;
        salarioLiquido = salarioBase - valorIr;
        console.log('Seu salário líquido é ' + salarioLiquido);
    }
} else if (salarioBruto > inssFaixa3) {
    salarioBase = salarioBruto - 570.88;
    valorIr = (salarioBase * 27.5) / 100 - deducaoFaixa4;
    salarioLiquido = salarioBase - valorIr;
    console.log('Seu salário líquido é ' + salarioLiquido);
}
console.log('Exercício 11 acima, FINALMENTE!')



// const salarioBruto = 8000;
// let salarioLiquido;
// let salarioBase;
// let valorIr;

// const inssFaixas = [1556.94, 2594.92, 5189.82];
// const impostoFaixas = [1903.99, 2826.66, 3751.06, 4664.69];
// const deducoes = [142.80, 354.80, 636.13, 869.36];

// if (salarioBruto <= inssFaixas[0]) {
//   salarioBase = salarioBruto * 0.92;
//   if (salarioBase <= impostoFaixas[0]) {
//     salarioLiquido = salarioBase;
//   }
// } else if (salarioBruto <= inssFaixas[1]) {
//   salarioBase = salarioBruto * 0.91;
//   if (salarioBase <= impostoFaixas[1]) {
//     valorIr = (salarioBase * 0.075) - deducoes[0];
//     salarioLiquido = salarioBase - valorIr;
//   }
// } else if (salarioBruto <= inssFaixas[2]) {
//   salarioBase = salarioBruto * 0.89;
//   if (salarioBase <= impostoFaixas[2]) {
//     valorIr = (salarioBase * 0.225) - deducoes[0];
//     salarioLiquido = salarioBase - valorIr;
//   }
// } else {
//   salarioBase = salarioBruto - 570.88;
//   valorIr = (salarioBase * 0.275) - deducoes[3];
//   salarioLiquido = salarioBase - valorIr;
// }

// console.log('Seu salário líquido é ' + salarioLiquido.toFixed(2));

// Código refatorado pelo Chat GPT - Apenas para estudos sobre  um código mais limpo
