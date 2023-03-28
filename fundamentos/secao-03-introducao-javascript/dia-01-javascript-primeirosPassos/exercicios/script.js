// 1 - Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas variáveis, a e b, definidas no começo com os valores que serão operados.

let alfa = 50;
let bravo = 20;

console.log(alfa + bravo);
console.log(alfa - bravo);
console.log(alfa * bravo);
console.log(alfa / bravo);

// 2 - Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.[

let charlie = 80;
let delta = 90;

if (charlie > delta) {
    console.log('Charlie é o maior número');
} else if (charlie < delta) {
    console.log('Delta é o maior número');
}

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

// 4 - Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne: “positive”, se esse valor for positivo; “negative”, se esse valor for negativo, e “zero”, caso esse valor não seja nem positivo nem negativo.

let numero = -0;

if (numero >= 1) {
    console.log('positive');
} else if (numero < 0) {
    console.log('negative');
} else {
    console.log('zero');
} 

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

// 6 - Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

