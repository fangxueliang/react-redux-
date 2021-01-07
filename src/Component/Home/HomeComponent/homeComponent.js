import React, { useState, useContext } from 'react';
import ChildrenUI from "../../StatelessUI/homeUI/ChildrenUI";
import MessageUI from "../../StatelessUI/homeUI/MessageUI";

export const MESSAGE_COMMON = React.createContext()//使用context 传递数据
const HomeComponent = () => {
    return (
        <MESSAGE_COMMON.Provider value={{ name: '文赋context', message: 'context集团' }}>
            <ChildrenUI />
            <MessageUI />
        </MESSAGE_COMMON.Provider>
    )
}

export default HomeComponent;