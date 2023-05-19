// myRemove

const {myRemove} = require('./script');
describe('Requisito 1, testa a função myRemove', () => {
    test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});

// myFizzBuzz

const {myFizzBuzz} = require('./script');
describe('Requisito 2, testa a função myFizzBuzz', () => {
    test('Verifica se o valor inserido é divisível por 3 e 5', () => {
        expect(myFizzBuzz(15)).toEqual('fizzbuzz');
    })
    test('Verifica se o valor inserido é divisível por 3', () => {
        expect(myFizzBuzz(9)).toEqual('fizz');
    })
    test('Verifica se o valor inserido é divisível por 5', () => {
        expect(myFizzBuzz(10)).toEqual('buzz');
    })
    test('Verifica se o valor inserido NÃO é divisível por 3 e 5', () => {
        expect(myFizzBuzz(16)).not.toEqual('fizzbuzz');
        // ou: expect(myFizzBuzz(1)).toBe(1);
    })
    test('Verifica se o valor inserido não é um número', () => {
        expect(myFizzBuzz('teste')).toEqual(false);
    })
})

//encodeDecode 

const {encode, decode} = require('./script');

describe('Requisito 3, testa as funções Encode e Decode', () => {
    test('Verifica se Encode e Decode são funções', () => {
        expect(typeof encode).toBe('function');
        expect(typeof decode).toBe('function');
    })
    test('Verifica na função Encode se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5,', () => {
        expect(encode('a,e,i,o,u')).toEqual('1,2,3,4,5');
    })
    test('Verifica na função Decode se os numeros 1, 2, 3, 4 e 5, são convertidos nas vogais a, e, i, o, u s', () => {
        expect(decode('1,2,3,4,5')).toEqual('a,e,i,o,u');
    })
    test('Verifica se nas demais letras/números não são convertidos para cada caso;', () => {
        expect(decode('1,2,3,4,5,6')).toEqual('a,e,i,o,u,6');
        expect(encode('a,e,i,o,u,f,g')).toEqual('1,2,3,4,5,f,g');
    })
    test('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.', () => {
        expect(decode('1,2,3,4,5').length).toEqual(('a,e,i,o,u').length);
        expect(encode('1,2,3,4,5').length).toEqual(('a,e,i,o,u').length);

    })

})

// techList

const {techList} = require('./script.js');

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

// hydrate

const {hydrate} = require('./script.js');

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});


