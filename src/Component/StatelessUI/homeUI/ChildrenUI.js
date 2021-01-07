import React, { useContext } from 'react';
import { MESSAGE_COMMON } from "../../Home/HomeComponent/homeComponent";

const ChildrenUI = () => {
    const { name } = useContext(MESSAGE_COMMON);
    return (
        <div>
            {name}
        </div>
    )
}
export default ChildrenUI