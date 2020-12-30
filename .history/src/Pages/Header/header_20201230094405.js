import React from 'react';
import logo from "../../Asset/img/logo.png";
import './header.css'

export const HeaderCommon = () => {
    return (
        <div className="header">
            <div className="header_item">
                {/* <img src={logo} className="logo" /> */}
                <images src={logo} className="logo" ></images>
            </div>
            <div className="header_item"></div>
            <div className="header_item"></div>
        </div>
    )
}