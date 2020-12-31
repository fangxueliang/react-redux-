//menu
import { Menu } from 'antd';
import { Link } from 'react-router-dom'

const dataList =
    [{ value: '首页', key: '1', to: '/home' },
    { value: '个人简介', key: '2', to: '/profile' },
    { value: '个人搜索', key: '3', to: '/search' },
    { value: '起名大全', key: '4', to: '/all' },
    { value: '数据统计', key: '5', to: '/statistical' }]
export const MenuComponent = (props) => {
    // const dataList = props.menuDataList.menu.data.list
    return (
        <Menu
            mode="inline"
            style={{ height: '100%', borderRight: 0 }}
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