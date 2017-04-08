import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import { Route, IndexRoute, Router } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

ReactDOM.render((
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={PhotoGrid}></IndexRoute>
				<Route path="/view/:postId" component={Single}></Route>
			</Route>
		</Router>
	</Provider>
	),
	document.getElementById('root')
);
