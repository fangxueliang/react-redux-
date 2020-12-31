//menu
import { Menu } from 'antd';
import { Link } from 'react-router-dom'

export const MenuComponent = (props) => {
    const dataList = props.menuDataList.menu.data.list

    return (
        <Menu
            mode="inline"
            style={{ height: '100%', borderRight: 0 }}
            onClick={this.handleMenuClick.bind(this)}
            selectedKeys={[this.state.userId]}
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