import React from "react";
import s from './../Dialogs.module.css';

const Message = (props) => {

    let newMessageElement = React.createRef();

    return (
        <div>
            <div className={s.dialog1} ref={newMessageElement}>
                {props.message}
            </div>
            <div className={s.dialog2} ref={newMessageElement}>
                {props.message}
            </div>
        </div>
    )
}

export default Message;