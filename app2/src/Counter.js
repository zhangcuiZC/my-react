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