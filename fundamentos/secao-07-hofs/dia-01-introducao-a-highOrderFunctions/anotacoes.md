forEach, que executa uma ação para cada item do array;
find, que encontra o primeiro elemento que satisfaça alguma condição;
some, que retorna true se algum elemento satisfizer alguma condição, caso contrário retorna false;
every, que retorna true se todos os elementos corresponderem a uma condição, caso contrário retorna false.


Utilizar a função Array.forEach para iterar sobre todos os elementos de um array;
Utilizar a função Array.find para encontrar o primeiro elemento de um array que satisfaça a uma condição;
Utilizar as funções Array.some e Array.every para testar se os elementos de um array satisfazem a uma condição;



A primeira parte de uma HOF é o array a ser iterado e a HOF a ser executada. Por exemplo:

**array.hofASerExecutada();**

A HOF recebe como parâmetro uma função callback.

Anota aí 📝: uma função callback é uma função passada por parâmetro ou executada dentro de outra função.

Nesse caso, vamos passar uma função anônima:

**array.hofASerExecutada(() => {});**

A função anônima que foi passada por parâmetro pode receber até três parâmetros:

o primeiro parâmetro é o elemento a ser iterado e é o único obrigatório;
o segundo parâmetro é o index do elemento atual;
o terceiro parâmetro é o array original e não é muito comum utilizá-lo.

<!-- // Array.forEach //  -->
O forEach é uma HOF que percorre o array e executa uma função para cada um dos seus valores e não retorna nada.

<!-- Array.find -->
A função find é utilizada para achar o primeiro elemento que satisfaça a condição passada e retorne o primeiro valor do array que corresponda a essa condição. Caso ele não encontre, retorna undefined.

**exemplo**
const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];
idades.find((idade) => idade < 20); // 18

Caso você realize uma verificação com o find que não encontre nenhum elemento, o retorno será undefined

<!-- Array.some e Array.every -->
As funções some e every são parecidas e retornam valores booleanos.
A função some retorna true se ao menos um elemento de um array satisfaz a uma condição. Já o every retorna true se todos os elementos de um array satisfazem a uma condição.

