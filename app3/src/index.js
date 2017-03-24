import { createStore } from 'redux';
import todoApp from './reducers';
import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import App from './components/App';
import Root from './components/Root';

let store = createStore(todoApp);

// render(
// 	<Provider store={store}>
// 		<App />
// 	</Provider>,
// 	document.getElementById('root')
// );

render(
	<Root store={store}/>,
	document.getElementById('root')
);