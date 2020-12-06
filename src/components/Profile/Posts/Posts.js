import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';


function Posts(props) {
	
	let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

	// reate ref
	let newPostElement = React.createRef();

	let addPost = () => {
		props.dispatch(addPostActionCreator());
		//props.addPost();
		//props.updateNewPostText('');
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		//props.updateNewPostText(text);
		//let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text}
		let action = updateNewPostTextActionCreator(text);
		props.dispatch(action);
	}

	return (
		<div className={classes.postsBlock}>
		<h3>My posts</h3>
		<div>
			<div>
				<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} placeholder="Your post.."></textarea>
			</div>
			<div>
				<button onClick={addPost}>Add post</button> 
			</div>
		</div>
		<div className={classes.posts}>
		{postsElements}
		</div>
		</div>
		);
}

export default Posts;