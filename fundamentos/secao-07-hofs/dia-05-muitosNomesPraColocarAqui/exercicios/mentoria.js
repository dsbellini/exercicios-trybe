const arrayNumeros = [1, 2, 3, 4, 5]

// Buscar os numeros menores que 3, e também somar os numeros

const soma = arrayNumeros.reduce((valorAnterior, valorAtual) => {
    console.log(valorAnterior);
    console.log(valorAtual);
    console.log('------')

    if (valorAtual < 3) {
        return valorAtual + valorAnterior;
    }
    return valorAnterior;
}, 3)

console.log(soma);







// const arrayTeste = [{
//     animais: {
//         macaco: 1,
//         ovelha: 2,
//         sapo: 'frog',
//     }
// }]

// const teste = arrayTeste.reduce((acumulador, animalAtual) => {
//    return animalAtual;
// })
// console.log(teste)
