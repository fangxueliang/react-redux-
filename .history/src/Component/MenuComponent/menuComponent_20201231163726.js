//menu
import { Menu } from 'antd';
import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import Storeaction from "../../Store/storeaction";

const MenuComponent = (props) => {
    const [selectKey, setKeys] = useState([])
    const dataList = props.menuDataList.menu.data.list
    const handleMenuClick = (e) => {
        setKeys(e.keyPath)
        let action = {
            type: 'menuKey',
            data: e.keyPath
        }
        this.props.setMenuKey(action)
    }
    return (
        <Menu
            mode="inline"
            style={{ height: '100%', borderRight: 0 }}
            onClick={handleMenuClick}
            selectedKeys={selectKey}
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
export default Storeaction(MenuComponent)