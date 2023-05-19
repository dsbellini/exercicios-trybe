// const numbers = [50, 85, -30, 3, 15];

// const teste = numbers.reduce((bigger, number) => {
//     return bigger > number ? bigger : number
// });
// console.log(teste);

// 1 - Para fixar ainda mais o conceito de reduce, faça uma função que some todos os números pares do array numbers.
//Tente criar duas funções, uma usando reduce e filter, e outra apenas usando reduce.

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumWithFilterAndReduce = numbers.
    filter((numeroPar) => (numeroPar % 2) === 0).
    reduce((acc, curr) => acc + curr, 0);

const sumWithReduce = numbers.
    reduce((acc, curr) => (curr % 2 === 0) ? acc + curr : acc , 0)

console.log(sumWithFilterAndReduce);
console.log(sumWithReduce);