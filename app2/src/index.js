// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './App';
// import './index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );


// import HelloMessage from './hellomessage.js';

// var name=123;
// ReactDOM.render(
// 	<HelloMessage name={name} />,
// 	document.getElementById('root')
// );

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

// import Counter from './Counter.js';
// ReactDOM.render(
// 	<Counter />,
// 	document.getElementById('root')
// );

// import Hello from './Hello.js';
// ReactDOM.render(
// 	<Hello name="zhangcui" />,
// 	document.getElementById('root')
// );

// import Button from './Button.js';
// ReactDOM.render(
// 	<Button />,
// 	document.getElementById('root')
// );

// import UserGist from './UserGist.js';
// ReactDOM.render(
// 	<UserGist source="https://api.github.com/users/octocat/gists" />,
// 	document.getElementById('root')
// );

// import HelloMessage from './HelloMessage_click.js';
// ReactDOM.render(
// 	<HelloMessage />,
// 	document.getElementById('root')
// );

// import MyComponent from './MyComponent.js';
// ReactDOM.render(
// 	<MyComponent />,
// 	document.getElementById('root')
// );

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';

//action
function changeText(){
	return { type : 'CHANGE_TEXT' };
}

function buttonClick(){
	return { type : 'BUTTON_CLICK' };
}

//reducer
const initialState = { text : 'Hello' };

function myApp(state = initialState, action){
	switch(action.type) {
		case 'CHANGE_TEXT':
			return { text : state.text === 'Hello' ? 'Stark' : 'Hello' };
		case 'BUTTON_CLICK':
			return { text : state.text === 'you just click the button.' ? 'Hello' : 'you just click the button.' };
		default :
			return { text : 'Hello' };
	}
}

//store
let store = createStore(myApp);

//component
class Hello extends Component {
	handleClick = () => {
		this.props.actions.changeText();
	}

	render() {
		return (
			<h1 onClick={this.handleClick}>{this.props.text}</h1>
		);
	}
}

class Change extends Component {
	handleClick = () => {
		this.props.actions.buttonClick();
	}

	render() {
		return (
			<button onClick={this.handleClick}>Change</button>
		);
	}
}

class App extends Component {
	render() {
		return (
			<div>
				<Hello actions={this.props.actions} text={this.props.text} />
				<Change actions={this.props.actions} />
			</div>
		);
	}
}

//map
function mapStateToProps(state){
	return { text : state.text };
}
function mapDispatchToProps(dispatch){
	return {
		actions : bindActionCreators({ changeText : changeText, buttonClick : buttonClick }, dispatch)
	};
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

//render
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);





