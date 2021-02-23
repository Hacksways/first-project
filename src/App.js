import './App.css';
import Header from './Components/Header/Header';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Profile from './Components/Profile/Profile';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavigationBar />
      <Profile />
    </div>
  );
}


export default App;
