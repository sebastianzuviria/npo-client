import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import './index.css';
import store from './store';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
