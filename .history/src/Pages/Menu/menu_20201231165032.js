// 左侧菜单
import React from 'react';
import MenuComponent from "../../Component/MenuComponent/menuComponent";
class MenuSider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (<MenuComponent />);
    }
}

export default MenuSider;
function MenuSider() {
    render() {
        return (<MenuComponent />);
    }
}