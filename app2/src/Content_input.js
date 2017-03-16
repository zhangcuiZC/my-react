import React, { Component } from 'react';

class Content extends Component {
	render() {
		return (
			<div>
				<input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} />
				<h4>{this.props.myDataProp}</h4>
			</div>
		);
	}
}

export default Content;