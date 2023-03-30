// Desenvolva cada exercício a seguir com o uso de funções.

// Considere a variável saldo, que representa a quantia em conta de determinada(o) cliente do TrybeBank e escreva quatro programas que:

// Adicione um valor ao saldo.
// Subtraia um valor do saldo.
// Multiplique o valor do saldo por uma taxa.
// Divida o valor do saldo.


// saldo = 50;

// function saldoEmConta(saldo) {
//     return 'Olá fulano, seu saldo em conta é: ' + saldo;
// }
// console.log(saldoEmConta(saldo));

// saldo2 = 50;

// function saldoEmConta2(saldo2) {
//     return 'Olá fulano, seu saldo em conta após a compra é de: ' + (saldo2 - 10);
// }
// console.log(saldoEmConta2(saldo2));

// saldo3 = 50;

// function saldoEmConta3(saldo3) {
//     return 'Olá fulano, seu saldo em conta após o investimento é de: ' + (saldo3 * 2);
// }
// console.log(saldoEmConta3(saldo3));

// saldo4 = 50;

// function saldoEmConta4(saldo4) {
//     return 'Olá fulano, seu saldo em conta após dividir seu dinheiro com seu amigo é de: ' + (saldo4 / 2);
// }
// console.log(saldoEmConta4(saldo4));

/// Gabarito abaixo, modo correto:

let saldo = 100;

function somaSaldo(valor) {
  return valor + saldo;
};

function subtraiSaldo(valor) {
  return saldo - valor;
};

function multiplicaSaldo(valor) {
  return valor * saldo;
};

function divideSaldo(valor) {
  return saldo / valor;
};

console.log(somaSaldo(300)); // 400
console.log(subtraiSaldo(50)); // 50
console.log(multiplicaSaldo(2)); // 200
console.log(divideSaldo(5)); // 20

