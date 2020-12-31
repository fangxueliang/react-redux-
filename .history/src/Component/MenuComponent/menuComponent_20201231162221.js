//menu
import { Menu } from 'antd';
import { Link } from 'react-router-dom'
import React, { useState } from 'react';

export const MenuComponent = (props) => {
    const [selectKey, setKeys] = useState([])
    const dataList = props.menuDataList.menu.data.list
    const handleMenuClick = (e) => {
        console.log(e.keyPath, '88');
        setKeys(e.keyPath)
    }
    return (
        <Menu
            mode="inline"
            style={{ height: '100%', borderRight: 0 }}
            onClick={handleMenuClick}
            selectedKeys={[selectKey]}
        >
            {
                dataList.map(item => (
                    <Menu.Item key={item.key}>
                        <Link to={item.to}>{item.value}</Link>
                    </Menu.Item>))
            }
        </Menu>

    )
}