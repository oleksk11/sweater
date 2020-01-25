import React from 'react';
import classes from './Post.module.css';

function Post(props) {
	return (
		<div className={classes.post}>
			<img src="profile.jpg" />
			{props.message}
			<div>
				<span>like {props.likesCount}</span>
			</div>
		</div>
	);
}

export default Post;