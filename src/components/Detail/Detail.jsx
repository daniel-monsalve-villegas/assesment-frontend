import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../services/services';
import './Detail.css';

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

  return (
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
      {Object.values(detail).map((item) => (
        <ul className="productDetail__list">
          <li className="productDetail__item">
            <strong>rate: </strong>
            {item.rate}
          </li>
          <li className="productDetail__item">
            <strong>count: </strong>
            {item.count}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Detail;
