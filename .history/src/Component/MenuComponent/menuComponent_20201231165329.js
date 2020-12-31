//menu
import { Component } from "react";
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
        this.props.setMenuKey(action)
        console.log(this.props);
    }
    render() {
        return (
            <Menu
                mode="inline"
                style={{ height: '100%', borderRight: 0 }}
                onClick={this.handleMenuClick}
                selectedKeys={this.state.selectKey}
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

export default Storeaction(MenuComponent);
