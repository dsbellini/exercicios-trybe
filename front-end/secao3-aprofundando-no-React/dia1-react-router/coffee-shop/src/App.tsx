import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/index-Home';
import CoffeeList from './pages/CoffeList/index-CoffeeList';
import Coffee from './pages/Coffee/index-Coffee';
import Notfound from './components/Not-found';
import Layout from './components/layout/index-layout';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={ <Layout /> }>
      <Route index element={ <Home /> } />
      <Route path="coffees" element={ <CoffeeList /> } />
      <Route path="/coffees/:coffee" element={ <Coffee /> } />
      </Route>
      <Route path="/*" element={ <Notfound /> } />
    </Routes>
    </>
  )
}

export default App;

