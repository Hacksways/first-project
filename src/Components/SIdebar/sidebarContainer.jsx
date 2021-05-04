import Sidebar from "./sidebar";
import StoreContext from "../../StoreContext";


const SidebarContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let friendsElements = store.getState().sidebar.friendsAndAvatars
                return <Sidebar friendsAndAvatars={friendsElements}/>
            }
            }
        </StoreContext.Consumer>
    )
}


export default SidebarContainer;