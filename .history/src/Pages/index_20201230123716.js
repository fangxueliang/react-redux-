import React from 'react';
import { Layout } from 'antd'
import { MenuSider } from "./Menu/menu";
import { HeaderCommon } from "./Header/header";
import { FooterCommon } from "./Footer/footer";

const { Header, Footer, Content, Sider } = Layout
export const Main = () => {
    return (

        <div className="Home_layout">
            {/* 头部header */}
            <div >
                <Layout>
                    <Header> <HeaderCommon /> </Header>
                </Layout>
            </div>
            <div >
                <Layout>
                    {/* 左侧导航Sider */}
                    <Sider>
                        <MenuSider />
                    </Sider>
                    {/* 主要内容Content */}
                    <Content></Content>
                </Layout>
            </div>
            {/* 底部footer */}
            <div >
                <Layout>
                    <Footer>
                        <FooterCommon />
                    </Footer>
                </Layout>
            </div>
        </div>


    );
}

