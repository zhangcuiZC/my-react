import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );


import HelloMessage from './hellomessage.js';

var name=123;
ReactDOM.render(
	<HelloMessage name={name} />,
	document.getElementById('root')
);

// import Website from './Website.js';

// ReactDOM.render(
// 	<Website />,
// 	document.getElementById('root')
// );

// import LikeButton from './LikeButton.js';

// ReactDOM.render(
// 	<LikeButton />,
// 	document.getElementById('root')
// );