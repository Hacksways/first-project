import './App.css';
import Header from './Components/Header';
import NavigationBar from './Components/NavigationBar';
import Profile from './Components/Profile';


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
