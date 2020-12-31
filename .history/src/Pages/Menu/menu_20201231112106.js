// 左侧菜单
import React from 'react';
import { store } from '../../Store'
import Storeaction from '../../Store/storeaction'
import { MenuComponent } from "../../Component/MenuComponent/menuComponent";
class MenuSider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initData: [],//menu数据源
        }
    }
    componentDidMount() {
        store.dispatch({ type: 'MENU' })
        let initAction = { type: 'MENU' }
        console.log(this.props.setMenuDataList(initAction), '999', this.props);
        this.setState({
            initData: store.getState()
        })
    }
    render() {
        const { initData } = this.state
        return (<MenuComponent menuDataList={initData} />);
    }
}

export default Storeaction(MenuSider);