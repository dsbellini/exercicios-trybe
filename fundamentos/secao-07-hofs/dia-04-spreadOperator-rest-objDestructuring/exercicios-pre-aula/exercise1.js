// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Morango', 'Banana', 'Melancia'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite em pó', 'Granola', 'Açaí'];

const fruitSalad = (fruit, additional) => {
 return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));