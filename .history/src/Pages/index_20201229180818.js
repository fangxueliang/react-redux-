import React, { useState } from 'react';
import { Layout } from 'antd'
import { MenuSider } from "./Menu/menu";
import { HeaderCommen } from "Header/header";

const { Header, Footer, Content, Sider } = Layout
export const Main = () => {
    return (
        <Layout>
            <div className="Home_layout">
                <Header> <HeaderCommen /> </Header>
                <Layout>
                    <Sider>
                        <MenuSider />
                    </Sider>
                    <Content> Content </Content>
                </Layout>
                <Footer> Footer </Footer>
            </div>
        </Layout>
    );
}

