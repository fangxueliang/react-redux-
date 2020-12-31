// 左侧菜单
import React from 'react';
import { store } from '../../Store'
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
        this.setState({
            initData: store.getState()
        })
    }
    render() {
        const { initData } = this.state
        return (<Menu
            mode="inline"
            style={{ height: '100%', borderRight: 0 }}
        >
            {
                console.log(menu)

                // menu.data.list.map(item => (
                //     <Menu.Item key={item.key}>
                //         <Link to={item.to}>{item.value}</Link>
                //     </Menu.Item>))
            }
        </Menu>);
    }
}

export default MenuSider;