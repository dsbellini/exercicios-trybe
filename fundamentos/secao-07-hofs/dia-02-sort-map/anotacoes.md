<!-- Sort  -->

Ao trabalhar com strings e utilizar o sort sem nenhum parâmetro, ele entende que é para ordenar por ordem alfabética. Nesse caso, quando há elementos como números, o sort converte para string e realiza a comparação de acordo com a tabela de caracteres unicode 

Para resolver o problema da ordenação do inventário do mercado, você executou o código abaixo:

const inventory = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];
inventory.sort((a, b) => a - b);
console.log(inventory); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

a função sort recebe todos os elementos do array e realiza a comparação de cada um deles em pares (elemento1, elemento2). Se a operação elemento1 - elemento2 der resultado negativo, o elemento1 vai para trás. Caso contrário, vai para frente.

Se você precisar utilizar a forma decrescente, basta inverter a operação elemento1 - elemento2 por elemento2 - elemento1, como mostra o código abaixo:

const inventory = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];
// troca a operação para b - a
inventory.sort((a, b) => b - a);
console.log(inventory); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// Se é para colocar em ordem crescente, utilizamos a subtração do primeiro parâmetro pelo segundo. Para ordem decrescente, subtraímos do segundo parâmetro o primeiro.

<!-- .map()  -->

-- A função map possui a mesma estrutura que o forEach, o que muda é o seu retorno.
Retorna um novo array com o tamanho do original

-- Veja a diferença entre fazer uma mesma função usando for e, em seguida, usando map:
const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames = [];

for (let index = 0; index < persons.length; index += 1) {
  fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
}

console.log(fullNames);

-- map: 

const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);

console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

--

E, antes de seguir em diante, talvez você tenha se perguntado: Qual a diferença, afinal, de map para o forEach?

As principais diferenças são:
- O map aplica sobre os elementos de um array uma função e retorna um array novo, sem modificar o original;
- O forEach não tem retorno, ele é genérico e pode fazer diversas coisas, como executar uma função para cada elemento do array, modificar o array, atribuir valores a variáveis ou objetos, etc.

Em caso de dúvidas, pense neste exemplo:

const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.map((number) => number * 2)); // Retorno: [2, 4, 6, 8, 10, 12]

const evenNumbers = [];
numbers.forEach((number) => {
  if (number < 5 && number % 2 === 0) {
    evenNumbers.push(number);
  }
});
console.log(evenNumbers); // Retorno: [2, 4]

Pense sempre que o forEach faz com arrays o que as outras HOFs não conseguem fazer. Ele é genérico!

Exemplos ótimos:
https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/fc998c60-386e-46bc-83ca-4269beb17e17/section/ccfff26d-24c9-422e-b886-6ee19f20db14/day/8790e866-4041-4e49-89b7-d491d19b40fd/lesson/a25fa04c-3246-4083-988a-9c93f9fd00bc

