import { useState, useEffect } from 'react';
import getProducts from '../services/services';
import Product from '../components/Product/Product';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await getProducts();
      setProducts(response);
    };

    getData();
  }, []);

  return (
    <div className="home__global">
      <h1 className="title__head">Products</h1>
      <div className="product__globalContainer">
        <Product products={products} />
      </div>
    </div>
  );
};

export default Home;
