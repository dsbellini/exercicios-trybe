// src/components/layout/index.tsx

import { Outlet } from 'react-router-dom';
import NavBar from '../nav-bar/index-nav-bar';

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <footer>
        <span>Coffe Shop - All rights reserved</span>
      </footer>
    </>
  )
}

export default Layout;
