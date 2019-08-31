import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import HomePage from 'components/HomePage';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const { NODE_ENV, REACT_APP_NAME } = process.env;
if (NODE_ENV !== 'production') {
  localStorage.setItem('debug', `${REACT_APP_NAME}:*`);
}

ReactDOM.render(
  <App>
    <HomePage />
  </App>,
  document.getElementById('root')
);
