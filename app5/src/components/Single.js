import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';
import style from './styles/Single.css';

class Single extends Component {
	render() {
		const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
		const post = this.props.posts[i];
		const postComments = this.props.comments[this.props.params.postId] || [];
		return (
			<div>
				<div className={style.singlephoto}>
					<Photo i={i} post={post} {...this.props}/>
				</div>
				<div className={style.singlecomments}>
					<Comments postComments={postComments} {...this.props}/>
				</div>
			</div>
		);
	}
}

export default Single;