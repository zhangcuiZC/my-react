import React, { Component } from 'react';

class Hello extends Component {
	// ES7 写法。后面需要使用this.state读取。
	state = { opacity: 1.0 }

	componentDidMount = () => {
		setInterval(() => {
			var opacity = this.state.opacity;
			opacity -= 0.05;
			if (opacity < 0.1) {
				opacity = 1.0;
			}
			this.setState({ opacity : opacity });
		}, 100);
	}

	render() {
		return (
			<div style={{opacity:this.state.opacity}}>
				Hello {this.props.name}
			</div>
		);
	}
}

export default Hello;