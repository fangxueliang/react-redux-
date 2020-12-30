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
                <div> <HeaderCommon /> </div>
            </div>
            <div >

                {/* 左侧导航Sider */}
                <Sider>
                    <MenuSider />
                </Sider>
                {/* 主要内容Content */}
                <div></div>

            </div>
            {/* 底部footer */}
            <div >

                <div>
                    <FooterCommon />
                </div>

            </div>
        </div>


    );
}

