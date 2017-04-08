import React, { Component } from 'react';
import Photo from './Photo';
import style from './styles/PhotoGrid.css';

class PhotoGrid extends Component {
	render() {
		return (
			<div className={style.grid}>
				{this.props.posts.map((post, i)=><Photo {...this.props} key={i} i={i} post={post}/>)}
			</div>
		);
	}
}

export default PhotoGrid;