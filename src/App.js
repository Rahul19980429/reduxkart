import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Cart from './pages/Cart';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route exact path='/cart' element={<Cart/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
