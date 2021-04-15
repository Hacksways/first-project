import './App.css';
import Header from './Components/Header/Header';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {Route} from 'react-router-dom';


const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <NavigationBar friendsAndAvatars={props.store.getState().sidebar.friendsAndAvatars}/>
            <div className='app-wrapper-content'>
                <Route path='/profile'
                       render={() => <Profile profilePage={props.store.getState().profilePage} addPost={props.store.addPost}
                                              updateNewPostText={props.store.updateNewPostText}/>}/>
                <Route path='/dialogs' render={() => <Dialogs messagesPage={props.store.getState().messagesPage}/>}/>
                <Route path='/news' render={News}/>
                <Route path='/music' render={Music}/>
                <Route path='/settings' render={Settings}/>
            </div>
        </div>
    );
}


export default App;
