
<>
<h1>Existem duas principais convenções ao criar um event handler:

Ele deve ser criado no componente que será utilizado;

O nome da função deve começar com handle, seguido do nome do evento. Se o evento for onChange, utilizamos handleChange.</h1>

<h2>
    Alguns eventos mais comuns são:

onChange: utilizado quando algum elemento sofre alteração;
onClick: utilizado quando um elemento é clicado;
onMouseOver: utilizado quando o mouse passa por cima de algum elemento;
onBlur: utilizado quando um elemento perde o foco (utilizado principalmente em inputs de formulários).

<h1>
Observação🔎: Em algumas situações você precisará passar argumentos para a função handleClick. Instintivamente, você pode pensar em escrever dessa forma: onClick={ handleClick(arg) }.

Entretanto, nesse caso, o correto é invocá-la dentro de uma função anônima: onClick={ (arg) => handleClick(arg) }.

Dessa forma, passamos uma função para o listener onClick ao mesmo tempo em que conseguimos passar argumentos ao handleClick. Mais adiante, analisaremos um exemplo prático.
</h1>

<h1>
Quando queremos capturar alguma informação do elemento, podemos recebê-la como argumento de uma função anônima. Assim como no JavaScript vanilla, toda função passada para um event listener receberá como primeiro argumento o respectivo evento.
</h1>

function Input() {
  return (
    <>
      <h1>Digite o seu primeiro nome:</h1>
      <input 
        name="firstName"
        onChange={ (event) => alert(event.target.value) }
      />
    </>
  )
}

</>

{/* Estado de um componente */}

Anota aí:📝 A palavra state também é usada para se referir a estado.

Usar HOOKS sempre no top level da funçao
Todo HOOK deve começar com 'use', ex: useState, useEffect, useContext
