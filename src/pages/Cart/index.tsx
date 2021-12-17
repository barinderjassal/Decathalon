import { FC, createElement } from 'react';
import { CartItem } from './cart-item';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from '../../components/Card';
import { sendCartDataAction } from '../../store/cart-actions';
import { useHistory } from 'react-router-dom';

import './styles/cart.css';

const Cart: FC = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  
  const cartItems = useSelector((state: any) => state.cart.items);
  const totalQuantity = useSelector((state: any) => state.cart.totalQuantity);
  
  const placeOrderHandler = (event: any) => {
    event.preventDefault();
    dispatch(sendCartDataAction(cartItems));
    alert('order placed...');
    history.push('/');
  }
  
  return (
    <Card className='cart'>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item: any) => (
          <CartItem
           key={item.id}
            item={{
              title: item.title,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
              id: item.id
            }}
         />
        ))}
      </ul>
      <p>Total Quantity {totalQuantity}</p>
      
      <button className='button' onClick={placeOrderHandler}>Place Order</button>
    </Card>
  );
};

export default Cart;
