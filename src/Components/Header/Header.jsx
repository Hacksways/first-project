import s from './Header.module.css'
import elephant from '../../Images/Elephant.png'

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src={elephant}/>
        </header>
    );
}


export default Header;
