import s from './NavigationBar.module.css';
import {NavLink} from "react-router-dom";
import SidebarContainer from "../SIdebar/sidebarContainer";

const NavigationBar = (props) => {

    return (
        <nav className={s.nav}>
            <div className='app-content'>
                <div className={s.item}>
                    <NavLink to='/Profile' activeClassName={s.active}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/Dialogs' activeClassName={s.active}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/News' activeClassName={s.active}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/Music' activeClassName={s.active}>Music</NavLink>
                </div>
            </div>
            <div className={s.appSettings}>
                <div className={s.item}>
                    <NavLink to='/Settings' activeClassName={s.active}>Settings</NavLink>
                </div>
            </div>
            <div className={s.sidebar}>
                <span>Friends</span>
                <SidebarContainer store={props.store}/>
            </div>
        </nav>
    );
};


export default NavigationBar;
