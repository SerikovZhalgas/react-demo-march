import React from "react";
import s from '../FriendsNavBar.module.css';
import {NavLink} from "react-router-dom";

const FriendNavBar = (props) => {
    let path = "/friendsNavBar/" + props.id;
    return (
        <div>
            <img src={props.img} className={s.friendItem}/>
            <div className={s.friend + ' ' + s.active}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default FriendNavBar;