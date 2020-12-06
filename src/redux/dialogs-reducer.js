const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
            dialogs: [
            { id: 1, name: 'Sasha', userImg: 'profile.jpg' },
            { id: 2, name: 'Roman', userImg: 'profile.jpg' },
            { id: 3, name: 'Dana', userImg: 'profile.jpg' },
            { id: 4, name: 'Maks', userImg: 'profile.jpg' },
            { id: 5, name: 'Ola', userImg: 'profile.jpg' }
            ],
            messages: [
            { id: 1, message: 'Hi, how are you?' },
            { id: 2, message: 'I am fine' },
            { id: 3, message: 'Ok' }
            ],
            newMessageBody: ''
        };

const dialogsReducer = (state = initialState, action) => {

	switch(action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			state.newMessageBody = action.body;
			return state;
		case SEND_MESSAGE:
			let body = state.newMessageBody;
	        state.newMessageBody = '';
	        state.messages.push({id: 5, message: body});
	        return state;
	    default:
	    	return state;
	}

	// if (action.type === UPDATE_NEW_MESSAGE_BODY) {
 //          state.newMessageBody = action.body;
 //    } else if (action.type === SEND_MESSAGE) {
 //        let body = state.newMessageBody;
 //        state.newMessageBody = '';
 //        state.messages.push({id: 5, message: body});
 //    }
}

export const sendMessageActionCreator = () => {
    return {
           type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyActionCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: body
    }
}

export default dialogsReducer;