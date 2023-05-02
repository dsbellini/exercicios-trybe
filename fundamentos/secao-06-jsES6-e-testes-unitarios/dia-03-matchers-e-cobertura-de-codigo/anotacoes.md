
<!-- Arrays -->
Você pode verificar se um array contém um item em particular utilizando **toContain**. 
Para verificar que um item possui uma estrutura mais complexa, utilize **toContainEqual**. 
**toHaveLength** permite facilmente verificar o tamanho de um array ou de uma string.

<!-- Objetos -->
É bastante comum testar se um objeto possui uma propriedade específica. O matcher **toHaveProperty** é ideal para esses casos. 
Por exemplo, podemos avaliar se, ao criar um objeto com e-mail e senha, o objeto realmente tenha essas propriedades. 
Mais ainda: podemos testar se o valor da propriedade de e-mail tem o valor adequado.

<!-- Exceções -->
Para testes de fluxos de exceções e de lançamentos de erros com o throw, podemos utilizar o matcher toThrow. Este matcher será usado para testar se uma função é capaz de lançar um erro quando executada. Por exemplo, se quisermos testar uma função verificaNumeros('string') passando uma string como parâmetro. O matcher toThrow irá testar o erro retornado pela função para verificar se a mensagem de erro está correta, por exemplo. Para testar se uma função está retornando um erro, é importante ter atenção à sintaxe do .toThrow:

<!-- const multiplyByTwo = (number) => {
  if (!number) {
    throw new Error('number é indefinido');
  }
  return number * 2;
};
multiplyByTwo(4);

test('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
  expect(multiplyByTwo(4)).toBe(8);
});
test('testa se é lançado um erro quando number é indefinido', () => {
  expect(() => { multiplyByTwo() }).toThrow();
});
test('testa se a mensagem de erro é "number é indefinido"', () => {
  expect(() => { multiplyByTwo() }).toThrow(new Error('number é indefinido'));
}); -->

Note que, para testar se um erro é lançado, passamos para o expect uma função. Chamamos multiplyByTwo dentro da arrow function. Chamar a função diretamente dentro de expect fará com que o erro não seja capturado. Assim, a asserção falhará, porque o erro acontecerá antes mesmo de expect ser executado e ter a chance de capturar o erro. Para testar a mensagem de erro, como fizemos no terceiro teste do exemplo acima, usamos o matcher toThrow e passamos dentro dos parênteses a mensagem que será mostrada em caso de erro: new Error("number é indefinido"). Observe que, nos dois casos, a função que queremos testar é chamada indiretamente por uma arrow function. Seguir essa sintaxe é importante para que o seu teste de exceções funcione corretamente.

<!-- not -->
not permite testar o oposto de algo. Por exemplo, este código testa que domingo é um dia da semana, mas não um dia útil:

<!-- const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekendDays = ['Sunday', 'Saturday'];
const weekDays = workDays.concat(weekendDays);

test('Sunday is a week day', () => {
  expect(weekDays).toContain('Sunday');
});

test('Sunday is not a workday', () => {
  expect(workDays).not.toContain('Sunday');
}); -->
