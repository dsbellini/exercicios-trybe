<!-- Array Destructuring -->

Podemos desestruturar arrays da mesma forma que desestruturamos objetos usando a notação para array destructuring.
Com a desestruturação de array, podemos declarar todas as variáveis contendo os nomes dos países usando apenas uma única linha de código:

const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada*

Perceba que, ao invés de declarar uma variável para cada elemento do Array acessando o valor através do index como arrayCountries[0], é possível passar no valor da desestruturação o nome da variável que irá armazenar o valor correspondente àquela posição. Ou seja, a variável firstCountry, passada no primeiro index da desestruturação, armazena o valor presente no index 0 da array desestruturada.

<!-- Default Destructuring -->

Quando tentamos acessar uma propriedade que não existe, o valor retornado é undefined. E se você quisesse dar um valor padrão para alguma chave, caso essa propriedade não existisse no objeto? Você consegue atribuir esse valor padrão utilizando default destructuring, que é mais um recurso do ES6:

const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality = 'Brazilian' } = person;
console.log(nationality); // Brazilian

Analogamente, o mesmo pode ser feito na hora de desestruturar um array:

const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0

//

<!-- Object Property Shorthand -->

Permite declarar chaves de objetos direto, de acordo com o parametro da função. exemplo: 

const newUser = (id, name, email) => {
  return {
    id: *id*,
    name: *name*,
    email: *email*,
  };
};

console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

**Funçao acima, se torna a função abaixo:**

const newUser = (id, name, email) => {
  return {
    *id*,
    *name*,
    *email*,
  };
};

console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

<!-- Default Parameters -->

Define um default para um parametro de função, caso a função seja chamada sem esse parametro, para que o resultado nao seja undefined.

 Exemplo:

const greeting = (user = 'pessoa usuária') => console.log(`Welcome ${user}!`);
greeting(); // // Welcome pessoa usuária!
