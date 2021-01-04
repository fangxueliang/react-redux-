import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'
import HomeComponent from "../../Component/HomeComponent/homeComponent";
import ProfileComponent from "../../Component/ProfileComponent/profileComponent";
import SearchComponent from "../../Component/SearchComponent/searchComponent";
import NameComponent from "../../Component/NameComponent/nameComponent";
import StatisticalComponent from "../../Component/StatisticalComponent/statisticalComponent";

export const ComponentRouter = () => (
    <Router>
        {/* Switch 严格匹配路由 */}
        <Switch>
            {/* home页面 */}
            <Route path="/home" component={HomeComponent} />
            {/* 个人简介 */}
            <Route path="/profile" component={ProfileComponent} />
            {/* 个人搜索 */}
            <Route path="/search" component={SearchComponent} />
            {/* 姓名大全 */}
            <Route path="/name" component={NameComponent} />
            {/* 数据统计 */}
            <Route path="/statistical" component={StatisticalComponent} />
   =
        </Switch>
    </Router>
)

