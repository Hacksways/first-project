import s from './NavigationBar.module.css';
import {NavLink} from "react-router-dom";

const NavigationBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}><NavLink to='/Profile' activeClassName={s.active}>Profile</NavLink></div>
            <div className={s.item}><NavLink to='/Dialogs' activeClassName={s.active}>Messages</NavLink></div>
            <div className={s.item}><NavLink to='/News' activeClassName={s.active}>News</NavLink></div>
            <div className={s.item}><NavLink to='/Music' activeClassName={s.active}>Music</NavLink></div>
            <div className={s.item}><NavLink to='/Settings' activeClassName={s.active}>Settings</NavLink></div>
        </nav>
    );
};


export default NavigationBar;