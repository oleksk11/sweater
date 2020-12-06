import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from '../../redux/dialogs-reducer';

function Dialogs(props) {

    let state = props.store.getState().dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} userImg={d.userImg} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    }
    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.store.dispatch(updateNewMessageBodyActionCreator(body));
    }


    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div className={classes.msgView}>
                        <textarea className={classes.msgArea} value={newMessageBody}
                                  onChange={onNewMessageChange} placeholder='Enter your message'></textarea>
                    </div>
                    <div className={classes.btnView}>
                        <button className={classes.addMsgBtn} onClick={onSendMessageClick}>Send message</button>
                    </div> 
                </div>
            </div>

        </div>
        );
    }

    export default Dialogs;