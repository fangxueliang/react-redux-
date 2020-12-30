import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'
import HomeComponent from "../../Component/HomeComponent/homeComponent";

const Auth = () => {
    return <Redirect exact from="/" to="/home" />
}
export const componentRouter = (
    <Router>
        {/* Switch 严格匹配路由 */}
        <Switch>
            {/* home页面 */}
            <Route path="/home" component={HomeComponent} />
            <Auth />
        </Switch>
    </Router>
)
