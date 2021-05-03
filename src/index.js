import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
