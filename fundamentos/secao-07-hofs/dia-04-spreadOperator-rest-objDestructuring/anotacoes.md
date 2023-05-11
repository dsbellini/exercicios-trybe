<!-- Spread Operator -->

*Utilizando spread em arrays*
A sintaxe do spread para utilizar em arrays é composta por:

uma variável, que vai salvar o novo array;
os colchetes, que caracterizam que é um array;
os três pontos ..., que caracterizam que uma informação está sendo espalhada. Nesse caso, o array original;
o elemento a ser adicionado.
Observe como fica a sintaxe do spread em arrays:

const variavel = [...arrayOriginal, itemParaAdicionar];

**const items = ['Camiseta', 'Carregador', 'Chinelo'];

const newItems = [...items, 'Meia'];

console.log(newItems); // ['Camiseta', 'Carregador', 'Chinelo', 'Meia'];**

*Utilizando spread em objetos*

Mesma sintaxe do array, mas utiliza { } ;

const product = {
    id: 1,
    name: 'Camiseta',
};

// adiciona a chave `price` com o valor `23`
const newProduct = { ...product, price: 23 };

console.log(newProduct); // {id: 1, name: 'Camiseta', price: '23'}

Como o spread espalha valores, ele também pode ser utilizado para enviar argumentos de uma função que recebe vários parâmetros.

*const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];*
*console.log(Math.max(...randomNumbers)); // 800*

O código acima utiliza o spread para espalhar os números do array randomNumbers como argumentos da função Math.max. Dessa maneira, seu código fica muito mais organizado e legível, e você pode utilizá-lo sempre que for preciso, tanto em funções nativas quanto em funções criadas por você.

Anota aí 📝: O spread é responsável por espalhar valores, e ele pode ser utilizado para passar parâmetros ao EXECUTAR uma função. Já o rest pode ser utilizado para agrupar valores ao DECLARAR funções que podem receber múltiplos parâmetros.

<!-- Object Destructuring -->

