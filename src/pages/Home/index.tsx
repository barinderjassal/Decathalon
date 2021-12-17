import { createElement, FC, Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Products } from '../../components/Products';
import { Notifications } from '../../components/UI';
import { getCartDataAction, sendCartDataAction } from '../../store/cart-actions';

let isInitialRender = true;

const HomePage: FC = () => {
  const dispatch = useDispatch();
  // get cart State from redux
  const cart = useSelector((state: any) => state.cart);

  // get notification state from redux
  const notification = useSelector((state: any) => state.ui.notification);

  useEffect(() => {
    // this is to make sure that on the first render, we do not hit API request.
    // so in that if statement, set the flag to false, so that next time it runs as required.
    if (isInitialRender) {
      isInitialRender = false;
      return;
    }
    
    // dispatch also accepts action creators that returns functions and redux executes that function.
    // It also has dispatch argument automatically
    if (cart.changed) {
      dispatch(sendCartDataAction(cart));
    }
  }, [cart, dispatch]);

  // this effect is for fetching the data
  useEffect(() => {
    dispatch(getCartDataAction());
  }, [dispatch]);
  
  return (
    <Fragment>
      {notification && <Notifications status={notification.status} title={notification.title} message={notification.message} />}
      <Products />
    </Fragment>
  );
};

export default HomePage;
