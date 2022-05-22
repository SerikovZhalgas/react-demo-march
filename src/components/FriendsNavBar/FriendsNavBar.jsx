import React from "react";
import s from './FriendsNavBar.module.css';
import FriendNavBar from "./FriendNavBar/FriendNavBar";

const FriendsNavBar = (props) => {
    let friendsNavBarElements = props.state.friends.map(f => <FriendNavBar name={f.name} img={f.img} id={f.id}/>);

    return (
        <div className={s.friends}>
            <div className={s.friendsItems}>
                {friendsNavBarElements}
            </div>
        </div>
    )
}

export default FriendsNavBar;