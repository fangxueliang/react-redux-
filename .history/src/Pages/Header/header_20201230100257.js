// 头部
import React from 'react';
import logo from "../../Asset/img/logo.png";
import './header.css'

export const HeaderCommon = () => {
    return (
        <div className="header">
            <div className="header_item">
                <img src={logo} className="logo" alt="蓝龙" />
                <span className="logo_title">文赋·起名网</span>
                <span>www.lyricsTheName.com</span>
            </div>
            <div className="header_item"></div>
            <div className="header_item"></div>
        </div>
    )
}