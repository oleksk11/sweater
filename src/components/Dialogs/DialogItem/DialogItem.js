import React from 'react';
import classes from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

function DialogItem(props) {
    let path = '/dialogs/' + props.id;
    return (
        <div className={`${classes.dialog} ${classes.active}`}>
            <div className={classes.userImg}>
            <img src={props.userImg} />
            </div>
            <div className={classes.userName}>
            <NavLink to={path}>{props.name}</NavLink>
            </div> 
        </div>
        );
    }

    export default DialogItem;