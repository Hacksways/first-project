import snake from "../Images/Snake.png";
import owl from "../Images/Owl.png";
import raven from "../Images/Raven.png";

let initialState = {
    friendsAndAvatars: [
        {
            avatar: snake,
            name: 'Artur',
            id: '1'
        },
        {
            avatar: owl,
            name: 'Aleksey',
            id: '2'
        },
        {
            avatar: raven,
            name: 'Mark',
            id: '3'
        },
    ]
}

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;