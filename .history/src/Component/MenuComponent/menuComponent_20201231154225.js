//menu
import { Button, Menu } from 'antd';
import { Link } from 'react-router-dom'

export const MenuComponent = (props) => {
    const dataList = props.menuDataList.menu.data.list
    const onClick = () => {
        history.push('/profile')
    }
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
        <Button onClick={onClick}>点击</Button>
    )
}