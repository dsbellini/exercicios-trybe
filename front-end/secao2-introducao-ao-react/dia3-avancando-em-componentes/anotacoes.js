// Renderizar listas com .map 

// Sintaxe:

<ul>
{booksList.map((book) => (
    <Book 
    key= { book.title } // é necessário adicionar uma chave key no elemento que é retornado pelo map, que servirá como um identificador único para o React diferenciar os elementos que estão sendo renderizados.
    book={ book }
    />
))}
</ul>

// Anota aí 📝: Para renderizar listas no React, é comum utilizar especificamente a função map em detrimento de outras, como o forEach. Isso porque o map gera um retorno JSX, que será renderizado na tela, enquanto o forEach retorna undefined.

// function LottoNumbers({ numbers }: { numbers: number[]}) {
  return (
    <>
      <h3>Os números sorteados são:</h3>
      <ul>
        {numbers.length === 6 ? (
          numbers.map((number) => (
            <li key={number} className="lotto">
              {number}
            </li>
          ))
        ) : (
          <h3>Erro: a lista não contém 6 números</h3>
        )}
      </ul>
    </>
  );
// }

export default LottoNumbers;