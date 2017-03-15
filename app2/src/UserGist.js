import React, { Component } from 'react';
import $ from 'jquery';

class UserGist extends Component {
	state = {
		username : "",
		lastGistUrl : ""
	}

	componentDidMount = () => {
		this.serverRequest = $.get(this.props.source, (result)=> {
			var lastGist = result[0];
			this.setState({
				username : lastGist.owner.login,
				lastGistUrl : lastGist.html_url
			});
		});
	}

	componentWillUnmount = () => {
		this.serverRequest.abort();
	}

	render() {
		return (
			<div>
				{this.state.username}___{this.state.lastGistUrl}
			</div>
		);
	}
}

export default UserGist;