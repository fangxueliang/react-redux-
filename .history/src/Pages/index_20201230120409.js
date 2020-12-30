import React from 'react';
import { Layout } from 'antd'
import { MenuSider } from "./Menu/menu";
import { HeaderCommon } from "./Header/header";
import { FooterCommon } from "./Footer/footer";

// const { Header, Footer, Content, Sider } = Layout
export const Main = () => {
    return (
        <Layout>
            <div className="Home_layout">
                {/* 头部header */}
                <div style={{ width: '100%', height: '20%' }}>
                    <Header> <HeaderCommon /> </Header>
                </div>
                <div style={{ width: '100%', height: '80%' }}>
                    <Layout>
                        {/* 左侧导航Sider */}
                        <Sider>
                            <MenuSider />
                        </Sider>
                        {/* 主要内容Content */}
                        <Content>  </Content>
                    </Layout>
                </div>

                {/* 底部footer */}
                <div style={{ width: '100%', height: '20%' }}> <Footer>
                    <FooterCommon />
                </Footer></div>

            </div>
        </Layout>

    );
}

