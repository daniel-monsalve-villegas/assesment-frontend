import propTypes from 'prop-types';

const Product = ({ products }) => {
  return (
    <div className="product__container">
      <ul className="product__list">
        {products.map((product) => {
          return (
            <li key={product.id} className="product__item">
              <img
                src={product.image}
                alt={product.description}
                className="product__img"
              />
              <h2 className="product__title">{product.title}</h2>
              <button type="submit">Go to detail</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Product.propTypes = {
  products: propTypes.arrayOf(propTypes.string),
};

Product.defaultProps = {
  products: [],
};

export default Product;
