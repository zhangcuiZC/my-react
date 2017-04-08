import React, { Component } from 'react';
import { Link } from 'react-router';
import style from './styles/Photo.css';

class Photo extends Component {
	render() {
		const { post, i, comments } = this.props;
		return (
			<div className={style.photo}>
				<div>
					<Link to={`/view/${post.code}`}>
						<img src={post.display_src} alt={post.caption} />
					</Link>
				</div>
				<div className={style.caption}>
					<p>{post.caption}</p>
					<div className={style.btnbox}>
						<button className={style.like} onClick={this.props.increment.bind(null, i)}>
							&hearts; {post.likes}
						</button>
						<Link to={`/view/${post.code}`}>
							<span className={style.comments}>
								评论:{comments[post.code] ? comments[post.code].length : 0}
							</span>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default Photo;