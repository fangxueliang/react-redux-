import { Menu } from 'antd';
import { Link } from 'react-router-dom'

export const MenuComponent = (data) => {
    return (
        <Menu
            mode="inline"
            style={{ height: '100%', borderRight: 0 }}
        >
            {
                console.log(data.menuDataList.menu)
                // data.map(item => (
                //     <Menu.Item key={item.key}>
                //         <Link to={item.to}>{item.value}</Link>
                //     </Menu.Item>))
            }
        </Menu>
    )
}