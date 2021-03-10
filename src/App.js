import './App.css';
import Header from './Components/Header/Header';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {BrowserRouter, Route} from 'react-router-dom';


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavigationBar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile postsData={props.postsData}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs dialogsData={props.dialogsData}
                                                                  messagesData={props.messagesData}/>}/>
                    <Route path='/news' render={News}/>
                    <Route path='/music' render={Music}/>
                    <Route path='/settings' render={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
