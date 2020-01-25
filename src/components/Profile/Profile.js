import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Posts from './Posts/Posts';

function Profile(props) {

	return (
		<div className={classes.profile}>
			<ProfileInfo />
			<Posts posts={props.posts}/>
		</div>
	);
}

export default Profile;