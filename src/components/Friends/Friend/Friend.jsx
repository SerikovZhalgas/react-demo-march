import React from "react";
import s from './../Friends.module.css';
import {NavLink} from "react-router-dom";

const Friend = (props) => {
    let path = "/friends/" + props.id;
    return (
        <div>
            <img src={props.img} className={s.friendItem}/>
            <div className={s.friend + ' ' + s.active}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default Friend;