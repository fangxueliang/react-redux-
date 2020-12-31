import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom'
import HomeComponent from "../../Component/HomeComponent/homeComponent";
import ProfileComponent from "../../Component/ProfileComponent/profileComponent";


const Auth = () => {
    return <Redirect exact from="/" to="/home" />
}
export const ComponentRouter = () => (
    <Router>
        {/* Switch 严格匹配路由 */}
        <Switch>
            {/* home页面 */}
            <Route path="/home" component={HomeComponent} />
            {/* 个人简介 */}
            <Route path="/profile" component={ProfileComponent} />
            <Auth />
        </Switch>
    </Router>
)

