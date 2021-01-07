import React, { useContext } from 'react';
import { MESSAGE_COMMON } from "../../Home/HomeComponent/homeComponent";

const MessageUI = () => {
    const { message } = useContext(MESSAGE_COMMON);
    return (<div>
        {message}
    </div>)
}
export default MessageUI