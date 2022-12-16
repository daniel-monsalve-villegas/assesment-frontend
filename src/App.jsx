import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Product from './components/Product/Product';
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <nav className="navbar">
        <NavLink to="/" className="navbar__link">
          Home
        </NavLink>
        <NavLink to="/about" className="navbar__link">
          About
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<Detail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
