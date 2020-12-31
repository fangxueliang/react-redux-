import react from 'react';
import { Layout } from 'antd'
import MenuSider from "./Menu/menu";
import { HeaderCommon } from "./Header/header";
import { FooterCommon } from "./Footer/footer";
import { componentRouter } from "../Router/common/router";
import {
    BrowserRouter as Router,
} from 'react-router-dom'
import Storeaction from "../Store/storeaction"
import { store } from '../Store'

const { Sider } = Layout
class Main extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: this.props.menu.data[0]
        }
    }
    render() {
        return (
            <div className="Home_layout">
                {/* 头部header */}
                <div className="Home_header">
                    <HeaderCommon />
                    {console.log(this.state.key, '9999', this.props)}
                </div>
                <div className="Home_main">
                    {/* 左侧导航Sider */}
                    <div className="Home_sider">
                        <Sider>
                            {/* 因为菜单标签使用了Link标签，所以得用Router包裹 */}
                            <Router>
                                {/* 菜单标签 */}
                                <MenuSider />
                            </Router>
                        </Sider>
                    </div>
                    {/* 主要内容Content */}
                    <div className="Home_content">
                        <componentRouter key={this.state.key} />
                    </div>
                </div>

                {/* 底部footer */}
                <div className="Home_footer">
                    <FooterCommon />
                </div>
            </div>);
    }
}

export default Storeaction(Main);



