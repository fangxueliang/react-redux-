import React from 'react';
import { Layout } from 'antd'
import { MenuSider } from "./Menu/menu";
import { HeaderCommon } from "./Header/header";
import { FooterCommon } from "./Footer/footer";
import { componentRouter } from "../Router/common/router";

const { Sider } = Layout
export const Main = () => {
    return (

        <div className="Home_layout">
            {/* 头部header */}
            <div className="Home_header">
                <HeaderCommon />
            </div>
            <div className="Home_main">
                {/* 左侧导航Sider */}
                <div className="Home_sider">
                    <Sider>
                        <MenuSider />
                    </Sider>
                </div>

                {/* 主要内容Content */}
                <div className="Home_content">
                    {componentRouter}
                </div>
            </div>
            {/* 底部footer */}
            <div className="Home_footer">
                <FooterCommon />
            </div>
        </div>


    );
}
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            {componentRouter}
        </Route>
    </Router>,
    document.getElementById('root')
)

