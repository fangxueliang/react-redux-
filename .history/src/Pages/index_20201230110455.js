import React from 'react';
import { Layout } from 'antd'
import { MenuSider } from "./Menu/menu";
import { HeaderCommon } from "./Header/header";
import { FooterCommon } from "./Footer/footer";
import store from "../Store"

const { Header, Footer, Content, Sider } = Layout
export const Main = () => {
    return (
        <Layout>
            <div className="Home_layout">
                {/* 头部header */}
                <Header> <HeaderCommon /> </Header>
                <Layout>
                    {/* 左侧导航Sider */}
                    <Sider>
                        <MenuSider />
                    </Sider>
                    {/* 主要内容Content */}
                    <Content>  </Content>
                </Layout>
                {/* 底部footer */}
                <Footer>
                    <FooterCommon />
                </Footer>
            </div>
        </Layout>
    );
}

