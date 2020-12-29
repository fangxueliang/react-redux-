import React, { useState } from 'react';
import { Layout } from 'antd'

function Home() {
    const [count, setCount] = useState(0);

    return (
        <Layout>
            <div className="App_layout">
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