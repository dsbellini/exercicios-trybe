<!-- .filter e .reduce -->

O filter e o reduce são algumas das mais poderosas funções para manipulação e criação de arrays. Enquanto o filter filtra o array de acordo com alguma condição e retorna apenas os valores que satisfizerem a essa condição, o reduce consegue reduzir o array a um valor único.

Imagine que você possua um array de números e strings e precise somente dos números. Como você resolveria esse problema? 🤔
Você pode ter pensado em várias soluções, mas nessa situação você pode utilizar o filter, que, como o próprio nome diz, filtra os dados de um array. Dessa maneira, você consegue filtrar somente os números do array, usando apenas uma linha de código.
E se você precisasse somar todos os números desse novo array, como você faria?
Para realizar a soma de todos os números do array, você pode utilizar o reduce, que vai passar por cada número do seu array e reduzir esse array a um valor único.

<!-- Array.filter -->

O filter é uma função responsável por realizar algum tipo de filtro no array, de acordo com uma condição.
A sintaxe dele é a seguinte:
array.filter(() => {});

Filter sempre retorna um Array.

<!-- Array.reduce -->

Diferente das outras HOFs, o reduce recebe dois parâmetros: o primeiro é uma callback, e o segundo parâmetro é um valor inicial (que é opcional).

A sintaxe do reduce é a seguinte:
array.reduce(callback, valorInicial);

O valorInicial é o valor da primeira iteração e, em geral, ao realizar somas, esse valor é 0.

Já a callback é a função que vai passar por cada um dos itens do array, e ela pode receber até 4 parâmetros, sendo eles:

Acumulador: que é o valor que vai ser acumulado a cada iteração;
Valor atual: que é o valor atual do item, a ser adicionado no acumulador;
Index atual: que é o index do item que está sendo iterado naquele momento;
Array: que é o array original.
Veja abaixo a estrutura completa do reduce:

array.reduce((acumulador, valorAtual, indexAtual, array) => { "código" }, valorInicial);

Dos 4 parâmetros que a callback pode receber, apenas dois são obrigatórios: o acumulador e o valor atual.

Os parâmetros acumulador e valor atual em geral são escritos em inglês e abreviados. Sendo assim:

o acumulador é chamado de acc (accumulator);
o valor atual é chamado de curr (current value).

Temos então que acc, abreviatura de accumulator, ou acumulador, deve obrigatoriamente ser o primeiro parâmetro da callback, e o curr, abreviatura de currentValue, ou valor atual, também obrigatório, deve ser o segundo parâmetro da callback. Sendo assim, para trabalhar com a função reduce você deve ter algo parecido com o código abaixo:

array.reduce((acc, curr) => {
  // escopo de execução da função
}, valorInicial);

Anota aí 📝: acc e curr são apenas nomes costumeiros, mas você pode dar o nome que quiser para o seu código, sendo uma boa opção escolher nomes semânticos, de acordo com o que é executado pela função em questão.

Geralmente, para encontrar o maior valor de um array utilizando o reduce, não utilizamos um valor inicial. Dessa forma, apenas valores presentes no array serão avaliados.



