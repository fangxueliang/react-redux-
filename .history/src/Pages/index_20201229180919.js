import React, { useState } from 'react';
import { Layout } from 'antd'
import { MenuSider } from "./Menu/menu";
import { HeaderCommen } from "Header/header";

const { Header, Footer, Content, Sider } = Layout
export const Main = () => {
    return (
        <Layout>
            <div className="Home_layout">
                {/* 头部header */}
                <Header> <HeaderCommen /> </Header>
                <Layout>
                    {/* 左侧导航Sider */}
                    <Sider>
                        <MenuSider />
                    </Sider>
                    {/* 主要内容Content */}
                    <Content> Content </Content>
                </Layout>
                {/* 底部footer */}
                <Footer> Footer </Footer>
            </div>
        </Layout>
    );
}

