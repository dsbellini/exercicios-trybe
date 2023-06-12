import React from 'react';

function Button() {

    function handleClick() {
        alert('Meu primeiro event com React')
    }

    return (
      <button onClick={ handleClick }>
        Clique em mim!
      </button>
    )
  }
  
  export default Button;