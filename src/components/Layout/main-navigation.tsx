import { FC, createElement, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { useAuthContext } from '../../context/auth-context';
import Cart from '../../pages/Cart';
import { CartButton } from '../../pages/Cart/cart-button';

import './styles/main-navigation.css';

export const MainNavigation: FC = () => {
  const { isLoggedIn, logout } = useAuthContext();
  const history = useHistory();
  const logoutHandler = () => {
    logout();
    history.replace('/auth');
  };
  return (
    <header className='header'>
      <Link to='/'>
        <div className='logo'>Decathalon App</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to='/auth'>Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <Fragment>
              <li>
                <Link to='/profile'>Profile</Link>
              </li>
              
              <li>
                <Link to='/cart'><CartButton /></Link>
              </li>
            
              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            </Fragment>
          )}
          
        </ul>
      </nav>
    </header>
  );
};
