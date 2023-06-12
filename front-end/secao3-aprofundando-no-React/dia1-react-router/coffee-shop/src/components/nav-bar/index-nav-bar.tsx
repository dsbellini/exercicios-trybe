// src/components/nav-bar/index.tsx

import { NavLink } from 'react-router-dom';
import './index-nav-bar.css'

function NavBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {' '}
      <NavLink to="/coffees">Cafés</NavLink>
    </nav>
  )
}

export default NavBar;
