import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post';

function Posts(props) {
	
	let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

	return (
		<div className={classes.postsBlock}>
			<h3>My posts</h3>
			<div>
				New post
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add post</button>
				</div>
			</div>
			<div className={classes.posts}>
				{postsElements}
			</div>
		</div>
	);
}

export default Posts;