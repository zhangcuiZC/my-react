import React, { Component } from 'react';

class MyComponent extends Component {
	handleClick = (event) => {
		this.refs.myInput.focus();
	}

	render() {
		return (
			<div>
				<input ref="myInput" type="text" />
				<input type="button" value="click to focus" onClick={this.handleClick} />
			</div>
		);
	}
}

export default MyComponent;