import React, { Component } from 'react';

class HelloMessage extends Component {
	static defaultProps = {
		name : 'zhangcui'
	}
	static propTypes = {
		name : React.PropTypes.string.isRequired
	}
	render() {
		return <h1>Hello {this.props.name}!</h1>
	}
}

export default HelloMessage;