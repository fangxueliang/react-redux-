import { Menu } from 'antd';
import { Link } from 'react-router-dom'
import storeaction from '../../Store/storeaction'

const MenuComponent = (props) => {
    return (
        <Menu
            mode="inline"
            style={{ height: '100%', borderRight: 0 }}
        >
            {
                console.log(this.props)
                // data.map(item => (
                //     <Menu.Item key={item.key}>
                //         <Link to={item.to}>{item.value}</Link>
                //     </Menu.Item>))
            }
        </Menu>
    )
}
export default storeaction(MenuComponent)