import React from "react";
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import Friend from "../Friends/Friend/Friend";
import FriendsNavBar from "../FriendsNavBar/FriendsNavBar";

const NavBar = (props) => {
    let friendsElements = props.state.friends.map(f => <Friend name={f.name} img={f.img} id={f.id}/>);

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/dialogs' className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/friends' className={navData => navData.isActive ? s.active : s.item}>Friends</NavLink>
            </div>
            {/*<div>*/}
            {/*    <FriendsNavBar state={props.state.friendsPage}/>*/}
            {/*</div>*/}

        </nav>
    )
}

export default NavBar;