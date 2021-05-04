import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }

                return <MyPosts updateNewPostText={onPostChange} addPost={addPost}
                                posts={store.getState().profilePage.postsData}
                                newPostText={store.getState().profilePage.newPostText}/>
            }
            }
        </StoreContext.Consumer>
    )

}

export default MyPostsContainer;