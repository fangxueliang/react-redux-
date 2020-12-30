// 头部
import React from 'react';
import logo from "../../Asset/img/logo.png";
import myImg from "../../Asset/img/我的.png";
import logo from "../../Asset/img/logo.png";
import logo from "../../Asset/img/logo.png";
import './header.css'

export const HeaderCommon = () => {
    return (
        <div className="header">
            <div className="header_item">
                <img src={logo} className="logo" alt="蓝龙" />
                <span className="logo_title">文赋·起名网</span>
                <a className="logo_URL">www.lyricsTheName.com</a>
            </div>
            <div className="header_item"></div>
            <div className="header_item">
                <span>
                    <img src={myImg} alt="我的"></img>
                </span>
                <span></span>
                <span>
                    <img src={myImg} alt="我的"></img>
                </span>
            </div>
        </div>
    )
}