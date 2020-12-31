//menu
import { Menu } from 'antd';
import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import Storeaction from "../../Store/storeaction";

class MenuComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectKey: []
        }
    }
    handleMenuClick = (e) => {
        this.setState({
            selectKey: e.keyPath
        })
        let action = {
            type: 'MENUKEY',
            data: e.keyPath
        }
        props.setMenuKey(action)
        console.log(props);
    }
    render() {
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
            </Menu>);
    }
}

export default MenuComponent;
const MenuComponent = () => {
    const [selectKey, setKeys] = useState([])
    const dataList = props.menu.data.list
    const handleMenuClick = (e) => {
        setKeys(e.keyPath)
        let action = {
            type: 'MENUKEY',
            data: e.keyPath
        }
        props.setMenuKey(action)
        console.log(props);
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