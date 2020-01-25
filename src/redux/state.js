let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi. how are you?', likesCount: '15' },
            { id: 2, message: 'It is my first post', likesCount: '20' },
            { id: 3, message: 'What do you do?', likesCount: '8' }
        ]
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Sasha' },
            { id: 2, name: 'Roman' },
            { id: 3, name: 'Dana' },
            { id: 4, name: 'Maks' },
            { id: 5, name: 'Ola' }
        ],
        messages: [
            { id: 1, message: 'Hi, how are you?' },
            { id: 2, message: 'I am fine' },
            { id: 3, message: 'Ok' }
        ]
    }
}

export default state;