import React, { Component } from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = { clickCount : 0 }
	}

	handleClick = () => {
		this.setState(function (state) {
			return {clickCount: state.clickCount + 1};
		})
	}

	render() {
		return (
			<h2 onClick={this.handleClick}>times: {this.state.clickCount}</h2>
		);
	}
}

export default Counter;

// 对于那些在constructor里面已经定义的实例属性，新写法允许直接列出。
// class ReactCounter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }
//   state;
// }