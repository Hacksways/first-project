import snake from "../Images/Snake.png";
import owl from "../Images/Owl.png";
import raven from "../Images/Raven.png";

let initialState = {
    friendsAndAvatars: [
        {
            avatar: snake,
            name: 'Artur'
        },
        {
            avatar: owl,
            name: 'Aleksey'
        },
        {
            avatar: raven,
            name: 'Mark'
        },
    ]
}

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;