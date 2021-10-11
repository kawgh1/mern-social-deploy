import React from "react";
import "./Message.css";

import { format } from "timeago.js";

function MessageMobile({ message, own }) {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageBottom">{format(message.createdAt)}</div>
            <div className="messageTop">
                <p className="messageText">
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
                    {message.text}
                </p>
            </div>
        </div>
    );
}

export default MessageMobile;
