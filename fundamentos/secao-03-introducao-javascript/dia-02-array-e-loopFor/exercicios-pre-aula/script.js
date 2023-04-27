// Obtenha o valor “Serviços” do array menu:

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

// Procure o índice do valor “Portfólio” do array menu:

let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu2.indexOf('Portfólio');

console.log(indexOfPortfolio);

// Adicione o valor “Contato” no final do array menu.

let menu3 = ['Home', 'Serviços', 'Portfólio', 'Links'];

menu3.push('Contato');

console.log(menu3);

/// Utilize o for para imprimir os elementos da lista groceryList com o console.log():

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia', 'Mamão'];

for (let index = 0; index < groceryList.length; index = index += 1) {
    let element = groceryList[index];
    console.log(element);
}

// Utilize o for/of para imprimir os elementos da lista names com o console.log():

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let index of names) {
    console.log(index);
}

/// exercício de Algoritmos

let fruits = [3, 4, 10, 1, 12];
let valor;

for (let index = 0; index < fruits.length; index += 1) {
    valor = valor + fruits[index];
}
if (valor > 15) {
    console.log(valor);
} else {
    console.log('Valor menor que 16');
}

//// Fixando aprendizados

let n;

let resultado = 100;
for (let index = 0; index <= 9; index += 1) {
  resultado -= index;
};
console.log(resultado);