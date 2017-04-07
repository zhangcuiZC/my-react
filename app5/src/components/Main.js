import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div>
				<h1>
					<Link to="/">Reduxstagram</Link>
				</h1>
				{this.props.children}
			</div>
		);
	}
}

export default Main;