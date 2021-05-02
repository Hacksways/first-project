import Friends from "./Friends/friends";
import Sidebar from "./sidebar";


const SidebarContainer = (props) => {
    debugger
    let friendsElements = props.store.getState().sidebar.friendsAndAvatars

    return (<Sidebar friendsAndAvatars={friendsElements}/>)
}


export default SidebarContainer;