// Faça um programa para adicionar clientes ao array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro caso o parâmetro não seja do tipo string.

// let clientesTrybeBank = ['Ada', 'John', 'Gus'];


// function adicionaCliente(cliente) {
//     if (typeof cliente === 'string') {
//         clientesTrybeBank.push(cliente);
//         return 'Cliente adicionado com sucesso!'
//     } else {
//         return 'Deve ser uma string';
//     }
// }

// console.log(adicionaCliente(true));
// console.log(adicionaCliente('Danilo'));
// console.log(clientesTrybeBank);

// Agora iremos escrever um programa que irá excluir um(a) cliente já existente do array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro, caso o parâmetro não seja do tipo string e caso o(a) cliente não exista dentro do array.

// let clientesTrybeBank2 = ['Ada', 'John', 'Gus'];

// function removeCliente(cliente) {
//   if (typeof cliente === 'string') {
//     let clienteEncontrado = false;
//     for (let index = 0; index < clientesTrybeBank.length; index += 1) {
//       if (cliente === clientesTrybeBank[index]) {
//         clientesTrybeBank.splice(index, 1);
//         clienteEncontrado = true;
//         return 'Cliente excluída(o) com sucesso.';
//       }
//     }

//     if (clienteEncontrado === false) {
//       return 'Cliente não encontrada(o)'
//     }
//   } else {
//     return 'O parâmetro passado deve ser do tipo "string"!';
//   }
// };

// console.log(removeCliente(false)); // O parâmetro passado deve ser do tipo "string"!
// console.log(removeCliente('Barney')); // Cliente não encontrada(o)
// console.log(removeCliente('John')); // Cliente excluída(o) com sucesso.
// console.log(clientesTrybeBank); // [ 'Ada', 'Gus' ]

//

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function removeCliente(cliente) {
  if (typeof cliente === 'string') {
    let clienteEncontrado = false; 
    for (let index = 0; index < clientesTrybeBank.length; index += 1) {
      if (cliente === clientesTrybeBank[index]) {
        clientesTrybeBank.splice(index, 1);
        clienteEncontrado = true;
        return 'Cliente excluída(o) com sucesso.';
      }
    }

    if (clienteEncontrado === false) {
      return 'Cliente não encontrado'
    }

  } else {
    return 'O parâmetro passado deve ser do tipo "string"!';
  }
};

