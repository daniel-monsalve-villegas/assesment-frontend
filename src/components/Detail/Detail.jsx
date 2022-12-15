import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { getProductById } from '../../services/services';

const Detail = () => {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const res = await getProductById(id);
      return setDetail(res);
    };
    getProduct();
  }, [id]);

  const { rate, count } = detail.rating;

  console.log(rate, count);
  return (
    <>
      <nav className="navbar">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/">Home</NavLink>
      </nav>
      <div className="productDetail__container">
        <h1 className="productDetail__title">{detail.title}</h1>
        <p className="productDetail__price">
          <strong>Price: </strong>${detail.price}
        </p>
        <p className="productDetail__desc">
          <strong>Description: </strong>
          {detail.description}
        </p>
        <p className="productDetail__category">
          <strong>Category: </strong>
          {detail.category}
        </p>
        <img
          src={detail.image}
          alt={detail.description}
          className="productDetail__img"
        />
        <ul className="productDetail__list">
          <li className="productDetail__item">⭐ {rate}</li>
          <li className="productDetail__item">👍 {count}</li>
        </ul>
      </div>
    </>
  );
};

export default Detail;
