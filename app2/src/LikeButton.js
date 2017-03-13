import React, { Component } from 'react';

class LikeButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			liked : false
		}
	}

	handleClick = (event) => {
		this.setState({ liked : !this.state.liked });
	}

	render() {
		var text = this.state.liked ? '喜欢' : '不喜欢';
		return (
			<p onClick={this.handleClick}>
				你<b>{text}</b>我。点我切换状态。
			</p>
		);
	}
}

export default LikeButton;