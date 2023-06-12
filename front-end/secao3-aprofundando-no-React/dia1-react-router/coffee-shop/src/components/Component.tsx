import { useNavigate } from 'react-router-dom';

function Component() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/');
  }

  return (
    // ...
    <button onClick={ handleClick }>Início</button>
  )
}

export default Component;