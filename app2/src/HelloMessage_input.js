import React, { Component } from 'react';
import Content from './Content_input.js';

class HelloMessage extends Component {
	state = {
		value : 'Hello!zhangcui'
	}

	handleChange = (event) => {
		this.setState({
			value : event.target.value
		});
	}

	render() {
		return (
			<div>
				<Content myDataProp={this.state.value} updateStateProp={this.handleChange} />
			</div>
		);
	}
}

export default HelloMessage;