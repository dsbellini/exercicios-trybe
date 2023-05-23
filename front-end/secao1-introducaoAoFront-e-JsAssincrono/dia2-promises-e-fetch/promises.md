-- JS Assíncrono: Promises e Fetch -- 

-- Código assíncrono --

**setTimeout( () => {}, tempoADefinir)**

-- Promises --

Se quisermos criar nossas próprias promises podemos usar o construtor *new Promise()* para criar uma nova promise. Esse construtor *recebe uma função como parâmetro* e essa *função deverá ter dois argumentos: a função resolve e a função reject*.

**new Promise( (resolve, reject) => {});**

Os parâmetros *resolve* e **reject** serão usados para definirmos qual o estado que promise terá quando for finalizada.

Quando a promise for *resolvida*, usamos a função *resolve*;
Quando a promise for **rejeitada**, usamos a função **reject**.


// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

// promise resolvida retornando o número aleatório
const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      resolve(randomNumber);
    }, 1000);
  });

  Anota aí 📝: Repare que podemos retornar qualquer valor usando a função reject, mas geralmente é uma boa prática retornar um objeto de erro.

  Recebendo o retorno da promise

  Utilizar " then para promise resolvida" e  " catch para promise com erro "
Sintaxe: 

function().then( (*response*) => {
    " retorno desejado "
}).catch( (**error**) => {
    " retorno desejado "
});

O response é o retorno da funçao *resolve* e o error é o retorno da funçao **reject**.

Caso seja necessário executar algum código após o retorno da promise, independentemente se ela foi resolvida ou rejeitada, podemos usar o método finally. Esse método recebe como parâmetro uma função, que não recebe nenhum argumento.