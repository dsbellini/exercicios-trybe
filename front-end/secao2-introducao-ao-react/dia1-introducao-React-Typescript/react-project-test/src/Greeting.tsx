const firstName = 'Miguel';
const lastName = 'Silva';

function Greeting() {
  return (
    <h1 className="greeting">
      Olá
      {` ${firstName} ${lastName}`}
      <img src="https://i.imgur.com/rqvLd3q.png" alt="" />
    </h1>
  );
}

export default Greeting;
