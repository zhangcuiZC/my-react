import React , { Component } from 'react';

class Website extends Component {
	state = {
		name : 'zhangcui',
		site : 'http://www.baidu.com'
	}

	render() {
		return (
			<div>
				<Name name={this.state.name} />
				<Link site={this.state.site} />
			</div>
		);
	}
}

class Name extends Component {
	render() {
		return (
			<h1>{this.props.name}</h1>
		);
	}
}

class Link extends Component {
	render() {
		return (
			<a href={this.props.site}>
				{this.props.site}
			</a>
		);
	}
}

export default Website;