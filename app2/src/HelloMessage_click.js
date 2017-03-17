import React, { Component } from 'react';

class HelloMessage extends Component {
	state = {
		value : 'Hello,zhangcui'
	}

	handleClick = (event) => {
		this.setState({
			value : "zhangcui,Hello"
		});
	}

	render() {
		return (
			<div>
				<button onClick={this.handleClick}>click to change</button>
				<h4>{this.state.value}</h4>
			</div>
		);
	}
}

export default HelloMessage;