const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];

  // Utilize o sort para ordenar o array pela idade das pessoas em ordem crescente.
  people.sort((a, b) => a.name > b.name ? 1 : -1)

  //Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente.

  //people.sort((a, b) => b.age - a.age) 
  // decrescente ou -> a.age - b.age para crescente 

  // Se é para colocar em ordem crescente, utilizamos a subtração do primeiro parâmetro pelo segundo. 
  //Para ordem decrescente, subtraímos do segundo parâmetro o primeiro.

  //console.log(people);

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const produtos = products.map((element, index) => element.concat(prices[index]));

console.log(produtos);

