import React from "react";
import s from './Friends.module.css';
import Friend from "./Friend/Friend";

const Friends = (props) => {
    let friendsElements = props.state.friends.map(f => <Friend name={f.name} img={f.img} id={f.id}/>);

    return (
        <div className={s.friends}>
            <div className={s.friendsItems}>
                {friendsElements}
            </div>
        </div>
    )
}

export default Friends;