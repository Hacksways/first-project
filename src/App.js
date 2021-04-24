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
            <NavigationBar friendsAndAvatars={props.state.sidebar.friendsAndAvatars}/>
            <div className='app-wrapper-content'>
                <Route path='/profile'
                       render={() => <Profile profilePage={props.state.profilePage}
                                              dispatch={props.dispatch}/>}/>
                <Route path='/dialogs'
                       render={() => <Dialogs messagesPage={props.state.messagesPage} dispatch={props.dispatch}/>}/>
                <Route path='/news' render={News}/>
                <Route path='/music' render={Music}/>
                <Route path='/settings' render={Settings}/>
            </div>
        </div>
    );
}


export default App;
