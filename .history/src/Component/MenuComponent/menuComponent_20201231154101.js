//menu
import { Button, Menu } from 'antd';
import { Link } from 'react-router-dom'

export const MenuComponent = (props) => {
    const dataList = props.menuDataList.menu.data.list
    return (
        // <Menu
        //     mode="inline"
        //     style={{ height: '100%', borderRight: 0 }}
        // >
        //     {
        //         dataList.map(item => (
        //             <Menu.Item key={item.key}>
        //                 <Link to={item.to}>{item.value}</Link>
        //             </Menu.Item>))
        //     }
        // </Menu>
        <Button onClick={this.onClick}>点击</Button>
    )
}