import React from 'react';
import './Product.css';
import { StarBorder } from '@material-ui/icons';

interface productProps {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: number;
}

const Product: React.FC<productProps> = ({
  id,
  title,
  image,
  price,
  rating
}) => {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill(0)
            .map(() => (
              <p>
                  <StarBorder />
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button>Add to Basket</button>
    </div>
  );
};

export default Product;
