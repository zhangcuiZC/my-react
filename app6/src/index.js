import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { getAllProducts } from './actions';
import App from './containers/App';

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(getAllProducts());


ReactDOM.render(
  <Provider store={store}>
  	<App/>
  </Provider>,
  document.getElementById('root')
);
