import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
// const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
            { id: 1, message: 'Hi. how are you?', likesCount: '15' },
            { id: 2, message: 'It is my first post', likesCount: '20' },
            { id: 3, message: 'What do you do?', likesCount: '8' }
            ],
            newPostText: 'new post'
        },
        dialogsPage: {
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
        },
        sidebar: {
            items: [
            {link: '/profile', item: 'Profile'},
            {link: '/messages', item: 'Messages'},
            {link: '/news', item: 'News'},
            {link: '/musiv', item: 'Music'},
            {link: '/settings', item: 'Settings'}
            ]
        }
    },
    _callSubscriber() { //rerenderEntireTree
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; 
    },

//     addPost() {
//         let newPost = {
//             id: 4,
//             message: this._state.profilePage.newPostText,
//             likesCount: 0
//         };
//         this._state.profilePage.posts.push(newPost);
//         this._state.profilePage.newPostText = '';
//         this._callSubscriber(this._state); //rysuje nowe drzewo 
// },
// updateNewPostText(newText) {
//     this._state.profilePage.newPostText = newText;
//     this._callSubscriber(this._state); //rysuje nowe drzewo - wyswietla nowe znaczenie w textarea
// },
    dispatch(action) { //{type: 'add-post'}
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state); 

    // if (action.type === ADD_POST) {
    //     let newPost = {
    //         id: 4,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state); //rysuje nowe drzewo 
    // } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //     this._state.profilePage.newPostText = action.newText;
    //     this._callSubscriber(this._state); //rysuje nowe drzewo - wyswietla nowe znaczenie w textarea
    // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    //       this._state.dialogsPage.newMessageBody = action.body;
    //       this._callSubscriber(this._state); //rysuje nowe drzewo - wyswietla nowe znaczenie w textarea
    // } else if (action.type === SEND_MESSAGE) {
    //     let body = this._state.dialogsPage.newMessageBody;
    //     this._state.dialogsPage.newMessageBody = '';
    //     this._state.dialogsPage.messages.push({id: 5, message: body});
    //     this._callSubscriber(this._state);
    // }
    }
    
}

export default store;
//widow.store = store;