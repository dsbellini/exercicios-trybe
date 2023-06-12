import './App.css'
import Button from './components/Button'
import { useState } from 'react'

function App() {
  const [state, setState] = useState('');
  // state e setState são apenas nomes de variáveis, e poderíamos alterá-los por qualquer outro nome. Por convenção, a função setter é nomeada com set seguido do nome do estado. Apesar de não ser uma regra, é uma prática fortemente recomendada.

  return (
    <>
      <h1>Aplicação</h1>
      <Button />
    </>
  )
}

export default App



// ----------------------- Utilizando estados na prática ----------------------- //

// function App() {
//   const toolKit = [
//     'JavaScript',
//     'TypeScript',
//     'React',
//     'HTML',
//     'CSS',
//     'Node',
//     'Testes automatizados',
//   ];

//   const [index, setIndex] = useState(0);

// function handleNextClick() {
//   if (index + 1 < toolKit.length) {
//     setIndex(index + 1);
//   } else {
//     setIndex(0); // Volta para o primeiro elemento
//   }
// }

// function handlePreviousClick() {
//   if (index - 1 >= 0) {
//     setIndex(index - 1);
//   } else {
//     setIndex(toolKit.length - 1); // Vai para o último elemento
//   }
// }

// return (
//   <>
//     <h1>Caixa de ferramentas de uma Pessoa Desenvolvedora</h1>
//     <h2>{toolKit[index]}</h2>
//       <button onClick={handlePreviousClick}>Anterior</button>
//       <button onClick={handleNextClick}>Próximo</button>
//     </>
//   );
// }

// export default App;

