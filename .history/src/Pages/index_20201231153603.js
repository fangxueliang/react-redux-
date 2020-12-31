import React from 'react';
import { Layout } from 'antd'
import MenuSider from "./Menu/menu";
import { HeaderCommon } from "./Header/header";
import { FooterCommon } from "./Footer/footer";
import componentRouter from "../Router/common/router";
import {
    BrowserRouter as Router,
} from 'react-router-dom'
import { HomeComponent } from "../Component/HomeComponent/homeComponent";
import { ProfileComponent } from "../Component/ProfileComponent/profileComponent";


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
                        {/* 因为菜单标签使用了Link标签，所以得用Router包裹 */}
                        <Router>
                            {/* 菜单标签 */}
                            <MenuSider />
                        </Router>
                    </Sider>
                </div>
                {/* 主要内容Content */}
                <div className="Home_content">
                    {/* {componentRouter} */}
                    <Router>
                        {/* Switch 严格匹配路由 */}
                        <Switch>
                            {/* home页面 */}
                            <Route path="/home" component={HomeComponent} />
                            {/* 个人简介 */}
                            <Route path="/profile" component={ProfileComponent} />
                            {/* <Auth /> */}
                        </Switch>
                    </Router>
                </div>
            </div>
            {/* 底部footer */}
            <div className="Home_footer">
                <FooterCommon />
            </div>
        </div>


    );
}


