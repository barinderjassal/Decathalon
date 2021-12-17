import { FC, createElement } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { Card } from '../Card';

import './styles/product-item.css';

export const ProductItem: FC<{
  title: string;
  price: number;
  description: string;
  id: number;
  rating: any;
}> = ({ title, price, description, id, rating }) => {

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart({
      id,
      title,
      price
    }));
    // key and variables names are same so using shorthand syntax
  }

  return (
    <li className='item'>
      <Card className=''>
        <header>
          <h3>{title}</h3>
          <div className='price'>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className='cart-action-button'>
          <button className='add-to-cart-btn' onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};
