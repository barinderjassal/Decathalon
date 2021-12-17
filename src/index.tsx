import { createElement } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/app';
import { AuthContextProvider } from './context/auth-context';
import { Provider } from 'react-redux';
import { store } from './store';

import './index.css';

render(
  <Provider store={store}>
    <AuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </Provider>,
document.getElementById('app'));
