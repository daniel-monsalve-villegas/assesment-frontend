import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
