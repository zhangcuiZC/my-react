import React, { Component } from 'react';
import style from './styles/Comments.css';

class Comments extends Component {
	renderComment = (comment, i) => {
		return (
			<div key={i} className={style.comment}>
				<p>
					<strong className={style.user}>{comment.user} </strong> 
					{comment.text}
					<button onClick={this.props.removeComment.bind(null, this.props.params.postId, i)} className={style.btn}>&times;</button>
				</p>
			</div>
		);
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const { postId } = this.props.params;
		const author = this.refs.author.value;
		const comment = this.refs.comment.value;
		this.props.addComment(postId, author, comment);
		this.refs.commentForm.reset();
	}

	render() {
		return (
			<div>
				{this.props.postComments.map(this.renderComment)}
				<form ref="commentForm" onSubmit={this.handleSubmit}>
					<input type="text" ref="author" placeholder="author" className={style.inputuser}/>
					<input type="text" ref="comment" placeholder="comment" className={style.inputcomment}/>
					<input type="submit" hidden/>
				</form>
			</div>
		);
	}
}

export default Comments;