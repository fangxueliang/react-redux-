import react from 'react';
import { Layout } from 'antd'
import MenuSider from "./Menu/menu";
import { HeaderCommon } from "./Header/header";
import { FooterCommon } from "./Footer/footer";
import Login from "./Login/login";
import { CommonRouter } from "../Router/routerIndex";
import { withRouter } from 'react-router-dom'
import Storeaction from "../Store/storeaction"

const { Sider } = Layout
const LOCALTION_PATH = window.location.pathname
const ContentComponent = (props) => {
    return (<div>
        {/* 头部header */}
        <div className="Home_header">
            <HeaderCommon />
        </div>
        <div className="Home_main">
            {/* 左侧导航Sider */}
            <div className="Home_sider">
                <Sider>
                    {/* 菜单标签 */}
                    <MenuSider />
                </Sider>
            </div>
            {/* 主要内容Content */}
            <div className="Home_content">
                {/* key的作用就是为了 Link标签点击进行刷新 */}
                <CommonRouter key={props.dataProps.menuKey.data[0]} />
            </div>
        </div>

        {/* 底部footer */}
        <div className="Home_footer">
            <FooterCommon />
        </div>
    </div>)
}
class Main extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="Home_layout">
                {LOCALTION_PATH === '/' || LOCALTION_PATH === '/login' ? <Login history={this.props} /> : <ContentComponent dataProps={this.props} history={this.props.history} />}
            </div>
        )
    }
}

export default withRouter(Storeaction(Main));



