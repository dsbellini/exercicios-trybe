
Async e await substituem o then. 

Sintaxe: 

const cep = '30130-010'; 
const response = *await* fetch(`https://viacep.com.br/ws/${cep}/json/`);
const data = *await* response.json();

É necessário usar try/catch em funçoes com async/await. Exemplo:

buttonEl.addEventListener('click', handleClick);

async function handleClick() {
  const cep = inputEl.value;

  try {
    const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await result.json();

    preEl.innerHTML = JSON.stringify(data);
    return data;
  } catch (error) {
    return error.message;
  }
}

<!-- -- Testes assíncronos --  -->

Exemplo:

É importante adicionarmos o operador async no segundo argumento da função test(). Isso faz com que seja possível usarmos o operador await para esperarmos os dados da nossa função getAddressFromCep(), que é assíncrona.

test('deve retornar os dados quando passamos um cep válido', *async* () => {
    const address = **await** getAddressFromCep('30130010');
    expect(address.cep).toBe('30130-010');
    expect(address.logradouro).toBe('Praça Sete de Setembro');
    expect(address.bairro).toBe('Centro');
    expect(address.uf).toBe('MG');
});

-- Quando a requisição é rejeitada, ela deverá retornar erro -- 

Além de utilizarmos async/await como nos testes anteriores, nesse caso precisaremos também de um matcher especial do Jest. Como estamos testando a rejeição de uma Promise, precisamos usar o helper rejects combinado com o matcher toThrow, que testará o erro que foi lançado.

test('Deve lançar erro "Você precisa passar um CEP" quando passar cep vazio', async () => {
    const emptyCep = '';

    await expect(getAddressFromCep(emptyCep)).rejects.toThrow(
        new Error('Você precisa passar um CEP')
    );
});