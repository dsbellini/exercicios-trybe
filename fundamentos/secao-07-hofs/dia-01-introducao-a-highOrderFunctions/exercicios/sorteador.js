// Desenvolva uma HOF que retorne o resultado de um sorteio. 

// Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. 
// O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”).


// const numeroSorteado = Math.floor((Math.random() * 5) + 1);

// const sorteador = ((numero) => {
//     if (numero === numeroSorteado) {
//         return 'Parabéns, você ganhou!'
//     } else {
//         return 'Tente novamente'
//     }
// });

const numberChecker = (numero, numeroSorteado) => numero === numeroSorteado;

const sorteio = (numero, callback) => {
    const numeroSorteado = Math.floor((Math.random() * 5) + 1);
    return callback(numero, numeroSorteado) ? 'Parabéns, você ganhou!' : 'Tente de novo!'
}
console.log(sorteio(2, numberChecker))

// Gabarito:

// const numberChecker = (myNumber, number) => myNumber === number;

// const lotteryResult = (myNumber, callback) => {
//   const number = Math.floor((Math.random() * 5) + 1);

//   return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
// };

// console.log(lotteryResult(2, numberChecker));



