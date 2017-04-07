import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import { hashHistory, Route, IndexRoute, Router } from 'react-router';

ReactDOM.render((
		<Router history={hashHistory}>
			<Route path="/" component={Main}>
				<IndexRoute component={PhotoGrid}></IndexRoute>
				<Route path="/view" component={Single}></Route>
			</Route>
		</Router>
	),
	document.getElementById('root')
);
