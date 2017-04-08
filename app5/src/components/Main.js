import React, { Component } from 'react';
import { Link } from 'react-router';
import style from './styles/Main.css';

class Main extends Component {

	render() {
		return (
			<div>
				<h1 className={style.title}>
					<Link to="/">Reduxstagram</Link>
				</h1>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		);
	}
}

export default Main;