import './App.css';
import Header from './Components/Header/Header';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {Route} from 'react-router-dom';
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavigationBar/>
            <div className='app-wrapper-content'>
                <Route path='/profile'
                       render={() => <ProfileContainer/>}/>
                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}/>
                <Route path='/news' render={News}/>
                <Route path='/music' render={Music}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/settings' render={Settings}/>
            </div>
        </div>
    );
}


export default App;
