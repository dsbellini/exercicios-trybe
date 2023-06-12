import { Link } from 'react-router-dom';

export default function Notfound () {
    return (
        <div>
        <h1> Ops, 404! Not found</h1>
        <Link to="/">
            <button>Voltar para o início</button>
        </Link>
        </div>
    )
}