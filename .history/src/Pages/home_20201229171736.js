import React, { useState } from 'react';
import { Layout } from 'antd'
const { Header, Footer, Content, Sider } = Layout

function Home() {
    const [count, setCount] = useState(0);

    return (
        <Layout>
            <div className="Home_layout">
                <Header> Header </Header>
                <Layout>
                    <Sider> Sider </Sider>
                    <Content> Content </Content>
                </Layout>
                <Footer> Footer </Footer>
            </div>
        </Layout>
    );
}

export default Home