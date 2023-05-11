
// Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1, caso não seja passado nenhum valor como segundo parâmetro.

const multiply = (number = '<- Numero nao inserido no parametro ->', value = '<- Valor nao inserido no parametro ->') => {
    return `O resultado é: ${number} e o valor é: ${value} `;
  };
  
  console.log(multiply(1));

  // outros exemplos:

  const multiply2 = (number, value = 2) => { //Define 2 como parametro para value. Portanto sempre que o number foi multiplicado pelo value, vai ser por 2, caso nao seja inserido outro valor no retorno da funçao.
    return number * value
  };
  
  console.log(multiply2(8));