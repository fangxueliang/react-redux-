// 头部
import React from 'react';
import logo from "../../Asset/img/logo.png";
import myImg from "../../Asset/img/我的.png";
import remindImg from "../../Asset/img/提醒.png";
import positioningImg from "../../Asset/img/定位.png";
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
                    <img src={remindImg} alt="我的" />
                </span>
                <span>
                    <img src={positioningImg} alt="我的" />
                </span>
                <span>
                    <img src={myImg} alt="我的" />
                </span>
            </div>
        </div>
    )
}