import rerenderEntireTree from "../render";

let state = {
    profilePage: {
        postsData: [
            {message: 'Hello, how ar you?', likesCount: '15'},
            {message: 'Hi, fine, thanks. I learn react, me like it', likesCount: '25'},
        ],
        newPostText: ''
    },
    messagesPage: {
        dialogsData: [
            {id: '1', name: 'Artur'},
            {id: '2', name: 'Aleksey'},
            {id: '3', name: 'Mark'},
            {id: '4', name: 'Maks'},
        ],

        messagesData: [
            {message: 'Yo'},
            {message: 'Whats up?'},
            {message: 'Hi, fine, learning'},
        ],
    },

    sidebar: {
        friendsAndAvatars: [
            {
                avatar: 'https://png2.cleanpng.com/sh/6884537b486dce00deabd3f4e234396f/L0KzQYm3UcI6N5d7j5H0aYP2gLBuTgJwd6R5feQ2Y3H1hLF2jr1kcJpog9d3LXPvecG0ggJ1NZRtgdV0ZX6wRbK9hvI4OmU2TqsDNkGxSIW8UsQ4PGg2TaMCMkezSIO3UMkzPl91htk=/kisspng-rooster-cartoon-chicken-clip-art-chicken-5a6fb724169861.8452474715172708200926.png',
                name: 'Artur'
            },
            {
                avatar: 'https://png2.cleanpng.com/sh/489e292ac2feffb24008e28f80262790/L0KzQYm3UsA3N5Z4fZH0aYP2gLBuTfR2a5wyf9H4c3Wwc73wkL1ieqUyhNHBZXz8PbX8gBsuPZI8Uao7YnKzdYLrgcYvOmE4Sac8N0W0RYKAWcEzP2c4SKcCOD7zfri=/kisspng-duck-goose-clip-art-lovely-duck-5a7982bb0e1da6.2031537515179127630578.png',
                name: 'Aleksey'
            },
            {
                avatar: 'https://png2.cleanpng.com/sh/686e50da1b938081b90ba41704b92caf/L0KzQYm3V8A3N5DwkJH0aYP2gLBuTgJia5R0h9C2ZILkh7r1h71zd6pmhOZELXb1dba0gBFzfJD0hp8AYkSzQIW9gfJkPWdpUJC6NEmzQoa9VME2O2EASqQ5OUC6R4K8TwBvbz==/kisspng-raccoon-drawing-royalty-free-cartoon-5b40046abc56d8.1490256415309220907715.png',
                name: 'Mark'
            },
        ]
    }
};

export let addPost = () => {
    let newPost = {
        message: state.profilePage.newPostText,
        likesCount: 0,
    };

    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);

};

export default state;