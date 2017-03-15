import React, { Component } from 'react';
import Content from './Content.js';

class Button extends Component {
	state = { data : 0 }

	setNewNumber = () => {
		this.setState({ data : this.state.data + 1 })
	}

	render() {
		return (
			<div>
				<button onClick={this.setNewNumber}>Increment</button>
				<Content myNumber={this.state.data} />
			</div>
		);
	}
}

export default Button;