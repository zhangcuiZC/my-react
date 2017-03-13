import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );


// import HelloMessage from './hellomessage.js';

// ReactDOM.render(
// 	<HelloMessage name="zhangcui" />,
// 	document.getElementById('root')
// );

import Website from './Website.js';

ReactDOM.render(
	<Website name="zhangcui" site="http://www.baidu.com" />,
	document.getElementById('root')
);