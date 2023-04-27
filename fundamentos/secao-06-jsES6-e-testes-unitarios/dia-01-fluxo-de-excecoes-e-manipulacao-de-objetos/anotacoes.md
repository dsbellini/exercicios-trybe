
<!-- Throw  -->

Para tratar erros em um código JavaScript, precisa-se do fluxo de exceção. Para isso, pode-se interromper o funcionamento do código e lançar um erro por meio do:
**throw new Error** , que cria e lança um objeto de erro. Exemplo: 

<!-- const sum = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
  return value1 + value2;
};

console.log(sum(2, '3')); -->

A palavra reservada **throw** serve para lançar uma exceção.
O operador **new** serve para criar um objeto personalizado ou nativo do JavaScript.
A palavra **Error** é um objeto nativo do JavaScript que representa um erro. Quando você o chama com o operador new, é criada uma cópia desse objeto, a qual será lançada como uma exceção no seu código.

<!-- Try/Catch-->

Enquanto o **try** tenta executar o código com sucesso, o **catch** é executado caso um erro seja lançado.
Dentro do bloco de código **try**, é feita a tentativa de executar a soma dos valores. Caso algum dos parâmetros não seja um número, um erro é lançado e o bloco de código **catch** entra em ação para capturar esse erro. Ao capturar o erro, a propriedade **message** permite acessar a mensagem de erro e utilizá-la para exibir um alerta ou uma mensagem de erro na tela. Exemplo: 

<!-- const verifyIsNumber = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos'); // através do construtor `new Error` já sabemos que será lançada a mensagem se algo der errado.
  }
};

const sum = (value1, value2) => {
  // o `try` vai executar a função verifyNumber e retornar a soma, caso os parâmetros sejam números
  try { 
    verifyIsNumber(value1, value2);
    return value1 + value2;
  // se o bloco `try` apresentar erro, o `catch` vai capturar esse erro e retornar a mensagem já criada por meio da propriedade `.message` nativa do objeto Error.
  } catch (error) {
    return error.message;
  }
};

console.log(sum(2, '3')); -->

O **parseInt converte o tipo de dado para number**, mesmo que o valor não seja de fato um número. Neste caso o valor retornado será NaN que significa que não é um número (do inglês, not a number). **O isNaN verifica se um dado valor é NaN**.