// 左侧菜单
import React from 'react';
import { store } from '../../Store'
import Storeaction from '../../Store/storeaction'
import { MenuComponent } from "../../Component/MenuComponent/menuComponent";
class MenuSider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (<MenuComponent menuDataList={this.props.menu.data.list} />);
    }
}

export default Storeaction(MenuSider);