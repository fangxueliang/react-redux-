import React, { useContext, useReducer, useEffect, useState } from 'react';
import { MESSAGE_COMMON } from "../../Home/HomeComponent/homeComponent";
import { Button, List } from "antd";
import reducer from "../../../Store/reducer";

const MessageUI = () => {
    const { message } = useContext(MESSAGE_COMMON);
    const [arr, setArr] = useState([])
    const [state, dispatch] = useReducer(reducer, {})//相当于connect 连接和redux的关系 并且取到数据
    useEffect(() => {
        setArr([{ name: 'xiaofang' }])
    }, [])
    return (<div>
        {message}
        <Button onClick={() => dispatch({ type: 'MENU' })}>点击调用reducer{console.log(state)}</Button>
        <Button onClick={() => setArr([1, 2, 3, 4])}>点击调用reducer{console.log(state)}</Button>
        <List
            className="demo-loadmore-list"
            itemLayout="horizontal"
            dataSource={state.nameStatistical}
            renderItem={item => (
                <List.Item>
                    {item.title}
                </List.Item>
            )}
        />
        {arr.map((item, index) => (<span key={index}>{item.name}{console.log(item)}</span>))}
    </div>)
}
export default MessageUI