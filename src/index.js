import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '.././src/redux/store';

ReactDOM.render(
      <Provider store={store}>
        <Router>
            <App />
        </Router>
      </Provider>,
  document.getElementById('root')
);

