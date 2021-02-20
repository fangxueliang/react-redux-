import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'
import HomeComponent from "../../Component/Home/HomeComponent/homeComponent";
import ProfileComponent from "../../Component/Home/ProfileComponent/profileComponent";
import SearchComponent from "../../Component/Home/SearchComponent/searchComponent";
import NameComponent from "../../Component/Home/NameComponent/nameComponent";
import StatisticalComponent from "../../Component/Home/StatisticalComponent/statisticalComponent";

export const ComponentRouter = (
    <Router>
        {/* Switch 严格匹配路由 */}
        <Switch exact>
            {/* home页面 */}
            <Route path="/common/home" component={HomeComponent} />
            {/* 个人简介 */}
            <Route path="/common/profile" component={ProfileComponent} />
            {/* 个人搜索 */}
            <Route path="/common/search" component={SearchComponent} />
            {/* 姓名大全 */}
            <Route path="/common/name" component={NameComponent} />
            {/* 数据统计 */}
            <Route path="/common/statistical" component={StatisticalComponent} />
        </Switch>
    </Router>
)

