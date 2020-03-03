import React from 'react';
import classes from './ProfileInfo.module.css';

function ProfileInfo() {
	return (
		<div className={classes.profileInfo}>
			<div>
				<img src='profile.jpg'></img>
			</div>
			<div className={classes.descriptionBlock}>
				<div className={classes.userName}>
					Paweł Kot
				</div>
				<div className={classes.userInfo}>
					User info
				</div>
			</div>
		</div>
	);
}

export default ProfileInfo;